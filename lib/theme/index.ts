export type { BrandAccent, ColorMode, ThemeCssVars } from "@/lib/theme/types";
export {
  ACCENT_INDIGO,
  ACCENT_TEAL,
  ALL_THEME_VAR_KEYS,
  resolveThemeVars,
} from "@/lib/theme/tokens";
export {
  COLOR_MODE_STORAGE_KEY,
  applyTheme,
  colorModeBootScript,
  getColorModeServerSnapshot,
  getStoredColorMode,
  persistColorMode,
  persistColorModeWithTransition,
  readBrandAccent,
  readColorMode,
  refreshThemeAppearance,
  subscribeColorMode,
} from "@/lib/theme/apply-theme";
