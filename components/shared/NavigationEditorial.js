"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

const items = [
  ["Work", "#work"],
  ["Thinking", "#thinking"],
  ["Capabilities", "#capabilities"],
  ["Contact", "#contact"]
];

export default function NavigationEditorial() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent", background: scrolled ? "rgba(7, 16, 13, .88)" : "transparent", backdropFilter: scrolled ? "blur(18px)" : "none", transition: "background .25s ease, border-color .25s ease" }}>
      <div className="site-container" style={{ height: "var(--header-height)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 10, color: "var(--text)", textDecoration: "none" }}>
          <span className="font-display" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.04em" }}>{profile.shortName}</span>
          <span className="eyebrow" style={{ color: "var(--muted)", fontSize: 9 }}>DATA / SCIENCE</span>
        </Link>
        <nav aria-label="Primary navigation" style={{ display: "flex", gap: 24 }} className="nav-desktop">
          {items.map(([label, href], index) => <a key={href} href={href} style={{ color: "var(--muted)", fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: ".1em", textDecoration: "none", textTransform: "uppercase" }}><span style={{ color: "var(--accent)", marginRight: 6 }}>0{index + 1}</span>{label}</a>)}
        </nav>
        <button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="nav-mobile-toggle" style={{ display: "none", border: "1px solid var(--line-strong)", background: "transparent", color: "var(--text)", padding: "8px 12px", fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase" }}>{open ? "Close" : "Index"}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" style={{ display: "grid", gap: 18, padding: "22px 24px 30px", borderTop: "1px solid var(--line)", background: "var(--bg)" }}>{items.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)} style={{ color: "var(--text)", fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-.04em", textDecoration: "none" }}><span style={{ color: "var(--accent)", marginRight: 10, fontSize: 12 }}>0{index + 1}</span>{label}</a>)}</nav>}
      <style jsx>{`@media (max-width: 860px) { .nav-desktop { display: none !important; } .nav-mobile-toggle { display: block !important; } }`}</style>
    </header>
  );
}
