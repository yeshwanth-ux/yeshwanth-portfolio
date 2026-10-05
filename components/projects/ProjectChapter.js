"use client";

import ProjectDemo from "./ProjectDemo";
import { roleTheme } from "@/lib/roleThemes";

export default function ProjectChapter({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <article
      id={`project-${project.slug}`}
      style={{
        padding: "clamp(60px, 8vw, 100px) 0",
        borderBottom: "1px solid var(--line)"
      }}
    >
      <div className="site-container">
        {/* Chapter Header Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "32px",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "16px",
            flexWrap: "wrap",
            gap: "12px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--accent)"
              }}
            >
              CHAPTER {project.number}
            </span>
            <span style={{ color: "var(--line-bright)" }}>//</span>
            <span className="tracking-label">
              {project.clientOrContext}
            </span>
          </div>

          {/* Architecture Authenticity Badge */}
          <span
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              padding: "3px 8px",
              borderRadius: "var(--radius-sm)",
              border: `1px solid ${
                project.architectureType.includes("VERIFIED")
                  ? "var(--accent)"
                  : "var(--line-bright)"
              }`,
              color: project.architectureType.includes("VERIFIED")
                ? "var(--accent)"
                : "var(--muted)",
              backgroundColor: "var(--bg-subtle)"
            }}
          >
            {project.architectureType}
          </span>
        </div>

        {/* Dynamic Composition: Alternating Visual Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "start"
          }}
        >
          {/* Narrative Content Column */}
          <div style={{ order: isEven ? 2 : 1 }}>
            <h3
              className="font-display tracking-tight-custom"
              style={{
                fontSize: "clamp(26px, 3.8vw, 44px)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.1,
                marginBottom: "16px"
              }}
            >
              {project.title}
            </h3>

            <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.6, marginBottom: "28px" }}>
              {project.tagline}
            </p>

            {/* Factual Role & Period */}
            <div style={{ display: "flex", gap: "24px", marginBottom: "28px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "12px 0" }}>
              <div>
                <span className="tracking-label">Executive Role</span>
                <p style={{ fontSize: "13px", color: "var(--text)", fontWeight: 600, marginTop: "2px" }}>
                  {project.role}
                </p>
              </div>
              {project.period && (
                <div>
                  <span className="tracking-label">Tenure</span>
                  <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "2px" }}>
                    {project.period}
                  </p>
                </div>
              )}
            </div>

            {/* Problem & Solution Accord */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div>
                <span className="tracking-label" style={{ color: "var(--system)" }}>Operational Challenge</span>
                <p style={{ color: "var(--text)", fontSize: "14px", lineHeight: 1.6, marginTop: "4px" }}>
                  {project.problem}
                </p>
              </div>
              <div>
                <span className="tracking-label" style={{ color: "var(--accent)" }}>Architectural Solution</span>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginTop: "4px" }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Verified Production Results */}
            <div style={{ marginBottom: "28px" }}>
              <span className="tracking-label">Verified Production Results</span>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                {project.results.map((res, rIdx) => (
                  <li
                    key={rIdx}
                    style={{
                      fontSize: "13px",
                      color: "var(--text)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "baseline"
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: "bold" }}>✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <span className="tracking-label">Technical Ecosystem</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      padding: "4px 10px",
                      backgroundColor: "var(--bg-subtle)",
                      border: "1px solid var(--line-bright)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--text)"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Demonstration Column */}
          <div style={{ order: isEven ? 1 : 2 }}>
            <ProjectDemo project={project} />

            {/* Dimensional Pipeline Stages Breakdown */}
            {project.architectureStages && (
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--bg-subtle)",
                  padding: "16px",
                  borderRadius: "var(--radius-sm)"
                }}
              >
                <span className="tracking-label">Pipeline Stage Trajectory</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  {project.architectureStages.map((stage, sIdx) => (
                    <div
                      key={stage.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "11px",
                        padding: "6px 10px",
                        backgroundColor: "var(--bg)",
                        border: "1px solid var(--line)"
                      }}
                    >
                      <span style={{ color: "var(--text)", fontWeight: 600 }}>
                        {sIdx + 1}. {stage.label}
                      </span>
                      <span style={{ color: "var(--muted)", fontFamily: "monospace" }}>
                        {stage.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
