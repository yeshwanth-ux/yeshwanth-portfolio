"use client";

import { useState } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function TopologyGraph({
  nodes,
  edges,
  activeNodeId,
  onSelectNode
}) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  const selectedOrHovered = hoveredNodeId || activeNodeId;

  // Determine connected edge IDs
  const activeEdges = edges.filter(
    (e) => e.source === selectedOrHovered || e.target === selectedOrHovered
  );
  const activeNodeIds = new Set(
    activeEdges.flatMap((e) => [e.source, e.target]).concat(selectedOrHovered || [])
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden"
      }}
    >
      {/* Topology Header Telemetry */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 20px",
          borderBottom: "1px solid var(--line)",
          backgroundColor: "var(--bg-subtle)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="tracking-label">PIPELINE TOPOLOGY</span>
          <span style={{ fontSize: "11px", color: "var(--accent)", fontFamily: "monospace" }}>
            [7 NODES // 8 DIRECTED VECTORS]
          </span>
        </div>
        <span style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase" }}>
          Interactive Dimensional Architecture
        </span>
      </div>

      {/* Interactive SVG Canvas */}
      <div style={{ width: "100%", padding: "clamp(12px, 2vw, 24px)", overflowX: "auto" }}>
        <svg
          viewBox="0 0 960 480"
          style={{
            width: "100%",
            height: "auto",
            minWidth: "700px",
            display: "block"
          }}
          aria-label="Enterprise Data Pipeline Interactive Topology Graph"
        >
          {/* Subtle Gridlines */}
          <g stroke="var(--line)" strokeWidth="0.5" strokeDasharray="4 4">
            <line x1="0" y1="120" x2="960" y2="120" />
            <line x1="0" y1="240" x2="960" y2="240" />
            <line x1="0" y1="360" x2="960" y2="360" />
            <line x1="240" y1="0" x2="240" y2="480" />
            <line x1="480" y1="0" x2="480" y2="480" />
            <line x1="720" y1="0" x2="720" y2="480" />
          </g>

          {/* Directed Edges */}
          <g>
            {edges.map((edge) => {
              const src = nodes.find((n) => n.id === edge.source);
              const tgt = nodes.find((n) => n.id === edge.target);
              if (!src || !tgt) return null;

              const isConnected =
                edge.source === selectedOrHovered || edge.target === selectedOrHovered;
              const opacity = selectedOrHovered ? (isConnected ? 1 : 0.18) : 0.65;
              const strokeColor = isConnected ? "var(--accent)" : "var(--system)";
              const strokeWidth = isConnected ? 2 : 1.25;

              // Curved bezier pathway
              const midX = (src.x + tgt.x) / 2;
              const pathD = `M ${src.x} ${src.y} C ${midX} ${src.y}, ${midX} ${tgt.y}, ${tgt.x} ${tgt.y}`;

              return (
                <g key={`${edge.source}-${edge.target}`}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeOpacity={opacity}
                    style={{ transition: "stroke-opacity 0.25s ease, stroke 0.25s ease" }}
                  />
                  {/* Subtle directional pulse on active connection */}
                  {isConnected && (
                    <circle r="3" fill="var(--accent)">
                      <animateMotion path={pathD} dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* Pipeline Stage Nodes */}
          <g>
            {nodes.map((node) => {
              const isSelected = activeNodeId === node.id;
              const isHovered = hoveredNodeId === node.id;
              const isRelated = activeNodeIds.has(node.id);
              const opacity = selectedOrHovered ? (isRelated ? 1 : 0.45) : 1;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => onSelectNode(node.id)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onFocus={() => setHoveredNodeId(node.id)}
                  onBlur={() => setHoveredNodeId(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${node.label} Node`}
                  data-cursor="INSPECT"
                  style={{
                    cursor: "pointer",
                    outline: "none",
                    opacity,
                    transition: "opacity 0.25s ease"
                  }}
                >
                  {/* Node Background Enclosure */}
                  <rect
                    x="-85"
                    y="-30"
                    width="170"
                    height="60"
                    rx="3"
                    fill="var(--bg-subtle)"
                    stroke={
                      isSelected
                        ? "var(--accent)"
                        : isHovered
                        ? "var(--system)"
                        : "var(--line-bright)"
                    }
                    strokeWidth={isSelected || isHovered ? "2" : "1"}
                  />

                  {/* Corner Accent Ticks */}
                  {(isSelected || isHovered) && (
                    <>
                      <line x1="-85" y1="-30" x2="-77" y2="-30" stroke="var(--accent)" strokeWidth="2" />
                      <line x1="-85" y1="-30" x2="-85" y2="-22" stroke="var(--accent)" strokeWidth="2" />
                      <line x1="85" y1="30" x2="77" y2="30" stroke="var(--accent)" strokeWidth="2" />
                      <line x1="85" y1="30" x2="85" y2="22" stroke="var(--accent)" strokeWidth="2" />
                    </>
                  )}

                  {/* Node Type Pill */}
                  <text
                    x="-75"
                    y="-12"
                    fill={node.highlight ? "var(--accent)" : "var(--system)"}
                    fontSize="8.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                    letterSpacing="0.08em"
                  >
                    {node.tag || "STAGE"}
                  </text>

                  {/* Main Node Label */}
                  <text
                    x="-75"
                    y="6"
                    fill="var(--text)"
                    fontSize="11.5"
                    fontFamily="var(--font-display)"
                    fontWeight="700"
                    letterSpacing="-0.01em"
                  >
                    {node.label}
                  </text>

                  {/* Tech Subtitle */}
                  <text
                    x="-75"
                    y="20"
                    fill="var(--muted)"
                    fontSize="9"
                    fontFamily="monospace"
                  >
                    {node.techShort}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
