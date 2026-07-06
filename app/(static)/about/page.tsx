import type { Metadata } from "next";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { aboutPage } from "@/lib/legal/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.description,
};

export default function AboutPage() {
  return <DocumentPage content={aboutPage} showUpdated={false} />;
}
