import type { LegalPageContent } from "@/lib/legal/types";
import {
  BRAND_LINE,
  GRIEVANCE_EMAIL,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  PRODUCT_NAME,
} from "@/lib/legal/constants";

export const dataRights: LegalPageContent = {
  title: "Data rights",
  description: `How to exercise your personal data rights under applicable law, including India’s DPDP Act, in connection with ${BRAND_LINE}.`,
  sections: [
    {
      id: "overview",
      title: "1. Overview",
      paragraphs: [
        `${LEGAL_ENTITY} respects your rights over personal data. This page explains how individuals—including clinic staff, administrators, and patients—can exercise rights in connection with ${PRODUCT_NAME}.`,
        "If your data is held by a clinic in the Platform, the clinic is usually your first point of contact. We will assist clinics in responding within our role as processor.",
      ],
    },
    {
      id: "rights-list",
      title: "2. Rights you may have",
      paragraphs: ["Subject to applicable law, you may have the right to:"],
      bullets: [
        "Confirm whether we process your personal data and obtain a summary.",
        "Access personal data we hold about you in a readable form.",
        "Correct inaccurate or incomplete personal data.",
        "Erase personal data when retention is no longer necessary or consent is withdrawn, subject to legal exceptions.",
        "Withdraw consent for processing that is based on consent (without affecting prior lawful processing).",
        "Nominate another individual to exercise rights on your behalf in the event of death or incapacity, as permitted under the DPDP Act.",
        "Seek grievance redressal and escalate to the Data Protection Board of India where applicable.",
      ],
    },
    {
      id: "how",
      title: "3. How to submit a request",
      paragraphs: [
        `Email ${PRIVACY_EMAIL} with the subject line “Data rights request”. Include your full name, contact phone or email, clinic name (if applicable), and a clear description of your request. We may ask for reasonable verification before acting on sensitive requests.`,
        "Patients seeking access to medical records should contact their treating clinic directly; we will support verified clinic requests from authorized administrators.",
      ],
    },
    {
      id: "timelines",
      title: "4. Response timelines",
      paragraphs: [
        "We aim to acknowledge requests within seven (7) business days and respond substantively within timelines required by applicable law, typically within thirty (30) days unless extension is permitted and communicated.",
      ],
    },
    {
      id: "limitations",
      title: "5. When we may decline or limit",
      paragraphs: [
        "We may refuse or limit requests that are manifestly unfounded, repetitive, would impair others’ rights, or conflict with legal retention obligations (for example, clinical records that must be retained under healthcare regulations). We will explain the reason where required by law.",
      ],
    },
    {
      id: "grievance",
      title: "6. Grievance redressal",
      paragraphs: [
        `If you are dissatisfied with our response, contact our Grievance Officer at ${GRIEVANCE_EMAIL}. We will review and respond in accordance with the DPDP Act and applicable rules.`,
      ],
    },
    {
      id: "related",
      title: "7. Related policies",
      paragraphs: [
        "See our Privacy Policy and Communication Policy for broader information on processing and messaging preferences.",
      ],
    },
  ],
};
