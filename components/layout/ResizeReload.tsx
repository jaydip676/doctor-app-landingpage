"use client";

import { useEffect } from "react";

const DEBOUNCE_MS = 450;
/** Ignore sub-pixel width noise from mobile browsers. */
const MIN_WIDTH_DELTA_PX = 2;
const SCROLL_RESTORE_KEY = "lampros-resize-reload-scroll";

function shouldReload(startW: number, nextW: number): boolean {
  return Math.abs(nextW - startW) >= MIN_WIDTH_DELTA_PX;
}

function restoreScroll(y: number) {
  const apply = () => window.scrollTo(0, y);
  requestAnimationFrame(() => {
    requestAnimationFrame(apply);
  });
}

export function ResizeReload() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(SCROLL_RESTORE_KEY);
    if (savedScroll != null) {
      sessionStorage.removeItem(SCROLL_RESTORE_KEY);
      const y = Number(savedScroll);
      if (Number.isFinite(y) && y > 0) {
        restoreScroll(y);
      }
    }

    let width = window.innerWidth;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const checkDimensions = () => {
      const nextW = window.innerWidth;
      if (shouldReload(width, nextW)) {
        sessionStorage.setItem(SCROLL_RESTORE_KEY, String(window.scrollY));
        window.location.reload();
        return;
      }
      width = nextW;
    };

    const scheduleCheck = () => {
      clearTimeout(timer);
      timer = setTimeout(checkDimensions, DEBOUNCE_MS);
    };

    window.addEventListener("resize", scheduleCheck);
    window.addEventListener("orientationchange", scheduleCheck);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", scheduleCheck);
      window.removeEventListener("orientationchange", scheduleCheck);
    };
  }, []);

  return null;
}
