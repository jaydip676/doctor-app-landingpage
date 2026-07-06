import type { ReactNode } from "react";
import {
  splitAlignLeftClass,
  splitContainerClass,
  wideContainerClass,
} from "@/lib/layout";

type Align = "left" | "right";

export function SplitSection({
  align,
  anchor = true,
  scrollCue = false,
  wideContent = false,
  id,
  children,
}: {
  align: Align;
  anchor?: boolean;
  scrollCue?: boolean;
  /** Hero-style layout: wider copy; particles may overlap behind text */
  wideContent?: boolean;
  id?: string;
  children: ReactNode;
}) {
  const copyPanel = wideContent
    ? "copy-panel-hero"
    : align === "left"
      ? "copy-panel-left"
      : "copy-panel-right";
  const copyGrid = wideContent
    ? "min-[901px]:col-span-2 min-[901px]:col-start-1 min-[901px]:justify-self-start"
    : align === "left"
      ? "min-[901px]:col-start-1 min-[901px]:row-start-1 min-[901px]:justify-self-start"
      : "min-[901px]:col-start-2 min-[901px]:row-start-1 min-[901px]:justify-self-end";
  const spacerGrid =
    align === "left"
      ? "min-[901px]:col-start-2 min-[901px]:row-start-1"
      : "min-[901px]:col-start-1 min-[901px]:row-start-1";

  const copyWidth = wideContent
    ? "max-w-none min-[901px]:max-w-[min(100%,82ch)]"
    : "max-w-[60ch] max-[900px]:max-w-none";

  return (
    <section
      id={id}
      className={`relative z-[3] min-h-svh flex ${wideContent
        ? "items-start pt-4 sm:pt-6 min-[901px]:pt-8"
        : "items-center"
        } ${anchor ? "anchor" : ""}`}
    >
      <div
        className={`${splitContainerClass} py-[clamp(72px,12vh,96px)] grid grid-cols-1 min-[901px]:grid-cols-2 gap-[30px] items-center ${wideContent ? "min-[901px]:gap-0" : ""}`}
      >
        <div
          className={`relative z-[4] w-full min-w-0 py-5 sm:py-[26px] rounded-[18px] ${copyWidth} ${copyGrid} ${copyPanel}`}
        >
          {children}
        </div>
        {!wideContent ? (
          <div
            className={`hidden min-[901px]:block min-h-[min(420px,50vh)] min-w-0 ${spacerGrid}`}
            aria-hidden
          />
        ) : null}
      </div>
      {scrollCue ? (
        <div
          className={`absolute bottom-[26px] ${splitAlignLeftClass} z-[4] flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-faint`}
        >
          Scroll
          <span className="lampros-cue-bar relative w-[34px] h-px bg-ink-faint overflow-hidden" />
        </div>
      ) : null}
    </section>
  );
}

export function WideSection({
  id,
  alt = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative z-[3] ${alt ? "bg-surface border-y border-line" : ""}`}
    >
      <div className={`${wideContainerClass} py-[clamp(70px,10vh,120px)]`}>
        {children}
      </div>
    </section>
  );
}

export function WideHeader({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={`text-center max-w-[46ch] mx-auto mb-11 motion-reveal ${className}`}
    >
      {eyebrow ? (
        <div className="text-[13px] tracking-[0.04em] text-ink-soft mb-3.5">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display font-semibold text-[clamp(2rem,4.4vw,3.75rem)] tracking-[-0.03em] leading-[1.02] mb-3.5">
        {title}
      </h2>
      {description ? (
        <p className="text-ink-soft text-base leading-normal">{description}</p>
      ) : null}
    </div>
  );
}
