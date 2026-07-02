import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";
import { Note } from "@/components/ui/ContentBlocks";
import { PainGrid } from "@/components/ui/PainGrid";

export function RealitySection() {
  return (
    <SplitSection align="right">
      <Eyebrow>
        <span className="motion-reveal">The daily reality</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          Running a clinic shouldn&apos;t feel like running{" "}
          <Accent>five different businesses</Accent>.
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-reveal">
          Doctors don&apos;t struggle with medicine. They struggle with everything
          around it.
        </span>
      </Lede>
      <div className="motion-reveal">
        <PainGrid
          items={[
            { icon: "appointments", label: "Managing appointments" },
            { icon: "prescriptions", label: "Paper prescriptions" },
            { icon: "billing", label: "Billing mistakes" },
            { icon: "calls", label: "Endless patient calls" },
            { icon: "history", label: "Lost patient history" },
            { icon: "waiting", label: "Long waiting times" },
          ]}
        />
      </div>
      <Note>
        <span className="motion-reveal">
          Every extra minute spent on administration is one less minute spent with
          patients.
        </span>
      </Note>
    </SplitSection>
  );
}
