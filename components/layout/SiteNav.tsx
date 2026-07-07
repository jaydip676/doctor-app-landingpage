"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookDemoUrl, isExternalUrl } from "@/lib/book-demo-url";
import { ColorModeToggle } from "@/components/ui/ColorModeToggle";
import { Brand } from "@/components/ui/Typography";
import { splitContainerClass } from "@/lib/layout";

const links = [
  { label: "Platform", href: "#seeit" },
  { label: "Specialties", href: "#spec" },
  { label: "Security", href: "#security" },
  { label: "Integrations", href: "#integrations" },
];

const MENU_TRANSITION_MS = 320;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPresent, setMenuPresent] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
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

  useEffect(() => {
    if (menuOpen) {
      setMenuPresent(true);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setMenuActive(true));
      });
      return () => cancelAnimationFrame(raf);
    }

    setMenuActive(false);
    const timeout = window.setTimeout(
      () => setMenuPresent(false),
      MENU_TRANSITION_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuPresent ? (
        <button
          type="button"
          aria-label="Close menu"
          className={`site-nav-backdrop fixed inset-x-0 bottom-0 z-[19] min-[901px]:hidden border-0 p-0 cursor-default bg-ink/25 backdrop-blur-[10px] transition-[opacity,backdrop-filter] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
            menuActive
              ? "opacity-100 backdrop-blur-[10px] pointer-events-auto"
              : "opacity-0 backdrop-blur-none pointer-events-none"
          }`}
          style={{ top: "var(--announcement-height)" }}
          onClick={closeMenu}
        />
      ) : null}

      <header
        className={`nav fixed inset-x-0 top-[var(--announcement-height)] z-[21] border-b transition-[background,border-color,box-shadow] duration-300 ${
          scrolled || menuOpen
            ? "bg-canvas/90 backdrop-blur-[12px] border-line shadow-[0_12px_40px_-20px_rgba(11,20,17,0.35)]"
            : "border-transparent"
        }`}
      >
        <nav
          className={`${splitContainerClass} flex items-center justify-between py-[clamp(16px,1.06vw,26px)] gap-3`}
        >
          <Link href="/" className="text-[clamp(20px,1.32vw,26px)] leading-none shrink-0">
            <Brand />
          </Link>
          <div className="hidden min-[901px]:flex items-center gap-7 text-[clamp(14px,0.93vw,18px)] text-ink-soft">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Link
              href={bookDemoUrl}
              className="inline-flex items-center text-[13px] sm:text-[clamp(14px,0.93vw,18px)] font-semibold px-3.5 sm:px-[clamp(18px,1.19vw,24px)] py-2 sm:py-[clamp(10px,0.66vw,13px)] rounded-full bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] shadow-[var(--btn-primary-shadow)] whitespace-nowrap cursor-pointer hover:-translate-y-0.5 transition-transform duration-[250ms]"
              {...(isExternalUrl(bookDemoUrl)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Book a demo
            </Link>
            <div className="hidden min-[901px]:flex items-center rounded-full border border-line bg-[var(--theme-toggle-bar-bg)] p-1 backdrop-blur-sm shrink-0">
              <ColorModeToggle />
            </div>
            <button
              type="button"
              className="min-[901px]:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-ink transition-transform duration-200 active:scale-95"
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
                className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                  menuOpen ? "rotate-90" : "rotate-0"
                }`}
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

        <div
          id="site-nav-menu"
          className={`min-[901px]:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
            menuPresent ? "pointer-events-auto" : "pointer-events-none"
          } ${
            menuActive
              ? "max-h-[min(72vh,520px)] opacity-100"
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div
            className={`${splitContainerClass} border-t border-line pb-6 pt-2 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
              menuActive
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 text-[15px] text-ink-soft">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 hover:bg-surface hover:text-ink transition-colors"
                  onClick={closeMenu}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center justify-between rounded-lg px-3 py-2.5 border-t border-line pt-4">
                <span className="text-ink-soft">Theme</span>
                <div className="flex items-center rounded-full border border-line bg-[var(--theme-toggle-bar-bg)] p-1">
                  <ColorModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
