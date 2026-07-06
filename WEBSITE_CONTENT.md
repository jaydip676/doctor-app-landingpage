# Healthcare Management by LamprosTech — website knowledge base

Use this document as context for LLMs, support bots, and internal Q&A. It mirrors the Lampros healthcare landing site and related pages.

**Last compiled:** July 2026 (update when copy changes in the repo).

---

## Brand and product

| Item | Value |
|------|--------|
| Product name | Healthcare Management |
| Company | LamprosTech |
| Brand line | Healthcare Management by LamprosTech |
| Public brand / logo | Lampros. (display font) |
| Site title (SEO) | Lampros Healthcare — your clinic, finally running like it should |
| SEO description | Appointments, patients, prescriptions, billing and follow-ups — from one beautifully simple platform. |
| Tagline (footer) | The clinic operating system — one live record across patient, doctor, reception, lab and pharmacy. |

### Primary calls to action (current)

- **Book a demo / Book live demo** — opens `NEXT_PUBLIC_BOOK_DEMO_URL` (default: Calendly free consultation for Harshil at LamprosTech).
- **Watch the tour** — opens in-page video modal (embed URL from `productTourVideoUrl` when set; otherwise prompts user to try interactive demo at `#seeit`).
- **Email** — hello@lampros.tech
- **Phone** — +91 90337 79620
- **WhatsApp** — https://wa.me/919033779620 (prefilled clinic tour message)

### Announcement bar (optional, env-controlled)

- Label: New (default)
- Default message: ABDM-ready patient IDs & digital prescriptions — now in pilot clinics
- Controlled by `ANNOUNCEMENT_ENABLED`, `ANNOUNCEMENT_MESSAGE`, `ANNOUNCEMENT_HREF`, `ANNOUNCEMENT_LABEL`

---

## Site map and navigation

### Header links

- Platform → `/#seeit` (product demo)
- Specialties → `/#spec`
- Security → `/#security`
- Resources → `/#stories` (section may be hidden on homepage)
- **Book a demo** → Calendly / env URL

### Footer

**Platform:** Overview (`/`), Specialties (`/#spec`), Security (`/#security`)

**Company:** About (`/about`), Contact (`/contact`), Demo clinic (`/demo-clinic`), FAQ (`/#faq`)

**Legal:** Privacy policy (`/privacy`), Communication policy (`/communication-policy`), Data rights (`/data-rights`), Terms (`/terms`)

---

## Homepage sections (in scroll order)

### 1. Hero

- Eyebrow: The operating system for modern clinics
- Headline: Your clinic. Finally running like it should.
- Body: Appointments, patients, prescriptions, billing and follow-ups — from one beautifully simple platform, so you spend less time on admin and more time with patients.
- CTAs: Book live demo (primary); Watch the tour (secondary)
- Trust strip: ★★★★★ · Trusted by 500+ doctors · 98% faster record access · 99.9% uptime · Secure by design

### 2. Trusted by strip

- Title: Trusted by clinics across Gujarat & Maharashtra
- Cities (marquee): Ahmedabad, Surat, Pune, Mumbai, Rajkot, Vadodara, Gandhinagar, Nagpur

### 3. The daily reality

- Headline: Running a clinic shouldn't feel like running five different businesses.
- Lede: Doctors don't struggle with medicine. They struggle with everything around it.
- Pain points: Managing appointments; Paper prescriptions; Billing mistakes; Endless patient calls; Lost patient history; Long waiting times
- Note: Every extra minute spent on administration is one less minute spent with patients.

### 4. Imagine

- Headline: What if your clinic ran itself?
- Flow: Appointment arrives and the patient checks in → History appears automatically, in seconds → Prescription is written before they leave the room → Billing is generated and the follow-up reminder is sent → Analytics update — everything connected, nothing re-keyed.

### 5. The platform

- Headline: One platform. Every workflow.
- Lede: The operating system for modern clinics — eight connected modules that replace the patchwork of apps, registers and spreadsheets.
- Modules: Appointments & OPD; Patient records; Digital prescriptions; Payments & billing; Communication; Patient portal; Analytics; Real-time dashboard

### 6. Product demo (`#seeit`)

- Eyebrow: See it in action
- Title: One patient, start to finish.
- Description: Not static screenshots — watch a real visit flow through Lampros, end to end.
- Demo chapters (interactive): Book → Queue → History → Prescribe → Collect → Analyse
- Mock app URL pattern: app.lamprosclinic.in / {module}

### 7. Why doctors love it

- Headline: Built around outcomes, not features.
- Smart appointments — Never deal with double bookings again.
- Digital patient records — Every patient's history available in seconds.
- Digital prescriptions — Finish them before the patient leaves the room.
- Automated billing — Get paid faster, with fewer mistakes.
- Follow-up reminders — Patients actually return on time.
- Clinic analytics — Know exactly how your clinic is performing.

### 8. Specialties (`#spec`)

- Title: Built for every specialty.
- Description: The same system, tuned to how your practice actually works.
- Tabs auto-rotate through specialties (each has workspace title, subtitle, 3 KPIs, two sample rows):

**General Physician** — Tuned templates, fields and follow-up rules for general practice. KPIs: 18 visits today, 12 min avg consult, 6 follow-ups due. Rows: Common template · Fever & infection (Preset); Quick Rx · Paracetamol, Azithromycin (Ready).

**Pediatrician** — Growth charts, weight-based dosing and vaccination schedules built in. KPIs: 22 / 10 min / 9 vaccines due. Growth chart; Weight-based dosing.

**Gynecologist** — Cycle tracking, ANC visit timelines and report-driven follow-ups. KPIs: 14 / 18 min / 5 ANC due. ANC timeline; Report template USG & bloodwork.

**Orthopedic** — Imaging-heavy records, procedure notes and physio follow-ups. KPIs: 16 / 15 min / 7 reviews due. Imaging X-ray & MRI; Procedure note post-op.

**Dermatologist** — Before/after photo timelines and treatment-course tracking. KPIs: 26 / 9 min / 11 courses active. Photo timeline; Treatment course tracker.

**Dentist** — Tooth charting, treatment plans and multi-sitting billing. KPIs: 19 / 20 min / 8 plans open. Tooth chart odontogram; Treatment plan billing.

**Cardiologist** — ECG/Echo records, risk flags and medication adherence. KPIs: 13 / 22 min / 6 reviews due. ECG & Echo on timeline; Risk flags BP & lipids.

**ENT** — Procedure templates, audiometry records and quick follow-ups. KPIs: 21 / 11 min / 7 follow-ups due. Audiometry; Procedure template scope & note.

### 9. Integrations (`#integrations`)

- Title: Plugs into how you already work.
- Description: Payments, patient messaging, labs, and pharmacy — connected in one live record.
- UPI & payment gateways (Payments); WhatsApp & SMS (Patient comms); Google Calendar (Scheduling); Diagnostic labs (Results & reports); In-clinic pharmacy (Billing & inventory); Patient portal OTP (No app store required)

### 10. Patient experience (`#patients`)

- Headline: Doctors buy it. Patients love it.
- Online booking & QR check-in; SMS & WhatsApp reminders; Digital prescriptions & reports on phone without app store
- Note: Doctor benefits → patient happiness → more referrals.

### 11. Security (`#security`)

- Headline: Trusted with what matters most.
- Lede: You're not just buying software — you're trusting it with people's health records.
- Encrypted data & secure sessions (httpOnly cookies, refresh tokens, CSRF)
- Role-based permissions
- Row-level tenant isolation
- Daily backups & 99.9% uptime

### 12. Compliance (`#compliance`)

- Title: Compliance & certifications
- Description: Only what we can stand behind today — plus what's on our health-stack roadmap.
- AWS hosted — Clinical files on encrypted object storage
- 256-bit encryption — In transit and at rest
- DPDP-ready architecture — Consent, audit trail, data rights
- ABDM / ABHA — Integration on roadmap — pilot clinics onboarding (Roadmap tag)

### 13. Stats (`#stats`)

- Eyebrow: By the numbers
- Title: Built for real clinic volume.
- 1,000+ visits per day capacity; <60s prescription turnaround; 2 days typical clinic setup; 99.9% platform uptime SLA

### 14. Testimonials (`#testi`)

- Title: Doctors on the record.
- Description: Pilot clinics sharing what changed after going live on Lampros.

**Dr. Rajesh Mehta** — General Physician, Kingsway Hospitals, Nagpur: "This reduced our paperwork by almost 80%. We now see more patients every day — without extending clinic hours."

**Dr. Priya Shah** — Pediatrician, Shah Children's Clinic, Ahmedabad: "Reception, billing and prescriptions finally talk to each other. My team stopped juggling three different apps."

**Dr. Harshwardhan Bora** — Internal Medicine, Bora Family Clinic, Pune: "Patients book online and check in with a QR code. Our waiting room feels calmer, and no-shows dropped noticeably."

### 15. Resources / Stories (`#stories`) — *may be hidden on homepage*

- Title: Resources for clinic owners.
- Articles: EMR choices for the modern Indian clinic (6 min); Cutting OPD wait times without hiring more staff (5 min); Prescriptions patients actually use (4 min)

### 16. Pricing (`#pricing`) — *may be hidden on homepage*

- Title: Simple, honest pricing. Start free. Upgrade when your clinic is ready.
- **Starter** ₹999/mo — solo clinic: one doctor/location, appointments & records, digital Rx, UPI
- **Professional** ₹1,999/mo — growing practice: + reception/lab/pharmacy, gateways & analytics, WhatsApp & AI summary (MOST POPULAR)
- **Enterprise** Custom — multi-location, priority support, custom integrations
- Footnotes: 14-day free trial; No credit card; Cancel anytime

### 17. FAQ (`#faq`)

**Can I migrate existing patient data?** Yes — bulk import for patients and past visits.

**Can multiple staff members use it?** Yes — reception, lab, pharmacy dashboards with permission-based access.

**Is patient data secure?** AWS S3, row-level isolation, encryption, audit trail, backups.

**Can I use it on mobile?** Staff and patient portal in browser; patients use OTP, no app required.

**Can prescriptions be printed?** Signed PDF instantly, print or share.

**How long does setup take?** Most clinics live in days.

### 18. Final CTA

- Eyebrow: Get started
- Headline: Spend less time managing your clinic. Spend more time treating patients.
- Lede: Book a 20-minute live demo on a real demo clinic — no setup needed.
- CTA: Book a demo

---

## Static pages (summary)

Full legal and policy text is published on the site at the URLs below. Source of truth in repo: `lib/legal/*.ts` and `lib/home-content.ts`.

| Page | URL |
|------|-----|
| About | /about |
| Contact | /contact |
| Demo clinic | /demo-clinic |
| Privacy | /privacy |
| Terms | /terms |
| Data rights | /data-rights |
| Communication policy | /communication-policy |

### About (highlights)

Mission: Software for Indian clinics that feels like consumer apps without sacrificing clinical rigour. One live record for appointments, records, Rx, billing, labs, pharmacy, follow-ups. Team in Gujarat; pilots in Gujarat & Maharashtra. Values: clarity, security by design, honest roadmaps.

### Contact

- Sales: hello@lampros.tech, +91 90337 79620, WhatsApp
- Support: hello@lampros.tech (mark Security for incidents)
- Privacy: privacy@lampros.tech; Grievance: grievance@lampros.tech
- Hours: Sales replies within one business day, Mon–Sat IST

### Demo clinic

Sample OPD flow: booking, queue, workstation, e-Rx, billing, analytics. Self-serve at `#seeit`; guided via Book demo. Structured pilots with onboarding and ABDM-ready pilots available.

---

## Legal and compliance (full text)

Policies last updated: **6 July 2026**. Registered office: LamprosTech, Ahmedabad, Gujarat, India (full address on request).

<!-- LEGAL_AUTO_START -->

## Privacy policy

How LamprosTech collects, uses, and protects personal data when you use Healthcare Management by LamprosTech and related services.

### 1. Introduction

This Privacy Policy explains how LamprosTech (“we”, “us”, “our”) processes personal data in connection with Healthcare Management (“Platform”), our clinic management software, websites, mobile experiences, and support channels.

We design the Platform for healthcare providers in India. Because we handle sensitive personal data—including health and clinical information—we apply heightened safeguards and process data only as described here, in our agreements with clinics, and as permitted by applicable law, including the Digital Personal Data Protection Act, 2023 (“DPDP Act”) and rules thereunder, and other sectoral requirements where they apply.

### 2. Who is responsible for your data?

For data processed about clinic staff, administrators, and visitors to our marketing sites, LamprosTech is generally the data fiduciary.

For patient and clinical records entered by a clinic into the Platform, the clinic (or its legal entity) is typically the data fiduciary and LamprosTech acts as a data processor, processing personal data only on the clinic’s documented instructions, under contract, and for providing the contracted services.

If you are a patient, please contact your clinic first for questions about your medical record. We will support the clinic in fulfilling lawful requests.

### 3. Personal data we collect

Depending on how you interact with us, we may collect:

- Identity and contact data: name, phone number, email, clinic name, role, address.
- Account and authentication data: login identifiers, session tokens, audit logs.
- Clinical and operational data uploaded by clinics: appointments, demographics, clinical notes, prescriptions, billing, documents, and communications metadata required to run the Platform.
- Technical data: IP address, device type, browser, logs, cookies, and similar technologies on our websites.
- Support and sales data: messages, call notes, demo requests, and feedback you choose to share.

### 4. How we use personal data

We use personal data to:

- Provide, secure, maintain, and improve the Platform.
- Authenticate users, enforce role-based access, and prevent fraud or abuse.
- Send service, security, and transactional communications.
- Provide customer support and onboarding.
- Comply with law, respond to lawful requests, and protect rights and safety.
- Generate aggregated, de-identified analytics that do not identify individuals or clinics.

### 5. Legal bases and consent

Where the DPDP Act applies, we rely on consent, legitimate uses permitted by law, or other lawful grounds as appropriate. Clinics are responsible for obtaining valid consent from patients and staff where required before entering personal data into the Platform.

You may withdraw consent for optional processing (such as marketing emails from LamprosTech) without affecting the lawfulness of processing before withdrawal. Core service processing may continue where necessary to perform our contract with your clinic or as required by law.

### 6. Health and sensitive personal data

Health data is processed only for delivering clinic operations, as instructed by the clinic, with encryption in transit and at rest, access controls, tenant isolation, and audit trails as described in our security documentation.

We do not sell personal data. We do not use patient clinical content for advertising.

### 7. Sharing and subprocessors

We may share personal data with infrastructure and security providers (e.g. cloud hosting) under confidentiality and data-processing terms; integration partners you or your clinic enable (labs, payment gateways, messaging providers); and professional advisers or authorities when required by law or to protect rights and safety.

A current list of material subprocessors is available on request at privacy@lampros.tech. We require subprocessors that process personal data to implement appropriate safeguards.

### 8. Retention

We retain personal data for as long as needed to provide the Platform, meet contractual and legal obligations, resolve disputes, and enforce agreements. Clinic customer data is retained according to the clinic’s subscription and our data-processing agreement; upon termination, export and deletion are handled as set out in that agreement.

Backup copies may persist for a limited period in encrypted backup systems before automatic purging.

### 9. Security

We implement administrative, technical, and organizational measures including encryption, access control, monitoring, and regular backups. No method of transmission or storage is completely secure; we encourage strong passwords and prompt reporting of suspected incidents to hello@lampros.tech.

### 10. Cross-border processing

Primary hosting is designed for Indian clinic workloads. If personal data is transferred outside India, we do so only with appropriate safeguards and as permitted under applicable law.

### 11. Children

The Platform is not directed at children to sign up independently. Pediatric records may be processed when entered by a clinic with appropriate guardian consent and clinical necessity.

### 12. Your rights

Depending on your role and applicable law, you may have rights to access, correct, erase, withdraw consent, nominate another person to exercise rights in certain circumstances, and grievance redressal. Details and how to exercise these rights are in our Data rights page. You may also contact privacy@lampros.tech.

### 13. Cookies and similar technologies

Our websites use essential cookies for security and preferences (such as theme). We minimize non-essential tracking on the marketing site. You can control cookies through browser settings; some features may not work if essential cookies are disabled.

### 14. Changes to this policy

We may update this Privacy Policy from time to time. We will post the revised version with an updated date and, where changes are material, provide additional notice through the Platform or email.

### 15. Contact and grievance officer

Privacy enquiries: privacy@lampros.tech  
Grievance officer (DPDP): grievance@lampros.tech  
General contact: hello@lampros.tech

---

## Terms of service

Terms governing access to and use of Healthcare Management by LamprosTech.

### 1. Agreement

These Terms of Service (“Terms”) are a binding agreement between LamprosTech (“LamprosTech”) and the person or entity that registers for or uses Healthcare Management (“Platform”). By creating an account, clicking “I agree”, or using the Platform, you accept these Terms.

If you use the Platform on behalf of a clinic or organization, you represent that you have authority to bind that organization.

### 2. The service

Healthcare Management by LamprosTech is a cloud clinic management platform for appointments, patient records, prescriptions, billing, integrations, and related workflows. Features may vary by plan and region. We may update the Platform to improve security, compliance, or functionality.

The Platform is a software tool. It does not provide medical advice, diagnosis, or treatment. Clinical decisions remain solely with licensed healthcare professionals and their institutions.

### 3. Accounts and eligibility

You must provide accurate registration information and keep credentials confidential. You are responsible for activity under your accounts. Notify us promptly of unauthorized access.

You must be at least 18 years old (or the age of majority in your jurisdiction) to enter into these Terms for a clinic account.

### 4. Acceptable use

You agree not to:

- Use the Platform in violation of law, including healthcare, privacy, or telecommunications regulations.
- Upload malware, attempt unauthorized access, or interfere with other users or systems.
- Misrepresent identity, scrape data without permission, or resell the Platform without written consent.
- Use the Platform to send unlawful spam or communications without required consent.

### 5. Clinic and patient data

You retain ownership of data you submit. You grant LamprosTech a limited license to host, process, and display that data solely to provide and improve the Platform as permitted by your agreement and our Privacy Policy.

You are responsible for lawful collection of patient data, notices, consents, and retention practices at your clinic.

### 6. Fees and trials

Paid plans, if applicable, are billed as described at signup or in an order form. Taxes may apply. Failure to pay may result in suspension after notice. Trial or pilot terms may be specified separately in writing.

### 7. Intellectual property

LamprosTech owns the Platform, branding, and documentation. These Terms do not grant ownership of our IP. Feedback you provide may be used to improve our services without obligation to you.

### 8. Confidentiality

Each party may receive confidential information from the other. The receiving party will protect it with reasonable care and use it only for the purpose of the relationship, except as required by law.

### 9. Availability and support

We target high availability and provide support channels described on our website. Scheduled maintenance and factors outside our reasonable control may cause intermittent downtime. Business continuity and backup practices are described in our security materials.

### 10. Disclaimer of warranties

The Platform is provided “as is” and “as available” to the maximum extent permitted by law. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant uninterrupted or error-free operation.

### 11. Limitation of liability

To the maximum extent permitted by law, LamprosTech will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill. Our aggregate liability arising from these Terms or the Platform will not exceed the fees paid by you to LamprosTech in the twelve (12) months before the claim, or INR 50,000 if no fees were paid, whichever is greater, except where liability cannot be limited by law.

### 12. Indemnity

You will indemnify and hold harmless LamprosTech from claims arising from your misuse of the Platform, violation of these Terms, or unlawful processing of personal data under your control as a clinic.

### 13. Suspension and termination

Either party may terminate according to the subscription agreement. We may suspend access for material breach, security risk, or legal requirement after notice where practicable. Upon termination, we will handle export and deletion of customer data as set out in our data-processing terms.

### 14. Governing law and disputes

These Terms are governed by the laws of India. Courts at Ahmedabad, Gujarat shall have exclusive jurisdiction, subject to mandatory consumer protections where applicable.

Parties will attempt good-faith resolution before litigation.

### 15. Changes

We may modify these Terms. We will post updates with a new effective date and notify account holders of material changes. Continued use after the effective date constitutes acceptance.

### 16. Contact

Questions about these Terms: hello@lampros.tech

---

## Data rights

How to exercise your personal data rights under applicable law, including India’s DPDP Act, in connection with Healthcare Management by LamprosTech.

### 1. Overview

LamprosTech respects your rights over personal data. This page explains how individuals—including clinic staff, administrators, and patients—can exercise rights in connection with Healthcare Management.

If your data is held by a clinic in the Platform, the clinic is usually your first point of contact. We will assist clinics in responding within our role as processor.

### 2. Rights you may have

Subject to applicable law, you may have the right to:

- Confirm whether we process your personal data and obtain a summary.
- Access personal data we hold about you in a readable form.
- Correct inaccurate or incomplete personal data.
- Erase personal data when retention is no longer necessary or consent is withdrawn, subject to legal exceptions.
- Withdraw consent for processing that is based on consent (without affecting prior lawful processing).
- Nominate another individual to exercise rights on your behalf in the event of death or incapacity, as permitted under the DPDP Act.
- Seek grievance redressal and escalate to the Data Protection Board of India where applicable.

### 3. How to submit a request

Email privacy@lampros.tech with the subject line “Data rights request”. Include your full name, contact phone or email, clinic name (if applicable), and a clear description of your request. We may ask for reasonable verification before acting on sensitive requests.

Patients seeking access to medical records should contact their treating clinic directly; we will support verified clinic requests from authorized administrators.

### 4. Response timelines

We aim to acknowledge requests within seven (7) business days and respond substantively within timelines required by applicable law, typically within thirty (30) days unless extension is permitted and communicated.

### 5. When we may decline or limit

We may refuse or limit requests that are manifestly unfounded, repetitive, would impair others’ rights, or conflict with legal retention obligations (for example, clinical records that must be retained under healthcare regulations). We will explain the reason where required by law.

### 6. Grievance redressal

If you are dissatisfied with our response, contact our Grievance Officer at grievance@lampros.tech. We will review and respond in accordance with the DPDP Act and applicable rules.

### 7. Related policies

See our Privacy Policy and Communication Policy for broader information on processing and messaging preferences.

---

## Communication policy

How LamprosTech and clinics using Healthcare Management send SMS, WhatsApp, email, and in-app messages.

### 1. Scope

This Communication Policy describes how messages are sent through Healthcare Management by LamprosTech and related channels. It applies to transactional service messages from LamprosTech to account holders, and to patient-facing messages sent by clinics via integrated providers.

### 2. Channels we use

Depending on configuration, the Platform may support:

- SMS and WhatsApp for appointment reminders, queue updates, and prescription or billing notifications.
- Email for account security, onboarding, and optional product updates from LamprosTech.
- In-app and web notifications within the clinic workspace.
- Phone or WhatsApp for sales and support when you contact us or request a demo.

### 3. Transactional vs promotional

Transactional messages are necessary to deliver care operations or the service—for example OTP login, appointment confirmations, or payment receipts. Clinics configure templates and triggers; message content is the clinic’s responsibility.

Promotional messages from LamprosTech about product features or events are sent only with appropriate consent and include opt-out where required. Clinics must obtain patient consent before marketing health offers via the Platform.

### 4. Clinic responsibilities

Clinics using the Platform must comply with TRAI DND/telemarketing rules, WhatsApp Business policies, and patient consent requirements. Do not send unlawful spam or sensitive clinical details over channels patients have not agreed to.

Clinics should maintain records of consent and honour opt-out requests promptly.

### 5. LamprosTech service messages

We may contact account administrators about security alerts, billing, downtime, or support tickets. You can manage non-essential product email preferences by replying STOP where offered or writing to hello@lampros.tech.

### 6. Delivery providers

Messages may be routed through third-party telecom or messaging providers. Those providers process delivery metadata under their terms and our data-processing agreements.

### 7. Opting out

Patients should follow opt-out instructions in messages from their clinic or contact the clinic directly.

Account holders may opt out of optional LamprosTech marketing at hello@lampros.tech. Security and legal notices may still be sent.

### 8. Privacy

Personal data in communications is handled per our Privacy Policy. Questions: privacy@lampros.tech.

<!-- LEGAL_AUTO_END -->

---

## Homepage visibility notes (for accurate answers)

As of this export, these homepage sections may be **commented out** in code while copy still exists above: **Pricing** (`#pricing`), **Resources / Stories** (`#stories`). Re-enable in `components/HomePage.tsx` when needed.

When answering “what’s on the website,” prefer sections that are currently mounted on the homepage unless the user asks about pricing or blog content specifically.
