import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { PackagesSection } from "../components/PackagesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
// import ImagePopup from "../popups/ImagePopup";

export const Home = () => {
  return (
    <>
      {/*       <section>
        <ImagePopup />
      </section> */}

      {/* test comment  */}

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
