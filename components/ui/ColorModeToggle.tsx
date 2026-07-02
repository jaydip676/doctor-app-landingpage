"use client";

import { useSyncExternalStore } from "react";
import {
  getColorModeServerSnapshot,
  persistColorModeWithTransition,
  readColorMode,
  subscribeColorMode,
  type ColorMode,
} from "@/lib/color-mode";

function MoonIcon() {
  return (
    <svg
      fill="currentColor"
      width="18px"
      height="18px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>moon</title>
      <path d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function ColorModeToggle() {
  const mode = useSyncExternalStore(
    subscribeColorMode,
    readColorMode,
    getColorModeServerSnapshot,
  );

  const toggle = () => {
    const next: ColorMode = mode === "dark" ? "light" : "dark";
    persistColorModeWithTransition(next);
  };

  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--theme-toggle-bg)] shadow-[var(--theme-toggle-shadow)] hover:opacity-90 transition-opacity duration-200 cursor-pointer"
      style={{ color: isDark ? "var(--theme-toggle-fg)" : "#0b1411" }}
    >
      <span
        key={mode}
        className="inline-flex animate-[theme-icon-in_0.35s_cubic-bezier(0.4,0,0.2,1)]"
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
