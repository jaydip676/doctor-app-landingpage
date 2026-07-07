/** Max width for split sections, nav, and footer (fluid beyond a ~14" laptop viewport) */
export const SPLIT_CONTENT_MAX_PX = 1360;

/** Max width for wide (non-split) sections (fluid beyond a ~14" laptop viewport) */
export const WIDE_CONTENT_MAX_PX = 1180;

/** Two-column split layout breakpoint (matches HTML @media 900px) */
export const SPLIT_GRID_MIN_PX = 901;

/**
 * Fluid scale reference: 1512px is a 14" MacBook Pro's logical viewport width.
 * Every clamp() below is pinned to today's value up to that width, then keeps
 * growing proportionally on larger screens instead of plateauing — so a huge
 * monitor renders the same relative proportions as a 14" laptop, just bigger.
 */
export const PAGE_INSET_X = "px-5 sm:px-[clamp(20px,5vw,90px)]";

export const splitContainerClass =
  "max-w-[clamp(1360px,90vw,2800px)] mx-auto w-full px-5 sm:px-[clamp(20px,5vw,90px)]";

export const wideContainerClass =
  "max-w-[clamp(1180px,78vw,2480px)] mx-auto w-full px-5 sm:px-[clamp(20px,5vw,90px)]";

/** Align fixed/absolute UI with the left edge of the split content column */
export const splitAlignLeftClass =
  "left-[max(1.25rem,calc((100vw-min(100vw,clamp(1360px,90vw,2800px)))/2+clamp(20px,5vw,90px)))]";
