import { SplitSection } from "@/components/layout/SectionShell";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";
import { FeatureList } from "@/components/ui/ContentBlocks";

export function SecuritySection() {
  return (
    <SplitSection align="left" id="security">
      <Eyebrow>
        <span className="motion-reveal">Security & reliability</span>
      </Eyebrow>
      <SectionTitle>
        <span className="motion-reveal">
          Trusted with <Accent>what matters most</Accent>.
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-reveal">
          You&apos;re not just buying software — you&apos;re trusting it with
          people&apos;s health records.
        </span>
      </Lede>
      <div className="motion-reveal">
        <FeatureList
          items={[
            {
              title: "Encrypted data & secure sessions",
              body: "httpOnly cookies, refresh tokens, CSRF protection.",
            },
            {
              title: "Role-based permissions",
              body: "Reception, lab and pharmacy see only what they should.",
            },
            {
              title: "Row-level tenant isolation",
              body: "Every clinic's data stays its own.",
            },
            {
              title: "Daily backups & 99.9% uptime",
              body: "Automated full backups, with restore.",
            },
          ]}
        />
      </div>
    </SplitSection>
  );
}
