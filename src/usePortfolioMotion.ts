import { useEffect, useRef } from "react";

export function usePortfolioMotion() {
  const hero = useRef<HTMLElement>(null);
  const watermark = useRef<HTMLDivElement>(null);
  const atmosphere = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = hero.current;
    const watermarkElement = watermark.current;
    const atmosphereElement = atmosphere.current;
    const cursorElement = cursor.current;
    if (!heroElement || !watermarkElement || !atmosphereElement || !cursorElement) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(any-pointer: fine)");
    let frame = 0;
    let cursorTimeout = 0;
    let cursorPosition: { x: number; y: number } | null = null;

    function draw() {
      frame = 0;
      const scroll = Math.max(0, window.scrollY);
      const heroBottom = heroElement!.getBoundingClientRect().bottom;
      const progress = Math.min(1, Math.max(0, (window.innerHeight * .62 - heroBottom) / 240));

      if (reducedMotion.matches) {
        watermarkElement!.style.setProperty("--watermark-opacity", progress === 1 ? ".075" : "0");
        return;
      }

      const fade = progress * progress * (3 - 2 * progress);
      watermarkElement!.style.setProperty("--watermark-opacity", String(fade * .12));
      watermarkElement!.style.setProperty("--watermark-y", `${Math.sin(scroll / 610) * 34}px`);
      watermarkElement!.style.setProperty("--watermark-tilt", `${Math.sin(scroll / 1100) * 6}deg`);
      atmosphereElement!.style.setProperty("--scene-drift", `${Math.sin(scroll / 950) * 64}px`);

      if (cursorPosition && cursorTimeout) {
        cursorElement!.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
      }
    }

    function queueDraw() {
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function hideCursor() {
      window.clearTimeout(cursorTimeout);
      cursorTimeout = 0;
      cursorElement!.classList.remove("is-scrolling");
    }

    function onScroll() {
      if (!reducedMotion.matches && finePointer.matches && cursorPosition) {
        window.clearTimeout(cursorTimeout);
        cursorTimeout = window.setTimeout(hideCursor, 180);
        cursorElement!.classList.add("is-scrolling");
      }
      queueDraw();
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      cursorPosition = { x: event.clientX, y: event.clientY };
      if (cursorTimeout) queueDraw();
    }

    function onPointerLeave() {
      cursorPosition = null;
      hideCursor();
    }

    function onPreferenceChange() {
      if (reducedMotion.matches) hideCursor();
      queueDraw();
    }

    queueDraw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", queueDraw);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    reducedMotion.addEventListener("change", onPreferenceChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", queueDraw);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(frame);
      hideCursor();
    };
  }, []);

  return { hero, watermark, atmosphere, cursor };
}
