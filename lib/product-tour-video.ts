const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "youtube-nocookie.com",
  "youtu.be",
]);

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\./, "");
}

/** YouTube watch / share URL → embed URL for iframe src. */
export function toYouTubeEmbedUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    const host = normalizeHost(url.hostname);

    if (!YOUTUBE_HOSTS.has(host)) return null;

    if (host === "youtu.be") {
      const id = url.pathname.replace(/^\//, "").split("/")[0];
      return id ? buildEmbedUrl(id, url.search) : null;
    }

    if (url.pathname.startsWith("/embed/")) {
      const nocookie = new URL(url.toString());
      if (host === "youtube.com") {
        nocookie.hostname = "www.youtube-nocookie.com";
      }
      return withDefaultEmbedParams(nocookie);
    }

    const v = url.searchParams.get("v");
    if (v) return buildEmbedUrl(v, "");
  } catch {
    return null;
  }

  return null;
}

function buildEmbedUrl(videoId: string, search: string): string {
  const params = new URLSearchParams(search.replace(/^\?/, ""));
  const url = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
  params.forEach((value, key) => url.searchParams.set(key, value));
  return withDefaultEmbedParams(url);
}

function withDefaultEmbedParams(url: URL): string {
  if (!url.searchParams.has("rel")) url.searchParams.set("rel", "0");
  if (!url.searchParams.has("modestbranding")) {
    url.searchParams.set("modestbranding", "1");
  }
  return url.toString();
}

/** From `NEXT_PUBLIC_PRODUCT_TOUR_VIDEO_URL` (watch or embed link). */
export function getProductTourVideoEmbedUrl(): string {
  const raw = process.env.NEXT_PUBLIC_PRODUCT_TOUR_VIDEO_URL?.trim() ?? "";
  if (!raw) return "";
  return toYouTubeEmbedUrl(raw) ?? "";
}
