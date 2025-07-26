import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PackagesSection } from "../components/PackagesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export const Home = () => {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="packages">
        <PackagesSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};
