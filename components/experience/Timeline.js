"use client";

import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export default function Timeline() {
  return (
    <section id="experience" style={{ position: "relative", padding: "clamp(60px, 8vw, 110px) 0", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", backgroundColor: "var(--bg)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span className="tracking-label" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.15em", fontWeight: 600 }}>
              05 —— CAREER PROGRESSION
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(34px, 4.5vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--text)",
              marginBottom: "16px"
            }}
          >
            Chronology of Enterprise Engagements.
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}>
            Over 5 years of verified analytics engineering across institutional banking, corporate insurance, and multi-tenant data warehousing.
          </p>
        </div>

        {/* Editorial Timeline Progression */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", borderLeft: "1px solid rgba(52, 211, 153, 0.2)", paddingLeft: "clamp(20px, 4vw, 40px)", marginLeft: "8px" }}>
          {experience.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                position: "relative",
                backgroundColor: "rgba(18, 26, 22, 0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-sm)",
                padding: "clamp(24px, 4vw, 36px)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(52, 211, 153, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(52, 211, 153, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Chronological Pin */}
              <div
                style={{
                  position: "absolute",
                  left: "clamp(-27px, -4vw - 7px, -47px)",
                  top: "32px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: idx === 0 ? "var(--accent)" : "var(--bg)",
                  border: `2px solid ${idx === 0 ? "var(--accent)" : "rgba(52, 211, 153, 0.6)"}`,
                  boxShadow: idx === 0 ? "0 0 10px var(--accent)" : "none",
                  borderRadius: "50%"
                }}
              />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <span style={{ fontSize: "11px", color: "var(--accent)", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                    {exp.period}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "var(--text)", marginTop: "4px" }}
                  >
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                    {exp.company} // {exp.location}
                  </p>
                </div>

                <span
                  style={{
                    fontSize: "11px",
                    padding: "3px 10px",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--system)",
                    fontFamily: "monospace"
                  }}
                >
                  {exp.domain}
                </span>
              </div>

              <p style={{ color: "var(--text)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                {exp.summary}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: "20px" }}>
                <span className="tracking-label">Key Milestones & Compliance</span>
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx} style={{ fontSize: "13px", color: "var(--muted)", display: "flex", gap: "8px", alignItems: "baseline" }}>
                      <span style={{ color: "var(--accent)", fontSize: "12px" }}>→</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environment Stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", borderTop: "1px solid var(--line)", paddingTop: "14px" }}>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--line-bright)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--text)",
                      fontFamily: "monospace"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Credentials & Certifications Sub-Chapter */}
        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px"
          }}
        >
          {/* Education */}
          <div style={{ backgroundColor: "var(--bg-subtle)", border: "1px solid var(--line)", padding: "24px", borderRadius: "var(--radius-sm)" }}>
            <span className="tracking-label" style={{ color: "var(--accent)" }}>Academic Background</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
              {profile.education.map((edu, idx) => (
                <div key={idx} style={{ borderBottom: idx === 0 ? "1px solid var(--line)" : "none", paddingBottom: idx === 0 ? "12px" : "0" }}>
                  <h4 className="font-display" style={{ fontSize: "16px", fontWeight: 700, color: "var(--text)" }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "2px" }}>
                    {edu.institution} {edu.graduation && `// ${edu.graduation}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div style={{ backgroundColor: "var(--bg-subtle)", border: "1px solid var(--line)", padding: "24px", borderRadius: "var(--radius-sm)" }}>
            <span className="tracking-label" style={{ color: "var(--system)" }}>Industry Certifications</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              {profile.certifications.map((cert, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
                  <span style={{ color: "var(--text)" }}>{cert.name}</span>
                  {cert.year && (
                    <span style={{ color: "var(--muted)", fontFamily: "monospace", fontSize: "11px" }}>
                      {cert.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
