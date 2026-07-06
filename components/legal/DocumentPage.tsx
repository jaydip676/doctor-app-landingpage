import Link from "next/link";
import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { Footer } from "@/components/layout/Footer";
import { SiteNav } from "@/components/layout/SiteNav";
import { splitContainerClass } from "@/lib/layout";
import { POLICY_LAST_UPDATED } from "@/lib/legal/constants";
import type { LegalPageContent } from "@/lib/legal/types";

export function StaticPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <BackgroundGrid />
      <AnnouncementBar />
      <SiteNav />
      <main className="relative z-[3] min-h-[60vh] pt-[calc(var(--announcement-height)+5.5rem)] pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

export function DocumentPage({ content, showUpdated = true }: { content: LegalPageContent; showUpdated?: boolean }) {
  return (
    <article className={`${splitContainerClass} max-w-[780px]`}>
      <Link
        href="/"
        className="inline-flex text-sm text-ink-soft hover:text-ink mb-8 transition-colors"
      >
        ← Back to home
      </Link>
      <header className="mb-10">
        <p className="text-[13px] tracking-[0.04em] text-ink-soft mb-3">
          Healthcare Management by LamprosTech
        </p>
        <h1 className="font-display font-semibold text-[clamp(2rem,4.4vw,3rem)] tracking-tight text-ink">
          {content.title}
        </h1>
        <p className="mt-4 text-[16px] sm:text-[17px] text-ink-soft leading-[1.55]">
          {content.description}
        </p>
        {showUpdated ? (
          <p className="mt-3 text-[13px] text-ink-faint">
            Last updated: {POLICY_LAST_UPDATED}
          </p>
        ) : null}
      </header>
      <div className="space-y-10 text-[15px] sm:text-[15.5px] text-ink-soft leading-[1.65]">
        {content.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-display font-semibold text-lg sm:text-xl text-ink mb-3">
              {section.title}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={`${section.id}-p-${i}`} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="mt-3 list-disc pl-5 space-y-2 marker:text-teal">
                {section.bullets.map((item, i) => (
                  <li key={`${section.id}-b-${i}`}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
