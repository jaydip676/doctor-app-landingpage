"use client";

import { useEffect } from "react";

const DEBOUNCE_MS = 450;
/** Ignore small height-only shifts (mobile browser chrome). */
const MIN_HEIGHT_DELTA_PX = 72;
const SCROLL_RESTORE_KEY = "lampros-resize-reload-scroll";

function shouldReload(
  startW: number,
  startH: number,
  nextW: number,
  nextH: number,
): boolean {
  const dw = Math.abs(nextW - startW);
  const dh = Math.abs(nextH - startH);
  if (dw > 0) return true;
  return dh >= MIN_HEIGHT_DELTA_PX;
}

export function ResizeReload() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(SCROLL_RESTORE_KEY);
    if (savedScroll != null) {
      sessionStorage.removeItem(SCROLL_RESTORE_KEY);
      const y = Number(savedScroll);
      if (Number.isFinite(y) && y > 0) {
        requestAnimationFrame(() => window.scrollTo(0, y));
      }
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const nextW = window.innerWidth;
        const nextH = window.innerHeight;
        if (!shouldReload(width, height, nextW, nextH)) return;
        sessionStorage.setItem(SCROLL_RESTORE_KEY, String(window.scrollY));
        window.location.reload();
      }, DEBOUNCE_MS);
    };

    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
