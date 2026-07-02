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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto motion-reveal">
        {stories.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group flex flex-col border border-line rounded-[18px] bg-surface p-6 hover:border-ink-faint transition-colors"
          >
            <span className="text-[11px] font-semibold text-teal-ink uppercase tracking-wider">
              {post.readTime}
            </span>
            <h3 className="mt-3 font-display font-semibold text-[18px] leading-snug text-ink group-hover:text-teal-ink transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-[14px] text-ink-soft leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <span className="mt-4 text-[13px] font-semibold text-ink-soft group-hover:text-ink">
              Read article →
            </span>
          </Link>
        ))}
      </div>
    </WideSection>
  );
}
