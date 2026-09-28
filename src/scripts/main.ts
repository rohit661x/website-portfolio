import { gsap } from "gsap";
import { GrainScene } from "../background/GrainScene";
import { initCarousels } from "./carousel";
import { reducedMotion } from "./reveal";
import { initRouter } from "./router";
import { initTitleCycler } from "./titleCycler";

const siteRoot = document.getElementById("site-root")!;
const preloader = document.getElementById("preloader")!;
const background = document.getElementById("background")!;

const scene = GrainScene.mount(background, { isStatic: reducedMotion });
initCarousels();
const router = initRouter();

function showSite() {
  siteRoot.removeAttribute("aria-hidden");
  siteRoot.style.pointerEvents = "";
  scene?.play();
  initTitleCycler();
}

if (reducedMotion) {
  siteRoot.style.opacity = "1";
  preloader.remove();
  showSite();
} else {
  const title = preloader.querySelector("#preloader-title")!;
  const sub = preloader.querySelector("#preloader-sub")!;
  gsap
    .timeline()
    .to("#preloader-name", { autoAlpha: 1, duration: 0.4, ease: "power2.out" })
    .to({}, { duration: 0.4 })
    // Colours swap as the words fade out
    .to(title, { color: "#6b6b6b", autoAlpha: 0, duration: 0.45, ease: "power2.in" })
    .to(sub, { color: "#ffffff", autoAlpha: 0, duration: 0.45, ease: "power2.in" }, "<0.1")
    .call(() => {
      siteRoot.style.opacity = "1";
      showSite();
      router.revealCurrent(0.15);
    })
    .to(preloader, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut", onComplete: () => preloader.remove() });
}

// Pages kept in the back/forward cache just pause; they're restored as-is
window.addEventListener("pagehide", (e) => (e.persisted ? scene?.stop() : scene?.destroy()));
window.addEventListener("pageshow", (e) => e.persisted && scene?.play());
