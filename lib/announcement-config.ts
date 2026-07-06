import { announcement as announcementDefaults } from "@/lib/home-content";

export type AnnouncementConfig = {
  label: string;
  message: string;
  href?: string;
};

function parseEnabled(): boolean | undefined {
  const raw = process.env.ANNOUNCEMENT_ENABLED?.trim().toLowerCase();
  if (!raw) return undefined;
  if (raw === "true" || raw === "1" || raw === "yes") return true;
  if (raw === "false" || raw === "0" || raw === "no") return false;
  return undefined;
}

function resolveHref(messageFromEnv: string | undefined): string | undefined {
  const hrefEnv = process.env.ANNOUNCEMENT_HREF;
  if (hrefEnv !== undefined) {
    const trimmed = hrefEnv.trim();
    return trimmed || undefined;
  }
  if (messageFromEnv) return undefined;
  return announcementDefaults.href;
}

/** Top announcement bar: controlled via ANNOUNCEMENT_ENABLED, ANNOUNCEMENT_MESSAGE, ANNOUNCEMENT_HREF, ANNOUNCEMENT_LABEL. */
export function resolveAnnouncement(): AnnouncementConfig | null {
  const enabledFlag = parseEnabled();
  const messageFromEnv = process.env.ANNOUNCEMENT_MESSAGE?.trim();
  const message = messageFromEnv ?? announcementDefaults.message;
  const trimmedMessage = message.trim();

  if (enabledFlag === false) return null;
  if (!trimmedMessage) return null;

  const label =
    process.env.ANNOUNCEMENT_LABEL?.trim() || announcementDefaults.label;
  const href = resolveHref(messageFromEnv);

  return {
    label,
    message: trimmedMessage,
    href,
  };
}
