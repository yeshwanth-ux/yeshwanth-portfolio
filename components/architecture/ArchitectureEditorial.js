import { roleTheme } from "@/lib/roleThemes";
import Reveal from "@/components/shared/Reveal";
import DecisionRibbon from "@/components/visuals/DecisionRibbon";

export default function ArchitectureEditorial() {
  return (
    <section id="thinking" className="section-shell">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="section-kicker">01 / How I think</div>
          <div>
            <h2 className="section-title">Make complexity<br /><span className="text-accent">legible.</span></h2>
            <p className="section-intro">A reliable analytical system is a sequence of deliberate translations: source data is validated, shaped into useful features and metrics, and delivered as insight people can trust.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <DecisionRibbon />
        </Reveal>
        <div className="thinking-grid">
          <div>
            <div className="eyebrow">The operating principle</div>
            <p className="section-intro">{roleTheme.visualMetaphor.summary}</p>
          </div>
          <Reveal className="thinking-list reveal-stagger">
            {roleTheme.visualMetaphor.phases.map((phase, index) => (
              <div className="thinking-row" key={phase.id}>
                <span className="thinking-row__number">0{index + 1}</span>
                <h3>{phase.title}</h3>
                <p>{phase.meaning}<br /><span className="text-accent">{phase.subtitle}</span></p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
