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


def build_background_mask(rgb: np.ndarray, key: np.ndarray) -> np.ndarray:
    dist = np.linalg.norm(rgb - key, axis=2)
    dominance = rgb[:, :, 1] - np.maximum(rgb[:, :, 0], rgb[:, :, 2])
    green_ratio = rgb[:, :, 1] / np.maximum(rgb.sum(axis=2), 1.0)

    dist_bg = 1.0 - smoothstep(28.0, 118.0, dist)
    dominance_bg = smoothstep(10.0, 42.0, dominance)
    ratio_bg = smoothstep(0.31, 0.44, green_ratio)
    bg_conf = np.maximum(
        np.minimum(dist_bg, dominance_bg),
        np.minimum(dist_bg, ratio_bg),
    )
    mask = np.clip(bg_conf, 0.0, 1.0)
    mask_img = Image.fromarray((mask * 255).astype(np.uint8), mode="L")
    mask_img = mask_img.filter(ImageFilter.GaussianBlur(radius=2.0))
    return np.asarray(mask_img, dtype=np.float32) / 255.0


def generate_background(width: int, height: int) -> np.ndarray:
    yy, xx = np.mgrid[0:height, 0:width].astype(np.float32)
    nx = xx / max(width - 1, 1)
    ny = yy / max(height - 1, 1)

    top = np.array([19, 34, 72], dtype=np.float32)
    bottom = np.array([235, 241, 249], dtype=np.float32)
    base = top * (1.0 - ny[..., None]) + bottom * ny[..., None]

    glow_one = np.exp(-(((nx - 0.25) ** 2) / 0.03 + ((ny - 0.18) ** 2) / 0.05))
    glow_two = np.exp(-(((nx - 0.78) ** 2) / 0.05 + ((ny - 0.16) ** 2) / 0.06))
    glow_three = np.exp(-(((nx - 0.72) ** 2) / 0.06 + ((ny - 0.75) ** 2) / 0.05))

    blue = np.array([49, 88, 168], dtype=np.float32)
    teal = np.array([41, 123, 118], dtype=np.float32)
    warm = np.array([255, 255, 255], dtype=np.float32)

    background = base
    background = background * (1.0 - glow_one[..., None] * 0.34) + blue * (glow_one[..., None] * 0.34)
    background = background * (1.0 - glow_two[..., None] * 0.22) + teal * (glow_two[..., None] * 0.22)
    background = background * (1.0 - glow_three[..., None] * 0.14) + warm * (glow_three[..., None] * 0.14)

    return np.clip(background, 0, 255)


def despill(rgb: np.ndarray, bg_mask: np.ndarray) -> np.ndarray:
    spill = np.clip((rgb[:, :, 1] - np.maximum(rgb[:, :, 0], rgb[:, :, 2])) / 255.0, 0.0, 1.0)
    edge = np.clip(1.0 - np.abs(bg_mask - 0.5) * 2.0, 0.0, 1.0)
    reduce = spill * edge * 46.0
    rgb[:, :, 1] = np.clip(rgb[:, :, 1] - reduce, 0, 255)
    rgb[:, :, 0] = np.clip(rgb[:, :, 0] + reduce * 0.14, 0, 255)
    rgb[:, :, 2] = np.clip(rgb[:, :, 2] + reduce * 0.12, 0, 255)
    return rgb


def process_file(name: str) -> None:
    source = IMG_DIR / name
    target = IMG_DIR / f"{source.stem}-studio.jpg"

    image = Image.open(source).convert("RGB")
    rgb = np.asarray(image, dtype=np.float32)

    key = sample_key_color(rgb)
    bg_mask = build_background_mask(rgb, key)
    rgb = despill(rgb, bg_mask)
    background = generate_background(image.width, image.height)
    composite = rgb * (1.0 - bg_mask[..., None]) + background * bg_mask[..., None]

    result = Image.fromarray(np.clip(composite, 0, 255).astype(np.uint8), mode="RGB")
    max_edge = 1400
    scale = min(1.0, max_edge / max(result.size))
    if scale < 1.0:
        new_size = (max(1, int(result.width * scale)), max(1, int(result.height * scale)))
        result = result.resize(new_size, Image.Resampling.LANCZOS)
    result.save(target, quality=92, optimize=True)
    print(f"saved {target.name}")


def main() -> None:
    for file_name in FILES:
        process_file(file_name)


if __name__ == "__main__":
    main()
