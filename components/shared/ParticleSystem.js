"use client";

import { useEffect, useRef } from "react";
import { roleTheme } from "@/lib/roleThemes";

export default function ParticleSystem({
  mode = "ambient", // "ambient" | "flow" | "matrix" | "stage-attraction"
  densityMultiplier = 1,
  showConnections = false,
  className = "",
  style = {}
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Draw single static frame
      renderStaticField(ctx, width, height, mode);
      return;
    }

    const isMobile = width < 768;
    const baseCount = isMobile
      ? roleTheme.particles.baseCountMobile
      : roleTheme.particles.baseCountDesktop;
    const count = Math.floor(baseCount * densityMultiplier);

    // Initialize particles representing discrete transactional records
    const particles = [];
    const colors = [
      roleTheme.palette.accent,
      roleTheme.palette.system,
      roleTheme.palette.lineBright,
      roleTheme.palette.textMuted
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.45) * roleTheme.particles.speed,
        vy: (Math.random() - 0.5) * (roleTheme.particles.speed * 0.6),
        radius: Math.random() < 0.2 ? 1.8 : 1.1,
        color:
          Math.random() < roleTheme.particles.accentRatio
            ? roleTheme.palette.accent
            : Math.random() < roleTheme.particles.systemRatio
            ? roleTheme.palette.system
            : "rgba(120, 134, 145, 0.35)",
        baseAlpha: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Render subtle relational connection lines between proximate analytical records
      const maxDist = roleTheme.particles.connectionDistance;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update positions based on analytical flow mode
        p1.phase += delta;
        p1.x += p1.vx + Math.sin(p1.phase) * 0.2;
        p1.y += p1.vy;

        // Pointer response
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < roleTheme.particles.interactionRadius && distToMouse > 0) {
          const force = (1 - distToMouse / roleTheme.particles.interactionRadius) * 0.8;
          p1.x += (dx / distToMouse) * force;
          p1.y += (dy / distToMouse) * force;
        }

        // Boundary wrap
        if (p1.x < -10) p1.x = width + 10;
        if (p1.x > width + 10) p1.x = -10;
        if (p1.y < -10) p1.y = height + 10;
        if (p1.y > height + 10) p1.y = -10;

        // Draw particle (record point)
        ctx.fillStyle = p1.color;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect proximate nodes only if explicitly requested
        if (showConnections) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distSq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

            if (distSq < maxDistSq) {
              const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.18;
              ctx.strokeStyle = `rgba(56, 123, 136, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [mode, densityMultiplier, showConnections]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...style
      }}
    />
  );
}

function renderStaticField(ctx, width, height, mode) {
  ctx.clearRect(0, 0, width, height);
  const count = 40;
  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.fillStyle = i % 4 === 0 ? roleTheme.palette.accent : "rgba(120, 134, 145, 0.3)";
    ctx.beginPath();
    ctx.arc(x, y, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }
}
