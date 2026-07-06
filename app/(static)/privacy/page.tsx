import type { Metadata } from "next";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { privacyPolicy } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: privacyPolicy.description,
};

export default function PrivacyPage() {
  return <DocumentPage content={privacyPolicy} />;
}
