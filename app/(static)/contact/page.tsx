import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { Button } from "@/components/ui/Button";
import { contactActions, contactPage } from "@/lib/legal/contact";
import { splitContainerClass } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.description,
};

export default function ContactPage() {
  return (
    <>
      <DocumentPage content={contactPage} showUpdated={false} />
      <div className={`${splitContainerClass} max-w-[780px] -mt-4 pb-4`}>
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${contactActions.email}`}>Email us</Button>
          <Button variant="ghost" href={contactActions.phoneHref}>
            Call {contactActions.phone}
          </Button>
          <Button variant="ghost" href={contactActions.whatsappUrl}>
            WhatsApp
          </Button>
          <Link
            href="/demo-clinic"
            className="inline-flex items-center text-sm font-semibold text-teal-ink hover:text-teal px-2"
          >
            View demo clinic →
          </Link>
        </div>
      </div>
    </>
  );
}
