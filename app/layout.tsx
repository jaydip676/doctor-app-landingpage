import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { ColorModeSync } from "@/components/layout/ColorModeSync";
import { colorModeBootScript } from "@/lib/theme/apply-theme";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lampros Healthcare — your clinic, finally running like it should",
  description:
    "Appointments, patients, prescriptions, billing and follow-ups — from one beautifully simple platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="indigo"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: colorModeBootScript(),
          }}
        />
      </head>
      <body className="min-h-full overflow-x-hidden">
        <ColorModeSync />
        {children}
      </body>
    </html>
  );
}
