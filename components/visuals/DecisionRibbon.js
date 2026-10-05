const stages = [
  ["signal", "RAW INPUT", "Signals", "Databases, APIs, streams, and business records"],
  ["model", "STRUCTURE", "Model", "Validated features, metrics, and analytical models"],
  ["decision", "OUTCOME", "Decision", "KPIs, predictions, and reliable reporting"],
];

function StageGraph({ type }) {
  if (type === "signal") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path className="graph-grid" d="M3 25.5H29M5 7V26" />
        <polyline className="graph-main" points="5,21 9,17 13,20 18,9 22,15 28,7" />
        <circle cx="18" cy="9" r="1.7" />
        <circle cx="28" cy="7" r="1.7" />
      </svg>
    );
  }

  if (type === "model") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path className="graph-grid" d="M8 8L16 16L25 7M16 16L8 25M16 16L25 25" />
        <circle cx="8" cy="8" r="3" />
        <circle className="graph-main" cx="16" cy="16" r="3.5" />
        <circle cx="25" cy="7" r="3" />
        <circle cx="8" cy="25" r="3" />
        <circle cx="25" cy="25" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path className="graph-grid" d="M4 27H29" />
      <rect x="6" y="20" width="4" height="7" />
      <rect x="14" y="14" width="4" height="13" />
      <rect x="22" y="8" width="4" height="19" />
      <polyline className="graph-main" points="6,16 13,11 18,12 27,4" />
    </svg>
  );
}

export default function DecisionRibbon() {
  return (
    <div className="decision-ribbon" role="group" aria-label="Signals become a governed model, then a clear decision">
      <div className="decision-ribbon__track" aria-hidden="true"><i /></div>
      {stages.map(([type, label, title, description], index) => (
        <div className="decision-ribbon__stage" key={type}>
          <span className="decision-ribbon__node" role="img" aria-label={`Step ${index + 1}: ${title} graph`}>
            <StageGraph type={type} />
          </span>
          <small>{label}</small>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
