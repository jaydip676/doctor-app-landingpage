"use client";

import { useEffect, type ReactNode } from "react";
import { refreshThemeAppearance } from "@/lib/theme/apply-theme";

export function ThemeShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "indigo");
    refreshThemeAppearance();
  }, []);

  return <div className="min-h-full">{children}</div>;
}
