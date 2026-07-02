/** @deprecated Import from `@/lib/theme/apply-theme` — re-exports for existing imports. */
export {
  COLOR_MODE_STORAGE_KEY,
  applyTheme as applyColorMode,
  colorModeBootScript,
  getStoredColorMode,
  persistColorMode,
  persistColorModeWithTransition,
  readColorMode,
  refreshThemeAppearance as refreshColorModeAppearance,
  subscribeColorMode,
  getColorModeServerSnapshot,
} from "@/lib/theme/apply-theme";

export type { ColorMode } from "@/lib/theme/types";
