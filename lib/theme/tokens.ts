import type { ColorMode, ThemeCssVars } from "@/lib/theme/types";

const LIGHT_BASE: ThemeCssVars = {
  "--canvas": "#f2f4f2",
  "--surface": "#ffffff",
  "--ink": "#0b1411",
  "--ink-soft": "#5b6b65",
  "--ink-faint": "#8a988f",
  "--line": "#e3eae6",
  "--teal": "rgb(99, 102, 241)",
  "--teal-ink": "rgb(79, 70, 229)",
  "--teal-tint": "rgb(238, 242, 255)",
  "--color-teal": "rgb(99, 102, 241)",
  "--color-teal-ink": "rgb(79, 70, 229)",
  "--color-teal-tint": "rgb(238, 242, 255)",
  "--coral": "#ff6a45",
  "--shadow-card":
    "0 1px 2px rgba(11, 20, 17, 0.05), 0 24px 50px -28px rgba(11, 20, 17, 0.22)",
  "--shadow-popular": "0 24px 50px -30px rgba(99, 102, 241, 0.45)",
  "--canvas-fade": "242, 244, 242",
  "--particle-ink": "11, 20, 17",
  "--announcement-bg": "#0b1411",
  "--announcement-fg": "#ffffff",
  "--announcement-border": "rgba(255, 255, 255, 0.1)",
  "--announcement-hover": "rgba(255, 255, 255, 0.05)",
  "--announcement-badge-bg": "rgba(255, 255, 255, 0.12)",
  "--announcement-badge-fg": "#e0e7ff",
  "--btn-primary-fg": "#ffffff",
  "--btn-ghost-fill": "rgba(255, 255, 255, 0.6)",
  "--app-chrome": "#fafbfa",
  "--demo-sidebar": "#fcfdfc",
  "--demo-toast-bg": "#0b1411",
  "--demo-toast-fg": "#ffffff",
  "--demo-cursor-fill": "#0b1411",
  "--theme-toggle-bar-bg": "rgba(11, 20, 17, 0.06)",
  "--theme-toggle-bg": "#ffffff",
  "--theme-toggle-fg": "#0b1411",
  "--theme-toggle-border": "transparent",
  "--theme-toggle-shadow":
    "0 1px 4px rgba(11, 20, 17, 0.1), 0 0 0 1px rgba(11, 20, 17, 0.07)",
  "--btn-primary-bg": "rgb(99, 102, 241)",
  "--btn-primary-shadow": "0px 10px 22px rgba(99, 102, 241, 0.24)",
};

const DARK_BASE: ThemeCssVars = {
  "--canvas": "#0b1411",
  "--surface": "#141f1b",
  "--ink": "#f2f4f2",
  "--ink-soft": "#a8b5af",
  "--ink-faint": "#6b7a73",
  "--line": "#243029",
  "--teal": "rgb(99, 102, 241)",
  "--teal-ink": "rgb(79, 70, 229)",
  "--teal-tint": "rgb(30, 27, 75)",
  "--color-teal": "rgb(99, 102, 241)",
  "--color-teal-ink": "rgb(79, 70, 229)",
  "--color-teal-tint": "rgb(30, 27, 75)",
  "--coral": "#ff6a45",
  "--shadow-card":
    "0 1px 2px rgba(0, 0, 0, 0.35), 0 24px 50px -28px rgba(0, 0, 0, 0.55)",
  "--shadow-popular": "0 24px 50px -30px rgba(99, 102, 241, 0.35)",
  "--canvas-fade": "11, 20, 17",
  "--particle-ink": "255, 255, 255",
  "--announcement-bg": "#0a1210",
  "--announcement-fg": "#f2f4f2",
  "--announcement-border": "rgba(99, 102, 241, 0.28)",
  "--announcement-hover": "rgba(99, 102, 241, 0.1)",
  "--announcement-badge-bg": "rgba(99, 102, 241, 0.28)",
  "--announcement-badge-fg": "#e0e7ff",
  "--btn-primary-fg": "#ffffff",
  "--btn-ghost-fill": "rgba(255, 255, 255, 0.06)",
  "--app-chrome": "#1a2622",
  "--demo-sidebar": "#101916",
  "--demo-toast-bg": "#1e2a26",
  "--demo-toast-fg": "#f2f4f2",
  "--demo-cursor-fill": "#f2f4f2",
  "--theme-toggle-bar-bg": "rgba(255, 255, 255, 0.06)",
  "--theme-toggle-bg": "rgba(255, 255, 255, 0.12)",
  "--theme-toggle-fg": "#f2f4f2",
  "--theme-toggle-border": "rgba(255, 255, 255, 0.14)",
  "--theme-toggle-shadow": "none",
  "--btn-primary-bg": "rgb(99, 102, 241)",
  "--btn-primary-shadow": "0px 10px 22px rgba(99, 102, 241, 0.35)",
};

export function resolveThemeVars(colorMode: ColorMode): ThemeCssVars {
  return colorMode === "dark" ? DARK_BASE : LIGHT_BASE;
}

/** Every CSS custom property this app sets on `<html>` (for apply + clear). */
export const ALL_THEME_VAR_KEYS = [
  ...new Set([...Object.keys(LIGHT_BASE), ...Object.keys(DARK_BASE)]),
];
