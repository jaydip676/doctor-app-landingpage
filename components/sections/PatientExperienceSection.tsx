import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";
import { FeatureList, Note } from "@/components/ui/ContentBlocks";

export function PatientExperienceSection() {
  return (
    <SplitSection align="right" id="patients">
      <Eyebrow>
        <span className="motion-reveal">Patient experience</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          Doctors buy it. <Accent>Patients love it</Accent>.
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-reveal">
          The experience patients feel is what brings them back — and brings their
          family in.
        </span>
      </Lede>
      <div className="motion-reveal">
        <FeatureList
          items={[
            {
              title: "Online booking & QR check-in",
              body: "No phone calls, no waiting-room clipboard.",
            },
            {
              title: "SMS & WhatsApp reminders",
              body: "Fewer missed appointments, automatically.",
            },
            {
              title: "Digital prescriptions & reports",
              body: "On their phone, any time, no app store.",
            },
          ]}
        />
      </div>
      <Note>
        <span className="motion-reveal">
          Doctor benefits → patient happiness → more referrals.
        </span>
      </Note>
    </SplitSection>
  );
}
