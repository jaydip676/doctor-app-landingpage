"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeMotion() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroSection = document.querySelector("section.anchor");
      const heroMotion = heroSection?.querySelectorAll(".motion-in");

      const heroTl = gsap.timeline({
        delay: 0.2,
        defaults: { ease: "power3.out" },
      });

      if (heroMotion?.length) {
        heroTl.to(heroMotion, {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.08,
        });
      }

      heroTl.to(
        ".nav",
        { y: 0, autoAlpha: 1, duration: 0.6 },
        heroMotion?.length ? "-=0.5" : 0,
      );

      document.querySelectorAll("section").forEach((s) => {
        const els = gsap.utils.toArray<HTMLElement>(
          s.querySelectorAll(".motion-reveal"),
        );
        if (!els.length) return;

        gsap.to(els, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: s,
            start: "top 66%",
            once: true,
          },
        });
      });

      const canvas = document.getElementById("scene");
      if (canvas) {
        gsap.fromTo(
          canvas,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
        );
      }

      window.setTimeout(() => ScrollTrigger.refresh(), 400);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
