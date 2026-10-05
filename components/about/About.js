"use client";

import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" style={{ position: "relative", padding: "clamp(60px, 8vw, 110px) 0", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", backgroundColor: "var(--bg)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span className="tracking-label" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.15em", fontWeight: 600 }}>
              06 —— PERSPECTIVE & RIGOR
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
            Engineering Deterministic Insights.
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}>
            In capital markets and regulated healthcare, analytics is not an aesthetic exercise — it is a compliance and risk safeguard.
          </p>
        </div>

        {/* 3 Core Professional Principles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}
        >
          {profile.principles.map((pr) => (
            <div
              key={pr.index}
              style={{
                backgroundColor: "rgba(18, 26, 22, 0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-sm)",
                padding: "clamp(24px, 3.5vw, 36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "220px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(52, 211, 153, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(52, 211, 153, 0.12)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.1em"
                  }}
                >
                  PRINCIPLE // {pr.index}
                </span>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: "12px 0 14px",
                    lineHeight: 1.2
                  }}
                >
                  {pr.title}
                </h3>

                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.65 }}>
                  {pr.statement}
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "14px", marginTop: "24px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)" }}>
                <span>Core Governance Rule</span>
                <span style={{ color: "var(--system)" }}>ENFORCED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
