import Link from "next/link";
import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { stories } from "@/lib/home-content";

export function StoriesSection() {
  return (
    <WideSection id="stories">
      <WideHeader
        eyebrow="— Lampros Stories"
        title="Resources for clinic owners."
        description="Practical guides — not marketing fluff. More articles ship with every release."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[clamp(1000px,66vw,1600px)] mx-auto motion-reveal">
        {stories.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group flex flex-col border border-line rounded-[18px] bg-surface p-6 hover:border-ink-faint transition-colors"
          >
            <span className="text-[clamp(11px,0.73vw,14.5px)] font-semibold text-teal-ink uppercase tracking-wider">
              {post.readTime}
            </span>
            <h3 className="mt-3 font-display font-semibold text-[clamp(18px,1.19vw,24px)] leading-snug text-ink group-hover:text-teal-ink transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-[clamp(14px,0.93vw,18px)] text-ink-soft leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <span className="mt-4 text-[clamp(13px,0.86vw,17px)] font-semibold text-ink-soft group-hover:text-ink">
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </WideSection>
  );
}
