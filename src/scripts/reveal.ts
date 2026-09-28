import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const splits = new Map<Element, SplitText>();

/** Elements tagged data-reveal inside root, skipping those in inactive carousel slides. */
function targets(root: Element, kind: string): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(`[data-reveal="${kind}"]`)).filter((el) => {
    const slide = el.closest("[data-slide]");
    return !slide || slide.classList.contains("is-active");
  });
}

function split(el: HTMLElement, type: "chars" | "lines"): SplitText {
  // Re-split every time so line breaks match the current width
  splits.get(el)?.revert();
  const s = SplitText.create(el, {
    type: type === "chars" ? "words,chars" : "lines",
    mask: type,
    maskClass: "split-mask",
    aria: "auto",
  });
  splits.set(el, s);
  return s;
}

/** Plays the entrance animation for everything tagged data-reveal inside root. */
export function reveal(root: Element, delay = 0) {
  if (reducedMotion) return;

  targets(root, "title").forEach((el) => {
    gsap.fromTo(
      split(el, "chars").chars,
      { yPercent: -120, scale: 1.2 },
      { yPercent: 0, scale: 1, duration: 1, ease: "expo.out", stagger: 0.012, delay },
    );
  });

  targets(root, "lines").forEach((el, i) => {
    gsap.fromTo(
      split(el, "lines").lines,
      { yPercent: 105 },
      { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.04, delay: delay + 0.1 + i * 0.06 },
    );
  });

  const items = targets(root, "item");
  if (items.length) {
    gsap.fromTo(
      items,
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: delay + 0.15 },
    );
  }
}
