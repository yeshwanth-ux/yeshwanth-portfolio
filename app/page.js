import Navigation from "@/components/shared/NavigationEditorial";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Hero from "@/components/hero/HeroPremium";
import ArchitectureSection from "@/components/architecture/ArchitectureEditorial";
import ProjectsSection from "@/components/projects/ProjectsEditorial";
import TechEcosystem from "@/components/skills/CapabilitiesEditorial";
import Timeline from "@/components/experience/ExperienceEditorial";
import About from "@/components/about/AboutEditorial";
import ContactScene from "@/components/contact/ContactEditorial";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main style={{ position: "relative", backgroundColor: "var(--bg)" }}>
        {/* Chapter 01: Hero / Professional Identity */}
        <Hero />


        {/* Chapter 02: How I Think / 5-Stage Framework */}
        <ArchitectureSection />

        {/* Chapter 03: Selected Work / Production Chapters */}
        <ProjectsSection />

        {/* Chapter 04: Capabilities & Relational Tech Ecosystem */}
        <TechEcosystem />

        {/* Chapter 05: Chronology & Tenure */}
        <Timeline />

        {/* Chapter 06: Principles & Professional Perspective */}
        <About />

        {/* Chapter 07: Terminal Convergence & Contact */}
        <ContactScene />
      </main>
    </>
  );
}
