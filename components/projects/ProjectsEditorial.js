"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Reveal from "@/components/shared/Reveal";
import ProjectFlowGraph from "@/components/visuals/ProjectFlowGraph";

export default function ProjectsEditorial() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const project = projects.find((item) => item.id === activeId) || projects[0];

  return (
    <section id="work" className="section-shell">
      <div className="site-container">
        <Reveal className="section-head">
          <div className="section-kicker">02 / Selected work</div>
          <div>
            <h2 className="section-title">Systems that hold<br /><span className="text-accent">weight.</span></h2>
            <p className="section-intro">Selected analytical systems built across banking, insurance, supply chain, retail, and financial performance monitoring.</p>
          </div>
        </Reveal>

        <div className="work-layout">
          <Reveal as="div" className="work-index reveal-stagger" role="tablist" aria-label="Selected projects">
            {projects.map((item) => (
              <button key={item.id} type="button" role="tab" aria-selected={item.id === project.id} onClick={() => setActiveId(item.id)}>
                <span className="work-index__number">{item.number}</span>
                <span className="work-index__title">{item.title}</span>
                <span className="work-index__context">{item.clientOrContext}</span>
              </button>
            ))}
          </Reveal>

          <Reveal as="article" className="work-detail" key={project.id} delay={120}>
            <div className="work-detail__eyebrow">
              <span className="eyebrow">Selected system</span>
              <span>{project.period || "Selected engagement"}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="work-detail__tagline">{project.tagline}</p>
            <ProjectFlowGraph project={project} />

            <div className="work-summary">
              <div>
                <small>Role</small>
                <strong>{project.role}</strong>
              </div>
              <div>
                <small>Core stack</small>
                <p>{project.technologies.slice(0, 5).join(" · ")}</p>
              </div>
            </div>

            <div className="work-outcomes">
              <small>Selected outcomes</small>
              {project.results.slice(0, 2).map((result) => (
                <div className="work-result" key={result}>{result}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
