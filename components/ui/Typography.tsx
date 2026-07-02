import type { ReactNode } from "react";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold ${className}`}>
      Lampros<b className="text-teal font-bold">.</b>
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3.5 text-[13px] tracking-[0.04em] text-ink-soft mb-5 before:content-[''] before:w-10 before:h-px before:bg-ink-faint">
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  as = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = as;
  const size =
    as === "h1"
      ? "text-[clamp(2.875rem,6.6vw,6.125rem)] leading-[1.02] tracking-[-0.04em]"
      : "text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] tracking-[-0.03em]";
  return (
    <Tag className={`font-display font-semibold ${size} ${className}`}>
      {children}
    </Tag>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="text-[clamp(1rem,1.5vw,1.1875rem)] text-ink-soft leading-[1.55] mt-[22px]">
      {children}
    </p>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-teal">{children}</span>;
}
