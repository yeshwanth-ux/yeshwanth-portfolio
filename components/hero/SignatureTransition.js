"use client";

import { useState, useEffect } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function SignatureTransition() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const stages = [
    {
      id: "ingest",
      step: "01",
      title: "DISPARATE STREAM INGESTION",
      tech: "Kafka / Azure Event Hubs / SQL Logs",
      metric: "HIGH-THROUGHPUT RAW STREAM",
      description:
        "High-velocity transactional data lands in raw Azure Data Lake storage without relational constraints.",
      nodes: ["Kafka Cluster", "Event Hub Stream", "Blob Deposit"]
    },
    {
      id: "extract",
      step: "02",
      title: "ETL EXTRACTION & RECONCILIATION",
      tech: "Azure Data Factory / SSIS / Snowflake",
      metric: "40% REFRESH LATENCY REDUCTION",
      description:
        "Automated ADF orchestration extracts, validates, deduplicates, and stages data into Snowflake warehouses.",
      nodes: ["ADF Pipelines", "Data Cleansing", "Staging DW"]
    },
    {
      id: "model",
      step: "03",
      title: "DIMENSIONAL STAR SCHEMA LATTICE",
      tech: "Conformed Dimensions & Fact Tables",
      metric: "OPTIMIZED TABULAR STRUCTURE",
      description:
        "Raw tables crystallize into high-performance Star Schemas, separating transactional Facts from analytical Dimensions.",
      nodes: ["FactPortfolioRisk", "DimTime", "DimCustomer", "DimRegulatory"]
    },
    {
      id: "dax",
      step: "04",
      title: "CALCULATED DAX MEASURE ENGINE",
      tech: "DAX / In-Memory Tabular / Python Forecasting",
      metric: "REAL-TIME MEASURE EVALUATION",
      description:
        "Dynamic filter contexts calculate liquidity stress, variance forecasts, and multi-currency capital models.",
      nodes: ["Filter Context", "Time Intelligence", "Risk Metrics", "Anomaly Detection"]
    },
    {
      id: "govern",
      step: "05",
      title: "GOVERNED EXECUTIVE TELEMETRY",
      tech: "Power BI / RLS & OLS / Basel III Compliance",
      metric: "30% FASTER EXECUTIVE DECISIONS",
      description:
        "Role-Level Security strictly enforces role-based views, rendering audit-ready intelligence to executive leadership.",
      nodes: ["RLS Policy Matrix", "Executive Dashboard", "Basel III Audit Readout"]
    }
  ];

  // Optional automatic walkthrough loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  return (
    <section
      id="thinking"
      style={{
        position: "relative",
        padding: "clamp(60px, 8vw, 120px) 0",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        backgroundColor: "var(--bg-subtle)"
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span className="tracking-label" style={{ color: "var(--accent)" }}>
              02 // SIGNATURE TRANSITION
            </span>
            <span style={{ color: "var(--line-bright)" }}>—</span>
            <span className="tracking-label">METAPHOR TO ARCHITECTURE</span>
          </div>

          <h2
            className="font-display tracking-tight-custom"
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "var(--text)",
              marginBottom: "16px"
            }}
          >
            The Hero Stream Was An Abstraction Of How I Think.
          </h2>

          <p style={{ color: "var(--muted)", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}>
            What starts as unstructured transactional motion condenses into deterministic dimensional architecture.
            Step through the analytical transformation sequence:
          </p>
        </div>

        {/* Transition Control Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "16px",
            marginBottom: "32px"
          }}
        >
          {/* Stage Step Indicators */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {stages.map((st, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(idx)}
                  data-cursor="INSPECT"
                  style={{
                    background: isCurrent ? "var(--accent)" : "var(--bg)",
                    color: isCurrent ? "var(--bg)" : "var(--muted)",
                    border: `1px solid ${isCurrent ? "var(--accent)" : "var(--line)"}`,
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-display)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {st.step} // {st.id.toUpperCase()}
                </button>
              );
            })}
          </div>

          {/* Interactive Play Controls */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: "transparent",
                border: "1px solid var(--system)",
                color: "var(--system)",
                padding: "6px 16px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                fontSize: "11px",
                letterSpacing: "0.1em",
                fontWeight: 600,
                textTransform: "uppercase"
              }}
            >
              {isPlaying ? "PAUSE FLOW" : "PLAY SYSTEM FLOW"}
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
              aria-label="Previous Transformation Stage"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                padding: "6px 12px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer"
              }}
            >
              ←
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
              aria-label="Next Transformation Stage"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--line)",
                color: "var(--text)",
                padding: "6px 12px",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer"
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Active Stage Interactive Projection Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            backgroundColor: "var(--bg)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-sm)",
            padding: "clamp(24px, 4vw, 48px)"
          }}
        >
          {/* Left: Detail Narrative */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.1em"
                  }}
                >
                  STAGE {stages[activeStage].step} OF 05
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "2px 8px",
                    backgroundColor: "var(--system-subtle)",
                    color: "var(--system)",
                    border: "1px solid var(--system)",
                    borderRadius: "var(--radius-sm)",
                    letterSpacing: "0.08em"
                  }}
                >
                  {stages[activeStage].metric}
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(22px, 3.2vw, 36px)",
                  fontWeight: 700,
                  color: "var(--text)",
                  lineHeight: 1.15,
                  marginBottom: "16px"
                }}
              >
                {stages[activeStage].title}
              </h3>

              <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                {stages[activeStage].description}
              </p>
            </div>

            <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
              <span className="tracking-label">Operational Tooling</span>
              <p style={{ color: "var(--text)", fontSize: "13px", fontWeight: 500, marginTop: "4px" }}>
                {stages[activeStage].tech}
              </p>
            </div>
          </div>

          {/* Right: Structural Node Topology Diagram */}
          <div
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-sm)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "260px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span className="tracking-label">Structural Topology</span>
              <span style={{ fontSize: "11px", color: "var(--accent)", fontFamily: "monospace" }}>
                SYNC_STATE: VERIFIED
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {stages[activeStage].nodes.map((nodeName, nIdx) => (
                <div
                  key={nodeName}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--line-bright)",
                    borderRadius: "var(--radius-sm)"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: nIdx === 0 ? "var(--accent)" : "var(--system)",
                        borderRadius: "50%"
                      }}
                    />
                    <span style={{ fontSize: "13px", color: "var(--text)", fontFamily: "monospace" }}>
                      {nodeName}
                    </span>
                  </div>
                  <span style={{ fontSize: "10px", color: "var(--muted)", textTransform: "uppercase" }}>
                    Node 0{nIdx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Directional Flow Vector Indicator */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                color: "var(--muted)"
              }}
            >
              <span>FLOW VECTOR:</span>
              <span style={{ color: "var(--accent)", fontFamily: "monospace" }}>
                {activeStage === 0 ? "STREAM → STAGING" : activeStage === 4 ? "GOVERNED → DECISION" : "ACTIVE CONVERGENCE"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
