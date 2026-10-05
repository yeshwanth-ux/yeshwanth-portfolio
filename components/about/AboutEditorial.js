import { profile } from "@/data/profile";
import Reveal from "@/components/shared/Reveal";

export default function AboutEditorial() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="section-kicker">05 / Principles</div>
          <div>
            <h2 className="section-title">Rigor is a<br /><span className="text-accent">feature.</span></h2>
            <p className="section-intro">The point of the interface is clarity. The point of the system underneath it is trust.</p>
          </div>
        </Reveal>
        <Reveal className="principle-list reveal-stagger">
          {profile.principles.map((item) => (
            <article className="principle-row" key={item.index}>
              <span className="principle-row__index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.statement}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
