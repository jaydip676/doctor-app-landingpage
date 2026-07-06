import type { Metadata } from "next";
import { DocumentPage } from "@/components/legal/DocumentPage";
import { dataRights } from "@/lib/legal/data-rights";

export const metadata: Metadata = {
  title: "Data rights",
  description: dataRights.description,
};

export default function DataRightsPage() {
  return <DocumentPage content={dataRights} />;
}
