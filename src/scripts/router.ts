import { gsap } from "gsap";
import { reveal, reducedMotion } from "./reveal";

/**
 * Hash-based section switching. Only one section is visible at a time; the
 * rest are faded out and made inert.
 */
export function initRouter() {
  const sections = new Map<string, HTMLElement>();
  document.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => {
    sections.set(el.dataset.section!, el);
  });
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav]");

  let current: HTMLElement | null = null;

  function idFromHash(): string {
    const id = location.hash.slice(1);
    return sections.has(id) ? id : "home";
  }

  function setNav(id: string) {
    navLinks.forEach((a) => {
      const active = a.dataset.nav === id;
      a.classList.toggle("is-active", active);
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function show(id: string, animate = true) {
    const next = sections.get(id);
    if (!next || next === current) return;
    const prev = current;
    current = next;
    setNav(id);

    sections.forEach((el) => {
      const active = el === next;
      el.classList.toggle("is-active", active);
      el.inert = !active;
    });

    if (!animate || reducedMotion) {
      if (prev) gsap.set(prev, { autoAlpha: 0 });
      gsap.set(next, { autoAlpha: 1 });
      if (animate) reveal(next);
      return;
    }

    const tl = gsap.timeline();
    if (prev) tl.to(prev, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" });
    tl.fromTo(next, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" }, prev ? "-=0.1" : 0);
    tl.call(() => reveal(next), [], "<");
  }

  navLinks.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.dataset.nav!;
      if (idFromHash() !== id || !location.hash) history.pushState(null, "", `#${id}`);
      show(id);
    });
  });
  // popstate covers back/forward; hashchange covers edits to the URL bar
  window.addEventListener("popstate", () => show(idFromHash()));
  window.addEventListener("hashchange", () => show(idFromHash()));

  // Hide everything except the initial section without animating
  sections.forEach((el) => gsap.set(el, { autoAlpha: 0 }));
  show(idFromHash(), false);

  return {
    /** Replays the current section's entrance, e.g. once the preloader clears. */
    revealCurrent(delay = 0) {
      if (current) reveal(current, delay);
    },
  };
}
