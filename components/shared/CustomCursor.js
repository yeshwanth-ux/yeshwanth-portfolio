"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  const [cursorState, setCursorState] = useState("DEFAULT");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable completely on touch devices or reduced motion
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let dotX = -100;
    let dotY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check cursor target attribute
      let target = e.target;
      let state = "DEFAULT";
      while (target && target !== document.body) {
        if (target.dataset && target.dataset.cursor) {
          state = target.dataset.cursor;
          break;
        }
        if (target.tagName === "A" || target.tagName === "BUTTON") {
          state = "EXPLORE";
          break;
        }
        if (target.getAttribute && target.getAttribute("role") === "button") {
          state = "EXPLORE";
          break;
        }
        target = target.parentElement;
      }
      setCursorState(state);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      // Smooth spring/lerp interpolation
      currentX = lerp(currentX, mouseX, 0.16);
      currentY = lerp(currentY, mouseY, 0.16);
      dotX = lerp(dotX, mouseX, 0.45);
      dotY = lerp(dotY, mouseY, 0.45);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  const isExpanded = cursorState !== "DEFAULT";

  return (
    <>
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: isExpanded ? "var(--accent)" : "var(--text)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          marginTop: "-2px",
          marginLeft: "-2px",
          transition: "opacity 0.2s ease, background-color 0.2s ease"
        }}
      />

      {/* Technical Reticle / Outer Enclosure */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease"
        }}
      >
        <div
          style={{
            position: "relative",
            width: isExpanded ? "64px" : "28px",
            height: isExpanded ? "64px" : "28px",
            marginTop: isExpanded ? "-32px" : "-14px",
            marginLeft: isExpanded ? "-32px" : "-14px",
            border: `1px solid ${isExpanded ? "var(--accent)" : "rgba(120, 134, 145, 0.35)"}`,
            borderRadius: "var(--radius-sm)",
            transition: "width 0.28s cubic-bezier(0.16, 1, 0.3, 1), height 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, margin 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isExpanded ? "rgba(212, 154, 80, 0.06)" : "transparent"
          }}
        >
          {/* Subtle Reticle Hairlines */}
          <span
            style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              width: "1px",
              height: "4px",
              backgroundColor: "var(--line-bright)"
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              width: "1px",
              height: "4px",
              backgroundColor: "var(--line-bright)"
            }}
          />

          {/* Contextual State HUD Label */}
          {isExpanded && (
            <span
              ref={labelRef}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase"
              }}
            >
              {cursorState}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
