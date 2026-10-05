"use client";

import { useEffect, useRef, useState, useMemo } from "react";

const INPUT_LABELS = [
  "CUSTOMER",
  "COST",
  "PROCESS",
  "REVENUE",
  "RISK",
  "REQUIREMENT",
  "OPERATIONS"
];

const OUTPUT_CARDS = [
  {
    id: "efficiency",
    line1: "GREATER",
    line2: "EFFICIENCY",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="8" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    id: "revenue",
    line1: "HIGHER",
    line2: "REVENUE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    )
  },
  {
    id: "risk",
    line1: "LOWER",
    line2: "RISK",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  },
  {
    id: "customers",
    line1: "HAPPIER",
    line2: "CUSTOMERS",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

// Fixed geometric canvas height & vertical centerline
const STREAM_HEIGHT = 360;
const WAIST_Y = 180;

// 7 input pill Y-centers (symmetrically spaced around WAIST_Y = 180)
// Spacing = (360 - 48) / 6 = 52px. Centers: 24, 76, 128, 180, 232, 284, 336
const INPUT_SPACING = (STREAM_HEIGHT - 48) / (INPUT_LABELS.length - 1);
const INPUT_CENTERS_Y = INPUT_LABELS.map((_, i) => 24 + i * INPUT_SPACING);

// 4 output card Y-centers (symmetrically spaced around WAIST_Y = 180)
// Centers: 48, 136, 224, 312
const OUTPUT_CENTERS_Y = [48, 136, 224, 312];

// High-precision solver to find parameter t where Bezier X equals target X
function getTForX(targetX, x0, cp1x, cp2x, x3) {
  let low = 0;
  let high = 1;
  for (let i = 0; i < 18; i++) {
    const mid = (low + high) * 0.5;
    const inv = 1 - mid;
    const x =
      inv * inv * inv * x0 +
      3 * inv * inv * mid * cp1x +
      3 * inv * mid * mid * cp2x +
      mid * mid * mid * x3;
    if (x < targetX) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) * 0.5;
}

// Evaluate cubic Bezier Y given t
function evalBezierY(t, y0, cp1y, cp2y, y3) {
  const inv = 1 - t;
  return (
    inv * inv * inv * y0 +
    3 * inv * inv * t * cp1y +
    3 * inv * t * t * cp2y +
    t * t * t * y3
  );
}

export default function HeroConvergenceStream() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [hoveredInput, setHoveredInput] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [containerWidth, setContainerWidth] = useState(900);

  // Exact X milestones based on available width
  const milestones = useMemo(() => {
    const W = containerWidth;
    const xInput = 124; // Right edge of input pills
    const xImpact = W - 150; // Left edge of output cards
    const flowSpan = xImpact - xInput;

    return {
      xInput,
      xSignals: xInput + flowSpan * 0.08,
      xAnalysis: xInput + flowSpan * 0.38,
      xWaistStart: xInput + flowSpan * 0.54,
      xInsight: xInput + flowSpan * 0.60,
      xWaistEnd: xInput + flowSpan * 0.66,
      xDecision: xInput + flowSpan * 0.80,
      xImpact
    };
  }, [containerWidth]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 2, 2.5);
      width = container.clientWidth;
      height = container.clientHeight;
      setContainerWidth(width);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // 42 Harmonic silk threads weaving complexity on the left
    const threadCount = 42;
    const threads = [];
    for (let i = 0; i < threadCount; i++) {
      const inputIdx = i % INPUT_LABELS.length;
      threads.push({
        inputIdx,
        freq: 2.2 + (i % 5) * 0.5,
        phase: (i * 0.78) % (Math.PI * 2),
        amp: (12 + (i % 4) * 7) * (i % 2 === 0 ? 1 : -1),
        speed: 0.75 + (i % 3) * 0.3,
        lineWidth: i % 4 === 0 ? 1.1 : 0.7,
        alphaBase: i % 4 === 0 ? 0.35 : i % 2 === 0 ? 0.22 : 0.12,
        waistOffset: ((i % 7) - 3) * 1.5 // tight pinch inside waist
      });
    }

    // 50 Spark particles drifting through the complexity weave
    const particleCount = 50;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        inputIdx: i % INPUT_LABELS.length,
        t: i / particleCount,
        speed: 0.12 + (i % 5) * 0.035,
        waveOffset: ((i % 7) - 3) * 5,
        size: i % 5 === 0 ? 2.2 : i % 2 === 0 ? 1.4 : 1.0,
        alpha: 0.35 + (i % 4) * 0.16
      });
    }

    let lastTime = performance.now();

    const render = (now) => {
      animId = requestAnimationFrame(render);
      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const {
        xInput,
        xAnalysis,
        xWaistStart,
        xInsight,
        xWaistEnd,
        xDecision,
        xImpact
      } = milestones;

      const waistY = WAIST_Y;
      const waistHeight = 10;
      const ribbonThickness = 24;

      // 1. Vertical Technical Stage Guide Lines (at Analysis, Insight, Decision, Impact)
      const stageCols = [xAnalysis, xInsight, xDecision, xImpact];
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(52, 211, 153, 0.12)";
      stageCols.forEach((sx) => {
        ctx.beginPath();
        ctx.setLineDash([3, 4]);
        ctx.moveTo(sx, 8);
        ctx.lineTo(sx, STREAM_HEIGHT + 10);
        ctx.stroke();
      });
      ctx.setLineDash([]); // Reset line dash

      // 2. Draw Braided Silk Threads (Continuous: from xInput -> xWaistStart -> xInsight -> xWaistEnd)
      threads.forEach((th) => {
        const inY = INPUT_CENTERS_Y[th.inputIdx];
        const isHovered = hoveredInput === th.inputIdx;

        ctx.beginPath();
        ctx.moveTo(xInput, inY);

        const steps = 36;
        const dx = xWaistEnd - xInput;

        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          const x = xInput + dx * t;

          // Hermite curve into waist
          const hermite = Math.min(1, t / 0.85);
          const eased = hermite * hermite * (3 - 2 * hermite);
          const targetY = waistY + th.waistOffset;
          const baseY = inY + (targetY - inY) * eased;

          // Organic harmonic wave that dampens to 0 at the waist
          const envelope = Math.max(0, 1 - t / 0.85) * Math.sin(t * Math.PI);
          const wave =
            Math.sin(t * th.freq * Math.PI + th.phase + now * 0.001 * th.speed) *
            th.amp *
            envelope;

          ctx.lineTo(x, baseY + wave);
        }

        ctx.strokeStyle = isHovered
          ? "rgba(52, 211, 153, 0.85)"
          : `rgba(52, 211, 153, ${th.alphaBase})`;
        ctx.lineWidth = isHovered ? 1.6 : th.lineWidth;
        ctx.stroke();
      });

      // 3. Spark Particles Flowing Through Complexity Weave (Input -> WaistStart)
      particles.forEach((p) => {
        p.t += dt * p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.inputIdx = Math.floor(Math.random() * INPUT_LABELS.length);
        }

        const inY = INPUT_CENTERS_Y[p.inputIdx];
        const t = p.t;
        const px = xInput + (xWaistStart - xInput) * t;

        const hermite = t * t * (3 - 2 * t);
        const baseSpreadY = inY + (waistY - inY) * hermite;
        const envelope = Math.sin(t * Math.PI) * (1 - t * 0.35);
        const py = baseSpreadY + Math.sin(t * 3.5 * Math.PI + p.waveOffset) * p.waveOffset * envelope;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 243, 208, ${p.alpha})`;
        ctx.shadowColor = "#34D399";
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Central Luminous Conduit Waist (WaistStart -> Insight -> WaistEnd)
      // Smooth gradient connecting the complexity weave into the clarity ribbons
      const waistGrad = ctx.createLinearGradient(xWaistStart - 10, waistY, xWaistEnd + 10, waistY);
      waistGrad.addColorStop(0, "rgba(52, 211, 153, 0.25)");
      waistGrad.addColorStop(0.5, "rgba(52, 211, 153, 0.9)");
      waistGrad.addColorStop(1, "rgba(52, 211, 153, 0.35)");

      ctx.beginPath();
      ctx.ellipse(xInsight, waistY, (xWaistEnd - xWaistStart) * 0.6, waistHeight * 0.6, 0, 0, Math.PI * 2);
      ctx.fillStyle = waistGrad;
      ctx.fill();

      // Radiant Core Glow Bloom at INSIGHT (Exactly centered on xInsight!)
      const coreGlow = ctx.createRadialGradient(xInsight, waistY, 0, xInsight, waistY, 48);
      coreGlow.addColorStop(0, "rgba(255, 255, 255, 0.98)");
      coreGlow.addColorStop(0.25, "rgba(52, 211, 153, 0.75)");
      coreGlow.addColorStop(0.65, "rgba(46, 229, 157, 0.2)");
      coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(xInsight, waistY, 48, 0, Math.PI * 2);
      ctx.fill();

      // Core focal spark at INSIGHT
      ctx.beginPath();
      ctx.arc(xInsight, waistY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "#34D399";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5. Draw 4 Translucent Silk Ribbons (xWaistEnd -> xImpact)
      const dxRibbon = xImpact - xWaistEnd;
      const cp1x = xWaistEnd + dxRibbon * 0.42;
      const cp2x = xImpact - dxRibbon * 0.42;

      // Solve the EXACT parameter t where ribbon X equals xDecision
      const tDec = getTForX(xDecision, xWaistEnd, cp1x, cp2x, xImpact);

      OUTPUT_CARDS.forEach((card, idx) => {
        const targetY = OUTPUT_CENTERS_Y[idx];
        const isHovered = hoveredCard === idx;

        // Ribbon boundary definitions
        const topWaistY = waistY - waistHeight * 0.4;
        const botWaistY = waistY + waistHeight * 0.4;
        const topTargetY = targetY - ribbonThickness * 0.5;
        const botTargetY = targetY + ribbonThickness * 0.5;

        // Translucent Silk Gradient
        const ribbonGrad = ctx.createLinearGradient(xWaistEnd, waistY, xImpact, targetY);
        ribbonGrad.addColorStop(
          0,
          isHovered ? "rgba(52, 211, 153, 0.48)" : "rgba(52, 211, 153, 0.32)"
        );
        ribbonGrad.addColorStop(
          0.5,
          isHovered ? "rgba(46, 229, 157, 0.32)" : "rgba(46, 229, 157, 0.16)"
        );
        ribbonGrad.addColorStop(
          1,
          isHovered ? "rgba(52, 211, 153, 0.22)" : "rgba(52, 211, 153, 0.08)"
        );

        // Filled Ribbon Body
        ctx.beginPath();
        ctx.moveTo(xWaistEnd, topWaistY);
        ctx.bezierCurveTo(cp1x, topWaistY, cp2x, topTargetY, xImpact, topTargetY);
        ctx.lineTo(xImpact, botTargetY);
        ctx.bezierCurveTo(cp2x, botTargetY, cp1x, botWaistY, xWaistEnd, botWaistY);
        ctx.closePath();
        ctx.fillStyle = ribbonGrad;
        ctx.fill();

        // Glowing Top Edge Contour
        ctx.beginPath();
        ctx.moveTo(xWaistEnd, topWaistY);
        ctx.bezierCurveTo(cp1x, topWaistY, cp2x, topTargetY, xImpact, topTargetY);
        ctx.strokeStyle = isHovered
          ? "rgba(167, 243, 208, 0.95)"
          : "rgba(52, 211, 153, 0.65)";
        ctx.lineWidth = isHovered ? 1.6 : 1.1;
        ctx.stroke();

        // Glowing Bottom Edge Contour
        ctx.beginPath();
        ctx.moveTo(xWaistEnd, botWaistY);
        ctx.bezierCurveTo(cp1x, botWaistY, cp2x, botTargetY, xImpact, botTargetY);
        ctx.strokeStyle = isHovered
          ? "rgba(167, 243, 208, 0.78)"
          : "rgba(52, 211, 153, 0.45)";
        ctx.lineWidth = isHovered ? 1.4 : 0.9;
        ctx.stroke();

        // 6. THE 4 FIXED DECISION PEARLS (DEAD-CENTER ON xDecision AND ON THE RIBBON CENTERLINE!)
        // Using exact Bezier Y evaluation at tDec guarantees 100% mathematical alignment
        const decY = evalBezierY(tDec, waistY, waistY, targetY, targetY);

        // Subtle glowing halo ring
        ctx.beginPath();
        ctx.arc(xDecision, decY, 8.5, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered
          ? "rgba(167, 243, 208, 0.95)"
          : "rgba(52, 211, 153, 0.75)";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        // Solid luminous white core pearl
        ctx.beginPath();
        ctx.arc(xDecision, decY, 4.8, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.shadowColor = "#34D399";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [milestones, hoveredInput, hoveredCard]);

  const { xSignals, xAnalysis, xInsight, xDecision, xImpact } = milestones;

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "960px",
        height: "440px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0 auto"
      }}
    >
      {/* Top Banner: FROM COMPLEXITY ───────────→ TO CLARITY */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          width: "100%",
          paddingTop: "2px",
          zIndex: 5
        }}
      >
        <span
          className="tracking-label"
          style={{
            fontSize: "10px",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            fontWeight: 700
          }}
        >
          FROM COMPLEXITY
        </span>
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "linear-gradient(to right, rgba(52, 211, 153, 0.2), rgba(52, 211, 153, 0.8))",
            position: "relative"
          }}
        >
          <span
            style={{
              position: "absolute",
              right: "-3px",
              top: "-5px",
              color: "var(--accent)",
              fontSize: "10px"
            }}
          >
            →
          </span>
        </div>
        <span
          className="tracking-label"
          style={{
            fontSize: "10px",
            color: "var(--accent)",
            letterSpacing: "0.2em",
            fontWeight: 700
          }}
        >
          TO CLARITY
        </span>
      </div>

      {/* Main Flow Stage: Perfectly Coordinated Input Pills, Canvas & Output Cards */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${STREAM_HEIGHT}px`
        }}
      >
        {/* Left Column: 7 Exactly-Positioned Input Pills */}
        {INPUT_LABELS.map((label, idx) => {
          const isHovered = hoveredInput === idx;
          const centerY = INPUT_CENTERS_Y[idx];
          const topPos = centerY - 14; // 28px height / 2

          return (
            <div
              key={label}
              onMouseEnter={() => setHoveredInput(idx)}
              onMouseLeave={() => setHoveredInput(null)}
              style={{
                position: "absolute",
                left: "4px",
                top: `${topPos}px`,
                width: "120px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 10px 0 12px",
                borderRadius: "4px",
                backgroundColor: isHovered
                  ? "rgba(52, 211, 153, 0.12)"
                  : "rgba(18, 26, 22, 0.8)",
                border: `1px solid ${
                  isHovered ? "var(--accent)" : "rgba(255, 255, 255, 0.08)"
                }`,
                cursor: "pointer",
                zIndex: 6,
                transition: "all 0.2s ease"
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: isHovered ? "var(--text)" : "var(--muted)",
                  fontFamily: "var(--font-display)"
                }}
              >
                {label}
              </span>
              {/* Perfectly Centered Connector Dot on Pill Right Edge */}
              <span
                style={{
                  width: isHovered ? "6px" : "5px",
                  height: isHovered ? "6px" : "5px",
                  borderRadius: "50%",
                  backgroundColor: isHovered ? "#FFFFFF" : "var(--accent)",
                  boxShadow: isHovered
                    ? "0 0 10px var(--accent)"
                    : "0 0 5px rgba(52, 211, 153, 0.6)",
                  transition: "all 0.2s ease"
                }}
              />
            </div>
          );
        })}

        {/* High-DPI Canvas Layer (Full Dimensions of Stream) */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 3
          }}
        />

        {/* Right Column: 4 Exactly-Positioned Output Cards */}
        {OUTPUT_CARDS.map((card, idx) => {
          const isHovered = hoveredCard === idx;
          const centerY = OUTPUT_CENTERS_Y[idx];
          const topPos = centerY - 23; // 46px height / 2

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: "absolute",
                right: "4px",
                top: `${topPos}px`,
                width: "146px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 12px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: isHovered
                  ? "rgba(52, 211, 153, 0.15)"
                  : "rgba(18, 26, 22, 0.8)",
                border: `1px solid ${
                  isHovered ? "var(--accent)" : "rgba(255, 255, 255, 0.08)"
                }`,
                boxShadow: isHovered
                  ? "0 0 20px rgba(52, 211, 153, 0.25)"
                  : "none",
                cursor: "pointer",
                zIndex: 6,
                transition: "all 0.25s ease"
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {card.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--text)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1.2
                  }}
                >
                  {card.line1}
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "var(--text)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1.2
                  }}
                >
                  {card.line2}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Timeline Stages Ribbon: Perfectly Anchored under Each Stage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "32px",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          zIndex: 5
        }}
      >
        {/* Stage 1: BUSINESS SIGNALS */}
        <span
          className="tracking-label"
          style={{
            position: "absolute",
            left: `${xSignals}px`,
            top: "8px",
            transform: "translateX(-50%)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap"
          }}
        >
          BUSINESS SIGNALS
        </span>
        <span
          style={{
            position: "absolute",
            left: `${(xSignals + xAnalysis) * 0.5}px`,
            top: "7px",
            transform: "translateX(-50%)",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "10px"
          }}
        >
          →
        </span>

        {/* Stage 2: ANALYSIS */}
        <span
          className="tracking-label"
          style={{
            position: "absolute",
            left: `${xAnalysis}px`,
            top: "8px",
            transform: "translateX(-50%)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap"
          }}
        >
          ANALYSIS
        </span>
        <span
          style={{
            position: "absolute",
            left: `${(xAnalysis + xInsight) * 0.5}px`,
            top: "7px",
            transform: "translateX(-50%)",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "10px"
          }}
        >
          →
        </span>

        {/* Stage 3: INSIGHT (Aligned directly under radiant bottleneck!) */}
        <span
          className="tracking-label"
          style={{
            position: "absolute",
            left: `${xInsight}px`,
            top: "8px",
            transform: "translateX(-50%)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap"
          }}
        >
          INSIGHT
        </span>
        <span
          style={{
            position: "absolute",
            left: `${(xInsight + xDecision) * 0.5}px`,
            top: "7px",
            transform: "translateX(-50%)",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "10px"
          }}
        >
          →
        </span>

        {/* Stage 4: DECISION (Aligned directly under the 4 decision pearls!) */}
        <span
          className="tracking-label"
          style={{
            position: "absolute",
            left: `${xDecision}px`,
            top: "8px",
            transform: "translateX(-50%)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--muted)",
            fontWeight: 500,
            whiteSpace: "nowrap"
          }}
        >
          DECISION
        </span>
        <span
          style={{
            position: "absolute",
            left: `${(xDecision + xImpact) * 0.5}px`,
            top: "7px",
            transform: "translateX(-50%)",
            color: "rgba(255, 255, 255, 0.2)",
            fontSize: "10px"
          }}
        >
          →
        </span>

        {/* Stage 5: IMPACT (Aligned directly at output cards entry!) */}
        <span
          className="tracking-label"
          style={{
            position: "absolute",
            left: `${xImpact}px`,
            top: "8px",
            transform: "translateX(-50%)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "var(--accent)",
            fontWeight: 700,
            whiteSpace: "nowrap"
          }}
        >
          IMPACT
        </span>
      </div>
    </div>
  );
}
