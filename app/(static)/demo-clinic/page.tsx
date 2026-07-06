import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { Button } from "@/components/ui/Button";
import { demoClinicPage } from "@/lib/legal/demo-clinic";
import { splitContainerClass } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Demo clinic",
  description: demoClinicPage.description,
};

export default function DemoClinicPage() {
  return (
    <>
      <DocumentPage content={demoClinicPage} showUpdated={false} />
      <div className={`${splitContainerClass} max-w-[780px] -mt-4 pb-4 flex flex-wrap gap-3`}>
        <Button href="/#seeit">Interactive demo</Button>
        <Button variant="ghost" href="/contact">
          Book live demo
        </Button>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-teal-ink hover:text-teal px-2"
        >
          Back to homepage →
        </Link>
      </div>
    </>
  );
}
