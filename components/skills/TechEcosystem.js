"use client";

import { useState } from "react";
import { skillCategories, skillGraphRelations } from "@/data/skills";

export default function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  // Related skills based on graph relations
  const relatedSkillNames = new Set(
    hoveredSkill
      ? skillGraphRelations
          .filter((r) => r.source === hoveredSkill || r.target === hoveredSkill)
          .flatMap((r) => [r.source, r.target])
      : []
  );

  return (
    <section id="capabilities" style={{ position: "relative", padding: "clamp(60px, 8vw, 110px) 0", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", backgroundColor: "var(--bg)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span className="tracking-label" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.15em", fontWeight: 600 }}>
              04 —— CAPABILITIES & ECOSYSTEM
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
            Dimensional Ecosystem & Semantic Core.
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}>
            No arbitrary percentages or rating bars. Each technology exists within an interdependent enterprise pipeline: from extraction and cloud warehousing to tabular modeling and regulatory compliance.
          </p>
        </div>

        {/* Domain Category Selector Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "16px",
            marginBottom: "32px"
          }}
        >
          {skillCategories.map((cat, idx) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="INSPECT"
                style={{
                  backgroundColor: isSelected ? "rgba(52, 211, 153, 0.15)" : "rgba(18, 26, 22, 0.5)",
                  color: isSelected ? "var(--accent)" : "var(--muted)",
                  border: `1px solid ${isSelected ? "var(--accent)" : "rgba(255, 255, 255, 0.08)"}`,
                  boxShadow: isSelected ? "0 0 16px rgba(52, 211, 153, 0.2)" : "none",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  fontSize: "11px",
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                0{idx + 1} // {cat.title}
              </button>
            );
          })}
        </div>

        {/* Category Focus & Relational Skill Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px"
          }}
        >
          {currentCategory.skills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isRelated = relatedSkillNames.has(skill.name);

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                tabIndex={0}
                role="region"
                aria-label={`${skill.name} capability`}
                data-cursor="INSPECT"
                style={{
                  backgroundColor: "rgba(18, 26, 22, 0.65)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${
                    isHovered
                      ? "var(--accent)"
                      : isRelated
                      ? "var(--system)"
                      : "rgba(255, 255, 255, 0.08)"
                  }`,
                  borderRadius: "var(--radius-sm)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "150px",
                  boxShadow: isHovered ? "0 0 20px rgba(52, 211, 153, 0.15)" : "none",
                  transition: "all 0.25s ease",
                  transform: isHovered ? "translateY(-3px)" : "none"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontFamily: "monospace",
                        letterSpacing: "0.1em",
                        color: skill.core ? "var(--accent)" : "var(--system)",
                        textTransform: "uppercase"
                      }}
                    >
                      {skill.core ? "CORE CAPABILITY" : "SYSTEM EXTENSION"}
                    </span>
                    {isRelated && (
                      <span style={{ fontSize: "9px", color: "var(--system)", fontFamily: "monospace" }}>
                        LINKED
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-display"
                    style={{ fontSize: "18px", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}
                  >
                    {skill.name}
                  </h3>

                  <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5 }}>
                    {skill.highlight}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "10px", marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "var(--muted)" }}>Domain: {currentCategory.roleFocus}</span>
                  <span style={{ fontSize: "11px", color: "var(--line-bright)" }}>◆</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Pipeline Continuity Footer */}
        <div
          style={{
            marginTop: "32px",
            borderTop: "1px solid var(--line)",
            paddingTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "11px",
            color: "var(--muted)"
          }}
        >
          <span>INTER-DOMAIN COUPLING: ETL → WAREHOUSE → STAR SCHEMA → DAX → RLS</span>
          <span style={{ color: "var(--accent)", fontFamily: "monospace" }}>
            TOTAL ECOSYSTEM: 22 ENTERPRISE TECHNOLOGIES
          </span>
        </div>
      </div>
    </section>
  );
}
