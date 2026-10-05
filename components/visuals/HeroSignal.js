export default function HeroSignal() {
  return (
    <div className="hero-signal" aria-label="Animated field showing signals becoming decision intelligence">
      <div className="hero-signal__field">
        <div className="hero-signal__core"><span /><span /><span /></div>
        <div className="hero-signal__orbit hero-signal__orbit--one"><i /><i /><i /></div>
        <div className="hero-signal__orbit hero-signal__orbit--two"><i /><i /></div>
        <div className="hero-signal__ticks">{Array.from({ length: 18 }).map((_, index) => <i key={index} style={{ "--tick-index": index }} />)}</div>
      </div>
      <div className="hero-signal__ring hero-signal__ring--outer" />
      <div className="hero-signal__ring hero-signal__ring--inner" />
      <div className="hero-signal__scan" />
      <div className="hero-signal__readout hero-signal__readout--top"><span>FIELD 01 / LIVE</span><strong>RAW SIGNAL</strong></div>
      <div className="hero-signal__readout hero-signal__readout--bottom"><span>MODEL → GOVERN → ACT</span><strong>DECISION FIELD</strong></div>
      <div className="hero-signal__axis hero-signal__axis--x">SIGNAL DENSITY</div>
      <div className="hero-signal__axis hero-signal__axis--y">01—05</div>
    </div>
  );
}
