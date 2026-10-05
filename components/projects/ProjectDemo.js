"use client";

import { useState } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function ProjectDemo({ project }) {
  if (project.id === "financial-risk-intelligence") {
    return <FinancialRiskDemo />;
  }
  if (project.id === "actuarial-claims-intelligence") {
    return <ActuarialDemo />;
  }
  if (project.id === "sales-performance-matrix") {
    return <RetailSalesDemo />;
  }
  return <CloudMonitoringDemo />;
}

/* Demonstration 1: Key Bank Basel III & Risk Simulation */
function FinancialRiskDemo() {
  const [scenario, setScenario] = useState("adverse"); // "baseline" | "adverse"
  const [roleMode, setRoleMode] = useState("cro"); // "cro" | "regional"

  const metrics = scenario === "baseline"
    ? {
        cet1: "13.8%",
        lcr: "142%",
        variance: "+1.4%",
        anomalyCount: 2,
        status: "OPTIMAL",
        scope: roleMode === "cro" ? "All US Portfolios (Consolidated)" : "Texas Lending Region Only (RLS Filtered)"
      }
    : {
        cet1: "11.2%",
        lcr: "118%",
        variance: "-4.6%",
        anomalyCount: 14,
        status: "STRESS TESTING ACTIVE",
        scope: roleMode === "cro" ? "All US Portfolios (Consolidated)" : "Texas Lending Region Only (RLS Filtered)"
      };

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line-bright)",
        borderRadius: "var(--radius-sm)",
        padding: "clamp(18px, 3vw, 28px)",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      {/* Simulation Header & Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="tracking-label" style={{ color: "var(--accent)" }}>
            LIVE INTERACTIVE TELEMETRY
          </span>
          <h4 className="font-display" style={{ fontSize: "16px", color: "var(--text)", marginTop: "2px" }}>
            Basel III / CCAR Stress Calculus
          </h4>
        </div>

        {/* Toggles */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setScenario(scenario === "baseline" ? "adverse" : "baseline")}
            style={{
              backgroundColor: "var(--bg-subtle)",
              color: scenario === "adverse" ? "var(--accent)" : "var(--muted)",
              border: `1px solid ${scenario === "adverse" ? "var(--accent)" : "var(--line)"}`,
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              cursor: "pointer"
            }}
          >
            Scenario: {scenario === "adverse" ? "Severely Adverse" : "Baseline"}
          </button>

          <button
            type="button"
            onClick={() => setRoleMode(roleMode === "cro" ? "regional" : "cro")}
            style={{
              backgroundColor: "var(--bg-subtle)",
              color: roleMode === "cro" ? "var(--system)" : "var(--text)",
              border: `1px solid ${roleMode === "cro" ? "var(--system)" : "var(--line)"}`,
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              cursor: "pointer"
            }}
          >
            RLS Role: {roleMode === "cro" ? "CRO / Executive" : "Regional RLS"}
          </button>
        </div>
      </div>

      {/* Scope Banner */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 12px",
          backgroundColor: "var(--bg-subtle)",
          border: "1px solid var(--line)",
          fontSize: "11px"
        }}
      >
        <span style={{ color: "var(--muted)" }}>Active Partition:</span>
        <span style={{ color: "var(--text)", fontFamily: "monospace" }}>{metrics.scope}</span>
      </div>

      {/* Real-Time DAX Calculated KPI Gauges */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
        <div style={{ padding: "14px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">CET1 Ratio</span>
          <p className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: "var(--text)", marginTop: "4px" }}>
            {metrics.cet1}
          </p>
          <span style={{ fontSize: "10px", color: "var(--muted)" }}>Min Target: 10.5%</span>
        </div>

        <div style={{ padding: "14px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">Liquidity (LCR)</span>
          <p className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: "var(--accent)", marginTop: "4px" }}>
            {metrics.lcr}
          </p>
          <span style={{ fontSize: "10px", color: "var(--muted)" }}>Regulatory Min: 100%</span>
        </div>

        <div style={{ padding: "14px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">Anomaly Signals</span>
          <p className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: scenario === "adverse" ? "#E06D53" : "var(--system)", marginTop: "4px" }}>
            {metrics.anomalyCount}
          </p>
          <span style={{ fontSize: "10px", color: "var(--muted)" }}>Azure Event Hubs Feed</span>
        </div>
      </div>

      {/* Simulated Kafka Stream Feed Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: "12px", fontSize: "11px", color: "var(--muted)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "6px", height: "6px", backgroundColor: "var(--accent)", borderRadius: "50%" }} />
          Snowflake Ingestion: Synced
        </span>
        <span style={{ fontFamily: "monospace", color: "var(--system)" }}>Latency: 120ms (DirectQuery)</span>
      </div>
    </div>
  );
}

/* Demonstration 2: MetLife Claims Loss Ratio & Tabular Model */
function ActuarialDemo() {
  const [segment, setSegment] = useState("life"); // "life" | "casualty"

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line-bright)",
        borderRadius: "var(--radius-sm)",
        padding: "clamp(18px, 3vw, 28px)",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="tracking-label" style={{ color: "var(--system)" }}>
            TABULAR DRILL-DOWN TELEMETRY
          </span>
          <h4 className="font-display" style={{ fontSize: "16px", color: "var(--text)", marginTop: "2px" }}>
            Azure Synapse Claims & Loss Model
          </h4>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          <button
            type="button"
            onClick={() => setSegment("life")}
            style={{
              backgroundColor: segment === "life" ? "var(--system)" : "var(--bg-subtle)",
              color: segment === "life" ? "#fff" : "var(--muted)",
              border: `1px solid ${segment === "life" ? "var(--system)" : "var(--line)"}`,
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              cursor: "pointer"
            }}
          >
            Group Life
          </button>
          <button
            type="button"
            onClick={() => setSegment("casualty")}
            style={{
              backgroundColor: segment === "casualty" ? "var(--system)" : "var(--bg-subtle)",
              color: segment === "casualty" ? "#fff" : "var(--muted)",
              border: `1px solid ${segment === "casualty" ? "var(--system)" : "var(--line)"}`,
              padding: "4px 10px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              cursor: "pointer"
            }}
          >
            Property & Casualty
          </button>
        </div>
      </div>

      {/* Simulated Time Intelligence Loss Ratio Decomposition */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          { year: "2024 Q3 (Forecasted)", ratio: segment === "life" ? "64.2%" : "71.8%", width: segment === "life" ? "64%" : "72%" },
          { year: "2024 Q2 (Actual)", ratio: segment === "life" ? "61.5%" : "68.3%", width: segment === "life" ? "61%" : "68%" },
          { year: "2024 Q1 (Actual)", ratio: segment === "life" ? "59.8%" : "66.1%", width: segment === "life" ? "60%" : "66%" }
        ].map((row, idx) => (
          <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
              <span style={{ color: "var(--text)" }}>{row.year}</span>
              <span style={{ color: "var(--accent)", fontFamily: "monospace" }}>{row.ratio}</span>
            </div>
            <div style={{ height: "6px", width: "100%", backgroundColor: "var(--bg-subtle)", borderRadius: "2px" }}>
              <div
                style={{
                  height: "100%",
                  width: row.width,
                  backgroundColor: "var(--system)",
                  transition: "width 0.4s ease"
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)" }}>
        <span>Engine: Azure Analysis Services Tabular</span>
        <span style={{ color: "var(--text)" }}>DAX Measure: [ClaimsLossRatio_YoY]</span>
      </div>
    </div>
  );
}

/* Demonstration 3: Retail Sales Dimensional Slicer */
function RetailSalesDemo() {
  const [region, setRegion] = useState("North");

  const regionData = {
    North: { sales: "$4.82M", margin: "24.6%", velocity: "+18%" },
    South: { sales: "$3.91M", margin: "21.2%", velocity: "+12%" },
    West: { sales: "$5.15M", margin: "27.4%", velocity: "+25%" }
  }[region];

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line-bright)",
        borderRadius: "var(--radius-sm)",
        padding: "clamp(18px, 3vw, 28px)",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="tracking-label" style={{ color: "var(--accent)" }}>
            STAR SCHEMA CROSS-FILTERING
          </span>
          <h4 className="font-display" style={{ fontSize: "16px", color: "var(--text)", marginTop: "2px" }}>
            Conformed Dimension Slicer
          </h4>
        </div>

        <div style={{ display: "flex", gap: "6px" }}>
          {["North", "South", "West"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              style={{
                backgroundColor: region === r ? "var(--accent)" : "var(--bg-subtle)",
                color: region === r ? "var(--bg)" : "var(--muted)",
                border: `1px solid ${region === r ? "var(--accent)" : "var(--line)"}`,
                padding: "4px 10px",
                borderRadius: "var(--radius-sm)",
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
        <div style={{ padding: "12px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">Gross Revenue</span>
          <p className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--text)", marginTop: "4px" }}>
            {regionData.sales}
          </p>
        </div>
        <div style={{ padding: "12px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">Net Margin</span>
          <p className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--accent)", marginTop: "4px" }}>
            {regionData.margin}
          </p>
        </div>
        <div style={{ padding: "12px", border: "1px solid var(--line)", backgroundColor: "var(--bg-subtle)" }}>
          <span className="tracking-label">Velocity Δ</span>
          <p className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "var(--system)", marginTop: "4px" }}>
            {regionData.velocity}
          </p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)" }}>
        <span>Turnaround Acceleration: 25% Reduction</span>
        <span style={{ color: "var(--accent)" }}>RLS Branch Enforced</span>
      </div>
    </div>
  );
}

/* Demonstration 4: Cloud Financial Monitoring */
function CloudMonitoringDemo() {
  const [syncActive, setSyncActive] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line-bright)",
        borderRadius: "var(--radius-sm)",
        padding: "clamp(18px, 3vw, 28px)",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="tracking-label" style={{ color: "var(--system)" }}>
            HYBRID PIPELINE ORCHESTRATION
          </span>
          <h4 className="font-display" style={{ fontSize: "16px", color: "var(--text)", marginTop: "2px" }}>
            Azure Data Factory Hybrid Sync
          </h4>
        </div>

        <button
          type="button"
          onClick={() => setSyncActive(!syncActive)}
          style={{
            backgroundColor: syncActive ? "var(--accent)" : "var(--bg-subtle)",
            color: syncActive ? "var(--bg)" : "var(--accent)",
            border: "1px solid var(--accent)",
            padding: "4px 12px",
            borderRadius: "var(--radius-sm)",
            fontSize: "11px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {syncActive ? "Syncing Pipelines..." : "Trigger Batch Sync"}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {[
          { name: "On-Premises ERP Ingestion", status: syncActive ? "STREAMING" : "IDLE", latency: "14ms" },
          { name: "Cloud Staging Transformation", status: syncActive ? "PROCESSING" : "COMPLETED", latency: "42ms" },
          { name: "Financial Tabular Refresh", status: syncActive ? "EVALUATING" : "READY", latency: "88ms" }
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 14px",
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line)",
              fontSize: "12px"
            }}
          >
            <span style={{ color: "var(--text)" }}>{item.name}</span>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ color: "var(--accent)", fontFamily: "monospace", fontSize: "11px" }}>{item.status}</span>
              <span style={{ color: "var(--muted)", fontSize: "10px" }}>{item.latency}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)" }}>
        <span>Eliminated Manual Reconciliation</span>
        <span style={{ color: "var(--system)" }}>Zero Manual Intervention</span>
      </div>
    </div>
  );
}
