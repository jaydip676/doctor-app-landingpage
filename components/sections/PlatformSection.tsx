import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";
import { ChipRow } from "@/components/ui/ContentBlocks";

const modules = [
  "Appointments & OPD",
  "Patient records",
  "Digital prescriptions",
  "Payments & billing",
  "Communication",
  "Patient portal",
  "Analytics",
  "Real-time dashboard",
];

export function PlatformSection() {
  return (
    <SplitSection align="right">
      <Eyebrow>
        <span className="motion-reveal">The platform</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          One platform. <Accent>Every workflow</Accent>.
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-reveal">
          The operating system for modern clinics — eight connected modules that
          replace the patchwork of apps, registers and spreadsheets.
        </span>
      </Lede>
      <div className="motion-reveal">
        <ChipRow chips={modules} />
      </div>
    </SplitSection>
  );
}
