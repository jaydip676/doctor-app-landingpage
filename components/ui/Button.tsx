import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-[9px] font-semibold text-[15px] rounded-full transition";

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-primary bg-[var(--btn-primary-bg)] !text-white px-[26px] py-[15px] shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5 transition-transform duration-[250ms]",
  ghost:
    "text-ink border border-line bg-white/60 px-6 py-[15px] hover:border-ink-faint duration-[250ms]",
};

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  const className = `${base} ${variants[variant]}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
}
