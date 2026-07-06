import type { Metadata } from "next";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { communicationPolicy } from "@/lib/legal/communication-policy";

export const metadata: Metadata = {
  title: "Communication policy",
  description: communicationPolicy.description,
};

export default function CommunicationPolicyPage() {
  return <DocumentPage content={communicationPolicy} />;
}
