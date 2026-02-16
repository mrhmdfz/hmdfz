import Footer from "./components/footer";
import Header from "./components/header";
import SkillsSection from "./components/skill-section";
import ContactSection from "./components/contact-section";
import AboutSection from "./components/about-section";
import HeroIntro from "./components/hero-intro";
import ProjectsSection from "./components/project-section";
import ExperiencesSection from "./components/experience-section";
import EducationSection from "./components/education-section";

export default function Home() {
  return (
    <div className="md:px-50">
      <Header />
      <HeroIntro />
      <ProjectsSection />
      <AboutSection />
      <ExperiencesSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
