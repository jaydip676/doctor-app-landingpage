import type { LegalPageContent } from "@/lib/legal/types";
import {
  BRAND_LINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  LEGAL_ENTITY,
} from "@/lib/legal/constants";
import { whatsappUrl } from "@/lib/home-content";

export const contactPage: LegalPageContent = {
  title: "Contact",
  description: `Reach the ${LEGAL_ENTITY} team for demos, support, and partnerships.`,
  sections: [
    {
      id: "sales",
      title: "Sales & demos",
      paragraphs: [
        `Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE} to book a live walkthrough of ${BRAND_LINE}.`,
        "You can also reach us on WhatsApp via the link on the homepage final call-to-action.",
      ],
    },
    {
      id: "support",
      title: "Customer support",
      paragraphs: [
        "Existing clinic customers: use in-app support or email hello@lampros.tech with your clinic name and issue severity. Security incidents should be marked “Security” in the subject line.",
      ],
    },
    {
      id: "privacy",
      title: "Privacy & data rights",
      paragraphs: [
        "privacy@lampros.tech — privacy enquiries and data rights requests.",
        "grievance@lampros.tech — grievance officer under the DPDP Act.",
      ],
    },
    {
      id: "hours",
      title: "Hours",
      paragraphs: [
        "We respond to sales enquiries within one business day, typically Monday–Saturday, India Standard Time.",
      ],
    },
  ],
};

export const contactActions = {
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  phoneHref: CONTACT_PHONE_HREF,
  whatsappUrl,
};
