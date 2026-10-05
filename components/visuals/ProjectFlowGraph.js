export default function ProjectFlowGraph({ project }) {
  const stages = project.architectureStages || [];
  if (stages.length < 2) return null;

  const inputs = stages.slice(0, -1);
  const output = stages.at(-1);
  const positions = inputs.map((_, index) => ((index + 1) / (inputs.length + 1)) * 100);

  return (
    <figure className="system-flow">
      <figcaption>
        <span>System convergence</span>
        <span>{project.number} / Project architecture</span>
      </figcaption>
      <div
        className="system-flow__graph"
        role="img"
        aria-label={`${inputs.map((stage) => stage.label).join(", ")} converge into ${output.label}`}
      >
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {positions.map((position, index) => (
            <path
              className="system-flow__line"
              d={`M 42 ${position} C 51 ${position}, 53 50, 62 50`}
              key={inputs[index].id}
            />
          ))}
          <path className="system-flow__line system-flow__line--output" d="M 62 50 H 72" />
        </svg>

        {inputs.map((stage, index) => (
          <div
            className="system-flow__input"
            key={stage.id}
            style={{ "--node-y": `${positions[index]}%` }}
            title={`${stage.label} — ${stage.tech}`}
          >
            <span>{stage.label}</span>
          </div>
        ))}

        <span className="system-flow__hub" aria-hidden="true" />
        <div className="system-flow__output" title={`${output.label} — ${output.tech}`}>
          <span>{output.label}</span>
          <small>{output.tech}</small>
        </div>
      </div>
    </figure>
  );
}
