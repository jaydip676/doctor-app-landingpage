import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";

export function FinalCtaSection() {
  return (
    <SplitSection align="right">
      <Eyebrow>
        <span className="motion-reveal">Get started</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          Spend less time managing your clinic.{" "}
          <Accent>Spend more time treating patients.</Accent>
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-reveal">
          Start free in minutes, or book a 20-minute live demo on a real demo
          clinic — no setup needed.
        </span>
      </Lede>
      <div className="flex flex-wrap gap-3 mt-[28px] motion-reveal">
        <Button href="mailto:hello@lampros.tech">
          Start free trial <ArrowIcon />
        </Button>
        <Button variant="ghost" href="tel:+919033779620">
          Book demo
        </Button>
      </div>
    </SplitSection>
  );
}
