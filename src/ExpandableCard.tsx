import { useId, useState } from "react";
import type { ReactNode } from "react";

type ExpandableCardProps = {
  id?: string;
  className?: string;
  title: string;
  summary: ReactNode;
  children: ReactNode;
};

export function ExpandableCard({ id, className, title, summary, children }: ExpandableCardProps) {
  const panelId = useId();
  const [pinned, setPinned] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [detailsFocused, setDetailsFocused] = useState(false);
  const expanded = pinned || previewing || detailsFocused;

  return (
    <article
      id={id}
      className={`expandable-card ${className ?? ""}`}
      data-expanded={expanded}
      onPointerEnter={event => {
        if (event.pointerType === "mouse") setPreviewing(true);
      }}
      onPointerLeave={() => setPreviewing(false)}
    >
      <div className="card-summary">
        <div>{summary}</div>
        <button
          type="button"
          className="card-toggle"
          aria-controls={panelId}
          aria-expanded={expanded}
          aria-label={`Details for ${title}`}
          onClick={() => {
            setPinned(!expanded);
            setPreviewing(false);
          }}
        >
          <span className="toggle-mark" aria-hidden="true" />
          Details
        </button>
      </div>
      <div
        id={panelId}
        className="card-reveal"
        aria-hidden={!expanded}
        onFocus={() => setDetailsFocused(true)}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setDetailsFocused(false);
        }}
      >
        <div className="card-reveal-clip">
          <div className="card-detail">{children}</div>
        </div>
      </div>
    </article>
  );
}
