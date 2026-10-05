"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import Reveal from "@/components/shared/Reveal";

const metrics = [
  ["06+", "years in data"],
  ["30%", "processing gain"],
  ["04", "industry domains"],
  ["MI", "based in Michigan"]
];

export default function HeroPremium() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const scrambleRef = useRef(null);

  useEffect(() => {
    const node = heroRef.current;
    const canvas = canvasRef.current;
    if (!node || !canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = canvas.getContext("2d");
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let particles = [];
    let frame;

    const resize = () => {
      const bounds = node.getBoundingClientRect();
      const density = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(density, 0, 0, density, 0, 0);
      const count = width < 700 ? 48 : 78;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 200 && distance > 0) {
            const pull = (1 - distance / 200) * 0.035;
            particle.vx += (dx / distance) * pull;
            particle.vy += (dy / distance) * pull;
          }
        }

        particle.vx *= 0.992;
        particle.vy *= 0.992;
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });

      // ponytail: Pairwise links stay cheap at <= 78 nodes; add spatial indexing only if density grows.
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const distance = Math.hypot(
            particles[first].x - particles[second].x,
            particles[first].y - particles[second].y,
          );
          if (distance < 145) {
            context.strokeStyle = `rgba(141, 247, 195, ${(1 - distance / 145) * 0.28})`;
            context.beginPath();
            context.moveTo(particles[first].x, particles[first].y);
            context.lineTo(particles[second].x, particles[second].y);
            context.stroke();
          }
        }
      }

      if (pointer.active) {
        particles.forEach((particle) => {
          const distance = Math.hypot(pointer.x - particle.x, pointer.y - particle.y);
          if (distance < 200) {
            context.strokeStyle = `rgba(141, 247, 195, ${(1 - distance / 200) * 0.5})`;
            context.beginPath();
            context.moveTo(pointer.x, pointer.y);
            context.lineTo(particle.x, particle.y);
            context.stroke();
          }
        });

        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 42);
        glow.addColorStop(0, "rgba(216, 255, 234, 0.32)");
        glow.addColorStop(1, "rgba(141, 247, 195, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(pointer.x, pointer.y, 42, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#d8ffea";
        context.beginPath();
        context.arc(pointer.x, pointer.y, 2.5, 0, Math.PI * 2);
        context.fill();
      }

      particles.forEach((particle) => {
        context.fillStyle = "rgba(141, 247, 195, 0.78)";
        context.beginPath();
        context.arc(particle.x, particle.y, 1.7, 0, Math.PI * 2);
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const bounds = node.getBoundingClientRect();
      const x = (event.clientX / window.innerWidth - 0.5) * 28;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      node.style.setProperty("--hero-shift-x", `${x.toFixed(1)}px`);
      node.style.setProperty("--hero-shift-y", `${y.toFixed(1)}px`);
    };
    const onPointerLeave = () => {
      pointer.active = false;
      node.style.setProperty("--hero-shift-x", "0px");
      node.style.setProperty("--hero-shift-y", "0px");
    };

    const observer = new ResizeObserver(resize);
    observer.observe(node);
    node.addEventListener("pointermove", onPointerMove);
    node.addEventListener("pointerleave", onPointerLeave);
    resize();
    draw();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  useEffect(() => {
    const node = scrambleRef.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const target = node.dataset.text;
    const symbols = "@!#$%^&";
    let scrambleTimer;

    const scramble = () => {
      clearInterval(scrambleTimer);
      let step = 0;
      node.classList.add("is-scrambling");
      scrambleTimer = window.setInterval(() => {
        node.textContent = target
          .split("")
          .map((letter, index) => (
            letter === " " || index < step / 2
              ? letter
              : symbols[Math.floor(Math.random() * symbols.length)]
          ))
          .join("");
        step += 1;
        if (step > target.length * 2) {
          clearInterval(scrambleTimer);
          node.textContent = target;
          node.classList.remove("is-scrambling");
        }
      }, 55);
    };

    const initialTimer = window.setTimeout(scramble, 900);
    const replayTimer = window.setInterval(scramble, 6500);
    node.addEventListener("pointerenter", scramble);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(replayTimer);
      clearInterval(scrambleTimer);
      node.removeEventListener("pointerenter", scramble);
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-neural" aria-hidden="true" />
      <div className="site-container hero-grid hero-grid--solo">
        <Reveal className="hero-copy">
          <div className="hero-kicker eyebrow">{profile.displayRole}</div>
          <h1 className="hero-title">
            Yeshwanth
            <span ref={scrambleRef} className="scramble" data-text="Reddy Bujula">Reddy Bujula</span>
          </h1>
          <p className="hero-role">I turn complex data into reliable analysis and decision-ready insight.</p>
          <p className="hero-positioning">{profile.positioning}</p>
          <div className="button-row">
            <Link className="button" href="#work">View selected work</Link>
            <a className="button button--quiet" href={`mailto:${profile.contact.email}`}>Start a conversation</a>
          </div>
          <div className="hero-meta" aria-label="Selected career highlights">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
