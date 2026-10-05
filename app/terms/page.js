import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Terms of Use — ${profile.name}`,
  description: "Terms of use regarding this professional portfolio."
};

export default function TermsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 24px 60px", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "48px", borderBottom: "1px solid var(--line)", paddingBottom: "24px" }}>
        <p className="tracking-label" style={{ marginBottom: "12px" }}>Institutional Disclosure</p>
        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
          Terms of Use
        </h1>
      </header>

      <section style={{ display: "flex", flexDirection: "column", gap: "32px", color: "var(--muted)", lineHeight: 1.7 }}>
        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>General Purpose</h2>
          <p>
            The contents of this site are provided solely for reviewing the professional background, engineering capabilities, and architectural work of {profile.name}.
          </p>
        </div>

        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>Proprietary Work & Conceptual Architecture</h2>
          <p>
            Client names and projects referenced herein reflect factual professional experience. In order to uphold strict institutional non-disclosure agreements (NDAs) and regulatory banking policies, proprietary schemas and private customer records are not displayed. Visual systems and architectural pipelines labeled as &quot;Conceptual Architecture&quot; are sanitized abstractions designed exclusively to communicate technical workflow and data methodology.
          </p>
        </div>

        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>Intellectual Property</h2>
          <p>
            The visual code, interactive design implementations, and portfolio presentation elements are the intellectual property of {profile.name}.
          </p>
        </div>

        <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
          <Link
            href="/"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            ← Return to Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
