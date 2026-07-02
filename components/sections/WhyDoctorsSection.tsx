import { SplitSection } from "@/components/layout/SectionShell";
import { Accent, Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { FeatureList } from "@/components/ui/ContentBlocks";

const features = [
  {
    title: "Smart appointments",
    body: "Never deal with double bookings again.",
  },
  {
    title: "Digital patient records",
    body: "Every patient's history available in seconds.",
  },
  {
    title: "Digital prescriptions",
    body: "Finish them before the patient leaves the room.",
  },
  {
    title: "Automated billing",
    body: "Get paid faster, with fewer mistakes.",
  },
  {
    title: "Follow-up reminders",
    body: "Patients actually return on time.",
  },
  {
    title: "Clinic analytics",
    body: "Know exactly how your clinic is performing.",
  },
];

export function WhyDoctorsSection() {
  return (
    <SplitSection align="left">
      <Eyebrow>
        <span className="motion-reveal">Why doctors love it</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          Built around <Accent>outcomes</Accent>, not features.
        </span>
      </SectionTitle>
      <div className="motion-reveal">
        <FeatureList items={features} />
      </div>
    </SplitSection>
  );
}
