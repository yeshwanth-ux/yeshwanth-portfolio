"use client";

import { roleTheme } from "@/lib/roleThemes";

export default function NodePanel({ activeNode, onClose }) {
  if (!activeNode) return null;

  return (
    <div
      role="region"
      aria-label="Node Contextual Information"
      style={{
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line-bright)",
        borderRadius: "var(--radius-sm)",
        padding: "clamp(20px, 3vw, 32px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
        minHeight: "260px"
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
          <span
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--accent)",
              letterSpacing: "0.12em"
            }}
          >
            NODE // {activeNode.id.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.08em",
              color: "var(--system)",
              fontFamily: "monospace"
            }}
          >
            {activeNode.type || "CORE STAGE"}
          </span>
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "12px",
            lineHeight: 1.15
          }}
        >
          {activeNode.label}
        </h3>

        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
          {activeNode.description}
        </p>

        {activeNode.telemetry && (
          <div
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line)",
              padding: "10px 14px",
              borderRadius: "var(--radius-sm)",
              marginBottom: "16px"
            }}
          >
            <span className="tracking-label">Verified Telemetry</span>
            <p style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 600, marginTop: "2px" }}>
              {activeNode.telemetry}
            </p>
          </div>
        )}
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "12px", color: "var(--muted)" }}>
          Tech: <strong style={{ color: "var(--text)" }}>{activeNode.tech}</strong>
        </span>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Dismiss node panel"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--muted)",
              cursor: "pointer",
              fontSize: "11px",
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
