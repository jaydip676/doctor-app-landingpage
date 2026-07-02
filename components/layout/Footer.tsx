import Link from "next/link";
import { Brand } from "@/components/ui/Typography";

const columns = [
  {
    title: "Platform",
    links: ["Overview", "Specialties", "Pricing", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Demo clinic", "FAQ"],
  },
  {
    title: "Legal",
    links: [
      "Privacy policy",
      "Communication policy",
      "Data rights",
      "Terms",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-[3] bg-canvas border-t border-line">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-[clamp(20px,5vw,56px)] py-[46px] grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-7">
        <div>
          <div className="text-lg">
            <Brand />
          </div>
          <p className="text-ink-soft text-[13.5px] mt-3 max-w-[30ch] leading-[1.5]">
            The clinic operating system — one live record across patient, doctor,
            reception, lab and pharmacy.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.1em] uppercase text-ink-faint mb-3.5">
              {col.title}
            </h4>
            {col.links.map((link) => (
              <Link
                key={link}
                href="#"
                className="block text-ink-soft text-sm mb-2 hover:text-ink"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-line px-5 sm:px-[clamp(20px,5vw,56px)] py-[18px] max-w-[1360px] mx-auto text-[12.5px] text-ink-faint">
        © 2026 Lampros Healthcare. All rights reserved. Made for clinics that
        want to run as one.
      </div>
    </footer>
  );
}
