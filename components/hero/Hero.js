"use client";

import Link from "next/link";
import HeroConvergenceStream from "./HeroConvergenceStream";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(var(--header-height) + 16px)",
        paddingBottom: "36px",
        overflow: "hidden",
        backgroundColor: "#070A09"
      }}
    >
      <div
        className="site-container"
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "minmax(330px, 390px) 1fr",
          alignItems: "center",
          gap: "clamp(32px, 4vw, 56px)",
          width: "100%"
        }}
      >
        {/* Left Column: Neat, Clean Editorial Identity & Typography */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Top Tag with Green Dash */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "16px",
                height: "1px",
                backgroundColor: "var(--accent)"
              }}
            />
            <span
              className="tracking-label"
              style={{
                color: "rgba(200, 215, 208, 0.75)",
                letterSpacing: "0.22em",
                fontSize: "10.5px",
                fontWeight: 600
              }}
            >
              BUSINESS ANALYST PORTFOLIO
            </span>
          </div>

          {/* Large Editorial Serif Name */}
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(56px, 6vw, 84px)",
              lineHeight: 0.95,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
              margin: 0
            }}
          >
            Yeshwanth
            <br />
            <span
              style={{
                color: "#34D399",
                textShadow: "0 0 40px rgba(52, 211, 153, 0.3)"
              }}
            >
              Reddy Bujula
            </span>
          </h1>

          {/* Single-Line Wide-Tracked Role Subtitle */}
          <p
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(243, 245, 244, 0.9)",
              marginTop: "2px",
              whiteSpace: "nowrap"
            }}
          >
            BUSINESS ANALYST &amp; BI ARCHITECT
          </p>

          {/* Concise Positioning Paragraph */}
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(145, 165, 155, 0.9)",
              maxWidth: "340px",
              marginTop: "2px"
            }}
          >
            I translate complex enterprise data signals into clear analysis,
            confident decisions, and measurable impact.
          </p>

          {/* Circular Dot Indicator Pill Button */}
          <div style={{ paddingTop: "8px" }}>
            <Link
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: "rgba(18, 26, 22, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#F3F5F4",
                padding: "9px 22px 9px 12px",
                borderRadius: "9999px",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.backgroundColor = "rgba(52, 211, 153, 0.12)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(52, 211, 153, 0.28)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.backgroundColor = "rgba(18, 26, 22, 0.75)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "none";
              }}
            >
              {/* Outer circle with green glowing dot */}
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "1px solid rgba(52, 211, 153, 0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(52, 211, 153, 0.08)"
                }}
              >
                <div
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 0 6px var(--accent)"
                  }}
                />
              </div>

              <span>EXPLORE MY WORK</span>
              <span style={{ color: "var(--accent)", fontSize: "12px" }}>→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Mathematical Silk Convergence River */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            overflow: "visible"
          }}
        >
          <HeroConvergenceStream />
        </div>
      </div>
    </section>
  );
}
