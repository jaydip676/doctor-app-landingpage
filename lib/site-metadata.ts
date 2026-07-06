import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://healthcare.lampros.tech";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

export const siteSeo = {
  siteName: "Lampros Healthcare",
  brandLine: "Healthcare Management by LamprosTech",
  title: "Lampros — your clinic, finally running like it should",
  description:
    "Appointments, patients, prescriptions, billing and follow-ups — from one beautifully simple platform. The operating system for modern clinics in India.",
  ogImagePath: "/og.png",
  ogImageAlt:
    "Lampros — Healthcare Management for modern clinics: patient summary and clinic dashboard",
  ogImageWidth: 1536,
  ogImageHeight: 1024,
  keywords: [
    "clinic management software",
    "healthcare management",
    "EMR India",
    "digital prescriptions",
    "clinic appointments",
    "OPD software",
    "LamprosTech",
    "Lampros Healthcare",
    "patient records",
    "clinic billing UPI",
    "ABDM clinic software",
  ],
} as const;

export function buildRootMetadata(): Metadata {
  const {
    title,
    description,
    siteName,
    ogImagePath,
    ogImageAlt,
    ogImageWidth,
    ogImageHeight,
    keywords,
  } = siteSeo;

  return {
    metadataBase: getMetadataBase(),
    title: {
      default: title,
      template: `%s · ${siteName}`,
    },
    description,
    keywords: [...keywords],
    applicationName: siteName,
    authors: [{ name: "LamprosTech", url: getSiteUrl() }],
    creator: "LamprosTech",
    publisher: "LamprosTech",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName,
      title,
      description,
      images: [
        {
          url: ogImagePath,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: {
        url: ogImagePath,
        alt: ogImageAlt,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    category: "healthcare",
  };
}

export const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/demo-clinic",
  "/privacy",
  "/terms",
  "/data-rights",
  "/communication-policy",
] as const;
