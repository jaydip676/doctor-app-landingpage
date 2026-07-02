import Link from "next/link";
import { announcement } from "@/lib/home-content";

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[25] bg-[var(--announcement-bg)] text-[var(--announcement-fg)] text-center text-[12.5px] sm:text-[13px] border-b border-[var(--announcement-border)]">
      <Link
        href={announcement.href}
        className="flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-[var(--announcement-hover)] transition-colors"
      >
        <span className="font-bold uppercase tracking-widest text-[10px] sm:text-[11px] text-[var(--announcement-badge-fg)] bg-[var(--announcement-badge-bg)] px-2 py-0.5 rounded-full">
          {announcement.label}
        </span>
        <span className="truncate">{announcement.message}</span>
        <span className="shrink-0 opacity-80" aria-hidden>
          →
        </span>
      </Link>
    </div>
  );
}
