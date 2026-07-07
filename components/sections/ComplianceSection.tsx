import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { complianceBadges } from "@/lib/home-content";

export function ComplianceSection() {
  return (
    <WideSection id="compliance" alt>
      <WideHeader
        title="Compliance & certifications"
        description="Only what we can stand behind today — plus what's on our health-stack roadmap."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[clamp(1000px,66vw,1600px)] mx-auto motion-reveal">
        {complianceBadges.map((badge) => (
          <div
            key={badge.title}
            className="border border-line rounded-[14px] bg-surface p-5 relative"
          >
            {badge.tag ? (
              <span className="absolute top-3 right-3 text-[clamp(10px,0.66vw,13px)] font-bold uppercase tracking-wider text-teal-ink bg-teal-tint px-2 py-0.5 rounded-full">
                {badge.tag}
              </span>
            ) : null}
            <div className="font-semibold text-[clamp(15px,0.99vw,20px)] text-ink pr-16">{badge.title}</div>
            <p className="mt-2 text-[clamp(13px,0.86vw,17px)] text-ink-soft leading-relaxed">
              {badge.detail}
            </p>
          </div>
        ))}
      </div>
    </WideSection>
  );
}
