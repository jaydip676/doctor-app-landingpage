import {
  ALL_THEME_VAR_KEYS,
  resolveThemeVars,
} from "@/lib/theme/tokens";
import type { BrandAccent, ColorMode } from "@/lib/theme/types";

export const COLOR_MODE_STORAGE_KEY = "lampros-color-mode";

export function readBrandAccent(): BrandAccent {
  if (typeof document === "undefined") return "teal";
  return document.documentElement.getAttribute("data-theme") === "indigo"
    ? "indigo"
    : "teal";
}

export function applyTheme(colorMode: ColorMode, brand?: BrandAccent) {
  const resolvedBrand = brand ?? readBrandAccent();
  const vars = resolveThemeVars(colorMode, resolvedBrand);
  const root = document.documentElement;

  root.setAttribute("data-color-mode", colorMode);
  root.classList.toggle("dark", colorMode === "dark");

  for (const key of ALL_THEME_VAR_KEYS) {
    const value = vars[key];
    if (value !== undefined) {
      root.style.setProperty(key, value);
    } else {
      root.style.removeProperty(key);
    }
  }
}

export function readColorMode(): ColorMode {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-color-mode");
  return attr === "dark" ? "dark" : "light";
}

export function subscribeColorMode(onStoreChange: () => void) {
  if (typeof document === "undefined") return () => {};
  const root = document.documentElement;
  const observer = new MutationObserver(onStoreChange);
  observer.observe(root, {
    attributes: true,
    attributeFilter: ["data-color-mode", "class"],
  });
  window.addEventListener("storage", onStoreChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
  };
}

export function getColorModeServerSnapshot(): ColorMode {
  return "light";
}

export function refreshThemeAppearance() {
  applyTheme(readColorMode(), readBrandAccent());
}

export function persistColorMode(mode: ColorMode) {
  try {
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, mode);
  } catch {
    /* private browsing */
  }
  applyTheme(mode);
}

const THEME_TRANSITION_MS = 420;

export function persistColorModeWithTransition(mode: ColorMode) {
  if (typeof document === "undefined") {
    persistColorMode(mode);
    return;
  }

  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduce) {
    persistColorMode(mode);
    return;
  }

  const root = document.documentElement;
  const apply = () => persistColorMode(mode);

  const endTransitionClass = () => {
    window.setTimeout(
      () => root.classList.remove("theme-transition"),
      THEME_TRANSITION_MS,
    );
  };

  root.classList.add("theme-transition");

  const doc = document as Document & {
    startViewTransition?: (callback: () => void) => { finished: Promise<void> };
  };

  if (doc.startViewTransition) {
    doc.startViewTransition(apply).finished.finally(endTransitionClass);
    return;
  }

  requestAnimationFrame(() => {
    apply();
    endTransitionClass();
  });
}

export function getStoredColorMode(): ColorMode {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(COLOR_MODE_STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* ignore */
  }
  return "light";
}

export function colorModeBootScript(): string {
  const storageKey = JSON.stringify(COLOR_MODE_STORAGE_KEY);
  const lightTeal = JSON.stringify(resolveThemeVars("light", "teal"));
  const darkTeal = JSON.stringify(resolveThemeVars("dark", "teal"));
  const darkIndigo = JSON.stringify(resolveThemeVars("dark", "indigo"));
  const lightIndigo = JSON.stringify(resolveThemeVars("light", "indigo"));

  return `(function(){
try{
  var r=document.documentElement;
  var mode=localStorage.getItem(${storageKey});
  if(mode!=="dark"&&mode!=="light")mode="light";
  var brand=r.getAttribute("data-theme")==="indigo"?"indigo":"teal";
  var map={
    "light-teal":${lightTeal},
    "light-indigo":${lightIndigo},
    "dark-teal":${darkTeal},
    "dark-indigo":${darkIndigo}
  };
  var v=map[mode+"-"+brand]||map["light-teal"];
  r.setAttribute("data-color-mode",mode);
  if(mode==="dark")r.classList.add("dark");else r.classList.remove("dark");
  for(var k in v)if(Object.prototype.hasOwnProperty.call(v,k))r.style.setProperty(k,v[k]);
}catch(e){}
})();`;
}
