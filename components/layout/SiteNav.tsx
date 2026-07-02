"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ColorModeToggle } from "@/components/ui/ColorModeToggle";
import { Brand } from "@/components/ui/Typography";

const links = [
  { label: "Platform", href: "#seeit" },
  { label: "Specialties", href: "#spec" },
  { label: "Security", href: "#security" },
  { label: "Resources", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
];

function themeChipClass(active: boolean) {
  return `px-2.5 py-1 rounded-full border transition-colors duration-300 ${
    active
      ? "border-teal text-teal-ink bg-teal-tint"
      : "border-transparent text-ink-soft hover:text-ink"
  }`;
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname.startsWith("/purple") ? "/purple" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav fixed inset-x-0 top-[var(--announcement-height)] z-20 border-b transition-[background,border-color] duration-300 ${
        scrolled
          ? "bg-canvas/82 backdrop-blur-[12px] border-line"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1360px] items-center justify-between px-5 sm:px-[clamp(20px,5vw,56px)] py-5 gap-3">
        <Link href={homeHref} className="text-[20px] leading-none shrink-0">
          <Brand />
        </Link>
        <div className="hidden min-[901px]:flex items-center gap-7 text-sm text-ink-soft">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1 rounded-full border border-line bg-[var(--theme-toggle-bar-bg)] p-1 text-[10px] sm:text-[11px] font-semibold backdrop-blur-sm">
            <Link href="/" className={themeChipClass(pathname === "/")}>
              Teal
            </Link>
            <Link
              href="/purple"
              className={themeChipClass(pathname.startsWith("/purple"))}
            >
              Indigo
            </Link>
            <span
              className="mx-0.5 h-3.5 w-px bg-line shrink-0"
              aria-hidden
            />
            <ColorModeToggle />
          </div>
          <Link
            href="#"
            className="hidden min-[901px]:inline text-sm text-ink-soft hover:text-ink"
          >
            Sign in
          </Link>
          <Link
            href="mailto:hello@lampros.tech"
            className="text-sm font-semibold px-[18px] py-2.5 rounded-full bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] shadow-[var(--btn-primary-shadow)]"
          >
            Start free trial
          </Link>
        </div>
      </nav>
    </header>
  );
}
