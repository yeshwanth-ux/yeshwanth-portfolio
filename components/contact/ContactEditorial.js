import { profile } from "@/data/profile";
import Reveal from "@/components/shared/Reveal";

export default function ContactEditorial() {
  return (
    <section id="contact" className="contact-section">
      <div className="site-container">
        <div className="section-kicker">06 / Contact</div>
        <Reveal>
          <h2 className="contact-title">Let&apos;s make<br /><span>signal useful.</span></h2>
          <p className="contact-copy">Open to Data Scientist, Data Analyst, and analytics opportunities.</p>
        </Reveal>
        <Reveal className="contact-links reveal-stagger">
          <a className="contact-link" href={`mailto:${profile.contact.email}`}>
            <small>Direct transmission</small>
            <strong>{profile.contact.email}</strong>
          </a>
          <a className="contact-link" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            <small>Professional network</small>
            <strong>LinkedIn profile</strong>
          </a>
          <div className="contact-link">
            <small>Location / phone</small>
            <strong>{profile.location}<br />{profile.contact.phone}</strong>
          </div>
        </Reveal>
        <div className="contact-footer">
          <span>{profile.name} / {profile.displayRole}</span>
          <span>© {new Date().getFullYear()} / Built for clarity</span>
        </div>
      </div>
    </section>
  );
}
