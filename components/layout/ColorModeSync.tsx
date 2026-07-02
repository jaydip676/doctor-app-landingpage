"use client";

import { useEffect } from "react";
import { applyTheme, getStoredColorMode } from "@/lib/theme/apply-theme";

/** Apply full token set after hydration (boot script runs first). */
export function ColorModeSync() {
  useEffect(() => {
    applyTheme(getStoredColorMode());
  }, []);
  return null;
}
