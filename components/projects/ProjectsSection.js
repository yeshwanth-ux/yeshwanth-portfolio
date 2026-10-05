"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

const PROJECT_CARDS = [
  {
    step: "01",
    title: "Process Transformation",
    subtitle: "FROM MANUAL TO MODERN",
    projectData: projects[0],
    image: "/images/project_process_transform.jpg"
  },
  {
    step: "02",
    title: "Customer Insight Initiative",
    subtitle: "TURNING DATA INTO GROWTH",
    projectData: projects[1],
    image: "/images/project_customer_insight.jpg"
  },
  {
    step: "03",
    title: "Operational Efficiency",
    subtitle: "LEANER PROCESSES, BIGGER IMPACT",
    projectData: projects[2] || projects[0],
    image: "/images/project_operational_efficiency.jpg"
  }
];

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section
      id="work"
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 110px) 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "var(--bg)"
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            paddingBottom: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              className="tracking-label"
              style={{
                color: "var(--accent)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                fontWeight: 600
              }}
            >
              03 —— SELECTED WORK
            </span>
          </div>

          <a
            href="#capabilities"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <span>VIEW ALL PROJECTS</span>
            <span>→</span>
          </a>
        </div>

        {/* 3 Showcase Project Cards (Reference Grid) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
            width: "100%"
          }}
        >
          {PROJECT_CARDS.map((card) => (
            <div
              key={card.step}
              onClick={() => setActiveModalProject(card.projectData)}
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(18, 26, 22, 0.55)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(52, 211, 153, 0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(8, 11, 10, 0.8), 0 0 24px rgba(52, 211, 153, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Card Meta Header */}
              <div
                style={{
                  padding: "18px 20px 14px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px"
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--muted)",
                    fontFamily: "var(--font-display)"
                  }}
                >
                  {card.step}
                </span>
                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "var(--text)",
                      lineHeight: 1.2
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="tracking-label"
                    style={{
                      fontSize: "9px",
                      color: "var(--accent)",
                      marginTop: "4px",
                      letterSpacing: "0.14em",
                      fontWeight: 600
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Visual Hero Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  overflow: "hidden"
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(18, 26, 22, 0.85) 0%, transparent 60%)"
                  }}
                />
              </div>

              {/* Card Footer: Explore CTA */}
              <div
                style={{
                  padding: "14px 20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>EXPLORE PROJECT</span>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    fontFamily: "var(--font-display)"
                  }}
                >
                  {card.projectData.clientOrContext?.split("—")[0]?.trim()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(8, 11, 10, 0.85)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "760px",
              width: "100%",
              maxHeight: "88vh",
              overflowY: "auto",
              backgroundColor: "var(--bg-surface)",
              border: "1px solid rgba(52, 211, 153, 0.35)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(24px, 4vw, 40px)",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.8), 0 0 40px rgba(52, 211, 153, 0.2)"
            }}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "var(--text)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px"
              }}
            >
              ✕
            </button>

            {/* Modal Content */}
            <span
              className="tracking-label"
              style={{ color: "var(--accent)", fontSize: "11px" }}
            >
              PROJECT {activeModalProject.number} // {activeModalProject.clientOrContext}
            </span>

            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(26px, 3.5vw, 36px)",
                color: "var(--text)",
                marginTop: "8px",
                marginBottom: "12px",
                lineHeight: 1.15
              }}
            >
              {activeModalProject.title}
            </h3>

            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
              {activeModalProject.tagline}
            </p>

            {/* Problem & Solution */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)"
                }}
              >
                <span className="tracking-label" style={{ color: "#F87171" }}>THE CHALLENGE</span>
                <p style={{ fontSize: "13px", color: "var(--text)", marginTop: "8px", lineHeight: 1.5 }}>
                  {activeModalProject.problem}
                </p>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(52, 211, 153, 0.04)",
                  border: "1px solid rgba(52, 211, 153, 0.2)"
                }}
              >
                <span className="tracking-label" style={{ color: "var(--accent)" }}>THE ARCHITECTURE</span>
                <p style={{ fontSize: "13px", color: "var(--text)", marginTop: "8px", lineHeight: 1.5 }}>
                  {activeModalProject.solution}
                </p>
              </div>
            </div>

            {/* Verified Results */}
            <div style={{ marginBottom: "24px" }}>
              <span className="tracking-label" style={{ color: "var(--accent)", marginBottom: "10px", display: "block" }}>
                VERIFIED PRODUCTION RESULTS
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {activeModalProject.results.map((res, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--text)" }}>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <span className="tracking-label" style={{ color: "var(--muted)", marginBottom: "8px", display: "block" }}>
                DEPLOYED TECHNOLOGIES
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "11px",
                      color: "var(--text)",
                      fontFamily: "var(--font-display)"
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
