const artwork = [
  { image: "/images/framework/03_insight.jpg", label: "CONCEPTUAL VISUAL / MODEL LAYERS" },
  { image: "/images/framework/01_signals.jpg", label: "CONCEPTUAL VISUAL / SIGNAL FIELD" },
  { image: "/images/framework/05_impact.jpg", label: "CONCEPTUAL VISUAL / OUTCOME" },
  { image: "/images/project_process_transform.jpg", label: "CONCEPTUAL VISUAL / TRANSFORMATION" }
];

export default function ProjectArtwork({ index, title }) {
  const selected = artwork[index % artwork.length];

  return (
    <figure className="project-artwork">
      <img src={selected.image} alt="" />
      <div className="project-artwork__wash" />
      <figcaption>
        <span>{selected.label}</span>
        <span>{title}</span>
      </figcaption>
      <div className="project-artwork__mark" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
    </figure>
  );
}
