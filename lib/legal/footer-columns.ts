import { footerLinkHref } from "@/lib/legal/footer-links";

const columns = [
  {
    title: "Platform",
    links: ["Overview", "Specialties", "Security"],
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
] as const;

export { columns, footerLinkHref };
