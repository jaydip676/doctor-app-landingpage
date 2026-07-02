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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto motion-reveal">
        {capabilityStats.map((s) => (
          <div
            key={s.label}
            className="text-center border border-line rounded-[18px] bg-surface px-4 py-8 sm:py-10"
          >
            <b className="block font-display font-semibold text-[clamp(2rem,4.5vw,3.25rem)] tracking-tight text-ink">
              {s.value}
            </b>
            <span className="mt-2 block text-[13px] text-ink-soft leading-snug max-w-[14ch] mx-auto">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </WideSection>
  );
}
