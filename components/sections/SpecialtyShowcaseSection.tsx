"use client";

import { useState } from "react";
import { WideHeader, WideSection } from "@/components/layout/SectionShell";
import { specialties } from "@/lib/specialties";

function KpiGrid({
  values,
  labels,
}: {
  values: [string, string, string];
  labels: [string, string, string];
}) {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {values.map((v, i) => (
        <div key={labels[i]} className="border border-line rounded-xl p-3.5">
          <b className="block font-display text-[26px] font-semibold tracking-tight">
            {v}
          </b>
          <span className="text-xs text-ink-soft">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

export function SpecialtyShowcaseSection() {
  const [active, setActive] = useState(0);
  const spec = specialties[active];

  return (
    <WideSection id="spec">
      <WideHeader
        title="Built for every specialty."
        description="The same system, tuned to how your practice actually works."
      />
      <div className="flex flex-wrap gap-2 justify-center mb-6 motion-reveal">
        {specialties.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            className={`text-[13px] font-semibold px-4 py-2 rounded-full border transition ${
              i === active
                ? "bg-teal text-white border-teal"
                : "bg-surface text-ink-soft border-line"
            }`}
          >
            {s.title.replace(" workspace", "")}
          </button>
        ))}
      </div>
      <div className="max-w-[880px] mx-auto border border-line rounded-[18px] bg-surface shadow-[var(--shadow-card)] overflow-hidden motion-reveal">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-[#fafbfa]">
          <i className="w-2.5 h-2.5 rounded-full bg-line" />
          <i className="w-2.5 h-2.5 rounded-full bg-line" />
          <i className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="ml-2.5 text-xs text-ink-faint font-mono bg-canvas px-3 py-1 rounded-md">
            app.lamprosclinic.in / {spec.slug}
          </span>
        </div>
        <div className="p-6">
          <div className="font-display font-semibold text-[19px]">{spec.title}</div>
          <div className="text-[13px] text-ink-soft mb-4">{spec.subtitle}</div>
          <KpiGrid values={spec.kpis} labels={spec.kpiLabels} />
          <div className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] mb-2 bg-surface">
            <span>{spec.row1}</span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-tint text-teal-ink">
              Preset
            </span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 border border-line rounded-[11px] text-[13.5px] bg-surface">
            <span>{spec.row2}</span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-tint text-teal-ink">
              Ready
            </span>
          </div>
        </div>
      </div>
    </WideSection>
  );
}
