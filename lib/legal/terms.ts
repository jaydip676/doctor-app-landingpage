import type { LegalPageContent } from "@/lib/legal/types";
import {
  BRAND_LINE,
  CONTACT_EMAIL,
  LEGAL_ENTITY,
  PRODUCT_NAME,
} from "@/lib/legal/constants";

export const termsOfService: LegalPageContent = {
  title: "Terms of service",
  description: `Terms governing access to and use of ${BRAND_LINE}.`,
  sections: [
    {
      id: "agreement",
      title: "1. Agreement",
      paragraphs: [
        `These Terms of Service (“Terms”) are a binding agreement between ${LEGAL_ENTITY} (“LamprosTech”) and the person or entity that registers for or uses ${PRODUCT_NAME} (“Platform”). By creating an account, clicking “I agree”, or using the Platform, you accept these Terms.`,
        "If you use the Platform on behalf of a clinic or organization, you represent that you have authority to bind that organization.",
      ],
    },
    {
      id: "service",
      title: "2. The service",
      paragraphs: [
        `${PRODUCT_NAME} by LamprosTech is a cloud clinic management platform for appointments, patient records, prescriptions, billing, integrations, and related workflows. Features may vary by plan and region. We may update the Platform to improve security, compliance, or functionality.`,
        "The Platform is a software tool. It does not provide medical advice, diagnosis, or treatment. Clinical decisions remain solely with licensed healthcare professionals and their institutions.",
      ],
    },
    {
      id: "accounts",
      title: "3. Accounts and eligibility",
      paragraphs: [
        "You must provide accurate registration information and keep credentials confidential. You are responsible for activity under your accounts. Notify us promptly of unauthorized access.",
        "You must be at least 18 years old (or the age of majority in your jurisdiction) to enter into these Terms for a clinic account.",
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the Platform in violation of law, including healthcare, privacy, or telecommunications regulations.",
        "Upload malware, attempt unauthorized access, or interfere with other users or systems.",
        "Misrepresent identity, scrape data without permission, or resell the Platform without written consent.",
        "Use the Platform to send unlawful spam or communications without required consent.",
      ],
    },
    {
      id: "customer-data",
      title: "5. Clinic and patient data",
      paragraphs: [
        "You retain ownership of data you submit. You grant LamprosTech a limited license to host, process, and display that data solely to provide and improve the Platform as permitted by your agreement and our Privacy Policy.",
        "You are responsible for lawful collection of patient data, notices, consents, and retention practices at your clinic.",
      ],
    },
    {
      id: "fees",
      title: "6. Fees and trials",
      paragraphs: [
        "Paid plans, if applicable, are billed as described at signup or in an order form. Taxes may apply. Failure to pay may result in suspension after notice. Trial or pilot terms may be specified separately in writing.",
      ],
    },
    {
      id: "ip",
      title: "7. Intellectual property",
      paragraphs: [
        "LamprosTech owns the Platform, branding, and documentation. These Terms do not grant ownership of our IP. Feedback you provide may be used to improve our services without obligation to you.",
      ],
    },
    {
      id: "confidentiality",
      title: "8. Confidentiality",
      paragraphs: [
        "Each party may receive confidential information from the other. The receiving party will protect it with reasonable care and use it only for the purpose of the relationship, except as required by law.",
      ],
    },
    {
      id: "availability",
      title: "9. Availability and support",
      paragraphs: [
        "We target high availability and provide support channels described on our website. Scheduled maintenance and factors outside our reasonable control may cause intermittent downtime. Business continuity and backup practices are described in our security materials.",
      ],
    },
    {
      id: "warranty",
      title: "10. Disclaimer of warranties",
      paragraphs: [
        "The Platform is provided “as is” and “as available” to the maximum extent permitted by law. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted or error-free operation.",
      ],
    },
    {
      id: "liability",
      title: "11. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, LamprosTech will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill. Our aggregate liability arising from these Terms or the Platform will not exceed the fees paid by you to LamprosTech in the twelve (12) months before the claim, or INR 50,000 if no fees were paid, whichever is greater, except where liability cannot be limited by law.",
      ],
    },
    {
      id: "indemnity",
      title: "12. Indemnity",
      paragraphs: [
        "You will indemnify and hold harmless LamprosTech from claims arising from your misuse of the Platform, violation of these Terms, or unlawful processing of personal data under your control as a clinic.",
      ],
    },
    {
      id: "termination",
      title: "13. Suspension and termination",
      paragraphs: [
        "Either party may terminate according to the subscription agreement. We may suspend access for material breach, security risk, or legal requirement after notice where practicable. Upon termination, we will handle export and deletion of customer data as set out in our data-processing terms.",
      ],
    },
    {
      id: "law",
      title: "14. Governing law and disputes",
      paragraphs: [
        "These Terms are governed by the laws of India. Courts at Ahmedabad, Gujarat shall have exclusive jurisdiction, subject to mandatory consumer protections where applicable.",
        "Parties will attempt good-faith resolution before litigation.",
      ],
    },
    {
      id: "changes",
      title: "15. Changes",
      paragraphs: [
        "We may modify these Terms. We will post updates with a new effective date and notify account holders of material changes. Continued use after the effective date constitutes acceptance.",
      ],
    },
    {
      id: "contact",
      title: "16. Contact",
      paragraphs: [`Questions about these Terms: ${CONTACT_EMAIL}`],
    },
  ],
};
