import { trustedPartners } from "@/lib/home-content";

export function TrustedByStrip() {
  const items = [...trustedPartners, ...trustedPartners];

  return (
    <section
      id="trusted"
      className="relative z-[3] border-y border-line bg-surface"
    >
      <div className="max-w-[1180px] mx-auto w-full px-5 sm:px-[clamp(20px,5vw,56px)] py-10 sm:py-12">
        <p className="text-center text-[12px] uppercase tracking-[0.14em] text-ink-faint font-semibold mb-5 motion-reveal">
          Trusted by clinics across Gujarat &amp; Maharashtra
        </p>
        <div className="overflow-hidden motion-reveal [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex gap-12 sm:gap-16 w-max animate-[lampros-marquee_40s_linear_infinite]">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-[15px] sm:text-base font-semibold text-ink-soft/70 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
