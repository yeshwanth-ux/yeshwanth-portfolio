"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  { label: "How I Think", href: "#thinking", index: "01" },
  { label: "Selected Work", href: "#work", index: "02" },
  { label: "Capabilities", href: "#capabilities", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Principles", href: "#about", index: "05" },
  { label: "Contact", href: "#contact", index: "06" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "var(--header-height)",
          backgroundColor: isScrolled ? "rgba(8, 11, 10, 0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease"
        }}
      >
        <div
          className="site-container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              color: "inherit"
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text)"
              }}
            >
              {profile.shortName}
            </span>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: "2px"
              }}
            >
              BI & Analytics Engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{ display: "none" }}
            className="desktop-nav"
            aria-label="Primary Navigation"
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "36px",
                margin: 0,
                padding: 0
              }}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: "none",
                      color: "var(--text)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "6px",
                      transition: "color 0.2s ease"
                    }}
                    className="nav-link"
                  >
                    <span style={{ fontSize: "10px", color: "var(--accent)", fontFamily: "var(--font-display)" }}>
                      {item.index}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle"
            style={{
              background: "none",
              border: "1px solid var(--line-bright)",
              color: "var(--text)",
              padding: "8px 14px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            {mobileMenuOpen ? "Close" : "Index"}
          </button>
        </div>
      </header>

      {/* Intentional Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: "fixed",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg)",
            zIndex: 99,
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderTop: "1px solid var(--line)"
          }}
        >
          <nav aria-label="Mobile Navigation">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
              {navItems.map((item) => (
                <li key={item.href} style={{ borderBottom: "1px solid var(--line)", paddingBottom: "16px" }}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: "var(--text)",
                      fontSize: "24px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-display)"
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: "14px", color: "var(--accent)" }}>{item.index}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
            <p className="tracking-label" style={{ marginBottom: "8px" }}>Direct Transmission</p>
            <a
              href={`mailto:${profile.contact.email}`}
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "14px" }}
            >
              {profile.contact.email}
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </>
  );
}
