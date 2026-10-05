"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Precision hairline edge indicator */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          zIndex: 101,
          pointerEvents: "none",
          backgroundColor: "transparent"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "var(--accent)",
            transition: "width 0.1s linear"
          }}
        />
      </div>

      {/* Discrete bottom numerical progression indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 80,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          color: "var(--muted)",
          opacity: progress > 1 ? 0.75 : 0,
          transition: "opacity 0.4s ease"
        }}
      >
        <span style={{ color: "var(--accent)" }}>{Math.round(progress).toString().padStart(2, "0")}%</span>
        <span>INDEX PROGRESS</span>
      </div>
    </>
  );
}
