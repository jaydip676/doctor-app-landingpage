import Link from "next/link";
import type { ReactNode } from "react";
import { isExternalUrl } from "@/lib/book-demo-url";

type ButtonVariant = "primary" | "ghost";

const base =
  "inline-flex items-center gap-[9px] font-semibold text-[clamp(15px,0.99vw,20px)] rounded-full transition";

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-primary bg-[var(--btn-primary-bg)] !text-[var(--btn-primary-fg)] px-[clamp(26px,1.72vw,34px)] py-[clamp(15px,0.99vw,20px)] shadow-[var(--btn-primary-shadow)] hover:-translate-y-0.5 transition-transform duration-[250ms]",
  ghost:
    "text-ink border border-line bg-[var(--btn-ghost-fill)] px-[clamp(24px,1.59vw,32px)] py-[clamp(15px,0.99vw,20px)] hover:border-ink-faint duration-[250ms]",
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
    const external = isExternalUrl(href);
    return (
      <Link
        href={href}
        className={className}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
}
