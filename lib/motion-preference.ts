const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_VIEWPORT_QUERY = "(max-width: 900px)";

export function reduceMotionOnMobileEnabled(): boolean {
  return process.env.NEXT_PUBLIC_REDUCE_MOTION_ON_MOBILE === "true";
}

/** System accessibility setting only (not mobile light-motion flag). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/** OS accessibility setting or optional lighter motion on small screens. */
export function getLightMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return true;
  if (!reduceMotionOnMobileEnabled()) return false;
  return window.matchMedia(MOBILE_VIEWPORT_QUERY).matches;
}

export function subscribeLightMotion(onStoreChange: () => void): () => void {
  const reduced = window.matchMedia(REDUCED_MOTION_QUERY);
  const mobile = window.matchMedia(MOBILE_VIEWPORT_QUERY);
  const onChange = () => onStoreChange();
  reduced.addEventListener("change", onChange);
  mobile.addEventListener("change", onChange);
  window.addEventListener("resize", onChange);
  return () => {
    reduced.removeEventListener("change", onChange);
    mobile.removeEventListener("change", onChange);
    window.removeEventListener("resize", onChange);
  };
}

export function getLightMotionServerSnapshot(): boolean {
  return false;
}
