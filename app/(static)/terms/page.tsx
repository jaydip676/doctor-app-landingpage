import type { Metadata } from "next";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { termsOfService } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms of service",
  description: termsOfService.description,
};

export default function TermsPage() {
  return <DocumentPage content={termsOfService} />;
}
