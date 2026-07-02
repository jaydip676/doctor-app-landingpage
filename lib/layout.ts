/** Max width for split sections, nav, and footer */
export const SPLIT_CONTENT_MAX_PX = 1360;

/** Max width for wide (non-split) sections */
export const WIDE_CONTENT_MAX_PX = 1180;

/** Two-column split layout breakpoint (matches HTML @media 900px) */
export const SPLIT_GRID_MIN_PX = 901;

export const PAGE_INSET_X = "px-5 sm:px-[clamp(20px,5vw,56px)]";

export const splitContainerClass =
  "max-w-[1360px] mx-auto w-full px-5 sm:px-[clamp(20px,5vw,56px)]";

export const wideContainerClass =
  "max-w-[1180px] mx-auto w-full px-5 sm:px-[clamp(20px,5vw,56px)]";

/** Align fixed/absolute UI with the left edge of the split content column */
export const splitAlignLeftClass =
  "left-[max(1.25rem,calc((100vw-min(100vw,1360px))/2+clamp(20px,5vw,56px)))]";
