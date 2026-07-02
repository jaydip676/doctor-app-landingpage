import { WideHeader, WideSection } from "@/components/layout/SectionShell";

const faqs = [
  {
    q: "Can I migrate existing patient data?",
    a: "Yes — bulk import is built in for both patients and past visits, so you start with your history already in place.",
  },
  {
    q: "Can multiple staff members use it?",
    a: "Yes. Reception, lab and pharmacy each get their own dashboard, with permission-based access you control as the doctor.",
  },
  {
    q: "Is patient data secure?",
    a: "Clinical files are stored securely on AWS S3, with row-level isolation between clinics, encrypted credentials, an audit trail and automated backups.",
  },
  {
    q: "Can I use it on mobile?",
    a: "Yes. Both staff dashboards and the patient portal work in any browser — patients log in with a simple OTP, no app required.",
  },
  {
    q: "Can prescriptions be printed?",
    a: "Every prescription generates a signed PDF instantly, ready to print or share digitally with the patient.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are live in days — configure locations and schedules, add your team, and start booking and collecting from day one.",
  },
];

export function FaqSection() {
  return (
    <WideSection id="faq" alt>
      <WideHeader
        title="Questions, answered."
        description="The things doctors ask first."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 md:gap-y-4 max-w-[1000px] mx-auto motion-reveal">
        {faqs.map((item) => (
          <div key={item.q}>
            <b className="block font-semibold mb-1.5">{item.q}</b>
            <p className="text-ink-soft text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </WideSection>
  );
}
