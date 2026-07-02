import { SplitSection } from "@/components/layout/SectionShell";
import { Accent, Eyebrow, SectionTitle } from "@/components/ui/Typography";
import { FlowList } from "@/components/ui/ContentBlocks";

export function ImagineSection() {
  return (
    <SplitSection align="left">
      <Eyebrow>
        <span className="motion-reveal">Imagine</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          What if your clinic <Accent>ran itself</Accent>?
        </span>
      </SectionTitle>
      <div className="motion-reveal">
        <FlowList
          items={[
            {
              title: "Appointment arrives",
              body: "and the patient checks in.",
            },
            {
              title: "History appears",
              body: "automatically, in seconds.",
            },
            {
              title: "Prescription is written",
              body: "before they leave the room.",
            },
            {
              title: "Billing is generated",
              body: "and the follow-up reminder is sent.",
            },
            {
              title: "Analytics update",
              body: "— everything connected, nothing re-keyed.",
            },
          ]}
        />
      </div>
    </SplitSection>
  );
}
