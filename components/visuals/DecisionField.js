export default function DecisionField() {
  const paths = [
    "M40 70 C180 70 160 160 320 188 S510 70 700 100 S820 188 960 188",
    "M40 130 C180 130 180 175 320 188 S520 188 700 188 S820 188 960 188",
    "M40 246 C180 246 160 216 320 188 S520 300 700 276 S820 188 960 188",
    "M40 310 C170 310 200 230 320 188 S540 78 700 110 S820 188 960 188"
  ];

  return (
    <div className="decision-field" aria-label="Animated data flow from operational signals to governed intelligence">
      <div className="decision-field__legend">
        <span>UNSTRUCTURED SIGNAL</span>
        <span className="text-accent">GOVERNED DECISION SURFACE</span>
      </div>
      <svg viewBox="0 0 1000 360" role="img" aria-label="Signals converge through a dimensional model into an executive decision surface">
        <defs>
          <linearGradient id="fieldGradient" x1="0" x2="1">
            <stop offset="0" stopColor="#8df7c3" stopOpacity="0.12" />
            <stop offset="0.55" stopColor="#8df7c3" stopOpacity="0.8" />
            <stop offset="1" stopColor="#f0b978" stopOpacity="0.8" />
          </linearGradient>
          <filter id="fieldGlow"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <g className="decision-field__grid">
          {Array.from({ length: 11 }).map((_, index) => <line key={`v-${index}`} x1={index * 100} y1="20" x2={index * 100} y2="340" />)}
          {Array.from({ length: 5 }).map((_, index) => <line key={`h-${index}`} x1="0" y1={20 + index * 80} x2="1000" y2={20 + index * 80} />)}
        </g>
        <g className="decision-field__paths">
          {paths.map((path) => <path key={path} d={path} />)}
          <path className="decision-field__core" d="M40 188 C180 188 210 188 320 188 S520 188 700 188 S820 188 960 188" />
        </g>
        <circle className="decision-field__glow" cx="320" cy="188" r="22" />
        <circle className="decision-field__glow decision-field__glow--warm" cx="700" cy="188" r="30" />
        <circle className="decision-field__node" cx="320" cy="188" r="8" />
        <circle className="decision-field__node decision-field__node--warm" cx="700" cy="188" r="10" />
        <g className="decision-field__particles">
          <circle r="3"><animateMotion dur="5.5s" repeatCount="indefinite" path={paths[0]} /></circle>
          <circle r="2.5"><animateMotion dur="7s" begin="-2.4s" repeatCount="indefinite" path={paths[1]} /></circle>
          <circle r="3"><animateMotion dur="6.3s" begin="-1.6s" repeatCount="indefinite" path={paths[2]} /></circle>
          <circle r="2.5"><animateMotion dur="8s" begin="-4s" repeatCount="indefinite" path={paths[3]} /></circle>
        </g>
        <text className="decision-field__label" x="320" y="226" textAnchor="middle">DIMENSIONAL MODEL</text>
        <text className="decision-field__label decision-field__label--warm" x="700" y="226" textAnchor="middle">DECISION</text>
        <text className="decision-field__side-label" x="16" y="352">INPUT / EVENT / LEDGER / RISK</text>
        <text className="decision-field__side-label" x="984" y="352" textAnchor="end">MEASURE / GOVERN / ACT</text>
      </svg>
    </div>
  );
}
