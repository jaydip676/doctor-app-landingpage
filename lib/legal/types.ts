export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  sections: LegalSection[];
};
