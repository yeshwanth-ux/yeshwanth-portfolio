"use client";

import { profile } from "@/data/profile";
import ParticleSystem from "@/components/shared/ParticleSystem";

export default function ContactScene() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "clamp(80px, 10vw, 160px) 0 80px",
        backgroundColor: "var(--bg)",
        overflow: "hidden"
      }}
    >
      {/* Background Resolved Structured Particles */}
      <ParticleSystem mode="structured" densityMultiplier={0.8} />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <span className="tracking-label" style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.15em", fontWeight: 600 }}>
            07 —— TERMINAL CONVERGENCE
          </span>
        </div>

        {/* Dominant Closing Headline */}
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(38px, 6vw, 76px)",
            fontWeight: 400,
            lineHeight: 1.05,
            color: "var(--text)",
            maxWidth: "1100px",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}
        >
          Let&apos;s Architect Deterministic Intelligence.
        </h2>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "clamp(16px, 2vw, 20px)",
            maxWidth: "760px",
            lineHeight: 1.6,
            marginBottom: "48px"
          }}
        >
          Available for Senior BI Engineering, Analytics Architecture, and Financial Risk Intelligence roles.
          Direct transmission channels are open.
        </p>

        {/* Real Contact Channel Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "56px"
          }}
        >
          {/* Email */}
          <a
            href={`mailto:${profile.contact.email}`}
            data-cursor="OPEN"
            style={{
              backgroundColor: "rgba(18, 26, 22, 0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-sm)",
              padding: "24px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "140px",
              transition: "border-color 0.2s ease, transform 0.2s ease"
            }}
            className="contact-card"
          >
            <div>
              <span className="tracking-label" style={{ color: "var(--accent)" }}>Direct Transmission</span>
              <p style={{ fontSize: "16px", color: "var(--text)", fontWeight: 600, marginTop: "6px", wordBreak: "break-all" }}>
                {profile.contact.email}
              </p>
            </div>
            <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Send Inbound Message →
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            style={{
              backgroundColor: "rgba(18, 26, 22, 0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-sm)",
              padding: "24px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "140px",
              transition: "border-color 0.2s ease, transform 0.2s ease"
            }}
            className="contact-card"
          >
            <div>
              <span className="tracking-label" style={{ color: "var(--system)" }}>Professional Network</span>
              <p style={{ fontSize: "16px", color: "var(--text)", fontWeight: 600, marginTop: "6px" }}>
                LinkedIn Profile
              </p>
            </div>
            <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Connect On LinkedIn →
            </span>
          </a>

          {/* Direct Line */}
          <div
            style={{
              backgroundColor: "var(--bg-subtle)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-sm)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "140px"
            }}
          >
            <div>
              <span className="tracking-label">Direct Voice / Location</span>
              <p style={{ fontSize: "16px", color: "var(--text)", fontWeight: 600, marginTop: "6px" }}>
                {profile.contact.phone}
              </p>
            </div>
            <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Location: {profile.location}
            </span>
          </div>
        </div>

        {/* Terminal Telemetry Strip */}
        <div
          style={{
            borderTop: "1px solid var(--line)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "11px",
            color: "var(--muted)"
          }}
        >
          <span>PORTFOLIO SYSTEM // APPARATUS RESOLVED // VERCEL PRODUCTION READY</span>
          <span style={{ color: "var(--accent)", fontFamily: "monospace" }}>
            HASH: 0x9942 // YESHWANTH REDDY BUJULA
          </span>
        </div>
      </div>
    </section>
  );
}

