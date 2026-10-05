import { skillCategories } from "@/data/skills";
import Reveal from "@/components/shared/Reveal";

function SkillMarquee({ items, reverse = false }) {
  return (
    <div
      className={`skill-marquee${reverse ? " skill-marquee--reverse" : ""}`}
      aria-label={items.join(", ")}
    >
      <div className="skill-marquee__track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="skill-marquee__group" key={copy}>
            {items.map((item) => (
              <span className="skill-marquee__item" key={`${copy}-${item}`}>
                {item}
                <i>★</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CapabilitiesEditorial() {
  const skills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => skill.name),
  );
  const midpoint = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, midpoint), skills.slice(midpoint)];

  return (
    <section id="capabilities" className="section-shell capabilities-section">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="section-kicker">03 / Capabilities</div>
          <div>
            <h2 className="section-title">The stack is a<br /><span className="text-accent">system.</span></h2>
            <p className="section-intro">A connected toolkit for extracting, modeling, governing, and communicating decision-grade data.</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="skill-marquee-stack" delay={100}>
        <SkillMarquee items={rows[0]} />
        <SkillMarquee items={rows[1]} reverse />
      </Reveal>

      <div className="site-container">
        <Reveal className="skill-domains reveal-stagger" delay={160}>
          {skillCategories.map((category, index) => (
            <div className="skill-domain" key={category.id}>
              <span>0{index + 1}</span>
              <strong>{category.title}</strong>
              <p>{category.roleFocus}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
