from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "img"

FILES = [
    "doctor-portrait-seated.jpeg",
    "doctor-standing.jpeg",
    "doctor-formal.jpeg",
    "doctor-arms-crossed.jpeg",
    "doctor-pointing.jpeg",
]


def smoothstep(edge0: float, edge1: float, x: np.ndarray) -> np.ndarray:
    t = np.clip((x - edge0) / max(edge1 - edge0, 1e-6), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def sample_key_color(rgb: np.ndarray) -> np.ndarray:
    h, w, _ = rgb.shape
    patches = [
        rgb[:80, :80],
        rgb[:80, w - 80 :],
        rgb[h - 80 :, :80],
        rgb[h - 80 :, w - 80 :],
    ]
    stacked = np.concatenate([p.reshape(-1, 3) for p in patches], axis=0)
    return np.median(stacked, axis=0)


def create_alpha(rgb: np.ndarray, key: np.ndarray) -> np.ndarray:
    dist = np.linalg.norm(rgb - key, axis=2)
    dominance = rgb[:, :, 1] - np.maximum(rgb[:, :, 0], rgb[:, :, 2])
    green_ratio = rgb[:, :, 1] / np.maximum(rgb.sum(axis=2), 1.0)

    dist_bg = 1.0 - smoothstep(24.0, 92.0, dist)
    dominance_bg = smoothstep(16.0, 62.0, dominance)
    ratio_bg = smoothstep(0.35, 0.49, green_ratio)

    bg_conf = np.maximum(
        np.minimum(dist_bg, dominance_bg),
        np.minimum(dist_bg, ratio_bg),
    )
    alpha = 1.0 - np.clip(bg_conf, 0.0, 1.0)
    alpha = np.clip(alpha, 0.0, 1.0)

    alpha_img = Image.fromarray((alpha * 255).astype(np.uint8), mode="L")
    alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(radius=1.1))
    return np.asarray(alpha_img, dtype=np.float32) / 255.0


def despill(rgba: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    spill = np.clip((rgba[:, :, 1] - np.maximum(rgba[:, :, 0], rgba[:, :, 2])) / 255.0, 0.0, 1.0)
    edge = np.clip(1.0 - np.abs(alpha - 0.5) * 2.0, 0.0, 1.0)
    reduce = spill * edge * 48.0
    rgba[:, :, 1] = np.clip(rgba[:, :, 1] - reduce, 0, 255)
    rgba[:, :, 0] = np.clip(rgba[:, :, 0] + reduce * 0.12, 0, 255)
    rgba[:, :, 2] = np.clip(rgba[:, :, 2] + reduce * 0.08, 0, 255)
    return rgba


def crop_to_subject(image: Image.Image) -> Image.Image:
    alpha = image.getchannel("A").point(lambda value: 255 if value > 28 else 0)
    bbox = alpha.getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    pad_x = max(32, int((right - left) * 0.05))
    pad_y = max(32, int((bottom - top) * 0.05))
    left = max(0, left - pad_x)
    top = max(0, top - pad_y)
    right = min(image.width, right + pad_x)
    bottom = min(image.height, bottom + pad_y)
    return image.crop((left, top, right, bottom))


def process_file(name: str) -> None:
    source = IMG_DIR / name
    target = IMG_DIR / f"{source.stem}-cutout.png"

    image = Image.open(source).convert("RGBA")
    rgba = np.asarray(image, dtype=np.float32)
    rgb = rgba[:, :, :3]

    key = sample_key_color(rgb)
    alpha = create_alpha(rgb, key)
    rgba = despill(rgba, alpha)
    rgba[:, :, 3] = alpha * 255.0

    result = Image.fromarray(rgba.astype(np.uint8), mode="RGBA")
    result = crop_to_subject(result)
    max_edge = 1400
    scale = min(1.0, max_edge / max(result.size))
    if scale < 1.0:
        new_size = (max(1, int(result.width * scale)), max(1, int(result.height * scale)))
        result = result.resize(new_size, Image.Resampling.LANCZOS)
    result.save(target)
    print(f"saved {target.name}")


def main() -> None:
    for file_name in FILES:
        process_file(file_name)


if __name__ == "__main__":
    main()
