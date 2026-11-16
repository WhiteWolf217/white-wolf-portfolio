import { useEffect, useRef } from "react";

export function usePortfolioMotion() {
  const coin = useRef<HTMLDivElement>(null);
  const atmosphere = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coinElement = coin.current;
    const atmosphereElement = atmosphere.current;
    const cursorElement = cursor.current;
    if (!coinElement || !atmosphereElement || !cursorElement) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(any-pointer: fine)");
    let frame = 0;
    let cursorTimeout = 0;
    let cursorPosition: { x: number; y: number } | null = null;

    function draw() {
      frame = 0;
      if (reducedMotion.matches) return;
      const scroll = Math.max(0, window.scrollY);
      const turn = Math.min(scroll / 480, 1) * 360;
      coinElement!.style.setProperty("--coin-angle", `${turn}deg`);
      atmosphereElement!.style.setProperty("--scene-drift", `${Math.sin(scroll / 950) * 64}px`);

      if (cursorPosition && cursorTimeout) {
        cursorElement!.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
      }
    }

    function queueDraw() {
      if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(draw);
    }

    function hideCursor() {
      window.clearTimeout(cursorTimeout);
      cursorTimeout = 0;
      cursorElement!.classList.remove("is-scrolling");
    }

    function onScroll() {
      if (reducedMotion.matches) return;
      if (finePointer.matches && cursorPosition) {
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
      if (reducedMotion.matches) {
        hideCursor();
      } else {
        queueDraw();
      }
    }

    queueDraw();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    reducedMotion.addEventListener("change", onPreferenceChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(frame);
      hideCursor();
    };
  }, []);

  return { coin, atmosphere, cursor };
}
