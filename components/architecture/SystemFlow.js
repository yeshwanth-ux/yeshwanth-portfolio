"use client";

import { useEffect } from "react";

export default function SystemFlow({
  stages,
  currentStageIndex,
  onSelectStage,
  isPlaying,
  onTogglePlay
}) {
  const currentStage = stages[currentStageIndex];

  // Automatic stepping when play mode is enabled
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      onSelectStage((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length, onSelectStage]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-sm)",
        padding: "16px 20px"
      }}
    >
      {/* Live Region for Screen Readers */}
      <div role="status" aria-live="polite" className="sr-only" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        System Flow Step {currentStageIndex + 1} of {stages.length}: {currentStage?.label}. {currentStage?.description}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="tracking-label" style={{ color: "var(--accent)" }}>
            STAGE {String(currentStageIndex + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </span>
          <span style={{ color: "var(--line-bright)" }}>|</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text)" }}>
            {currentStage?.label}
          </span>
        </div>

        {/* System Flow Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={onTogglePlay}
            style={{
              backgroundColor: isPlaying ? "var(--accent)" : "transparent",
              color: isPlaying ? "var(--bg)" : "var(--accent)",
              border: "1px solid var(--accent)",
              padding: "6px 14px",
              borderRadius: "var(--radius-sm)",
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {isPlaying ? "PAUSE FLOW" : "PLAY SYSTEM FLOW"}
          </button>

          <button
            type="button"
            onClick={() => onSelectStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
            aria-label="Previous System Stage"
            style={{
              backgroundColor: "var(--bg-subtle)",
              color: "var(--text)",
              border: "1px solid var(--line-bright)",
              padding: "6px 12px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => onSelectStage((prev) => (prev + 1) % stages.length)}
            aria-label="Next System Stage"
            style={{
              backgroundColor: "var(--bg-subtle)",
              color: "var(--text)",
              border: "1px solid var(--line-bright)",
              padding: "6px 12px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div style={{ display: "flex", gap: "4px", height: "3px", width: "100%", backgroundColor: "var(--bg-subtle)" }}>
        {stages.map((_, idx) => (
          <div
            key={idx}
            onClick={() => onSelectStage(idx)}
            style={{
              flex: 1,
              height: "100%",
              backgroundColor: idx === currentStageIndex ? "var(--accent)" : idx < currentStageIndex ? "var(--system)" : "var(--line)",
              cursor: "pointer",
              transition: "background-color 0.25s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
}
