"use client";

import { useState } from "react";
import Image from "next/image";

const FRAMEWORK_STEPS = [
  {
    step: "01",
    title: "BUSINESS SIGNALS",
    caption: "Find and frame what matters.",
    image: "/images/framework/01_signals.jpg",
    alt: "Spherical 3D constellation of business signals and transactional data"
  },
  {
    step: "02",
    title: "ANALYSIS",
    caption: "Turn information into understanding.",
    image: "/images/framework/02_analysis.jpg",
    alt: "Isometric wireframe multi-layer data grid and analysis matrix"
  },
  {
    step: "03",
    title: "INSIGHT",
    caption: "Uncover opportunities and trade-offs.",
    image: "/images/framework/03_insight.jpg",
    alt: "Layered translucent glass plates with radiant core starburst insight"
  },
  {
    step: "04",
    title: "DECISION",
    caption: "Recommend practical solutions.",
    image: "/images/framework/04_decision.jpg",
    alt: "Minimalist high-tech decision tree branching into glowing node pearls"
  },
  {
    step: "05",
    title: "IMPACT",
    caption: "Drive measurable business value.",
    image: "/images/framework/05_impact.jpg",
    alt: "Translucent ascending emerald glass bar pillars representing business impact"
  }
];

export default function ArchitectureSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="architecture"
      style={{
        position: "relative",
        padding: "clamp(64px, 7vw, 104px) 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "var(--bg)"
      }}
    >
      <div className="site-container">
        {/* Split Layout: Narrative (Left) & 5 Realistic Framework Cards (Right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 340px) 1fr",
            gap: "clamp(32px, 4vw, 56px)",
            alignItems: "flex-start"
          }}
        >
          {/* Left Column: Section Title & Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                02 —— HOW I THINK
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(38px, 4.2vw, 54px)",
                lineHeight: 1.05,
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.02em"
              }}
            >
              A structured
              <br />
              approach to
              <br />
              real outcomes.
            </h2>

            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                color: "var(--muted)",
                maxWidth: "320px"
              }}
            >
              I connect the dots between transactional data, cloud pipelines, and
              decision-makers — turning raw complexity into governed analytics and plans into
              progress.
            </p>

            <div style={{ paddingTop: "4px" }}>
              <a
                href="#capabilities"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(52, 211, 153, 0.4)",
                  paddingBottom: "4px",
                  transition: "all 0.2s ease"
                }}
              >
                <span>EXPLORE MY APPROACH</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 5 Realistic Framework Step Cards Matching Reference */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "14px",
              width: "100%"
            }}
          >
            {FRAMEWORK_STEPS.map((item, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "360px",
                    padding: "16px 14px",
                    backgroundColor: isHovered
                      ? "rgba(18, 26, 22, 0.85)"
                      : "rgba(14, 20, 17, 0.55)",
                    border: `1px solid ${
                      isHovered
                        ? "rgba(52, 211, 153, 0.45)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    borderRadius: "var(--radius-sm)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isHovered
                      ? "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 24px rgba(52, 211, 153, 0.15)"
                      : "none",
                    transform: isHovered ? "translateY(-4px)" : "none",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Card Header: Step & Title */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px"
                    }}
                  >
                    <span
                      className="tracking-label"
                      style={{
                        fontSize: "10.5px",
                        color: isHovered ? "var(--accent)" : "rgba(255, 255, 255, 0.45)",
                        fontWeight: 700,
                        transition: "color 0.2s ease"
                      }}
                    >
                      {item.step}
                    </span>
                    <span
                      className="tracking-label"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        color: isHovered ? "var(--text)" : "rgba(255, 255, 255, 0.65)",
                        fontWeight: 700,
                        transition: "color 0.2s ease"
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Card Body: Realistic 3D Visual Artwork */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      position: "relative",
                      borderRadius: "4px",
                      overflow: "hidden",
                      margin: "8px 0",
                      backgroundColor: "#000000"
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1200px) 20vw, 200px"
                      style={{
                        objectFit: "contain",
                        transform: isHovered ? "scale(1.06)" : "scale(1)",
                        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    />
                  </div>

                  {/* Card Footer: Clean Editorial Caption */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "12px"
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12.5px",
                        lineHeight: 1.45,
                        color: isHovered ? "var(--text)" : "rgba(220, 230, 225, 0.8)",
                        fontWeight: 400,
                        transition: "color 0.2s ease"
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
