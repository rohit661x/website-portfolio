import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Clubs from "@/components/Clubs";
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-gutter gap-y-xl md:gap-y-xxl">
          <div className="md:col-span-7 md:col-start-1 md:row-start-1">
            <Reveal>
              <Experience />
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-1 md:row-start-2">
            <Reveal delay={0.05}>
              <Projects />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:row-start-1 md:h-full">
            <Reveal delay={0.1} className="md:h-full">
              <Clubs />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:row-start-2">
            <Reveal delay={0.15}>
              <Interests />
            </Reveal>
          </div>
          <div className="md:col-span-12 md:col-start-1 md:row-start-3">
            <Reveal>
              <Skills />
            </Reveal>
          </div>
          <div className="md:col-span-12 md:col-start-1 md:row-start-4">
            <Reveal>
              <GitHubActivity />
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
