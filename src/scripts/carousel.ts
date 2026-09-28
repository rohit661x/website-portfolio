import { gsap } from "gsap";
import { reveal, reducedMotion } from "./reveal";

const WHEEL_THRESHOLD = 30;
const SWIPE_THRESHOLD = 50;
const COOLDOWN_MS = 700;

/** True if el (or an ancestor up to stop) can still scroll vertically in direction dy. */
function canScroll(el: Element | null, stop: Element, dy: number): boolean {
  for (let node = el; node && node !== stop; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node);
    if ((overflowY === "auto" || overflowY === "scroll") && node.scrollHeight > node.clientHeight) {
      if (dy > 0 && node.scrollTop + node.clientHeight < node.scrollHeight - 1) return true;
      if (dy < 0 && node.scrollTop > 0) return true;
    }
  }
  return false;
}

function initCarousel(root: HTMLElement) {
  const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-slide]"));
  const counter = root.querySelector<HTMLElement>("[data-counter]");
  const section = root.closest<HTMLElement>("[data-section]");
  let index = 0;
  let busy = false;
  let lastMove = 0;

  const isActive = () => !section || section.classList.contains("is-active");

  slides.forEach((s, i) => {
    const active = i === 0;
    s.classList.toggle("is-active", active);
    s.inert = !active;
    gsap.set(s, { autoAlpha: active ? 1 : 0 });
  });

  function go(to: number) {
    const now = performance.now();
    if (busy || slides.length < 2 || now - lastMove < COOLDOWN_MS) return;
    lastMove = now;
    const next = (to + slides.length) % slides.length;
    const prev = slides[index];
    const incoming = slides[next];
    index = next;
    if (counter) counter.textContent = String(next + 1).padStart(2, "0");

    prev.classList.remove("is-active");
    prev.inert = true;
    incoming.classList.add("is-active");
    incoming.inert = false;
    incoming.scrollTop = 0;

    if (reducedMotion) {
      gsap.set(prev, { autoAlpha: 0 });
      gsap.set(incoming, { autoAlpha: 1 });
      return;
    }
    busy = true;
    gsap
      .timeline({ onComplete: () => (busy = false) })
      .to(prev, { autoAlpha: 0, duration: 0.3, ease: "power2.in" })
      .set(incoming, { autoAlpha: 1 })
      .call(() => reveal(incoming));
  }

  root.querySelector("[data-prev]")?.addEventListener("click", () => go(index - 1));
  root.querySelector("[data-next]")?.addEventListener("click", () => go(index + 1));

  window.addEventListener("keydown", (e) => {
    if (!isActive() || e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === "ArrowRight") go(index + 1);
    else if (e.key === "ArrowLeft") go(index - 1);
  });

  // Wheel advances slides, unless the pointer is over content that can still scroll
  section?.addEventListener(
    "wheel",
    (e) => {
      if (!isActive()) return;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < WHEEL_THRESHOLD) return;
      if (canScroll(e.target as Element, section, e.deltaY)) return;
      e.preventDefault();
      go(index + (delta > 0 ? 1 : -1));
    },
    { passive: false },
  );

  let startX = 0;
  let startY = 0;
  section?.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  section?.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );
}

export function initCarousels() {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach(initCarousel);
}
