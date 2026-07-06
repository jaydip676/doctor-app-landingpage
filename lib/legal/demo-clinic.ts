import type { LegalPageContent } from "@/lib/legal/types";
import { BRAND_LINE, LEGAL_ENTITY, PRODUCT_NAME } from "@/lib/legal/constants";

export const demoClinicPage: LegalPageContent = {
  title: "Demo clinic",
  description: `See ${BRAND_LINE} with realistic OPD, queue, and prescription flows.`,
  sections: [
    {
      id: "what",
      title: "What you will see",
      paragraphs: [
        `Our demo clinic environment shows how ${PRODUCT_NAME} handles a typical day: online booking, front-desk check-in, doctor workstation, e-prescription, billing, and basic analytics—using sample data only.`,
      ],
      bullets: [
        "Appointment calendar and queue board",
        "Unified patient timeline and documents",
        "Prescription templates and share-ready PDFs",
        "UPI-ready billing and daily collection summary",
      ],
    },
    {
      id: "who",
      title: "Who it is for",
      paragraphs: [
        "Clinic owners, medical directors, and practice managers evaluating EMR or practice-management software in India.",
      ],
    },
    {
      id: "book",
      title: "Book a guided tour",
      paragraphs: [
        "Self-serve exploration is available on the homepage interactive demo. For a guided session with the LamprosTech team, use the Contact page or the “Book live demo” button on the homepage.",
      ],
    },
    {
      id: "pilot",
      title: "Pilot clinics",
      paragraphs: [
        `${LEGAL_ENTITY} runs structured pilots with select clinics. Pilots include onboarding support, feedback cycles, and preferred pricing when you convert to production. Ask us about ABDM-ready patient ID and digital prescription pilots.`,
      ],
    },
  ],
};
