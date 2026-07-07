import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { capabilityStats } from "@/lib/home-content";

export function StatsSection() {
  return (
    <WideSection id="stats" alt>
      <WideHeader
        eyebrow="— By the numbers"
        title="Built for real clinic volume."
        description="Capability metrics from production deployments and pilot sites — honest benchmarks, not vanity counts."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[clamp(1000px,66vw,1600px)] mx-auto motion-reveal">
        {capabilityStats.map((s) => (
          <div
            key={s.label}
            className="@container text-center border border-line rounded-[18px] bg-surface px-4 py-8 sm:py-10"
          >
            <b className="block whitespace-nowrap font-display font-semibold text-[clamp(2rem,9.5cqw,3.25rem)] lg:text-[clamp(2rem,19cqw,5rem)] tracking-tight text-ink">
              {s.value}
            </b>
            <span className="mt-2 block text-[clamp(13px,0.86vw,17px)] text-ink-soft leading-snug max-w-[14ch] mx-auto">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </WideSection>
  );
}
