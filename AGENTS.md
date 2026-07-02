<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Lampros Healthcare landing — agent instructions

**Source of truth for copy and visual design:** `../home/lampros-healthcare.html` (static reference). The Next.js app should match its colors, typography, section order, and UI patterns.

## Coding style

- Framework: Next.js (App Router), React 19
- Styling: **Tailwind CSS v4** utility classes first. Brand tokens, keyframes, and `body` defaults live in `app/globals.css` only (no extra CSS files).
- File structure:
  - `app/` — routes (`page.tsx` composes the home page)
  - `components/ui/` — small presentational primitives (buttons, typography, lists)
  - `components/layout/` — shell (nav, footer, grid, canvas, motion)
  - `components/sections/` — one file per homepage section
  - `lib/` — data and non-UI logic (e.g. `specialties.ts`, `particle-scene.ts`)
- Server Components by default. Add `"use client"` only for: scroll listeners, canvas, GSAP, tabs/demo state.
- Naming: PascalCase components, camelCase functions/variables.
- Reuse existing components; do not duplicate markup for the same pattern.
- Avoid inline styles except where values are dynamic (e.g. demo progress bar width, chart bar heights).
- **Global link styles:** keep `a { color: inherit }` inside `@layer base` in `globals.css` so utilities like `!text-white` on primary `<Link>` buttons are not overridden. Use `Button` for CTAs; primary variant must stay readable on `bg-ink`.

## Design tokens (from HTML `:root`)

| Token              | Value                          | Tailwind               |
| ------------------ | ------------------------------ | ---------------------- |
| Canvas (page bg)   | `#f2f4f2`                      | `bg-canvas`            |
| Surface (cards)    | `#ffffff`                      | `bg-surface`           |
| Ink (primary text) | `#0b1411`                      | `text-ink`, `bg-ink`   |
| Ink soft           | `#5b6b65`                      | `text-ink-soft`        |
| Ink faint          | `#8a988f`                      | `text-ink-faint`       |
| Line (borders)     | `#e3eae6`                      | `border-line`          |
| Teal (accent)      | `#0fa17c`                      | `text-teal`, `bg-teal` |
| Teal ink           | `#0a6a52`                      | `text-teal-ink`        |
| Teal tint          | `#e5f4ef`                      | `bg-teal-tint`         |
| Coral              | `#ff6a45`                      | `text-coral`           |
| Card shadow        | see `--shadow-card` in globals | `shadow-card`          |

### Typography

- **Display:** Bricolage Grotesque (`font-display`) — headings, KPI numbers, quotes
- **Body:** Inter (`font-sans` / default body)
- **Mono:** JetBrains Mono (`font-mono`) — faux app URLs in demos
- H1: `clamp(46px, 6.6vw, 98px)`, tight line-height (~0.94), `tracking-tight`
- H2 (split sections): `clamp(32px, 4.4vw, 60px)`
- Lede: ~16–19px, `text-ink-soft`, line-height ~1.55
- Accent phrases: wrap in `<Accent>` (teal), same as `.ac` in HTML

### Layout

- Max content width: **1360px** (split sections), **1180px** (wide sections)
- Horizontal padding: `clamp(20px, 5vw, 56px)` → use `px-5 sm:px-[clamp(20px,5vw,56px)]`
- Split sections: full viewport height (`min-h-svh`), **two-column grid** on viewports **>900px** (`1fr 1fr`, gap 30px) by default. Copy sits in column 1/2 with `max-w-[60ch]` and an empty spacer column for particles. **Hero:** pass `wideContent` on `SplitSection` — copy spans both columns up to `~82ch`, no spacer; particles may overlap behind (`z-[4]` on copy, canvas at `z-[1]`).
- Wide sections: optional `alt` = white surface + top/bottom `border-line`

### Theming (light / dark + accent)

- **Source of truth:** `lib/theme/tokens.ts` — `resolveThemeVars(colorMode, brand)` merges base + accent (teal | indigo).
- **Runtime:** `applyTheme()` in `lib/theme/apply-theme.ts` sets `data-color-mode` on `<html>` and applies every token as an inline custom property (light and dark), so toggles stay in sync.
- **CSS fallbacks:** `app/theme-vars.css` (imported from `globals.css`) — keep aligned with `tokens.ts` when adding variables.
- **Persistence:** `localStorage` key `lampros-color-mode`; boot script in `app/layout.tsx` applies the saved theme before paint.
- **Accent route:** `/purple` sets `data-theme="indigo"` via `ThemeShell` / purple layout; call `refreshThemeAppearance()` after brand changes.
- **UI tokens:** prefer semantic vars (`--theme-toggle-fg`, `--demo-sidebar`, `--announcement-badge-fg`, etc.) instead of hard-coded hex or misusing `text-teal-tint` for text on dark surfaces.
- **New sites / variants:** add a brand block in `tokens.ts` and optional overrides in `theme-vars.css`; use `var(--token)` in components.

## Homepage section map (order matters for scroll canvas)

Shell: `AnnouncementBar` (fixed top) → `SiteNav` (`top: var(--announcement-height)`). Maturity copy (announcement, partners, stats, testimonials, badges, integrations, stories, video URL, WhatsApp) lives in **`lib/home-content.ts`**.

| #   | Component                  | Layout       | `id` / notes                               |
| --- | -------------------------- | ------------ | ------------------------------------------ |
| 1   | `HeroSection`              | split, left  | `.anchor` — scroll cue, `VideoTourTrigger` |
| 2   | `TrustedByStrip`           | compact wide | `#trusted` — marquee cities                |
| 3   | `RealitySection`           | split, right | `.anchor`                                  |
| 4   | `ImagineSection`           | split, left  | `.anchor`                                  |
| 5   | `PlatformSection`          | split, right | `.anchor`                                  |
| 6   | `ProductDemoSection`       | wide alt     | `#seeit` — client, GSAP demo               |
| 7   | `WhyDoctorsSection`        | split, left  | `.anchor`                                  |
| 8   | `SpecialtyShowcaseSection` | wide         | `#spec` — client tabs                      |
| 9   | `IntegrationsSection`      | wide         | `#integrations`                            |
| 10  | `PatientExperienceSection` | split, right | `#patients`                                |
| 11  | `SecuritySection`          | split, left  | `#security` anchor                         |
| 12  | `ComplianceSection`        | wide alt     | `#compliance`                              |
| 13  | `StatsSection`             | wide alt     | `#stats` — capability stats                |
| 14  | `TestimonialsSection`      | wide         | `#testi` — carousel                        |
| 15  | `StoriesSection`           | wide         | `#stories` — Lampros Stories               |
| 16  | `PricingSection`           | wide         | `#pricing`                                 |
| 17  | `FaqSection`               | wide alt     | `#faq`                                     |
| 18  | `FinalCtaSection`          | split, right | `.anchor` — founder + WhatsApp             |

**Particle canvas:** sections that drive the 3D shape morph must include class `anchor` via `SplitSection` (`anchor` prop default `true`). Wide sections hide the particle cloud (handled in `lib/particle-scene.ts`).

## How to add a new split section

1. Create `components/sections/YourSection.tsx`.
2. Wrap content in `<SplitSection align="left" | "right">` (left = copy on left / `sr`, right = copy on right / `sl`).
3. Use `Eyebrow`, `SectionTitle`, `Lede`, `Accent` from `components/ui/Typography.tsx`.
4. For bullet lists use `FeatureList`, `FlowList`, `ChipRow`, `PainGrid`, or `Note` from `components/ui/ContentBlocks.tsx`.
5. Add `motion-reveal` on blocks that should fade in on scroll (paired with `HomeMotion`).
6. Import and place the section in `components/HomePage.tsx` in the correct order.
7. If it should morph the canvas, keep `anchor` on the section (default).

## How to add a new wide section

1. Create `components/sections/YourSection.tsx`.
2. Use `<WideSection id="..." alt?>` and optional `<WideHeader title description eyebrow />`.
3. Centered content: max-width utilities matching HTML (e.g. `max-w-[1000px] mx-auto`).
4. Register in `components/HomePage.tsx`. Wide sections do **not** use class `anchor`.

## Shared UI patterns

- **Primary CTA:** `Button` variant `primary` — pill, `bg-ink`, white text, `shadow-card`
- **Secondary CTA:** `Button` variant `ghost` — pill, `border-line`, light fill
- **Nav CTA:** same as primary, smaller padding (see `SiteNav`)
- **App chrome mock:** border `border-line`, radius 18–20px, `shadow-card`, top bar `#fafbfa` with three dots + mono URL
- **Badges:** teal tint = success, amber = waiting, coral tint = action (see `ProductDemoSection`)

## Motion

- **Scroll particle field:** `ScrollSceneCanvas` + `lib/particle-scene.ts` (ported from HTML).
- **Scroll reveals:** `HomeMotion` — GSAP + ScrollTrigger; classes `motion-in` (hero only), `motion-reveal` (scroll sections). Initial hidden state is in `globals.css`; animations use **`gsap.to()`** (not `from()`). Hero `motion-in` is scoped to the first `section.anchor`.
- **Product demo:** `ProductDemoSection` — GSAP timeline; respect `prefers-reduced-motion`.
- Respect `prefers-reduced-motion: reduce` for all animations.

## CTAs and contact

- Trial: `mailto:hello@lampros.tech`
- Demo phone: `tel:+919033779620`
