import Link from "next/link";
import { resolveAnnouncement } from "@/lib/announcement-config";

const barClassName =
  "fixed top-0 inset-x-0 z-[25] bg-[var(--announcement-bg)] text-[var(--announcement-fg)] text-[12.5px] sm:text-[13px] border-b border-[var(--announcement-border)]";

const rowClassName = "flex items-center min-h-[42px] py-2.5";

function AnnouncementBadge({ label }: { label: string }) {
  return (
    <span className="shrink-0 ml-4 sm:ml-5 font-bold uppercase tracking-widest text-[10px] sm:text-[11px] text-[var(--announcement-badge-fg)] bg-[var(--announcement-badge-bg)] px-2 py-0.5 rounded-full">
      {label}
    </span>
  );
}

function MessageSegment({
  message,
  linked,
  duplicate,
}: {
  message: string;
  linked: boolean;
  duplicate?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap ${
        duplicate ? "announcement-marquee-duplicate" : ""
      }`}
      aria-hidden={duplicate || undefined}
    >
      <span>{message}</span>
      {linked ? (
        <span className="shrink-0 opacity-80" aria-hidden>
          →
        </span>
      ) : null}
    </span>
  );
}

function AnnouncementMarquee({
  message,
  linked,
}: {
  message: string;
  linked: boolean;
}) {
  return (
    <div className="flex-1 min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className="announcement-marquee-track flex w-max items-center gap-12 pr-12">
        <MessageSegment message={message} linked={linked} />
        <MessageSegment message={message} linked={linked} duplicate />
      </div>
    </div>
  );
}

export function AnnouncementBar() {
  const config = resolveAnnouncement();
  const height = config ? "42px" : "0px";
  const linked = Boolean(config?.href);

  const row = config ? (
    <div className={rowClassName}>
      <AnnouncementBadge label={config.label} />
      <AnnouncementMarquee message={config.message} linked={linked} />
    </div>
  ) : null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --announcement-height: ${height}; }`,
        }}
      />
      {config ? (
        <div className={barClassName}>
          {config.href ? (
            <Link
              href={config.href}
              className="block hover:bg-[var(--announcement-hover)] transition-colors"
            >
              {row}
            </Link>
          ) : (
            row
          )}
        </div>
      ) : null}
    </>
  );
}
