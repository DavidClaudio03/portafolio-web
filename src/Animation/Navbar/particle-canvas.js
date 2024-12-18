// particle-canvas.js
import gsap from "gsap"; // Asegúrate de importar GSAP si no lo has hecho

export var authAnimation;

export function openAuthModal() {
  authAnimation = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    .to("#authOverlay", { scaleY: 0.01, x: 1, opacity: 1, display: "flex", duration: 0.4 })
    .to("#authOverlay", { scaleY: 1, background: "rgba(255,255,255,0.16)", duration: 0.6 })
    .to("#authOverlay #second", { scaleY: 1, opacity: 1, duration: 0.6 }, "-=0.4")
    .to("#authOverlay #third", { scaleY: 1, opacity: 1, duration: 0.4 }, "-=0.2")
    .to("#authOverlay #fourth", {
      background: "rgba(255,255,255,0.3)",
      border: "1px solid rgba(255,255,255,0.3)",
      duration: 0.8,
    }, "-=0.4");
}

export function closeAuthModal() {
  if (authAnimation) {
    authAnimation.reverse().timeScale(-1.6);
  }
}
