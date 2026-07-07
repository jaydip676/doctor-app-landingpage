import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { integrations } from "@/lib/home-content";

export function IntegrationsSection() {
  return (
    <WideSection id="integrations">
      <WideHeader
        title="Plugs into how you already work."
        description="Payments, patient messaging, labs, and pharmacy — connected in one live record."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[clamp(1000px,66vw,1600px)] mx-auto motion-reveal">
        {integrations.map((item) => (
          <div
            key={item.name}
            className="flex flex-col border border-line rounded-[14px] bg-surface px-5 py-4 min-h-[88px]"
          >
            <span className="text-[clamp(11px,0.73vw,14.5px)] font-semibold uppercase tracking-wider text-ink-faint">
              {item.category}
            </span>
            <span className="mt-1.5 text-[clamp(15px,0.99vw,20px)] font-semibold text-ink">{item.name}</span>
          </div>
        ))}
      </div>
    </WideSection>
  );
}
