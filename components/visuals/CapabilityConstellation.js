const nodes = [
  [118, 138, "INGEST"],
  [270, 78, "WAREHOUSE"],
  [438, 138, "MODEL"],
  [604, 78, "MEASURE"],
  [772, 138, "GOVERN"],
  [914, 78, "DECIDE"]
];

export default function CapabilityConstellation() {
  return (
    <div className="capability-constellation" aria-label="Connected analytics capability constellation">
      <svg viewBox="0 0 1000 220" role="img" aria-label="Connected analytics capabilities from ingestion to decision">
        <path className="constellation-line" d="M118 138 L270 78 L438 138 L604 78 L772 138 L914 78" />
        <path className="constellation-line constellation-line--soft" d="M118 138 L438 138 L772 138" />
        {nodes.map(([x, y, label], index) => (
          <g className="constellation-node" key={label}>
            <circle className="constellation-node__halo" cx={x} cy={y} r="24" />
            <circle className="constellation-node__dot" cx={x} cy={y} r="6" />
            <text x={x} y={y + 40} textAnchor="middle">{label}</text>
            <text className="constellation-node__index" x={x} y={y - 28} textAnchor="middle">0{index + 1}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
