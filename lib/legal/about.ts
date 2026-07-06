import type { LegalPageContent } from "@/lib/legal/types";
import { BRAND_LINE, LEGAL_ENTITY, PRODUCT_NAME } from "@/lib/legal/constants";

export const aboutPage: LegalPageContent = {
  title: "About us",
  description: `${BRAND_LINE} — built in India for clinics that want one calm, connected workflow.`,
  sections: [
    {
      id: "mission",
      title: "Our mission",
      paragraphs: [
        `We started ${LEGAL_ENTITY} because small and mid-sized clinics deserve software that feels as considered as consumer apps—without sacrificing clinical rigour or compliance.`,
        `${PRODUCT_NAME} brings appointments, patient records, prescriptions, billing, labs, pharmacy, and follow-ups into one live record so reception, doctors, and back office stop reconciling spreadsheets and chat threads.`,
      ],
    },
    {
      id: "product",
      title: "What we build",
      paragraphs: [
        "Healthcare Management is a clinic operating system: role-based access, tenant isolation, encrypted storage, and integrations for UPI, WhatsApp, labs, and patient OTP portals—designed for Indian workflows including ABDM readiness on our roadmap.",
      ],
    },
    {
      id: "team",
      title: "Who we are",
      paragraphs: [
        "LamprosTech is a product-led team based in Gujarat, working closely with pilot clinics across Gujarat and Maharashtra. We ship with clinicians in the loop—not from a distant playbook.",
      ],
    },
    {
      id: "values",
      title: "How we work",
      paragraphs: ["Principles that guide us:"],
      bullets: [
        "Clarity over feature sprawl—every screen should earn its place in a busy OPD.",
        "Security and privacy by design, not as a brochure afterthought.",
        "Honest roadmaps: we label what is live, what is pilot, and what is planned.",
      ],
    },
  ],
};
