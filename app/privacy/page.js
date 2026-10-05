import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Privacy Notice — ${profile.name}`,
  description: "Privacy statement regarding this professional portfolio."
};

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "120px 24px 60px", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "48px", borderBottom: "1px solid var(--line)", paddingBottom: "24px" }}>
        <p className="tracking-label" style={{ marginBottom: "12px" }}>Institutional Disclosure</p>
        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
          Privacy Notice
        </h1>
      </header>

      <section style={{ display: "flex", flexDirection: "column", gap: "32px", color: "var(--muted)", lineHeight: 1.7 }}>
        <p>
          This website serves exclusively as a professional presentation of engineering and analytics solutions by {profile.name}.
        </p>

        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>Zero Tracking & Zero Cookies</h2>
          <p>
            This portfolio does not utilize third-party tracking scripts, advertising trackers, invasive behavioral telemetry, or tracking cookies.
          </p>
        </div>

        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>Direct Communication</h2>
          <p>
            When you initiate contact through provided mailto links ({profile.contact.email}) or LinkedIn, communication occurs directly via your email client or LinkedIn account. No visitor messages or contact logs are stored in a database on this server.
          </p>
        </div>

        <div>
          <h2 style={{ color: "var(--text)", fontSize: "18px", marginBottom: "8px" }}>Hosting Infrastructure</h2>
          <p>
            The portfolio is hosted on Vercel infrastructure. Standard web server access logs (such as IP addresses and requested URLs) are generated strictly for operational security and routing integrity.
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
