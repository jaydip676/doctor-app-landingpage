/** Calendly or other booking URL for “Book a demo” CTAs (header, hero). */
export const bookDemoUrl =
  process.env.NEXT_PUBLIC_BOOK_DEMO_URL?.trim() ||
  "https://calendly.com/harshil_lamprostech/free-consultation";

export function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
