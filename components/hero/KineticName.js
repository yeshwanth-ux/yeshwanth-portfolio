"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

export default function KineticName() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Subtle physical response within bounded delta
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setOffset({
        x: Math.max(-1, Math.min(1, deltaX)) * 8,
        y: Math.max(-1, Math.min(1, deltaY)) * 6
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        userSelect: "none",
        width: "100%"
      }}
      data-cursor="INSPECT"
    >
      {/* Precision System Metadata Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
          borderBottom: "1px solid var(--line)",
          paddingBottom: "8px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              backgroundColor: "var(--accent)"
            }}
          />
          <span className="tracking-label" style={{ color: "var(--text)" }}>
            IDENTITY // BI SOLUTIONS ARCHITECT
          </span>
        </div>
        <span
          className="tracking-label"
          style={{ color: "var(--muted)", display: "none" }}
          id="name-meta-geo"
        >
          LOC: {profile.location}
        </span>
      </div>

      {/* Accessible DOM Headline */}
      <h1
        aria-label={profile.name}
        className="font-display tracking-tight-custom"
        style={{
          fontSize: "clamp(46px, 9.6vw, 136px)",
          fontWeight: 800,
          lineHeight: 0.94,
          textTransform: "uppercase",
          color: "var(--text)",
          margin: 0,
          letterSpacing: "-0.04em",
          transform: `perspective(1000px) rotateY(${offset.x * 0.4}deg) rotateX(${-offset.y * 0.4}deg) translate3d(${offset.x * 0.6}px, ${offset.y * 0.6}px, 0)`,
          transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform"
        }}
      >
        <span
          style={{
            display: "block",
            overflow: "hidden"
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "var(--text)"
            }}
          >
            YESHWANTH
          </span>
        </span>
        <span
          style={{
            display: "block",
            overflow: "hidden"
          }}
        >
          <span
            style={{
              display: "inline-block",
              color: "transparent",
              WebkitTextStroke: "1px var(--text)",
              transition: "color 0.3s ease, -webkit-text-stroke-color 0.3s ease"
            }}
            className="stroke-name"
          >
            REDDY BUJULA
          </span>
        </span>
      </h1>

      {/* Lower Technical Telemetry Line */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          borderTop: "1px solid var(--line)",
          paddingTop: "8px",
          fontSize: "11px",
          color: "var(--muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase"
        }}
      >
        <span>STATUS: ACTIVE ARCHITECT</span>
        <span style={{ color: "var(--accent)" }}>INDEX KEY: YRB-0924</span>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          #name-meta-geo {
            display: inline !important;
          }
        }
        .stroke-name:hover {
          color: var(--text) !important;
        }
      `}</style>
    </div>
  );
}
