"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { testimonials } from "@/lib/home-content";
import {
  getLightMotionSnapshot,
  subscribeLightMotion,
} from "@/lib/motion-preference";

const ROTATE_MS = 5000;
const TRANSITION_MS = 550;

type Testimonial = (typeof testimonials)[number];

function TestimonialSlide({ t }: { t: Testimonial }) {
  return (
    <>
      <blockquote className="text-center">
        <p className="font-display font-medium text-[clamp(1.35rem,3vw,2.35rem)] leading-[1.2] tracking-[-0.02em] text-ink min-h-[4.5em] sm:min-h-[3.5em]">
          &ldquo;{t.quote}&rdquo;
        </p>
      </blockquote>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <div className="relative w-16 h-16 rounded-full border-2 border-surface shadow-[var(--shadow-card)] overflow-hidden bg-teal-tint shrink-0">
          <Image
            src={t.image}
            alt={`Portrait of ${t.name}`}
            width={64}
            height={64}
            className="h-full w-full object-cover object-top"
            sizes="64px"
          />
        </div>
        <div className="text-center sm:text-left">
          <div className="font-semibold text-ink">{t.name}</div>
          <div className="text-sm text-ink-soft">{t.role}</div>
          <div className="text-sm text-teal-ink font-medium mt-0.5">
            {t.institution}
          </div>
        </div>
      </div>
    </>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState<Testimonial | null>(null);
  const [incomingIndex, setIncomingIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = exiting !== null;
  const t = testimonials[active];

  useEffect(() => {
    const update = () => setReducedMotion(getLightMotionSnapshot());
    update();
    return subscribeLightMotion(update);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (next === active || isTransitioning) return;

      if (reducedMotion) {
        setActive(next);
        return;
      }

      setExiting(testimonials[active]);
      setIncomingIndex(next);
      if (transitionRef.current) clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(() => {
        setActive(next);
        setExiting(null);
      }, TRANSITION_MS);
    },
    [active, isTransitioning, reducedMotion],
  );

  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (reducedMotion) return;
    timerRef.current = setTimeout(() => {
      goTo((active + 1) % testimonials.length);
    }, ROTATE_MS);
  }, [active, goTo, reducedMotion]);

  useEffect(() => {
    if (isTransitioning) return;
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, isTransitioning, scheduleNext]);

  useEffect(() => {
    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  const displayed = isTransitioning ? testimonials[incomingIndex] : t;

  return (
    <WideSection id="testi">
      <WideHeader
        title="Doctors on the record."
        description="Pilot clinics sharing what changed after going live on Lampros."
      />
      <div className="max-w-[820px] mx-auto motion-reveal">
        <div className="relative min-h-[280px] sm:min-h-[260px] overflow-hidden">
          {exiting && !reducedMotion ? (
            <div
              className="absolute inset-0 z-[1] pointer-events-none animate-[testimonial-exit_550ms_ease-in-out_forwards]"
              aria-hidden
            >
              <TestimonialSlide t={exiting} />
            </div>
          ) : null}
          <div
            className={
              exiting && !reducedMotion
                ? "relative z-[2] animate-[testimonial-enter_550ms_ease-out_forwards]"
                : "relative"
            }
          >
            <TestimonialSlide t={displayed} />
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-2.5 sm:gap-2 mt-8"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((item, i) => {
            const isActive = i === active && !isTransitioning;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => goTo(i)}
                disabled={isTransitioning}
                className={`relative h-3 sm:h-2 rounded-full overflow-hidden transition-[width] duration-300 disabled:opacity-70 ${isActive
                    ? "w-12 sm:w-8 bg-line"
                    : "w-3 sm:w-2 bg-line hover:bg-ink-faint"
                  }`}
              >
                {isActive && !reducedMotion ? (
                  <span
                    key={active}
                    className="absolute inset-0 origin-left rounded-full bg-teal animate-[testimonial-progress_5s_linear_forwards]"
                    aria-hidden
                  />
                ) : null}
                {isActive && reducedMotion ? (
                  <span
                    className="absolute inset-0 rounded-full bg-teal"
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </WideSection>
  );
}
