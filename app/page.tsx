import { AboutSection } from "@/components/AboutSection";
import { BackgroundParallax } from "@/components/BackgroundParallax";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpeningLoader } from "@/components/OpeningLoader";
import { PetalOverlay } from "@/components/PetalOverlay";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WritingSection } from "@/components/WritingSection";

export default function Home() {
  return (
    <>
      <BackgroundParallax />
      <PetalOverlay />
      <OpeningLoader brand="Li Jiacheng" />
      <Header />
      <main className="relative pb-16">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
