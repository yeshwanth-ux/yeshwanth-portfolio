"use client";

import { useState } from "react";
import Image from "next/image";

const QUOTES = [
  "BETTER QUESTIONS LEAD TO BRIGHTER OUTCOMES.",
  "BETTER ARCHITECTURE LEADS TO HIGHER CONVICTION DECISIONS.",
  "STAR SCHEMA PURITY IS THE FOUNDATION OF MILLISECOND DAX VELOCITY.",
  "GOVERNANCE IS NOT A BOTTLENECK — IT IS ENTERPRISE VELOCITY PRESERVED."
];

export default function PanoramaBanner() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "220px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      {/* Background Cinematic Image */}
      <Image
        src="/images/panorama_mountains.jpg"
        alt="Atmospheric Mountain Horizon"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 45%",
          filter: "brightness(0.65) contrast(1.15)"
        }}
        priority
      />

      {/* Dark Luxury Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(8, 11, 10, 0.85) 0%, rgba(8, 11, 10, 0.3) 50%, rgba(8, 11, 10, 0.85) 100%), linear-gradient(to top, rgba(8, 11, 10, 0.8) 0%, transparent 60%)"
        }}
      />

      {/* Content Container */}
      <div
        className="site-container"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px"
        }}
      >
        {/* Left Keywords Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px"
          }}
        >
          {["BRIDGING", "PEOPLE", "DATA", "POSSIBILITY"].map((word) => (
            <span
              key={word}
              className="tracking-label"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(243, 245, 244, 0.65)",
                fontWeight: 600
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Right Quote & Carousel Navigation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "10px",
            maxWidth: "520px"
          }}
        >
          {/* Top Controls: 01 / 04 and Arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span
              className="tracking-label"
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.15em"
              }}
            >
              0{currentIdx + 1} / 0{QUOTES.length}
            </span>
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous quote"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text)",
                  cursor: "pointer",
                  padding: "4px 8px",
                  fontSize: "14px",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next quote"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text)",
                  cursor: "pointer",
                  padding: "4px 8px",
                  fontSize: "14px",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
              >
                ›
              </button>
            </div>
          </div>

          {/* Italic Philosophical Quote */}
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              fontStyle: "italic",
              color: "var(--text)",
              textAlign: "right",
              letterSpacing: "0.02em",
              lineHeight: 1.4
            }}
          >
            &ldquo;{QUOTES[currentIdx]}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
