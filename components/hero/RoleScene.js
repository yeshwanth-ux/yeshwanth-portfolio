"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { roleTheme } from "@/lib/roleThemes";

// Dynamically import 3D WebGL scene to avoid blocking initial load & SSR
const DynamicDataPipelineScene = dynamic(
  () => import("./scenes/DataPipelineScene"),
  { ssr: false }
);

export default function RoleScene() {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Detect WebGL capability and reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCanRenderWebGL(false);
      return;
    }

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setCanRenderWebGL(Boolean(gl));
    } catch (e) {
      setCanRenderWebGL(false);
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      {isClient && canRenderWebGL ? (
        <DynamicDataPipelineScene />
      ) : (
        /* Rock-Solid Non-WebGL Fallback */
        <DimensionalMatrixFallback />
      )}

      {/* Subtle Bottom Architectural Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
          pointerEvents: "none"
        }}
      />
    </div>
  );
}

function DimensionalMatrixFallback() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.65
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "1200px", maxHeight: "700px" }}
      >
        {/* Freely Positioned Dimensional Wireframe Cubes (No Interconnected Lines) */}
        {[
          { x: 180, y: 140, size: 24, color: roleTheme.palette.accent, opacity: 0.8 },
          { x: 820, y: 120, size: 28, color: roleTheme.palette.system, opacity: 0.85 },
          { x: 780, y: 440, size: 22, color: roleTheme.palette.accent, opacity: 0.75 },
          { x: 220, y: 420, size: 26, color: roleTheme.palette.system, opacity: 0.8 },
          { x: 480, y: 270, size: 30, color: roleTheme.palette.accent, opacity: 0.7 },
          { x: 120, y: 280, size: 18, color: "#6E8294", opacity: 0.6 },
          { x: 880, y: 290, size: 20, color: "#6E8294", opacity: 0.6 }
        ].map((cube, i) => (
          <g key={i} transform={`translate(${cube.x}, ${cube.y})`}>
            {/* Isometric wireframe cube */}
            <rect
              x={-cube.size / 2}
              y={-cube.size / 2}
              width={cube.size}
              height={cube.size}
              stroke={cube.color}
              strokeWidth="1.2"
              fill="rgba(56, 123, 136, 0.04)"
              opacity={cube.opacity}
            />
            {/* Inner diagonal cross for wireframe projection */}
            <line
              x1={-cube.size / 2}
              y1={-cube.size / 2}
              x2={cube.size / 2}
              y2={cube.size / 2}
              stroke={cube.color}
              strokeWidth="0.8"
              opacity={cube.opacity * 0.5}
            />
            <line
              x1={cube.size / 2}
              y1={-cube.size / 2}
              x2={-cube.size / 2}
              y2={cube.size / 2}
              stroke={cube.color}
              strokeWidth="0.8"
              opacity={cube.opacity * 0.5}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
