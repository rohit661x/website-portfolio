import { gsap } from "gsap";
import { reducedMotion } from "./reveal";

const HOLD_S = 2.75;

/** Cycles the sidebar job title through data-titles. */
export function initTitleCycler() {
  const el = document.querySelector<HTMLElement>("[data-title-cycler]");
  if (!el || reducedMotion) return;
  const titles: string[] = JSON.parse(el.dataset.titles ?? "[]");
  if (titles.length < 2) return;

  let i = 0;
  const cycle = () => {
    i = (i + 1) % titles.length;
    gsap
      .timeline({ onComplete: () => void gsap.delayedCall(HOLD_S, cycle) })
      .to(el, { y: -12, autoAlpha: 0, duration: 0.45, ease: "power2.in" })
      .call(() => {
        el.textContent = titles[i];
      })
      .fromTo(el, { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" });
  };
  gsap.delayedCall(HOLD_S, cycle);
}
