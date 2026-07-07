import Link from "next/link";
import { Brand } from "@/components/ui/Typography";
import { splitContainerClass } from "@/lib/layout";
import { columns, footerLinkHref } from "@/lib/legal/footer-columns";

export function Footer() {
  return (
    <footer className="relative z-[3] bg-canvas border-t border-line">
      <div className={`${splitContainerClass} py-[clamp(46px,3.04vw,72px)] grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-7`}>
        <div>
          <div className="text-[clamp(18px,1.19vw,23px)]">
            <Brand />
          </div>
          <p className="text-ink-soft text-[clamp(13.5px,0.89vw,17.5px)] mt-3 max-w-[30ch] leading-[1.5]">
            The clinic operating system — one live record across patient, doctor,
            reception, lab and pharmacy.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[clamp(12px,0.79vw,15.5px)] tracking-[0.1em] uppercase text-ink-faint mb-3.5">
              {col.title}
            </h4>
            {col.links.map((link) => (
              <Link
                key={link}
                href={footerLinkHref[link]}
                className="block text-ink-soft text-[clamp(14px,0.93vw,18px)] mb-2 hover:text-ink"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        className={`border-t border-line py-[18px] ${splitContainerClass} text-[clamp(12.5px,0.83vw,16.5px)] text-ink-faint`}
      >
        © 2026 LamprosTech · Healthcare Management. All rights reserved.
        Made for clinics that want to run as one.
      </div>
    </footer>
  );
}
