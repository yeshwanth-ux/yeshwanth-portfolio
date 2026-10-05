"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function Loader({ onLoaded }) {
  const [active, setActive] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Reveal quickly without artificial delay
    const timer = setTimeout(() => {
      setFading(true);
      const closeTimer = setTimeout(() => {
        setActive(false);
        if (onLoaded) onLoaded();
      }, 450);
      return () => clearTimeout(closeTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!active) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(24px, 5vw, 64px)",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: fading ? "none" : "auto"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="tracking-label">SYSTEM INITIALIZATION</span>
        <span className="tracking-label" style={{ color: "var(--accent)" }}>POWER BI // CLOUD DW</span>
      </div>

      <div style={{ maxWidth: "640px" }}>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            lineHeight: 1.1,
            marginBottom: "16px"
          }}
        >
          {profile.name}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "14px", letterSpacing: "0.02em" }}>
          Dimensional Modeling & Financial Analytics Architecture
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ width: "32px", height: "1px", backgroundColor: "var(--accent)" }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--muted)", textTransform: "uppercase" }}>
          Ready
        </span>
      </div>
    </div>
  );
}
