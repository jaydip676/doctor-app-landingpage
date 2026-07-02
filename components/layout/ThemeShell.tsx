"use client";

import { useEffect, type ReactNode } from "react";
import { refreshThemeAppearance } from "@/lib/theme/apply-theme";

export type BrandTheme = "teal" | "purple";

const HTML_THEME_INDIGO = "indigo";

export function ThemeShell({
  theme = "teal",
  children,
}: {
  theme?: BrandTheme;
  children: ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "purple") {
      root.setAttribute("data-theme", HTML_THEME_INDIGO);
    } else {
      root.removeAttribute("data-theme");
    }
    refreshThemeAppearance();
    return () => root.removeAttribute("data-theme");
  }, [theme]);

  return <div className="min-h-full">{children}</div>;
}
