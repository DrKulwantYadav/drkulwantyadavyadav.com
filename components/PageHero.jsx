export function PageHero({ eyebrow, title, description, image, alt, actions }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>

        <div className="page-stage">
          <img className="stage-photo" src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}
