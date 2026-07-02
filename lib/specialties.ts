export type Specialty = {
  slug: string;
  title: string;
  subtitle: string;
  kpis: [string, string, string];
  kpiLabels: [string, string, string];
  row1: string;
  row2: string;
};

export const specialties: Specialty[] = [
  {
    slug: "general-physician",
    title: "General Physician workspace",
    subtitle:
      "Tuned templates, fields and follow-up rules for general practice.",
    kpis: ["18", "12 min", "6"],
    kpiLabels: ["visits today", "avg consult", "follow-ups due"],
    row1: "Common template · Fever & infection",
    row2: "Quick Rx · Paracetamol, Azithromycin",
  },
  {
    slug: "pediatrician",
    title: "Pediatrician workspace",
    subtitle:
      "Growth charts, weight-based dosing and vaccination schedules built in.",
    kpis: ["22", "10 min", "9"],
    kpiLabels: ["visits today", "avg consult", "vaccines due"],
    row1: "Growth chart · weight & height percentile",
    row2: "Weight-based dosing · auto-calculated",
  },
  {
    slug: "gynecologist",
    title: "Gynecologist workspace",
    subtitle: "Cycle tracking, ANC visit timelines and report-driven follow-ups.",
    kpis: ["14", "18 min", "5"],
    kpiLabels: ["visits today", "avg consult", "ANC due"],
    row1: "ANC timeline · trimester milestones",
    row2: "Report template · USG & bloodwork",
  },
  {
    slug: "orthopedic",
    title: "Orthopedic workspace",
    subtitle: "Imaging-heavy records, procedure notes and physio follow-ups.",
    kpis: ["16", "15 min", "7"],
    kpiLabels: ["visits today", "avg consult", "reviews due"],
    row1: "Imaging · X-ray & MRI annotation",
    row2: "Procedure note · post-op protocol",
  },
  {
    slug: "dermatologist",
    title: "Dermatologist workspace",
    subtitle: "Before/after photo timelines and treatment-course tracking.",
    kpis: ["26", "9 min", "11"],
    kpiLabels: ["visits today", "avg consult", "courses active"],
    row1: "Photo timeline · before & after",
    row2: "Treatment course · session tracker",
  },
  {
    slug: "dentist",
    title: "Dentist workspace",
    subtitle: "Tooth charting, treatment plans and multi-sitting billing.",
    kpis: ["19", "20 min", "8"],
    kpiLabels: ["visits today", "avg consult", "plans open"],
    row1: "Tooth chart · interactive odontogram",
    row2: "Treatment plan · multi-sitting billing",
  },
  {
    slug: "cardiologist",
    title: "Cardiologist workspace",
    subtitle: "ECG/Echo records, risk flags and medication adherence.",
    kpis: ["13", "22 min", "6"],
    kpiLabels: ["visits today", "avg consult", "reviews due"],
    row1: "ECG & Echo · attached to timeline",
    row2: "Risk flags · BP & lipid trends",
  },
  {
    slug: "ent",
    title: "ENT workspace",
    subtitle: "Procedure templates, audiometry records and quick follow-ups.",
    kpis: ["21", "11 min", "7"],
    kpiLabels: ["visits today", "avg consult", "follow-ups due"],
    row1: "Audiometry · results on file",
    row2: "Procedure template · scope & note",
  },
];
