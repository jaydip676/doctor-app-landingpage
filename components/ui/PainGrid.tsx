type PainKey =
  | "appointments"
  | "prescriptions"
  | "billing"
  | "calls"
  | "history"
  | "waiting";

function PainIcon({ name, className }: { name: PainKey; className?: string }) {
  const props = {
    className,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "appointments":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18" />
        </svg>
      );
    case "prescriptions":
      return (
        <svg {...props}>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <path d="M14 3v6h6M8 13h8M8 17h5" />
        </svg>
      );
    case "billing":
      return (
        <svg {...props}>
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M2 10h20M6 15h2M10 15h4" />
        </svg>
      );
    case "calls":
      return (
        <svg {...props}>
          <path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "history":
      return (
        <svg {...props}>
          <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v11a2 2 0 0 1-2 2H7a3 3 0 0 1-3-3V7z" />
          <path d="M8 11h8M8 15h5" />
        </svg>
      );
    case "waiting":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
}

export type PainGridItem = {
  icon: PainKey;
  label: string;
};

export function PainGrid({ items }: { items: PainGridItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-[10px] mt-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2.5 text-[13.5px] text-ink bg-surface border border-line rounded-[12px] py-3 px-3.5 min-w-0"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-teal-tint text-teal-ink">
            <PainIcon name={item.icon} />
          </span>
          <span className="leading-snug">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
