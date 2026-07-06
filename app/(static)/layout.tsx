import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeShell } from "@/components/layout/ThemeShell";
import { StaticPageShell } from "@/components/legal/DocumentPage";
import { BRAND_LINE } from "@/lib/legal/constants";

export const metadata: Metadata = {
  title: {
    template: `%s · ${BRAND_LINE}`,
    default: BRAND_LINE,
  },
  alternates: {
    canonical: "./",
  },
};

export default function StaticLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeShell>
      <StaticPageShell>{children}</StaticPageShell>
    </ThemeShell>
  );
}
