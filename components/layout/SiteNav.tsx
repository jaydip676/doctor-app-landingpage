"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ColorModeToggle } from "@/components/ui/ColorModeToggle";
import { Brand } from "@/components/ui/Typography";
import { splitContainerClass } from "@/lib/layout";

const links = [
  { label: "Platform", href: "#seeit" },
  { label: "Specialties", href: "#spec" },
  { label: "Security", href: "#security" },
  { label: "Resources", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`nav fixed inset-x-0 top-[var(--announcement-height)] z-20 border-b transition-[background,border-color] duration-300 ${
        scrolled || menuOpen
          ? "bg-canvas/82 backdrop-blur-[12px] border-line"
          : "border-transparent"
      }`}
    >
      <nav
        className={`${splitContainerClass} flex items-center justify-between py-4 sm:py-5 gap-3`}
      >
        <Link href="/" className="text-[20px] leading-none shrink-0">
          <Brand />
        </Link>
        <div className="hidden min-[901px]:flex items-center gap-7 text-sm text-ink-soft">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <div className="flex items-center rounded-full border border-line bg-[var(--theme-toggle-bar-bg)] p-1 backdrop-blur-sm shrink-0">
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
            className="text-[13px] sm:text-sm font-semibold px-3.5 sm:px-[18px] py-2 sm:py-2.5 rounded-full bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] shadow-[var(--btn-primary-shadow)] whitespace-nowrap"
          >
            Start free trial
          </Link>
          <button
            type="button"
            className="min-[901px]:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-ink"
            aria-expanded={menuOpen}
            aria-controls="site-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5h13M2.5 9h13M2.5 13h13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div
          id="site-nav-menu"
          className={`${splitContainerClass} min-[901px]:hidden border-t border-line pb-6 pt-2`}
        >
          <div className="flex flex-col gap-1 text-[15px] text-ink-soft">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2.5 hover:bg-surface hover:text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#"
              className="rounded-lg px-3 py-2.5 hover:bg-surface hover:text-ink"
            >
              Sign in
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
