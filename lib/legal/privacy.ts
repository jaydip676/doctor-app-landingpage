import type { LegalPageContent } from "@/lib/legal/types";
import {
  BRAND_LINE,
  CONTACT_EMAIL,
  GRIEVANCE_EMAIL,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  PRODUCT_NAME,
} from "@/lib/legal/constants";

export const privacyPolicy: LegalPageContent = {
  title: "Privacy policy",
  description: `How ${LEGAL_ENTITY} collects, uses, and protects personal data when you use ${BRAND_LINE} and related services.`,
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      paragraphs: [
        `This Privacy Policy explains how ${LEGAL_ENTITY} (“we”, “us”, “our”) processes personal data in connection with ${PRODUCT_NAME} (“Platform”), our clinic management software, websites, mobile experiences, and support channels.`,
        "We design the Platform for healthcare providers in India. Because we handle sensitive personal data—including health and clinical information—we apply heightened safeguards and process data only as described here, in our agreements with clinics, and as permitted by applicable law, including the Digital Personal Data Protection Act, 2023 (“DPDP Act”) and rules thereunder, and other sectoral requirements where they apply.",
      ],
    },
    {
      id: "roles",
      title: "2. Who is responsible for your data?",
      paragraphs: [
        "For data processed about clinic staff, administrators, and visitors to our marketing sites, LamprosTech is generally the data fiduciary.",
        "For patient and clinical records entered by a clinic into the Platform, the clinic (or its legal entity) is typically the data fiduciary and LamprosTech acts as a data processor, processing personal data only on the clinic’s documented instructions, under contract, and for providing the contracted services.",
        "If you are a patient, please contact your clinic first for questions about your medical record. We will support the clinic in fulfilling lawful requests.",
      ],
    },
    {
      id: "collect",
      title: "3. Personal data we collect",
      paragraphs: ["Depending on how you interact with us, we may collect:"],
      bullets: [
        "Identity and contact data: name, phone number, email, clinic name, role, address.",
        "Account and authentication data: login identifiers, session tokens, audit logs.",
        "Clinical and operational data uploaded by clinics: appointments, demographics, clinical notes, prescriptions, billing, documents, and communications metadata required to run the Platform.",
        "Technical data: IP address, device type, browser, logs, cookies, and similar technologies on our websites.",
        "Support and sales data: messages, call notes, demo requests, and feedback you choose to share.",
      ],
    },
    {
      id: "use",
      title: "4. How we use personal data",
      paragraphs: ["We use personal data to:"],
      bullets: [
        "Provide, secure, maintain, and improve the Platform.",
        "Authenticate users, enforce role-based access, and prevent fraud or abuse.",
        "Send service, security, and transactional communications.",
        "Provide customer support and onboarding.",
        "Comply with law, respond to lawful requests, and protect rights and safety.",
        "Generate aggregated, de-identified analytics that do not identify individuals or clinics.",
      ],
    },
    {
      id: "legal-bases",
      title: "5. Legal bases and consent",
      paragraphs: [
        "Where the DPDP Act applies, we rely on consent, legitimate uses permitted by law, or other lawful grounds as appropriate. Clinics are responsible for obtaining valid consent from patients and staff where required before entering personal data into the Platform.",
        "You may withdraw consent for optional processing (such as marketing emails from LamprosTech) without affecting the lawfulness of processing before withdrawal. Core service processing may continue where necessary to perform our contract with your clinic or as required by law.",
      ],
    },
    {
      id: "health",
      title: "6. Health and sensitive personal data",
      paragraphs: [
        "Health data is processed only for delivering clinic operations, as instructed by the clinic, with encryption in transit and at rest, access controls, tenant isolation, and audit trails as described in our security documentation.",
        "We do not sell personal data. We do not use patient clinical content for advertising.",
      ],
    },
    {
      id: "sharing",
      title: "7. Sharing and subprocessors",
      paragraphs: [
        "We may share personal data with infrastructure and security providers (e.g. cloud hosting) under confidentiality and data-processing terms; integration partners you or your clinic enable (labs, payment gateways, messaging providers); and professional advisers or authorities when required by law or to protect rights and safety.",
        `A current list of material subprocessors is available on request at ${PRIVACY_EMAIL}. We require subprocessors that process personal data to implement appropriate safeguards.`,
      ],
    },
    {
      id: "retention",
      title: "8. Retention",
      paragraphs: [
        "We retain personal data for as long as needed to provide the Platform, meet contractual and legal obligations, resolve disputes, and enforce agreements. Clinic customer data is retained according to the clinic’s subscription and our data-processing agreement; upon termination, export and deletion are handled as set out in that agreement.",
        "Backup copies may persist for a limited period in encrypted backup systems before automatic purging.",
      ],
    },
    {
      id: "security",
      title: "9. Security",
      paragraphs: [
        `We implement administrative, technical, and organizational measures including encryption, access control, monitoring, and regular backups. No method of transmission or storage is completely secure; we encourage strong passwords and prompt reporting of suspected incidents to ${CONTACT_EMAIL}.`,
      ],
    },
    {
      id: "international",
      title: "10. Cross-border processing",
      paragraphs: [
        "Primary hosting is designed for Indian clinic workloads. If personal data is transferred outside India, we do so only with appropriate safeguards and as permitted under applicable law.",
      ],
    },
    {
      id: "children",
      title: "11. Children",
      paragraphs: [
        "The Platform is not directed at children to sign up independently. Pediatric records may be processed when entered by a clinic with appropriate guardian consent and clinical necessity.",
      ],
    },
    {
      id: "rights",
      title: "12. Your rights",
      paragraphs: [
        `Depending on your role and applicable law, you may have rights to access, correct, erase, withdraw consent, nominate another person to exercise rights in certain circumstances, and grievance redressal. Details and how to exercise these rights are in our Data rights page. You may also contact ${PRIVACY_EMAIL}.`,
      ],
    },
    {
      id: "cookies",
      title: "13. Cookies and similar technologies",
      paragraphs: [
        "Our websites use essential cookies for security and preferences (such as theme). We minimize non-essential tracking on the marketing site. You can control cookies through browser settings; some features may not work if essential cookies are disabled.",
      ],
    },
    {
      id: "changes",
      title: "14. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. We will post the revised version with an updated date and, where changes are material, provide additional notice through the Platform or email.",
      ],
    },
    {
      id: "contact",
      title: "15. Contact and grievance officer",
      paragraphs: [
        `Privacy enquiries: ${PRIVACY_EMAIL}`,
        `Grievance officer (DPDP): ${GRIEVANCE_EMAIL}`,
        `General contact: ${CONTACT_EMAIL}`,
      ],
    },
  ],
};
