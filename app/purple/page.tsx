import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { ThemeShell } from "@/components/layout/ThemeShell";

export const metadata: Metadata = {
  title: "Lampros Healthcare (indigo) — your clinic, finally running like it should",
  description:
    "Indigo brand variant for comparison — same layout as the default teal homepage.",
};

export default function PurpleHomePage() {
  return (
    <ThemeShell theme="purple">
      <HomePage />
    </ThemeShell>
  );
}
