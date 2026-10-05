import { experience } from "@/data/experience";
import Reveal from "@/components/shared/Reveal";

export default function ExperienceEditorial() {
  return (
    <section id="experience" className="section-shell">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="section-kicker">04 / Experience</div>
          <div>
            <h2 className="section-title">Built across<br /><span className="text-accent">complex data.</span></h2>
            <p className="section-intro">Six years spanning banking, insurance, supply chain, cloud data integration, analytical modeling, and business reporting.</p>
          </div>
        </Reveal>
        <Reveal className="experience-list reveal-stagger">
          {experience.map((item) => (
            <article className="experience-row" key={item.id}>
              <div className="experience-row__period">{item.period}</div>
              <div>
                <h3>{item.role}<span>{item.company}{item.location ? ` / ${item.location}` : ""}</span></h3>
                <p style={{ marginTop: 16 }}>{item.summary}</p>
              </div>
              <div className="experience-row__tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
