import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { SplitSection } from "@/components/layout/SectionShell";
import { VideoTourTrigger } from "@/components/sections/VideoTourModal";
import { bookDemoUrl } from "@/lib/book-demo-url";
import {
  Accent,
  Eyebrow,
  Lede,
  SectionTitle,
} from "@/components/ui/Typography";

export function HeroSection() {
  return (
    <SplitSection align="left" scrollCue wideContent>
      <Eyebrow>
        <span className="motion-in">
          The operating system for modern clinics
        </span>
      </Eyebrow>
      <SectionTitle as="h1">
        <span className="block motion-in">Your clinic.</span>
        <span className="block motion-in">Finally running</span>
        <span className="block motion-in">
          like <Accent>it should</Accent>.
        </span>
      </SectionTitle>
      <Lede>
        <span className="motion-in">
          Appointments, patients, prescriptions, billing and follow-ups — from
          one beautifully simple platform, so you spend less time on admin and
          more time with patients.
        </span>
      </Lede>
      <div className="flex flex-wrap items-center gap-3 mt-[28px] motion-in">
        <Button href={bookDemoUrl}>
          Book live demo <ArrowIcon />
        </Button>
        <VideoTourTrigger />
      </div>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-[30px] text-[12.5px] text-ink-soft motion-in">
        <span className="text-teal shrink-0">★★★★★</span>
        <span>
          <b className="text-ink font-semibold">Trusted by 500+ doctors</b>
        </span>
        <span>
          <b className="text-ink font-semibold">98%</b> faster record access
        </span>
        <span>
          <b className="text-ink font-semibold">99.9%</b> uptime
        </span>
        <span>
          <b className="text-ink font-semibold">Secure</b> by design
        </span>
      </div>
    </SplitSection>
  );
}
