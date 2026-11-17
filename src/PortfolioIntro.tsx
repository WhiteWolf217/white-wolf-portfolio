import { useEffect, useRef, useState } from "react";

const seenKey = "white-wolf-intro-v1";

export function PortfolioIntro({ logo, replay = false }: { logo: string; replay?: boolean }) {
  const [visible, setVisible] = useState(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    try { return replay || (!location.hash && !sessionStorage.getItem(seenKey)); }
    catch { return !location.hash || replay; }
  });
  const [leaving, setLeaving] = useState(false);
  const skip = useRef<HTMLButtonElement>(null);
  const finish = () => {
    try { sessionStorage.setItem(seenKey, "1"); } catch { /* Storage is optional. */ }
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const content = document.getElementById("portfolio-content");
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    content?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    skip.current?.focus({ preventScroll: true });
    const reveal = window.setTimeout(() => setLeaving(true), 1350);
    const complete = window.setTimeout(finish, 1950);
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") finish(); };
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => { if (preference.matches) finish(); };
    window.addEventListener("keydown", onKey);
    preference.addEventListener("change", onPreference);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(complete);
      window.removeEventListener("keydown", onKey);
      preference.removeEventListener("change", onPreference);
      content?.removeAttribute("inert");
      document.body.style.overflow = overflow;
      const target = previousFocus && previousFocus !== document.body ? previousFocus : document.getElementById("site-title");
      target?.focus({ preventScroll: true });
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div className={`portfolio-intro${leaving ? " is-leaving" : ""}`} role="dialog" aria-modal="true" aria-label="White Wolf introduction">
      <div className="intro-corner">WHITE WOLF <span>/ PORTFOLIO</span></div>
      <button ref={skip} className="intro-skip" onClick={finish}>Skip intro <span aria-hidden="true">↗</span></button>
      <div className="intro-center">
        <img src={logo} alt="" width="512" height="512" />
        <p>WHITE <span>WOLF</span></p>
        <div className="intro-line" aria-hidden="true"><i /></div>
        <span className="intro-caption">Offensive Security &amp; DevOps</span>
      </div>
      <div className="intro-bottom"><span>Curiosity. Investigation. Craft.</span><span>ENTERING PORTFOLIO</span></div>
    </div>
  );
}
