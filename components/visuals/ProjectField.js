export default function ProjectField({ project }) {
  const stages = project.architectureStages || [];
  const width = 1000;
  const step = width / Math.max(stages.length, 1);

  return (
    <div className="project-field" aria-label={`${project.title} architecture visualization`}>
      <div className="project-field__caption"><span>LIVE SYSTEM MAP</span><span>{String(stages.length).padStart(2, "0")} STAGES / {project.architectureType}</span></div>
      <svg viewBox="0 0 1000 260" role="img" aria-label="Project stages connected as a flowing system map">
        <defs>
          <linearGradient id={`project-line-${project.id}`} x1="0" x2="1">
            <stop offset="0" stopColor="#8df7c3" stopOpacity="0.35" />
            <stop offset="1" stopColor="#f0b978" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path className="project-field__line" style={{ stroke: `url(#project-line-${project.id})` }} d={`M${step / 2} 130 ${stages.map((_, index) => `L${step / 2 + step * index} ${index % 2 ? 84 : 176}`).join(" ")} L${width - step / 2} 130`} />
        {stages.map((stage, index) => {
          const x = step / 2 + step * index;
          const y = index % 2 ? 84 : 176;
          return (
            <g key={stage.id} className="project-field__stage">
              <circle className="project-field__halo" cx={x} cy={y} r="30" />
              <circle className="project-field__node" cx={x} cy={y} r="9" />
              <text className="project-field__number" x={x} y={y - 46} textAnchor="middle">0{index + 1}</text>
              <text className="project-field__label" x={x} y={y + 48} textAnchor="middle">{stage.label}</text>
            </g>
          );
        })}
        <circle className="project-field__traveler" r="4"><animateMotion dur="6s" repeatCount="indefinite" path={`M${step / 2} 130 ${stages.map((_, index) => `L${step / 2 + step * index} ${index % 2 ? 84 : 176}`).join(" ")} L${width - step / 2} 130`} /></circle>
      </svg>
    </div>
  );
}
