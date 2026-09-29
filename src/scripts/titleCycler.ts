import { gsap } from "gsap";
import { reducedMotion } from "./reveal";

const PAUSE = 2.75; // seconds between transitions
const TRANSITION = 0.45; // seconds per fade/slide
const SLIDE_PX = 12; // subtle vertical shift

/** Cycles the sidebar job title through data-titles. */
export function initTitleCycler() {
  const el = document.querySelector<HTMLElement>("[data-title-cycler]");
  if (!el || reducedMotion) return;
  const titles: string[] = JSON.parse(el.dataset.titles ?? "[]");

  // Entrance for the initial title
  gsap.fromTo(
    el,
    { opacity: 0, y: SLIDE_PX },
    { opacity: 1, y: 0, duration: TRANSITION, ease: "power2.out", delay: 0.3 },
  );
  if (titles.length < 2) return;

  let index = 0;
  const cycleNext = () => {
    // Exit: slide up and fade out, then enter from below
    gsap.to(el, {
      opacity: 0,
      y: -SLIDE_PX,
      duration: TRANSITION,
      ease: "power2.in",
      onComplete() {
        index = (index + 1) % titles.length;
        el.textContent = titles[index];
        gsap.fromTo(
          el,
          { opacity: 0, y: SLIDE_PX },
          { opacity: 1, y: 0, duration: TRANSITION, ease: "power2.out" },
        );
      },
    });
  };
  window.setInterval(cycleNext, (PAUSE + TRANSITION) * 1000);
}
