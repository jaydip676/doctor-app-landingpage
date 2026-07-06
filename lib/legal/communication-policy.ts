import type { LegalPageContent } from "@/lib/legal/types";
import {
  BRAND_LINE,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  PRODUCT_NAME,
} from "@/lib/legal/constants";

export const communicationPolicy: LegalPageContent = {
  title: "Communication policy",
  description: `How ${LEGAL_ENTITY} and clinics using ${PRODUCT_NAME} send SMS, WhatsApp, email, and in-app messages.`,
  sections: [
    {
      id: "scope",
      title: "1. Scope",
      paragraphs: [
        `This Communication Policy describes how messages are sent through ${BRAND_LINE} and related channels. It applies to transactional service messages from LamprosTech to account holders, and to patient-facing messages sent by clinics via integrated providers.`,
      ],
    },
    {
      id: "channels",
      title: "2. Channels we use",
      paragraphs: ["Depending on configuration, the Platform may support:"],
      bullets: [
        "SMS and WhatsApp for appointment reminders, queue updates, and prescription or billing notifications.",
        "Email for account security, onboarding, and optional product updates from LamprosTech.",
        "In-app and web notifications within the clinic workspace.",
        "Phone or WhatsApp for sales and support when you contact us or request a demo.",
      ],
    },
    {
      id: "transactional",
      title: "3. Transactional vs promotional",
      paragraphs: [
        "Transactional messages are necessary to deliver care operations or the service—for example OTP login, appointment confirmations, or payment receipts. Clinics configure templates and triggers; message content is the clinic’s responsibility.",
        "Promotional messages from LamprosTech about product features or events are sent only with appropriate consent and include opt-out where required. Clinics must obtain patient consent before marketing health offers via the Platform.",
      ],
    },
    {
      id: "clinic-responsibility",
      title: "4. Clinic responsibilities",
      paragraphs: [
        "Clinics using the Platform must comply with TRAI DND/telemarketing rules, WhatsApp Business policies, and patient consent requirements. Do not send unlawful spam or sensitive clinical details over channels patients have not agreed to.",
        "Clinics should maintain records of consent and honour opt-out requests promptly.",
      ],
    },
    {
      id: "lampros",
      title: "5. LamprosTech service messages",
      paragraphs: [
        `We may contact account administrators about security alerts, billing, downtime, or support tickets. You can manage non-essential product email preferences by replying STOP where offered or writing to ${CONTACT_EMAIL}.`,
      ],
    },
    {
      id: "providers",
      title: "6. Delivery providers",
      paragraphs: [
        "Messages may be routed through third-party telecom or messaging providers. Those providers process delivery metadata under their terms and our data-processing agreements.",
      ],
    },
    {
      id: "opt-out",
      title: "7. Opting out",
      paragraphs: [
        "Patients should follow opt-out instructions in messages from their clinic or contact the clinic directly.",
        `Account holders may opt out of optional LamprosTech marketing at ${CONTACT_EMAIL}. Security and legal notices may still be sent.`,
      ],
    },
    {
      id: "privacy",
      title: "8. Privacy",
      paragraphs: [
        `Personal data in communications is handled per our Privacy Policy. Questions: ${PRIVACY_EMAIL}.`,
      ],
    },
  ],
};
