import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";
import { bookDemoUrl } from "@/lib/book-demo-url";

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
          Book a 20-minute live demo on a real demo clinic — no setup needed.
        </span>
      </Lede>
      <div className="flex flex-wrap gap-3 mt-[28px] motion-reveal">
        <Button href={bookDemoUrl}>
          Book a demo <ArrowIcon />
        </Button>
      </div>
    </SplitSection>
  );
}
