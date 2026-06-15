import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Clubs from "@/components/Clubs";
import MoreOnGitHub from "@/components/MoreOnGitHub";
import Interests from "@/components/Interests";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="fixed top-md right-md md:top-lg md:right-lg z-50">
        <ThemeToggle />
      </div>
      <main className="relative z-10 pt-xl md:pt-xxl px-lg md:px-xl max-w-container-max mx-auto pb-xxl flex-grow">
        <Hero />
        {/* Top area: Experience/Interests (row 1) + Projects/Extracurriculars (row 2).
            This grid ends exactly at the bottom of Projects (its tallest cell). */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-xl md:gap-y-xxl">
          <div className="md:col-span-9 md:col-start-1 md:row-start-1 md:h-full">
            <Reveal className="md:h-full">
              <Experience />
            </Reveal>
          </div>
          <div className="md:col-span-8 md:col-start-1 md:row-start-2">
            <Reveal delay={0.05}>
              <Projects />
            </Reveal>
          </div>
          <div className="md:col-span-3 md:col-start-10 md:row-start-1">
            <Reveal delay={0.1}>
              <Interests />
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:row-start-2 md:self-start">
            <Reveal delay={0.15}>
              <Clubs />
            </Reveal>
          </div>
        </div>

        {/* More on GitHub — flush under Projects, matching the Projects column width */}
        <div className="mt-md grid grid-cols-1 md:grid-cols-12 gap-x-gutter">
          <div className="md:col-span-8 md:col-start-1">
            <Reveal>
              <MoreOnGitHub />
            </Reveal>
          </div>
        </div>

        {/* Full-width sections below */}
        <div className="mt-xl md:mt-xxl flex flex-col gap-y-xl md:gap-y-xxl">
          <Reveal>
            <Skills />
          </Reveal>
          <Reveal>
            <GitHubActivity />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
