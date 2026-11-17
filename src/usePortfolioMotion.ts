import { useEffect, useRef, useState } from "react";

export function usePortfolioMotion(motionEnabled = true) {
  const hero = useRef<HTMLElement>(null);
  const watermark = useRef<HTMLDivElement>(null);
  const atmosphere = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState("home");

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
    const chapters = ["home", "projects", "hack-the-box", "experience", "contact"].map(id => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".section-heading, .expandable-card, .competition, .badge-block, .credentials, .devsecops-focus, .contact"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .06, rootMargin: "0px 0px -24px 0px" });
    revealElements.forEach(el => {
      if (motionEnabled && !reducedMotion.matches && el.getBoundingClientRect().top > window.innerHeight) el.classList.add("reveal-ready");
      observer.observe(el);
    });

    function draw() {
      frame = 0;
      const scroll = Math.max(0, window.scrollY);
      const heroBottom = heroElement!.getBoundingClientRect().bottom;
      const revealProgress = Math.min(1, Math.max(0, (window.innerHeight * .62 - heroBottom) / 240));
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("--read-progress", String(pageHeight > 0 ? scroll / pageHeight : 0));
      let chapter = "home";
      chapters.forEach(el => { if (el.getBoundingClientRect().top <= window.innerHeight * .45) chapter = el.id; });
      if (pageHeight - scroll < 12) chapter = "contact";
      setActiveChapter(current => current === chapter ? current : chapter);

      if (reducedMotion.matches || !motionEnabled) {
        watermarkElement!.style.setProperty("--watermark-opacity", revealProgress === 1 ? ".075" : "0");
        heroElement!.style.setProperty("--hero-shift", "0px");
        return;
      }

      const fade = revealProgress * revealProgress * (3 - 2 * revealProgress);
      heroElement!.style.setProperty("--hero-shift", `${Math.min(scroll * .12, 85)}px`);
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
      if (motionEnabled && !reducedMotion.matches && finePointer.matches && cursorPosition) {
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
      if (reducedMotion.matches) revealElements.forEach(el => el.classList.add("is-visible"));
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
      observer.disconnect();
      revealElements.forEach(el => el.classList.remove("reveal-ready"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", queueDraw);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", onPointerLeave);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      cancelAnimationFrame(frame);
      hideCursor();
    };
  }, [motionEnabled]);

  return { hero, watermark, atmosphere, cursor, progress, activeChapter };
}

