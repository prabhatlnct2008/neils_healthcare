# LLM BUILD INSTRUCTIONS
# Dr Neil's Healthcare — Homeopathy in Houston
### A complete implementation brief for an AI coding assistant

---

## 📌 HOW TO USE THIS DOCUMENT

You are an LLM (Claude, GPT-4, Cursor, Windsurf, etc.) tasked with building a production-ready website for Dr Neil's Healthcare, a homeopathy practice in Houston. This document is your single source of truth. Read it completely before writing any code.

**Critical behavioral rules for the LLM:**

1. **Do not skip the Pre-Flight Checklist.** Items 1–6 must be completed in order before you write a single page component.
2. **Follow the "Research → Outline → Write" loop for every page** (defined in Section 7). Do not jump straight to writing JSX. The outline step prevents 80% of the rework you'd otherwise need.
3. **The design system in Section 4 is non-negotiable.** Colors, typography, spacing, and component patterns must match exactly. No "while I'm at it" deviations.
4. **You will be tempted to "improve" the SEO strategy** (add more keywords, build more pages, optimize aggressively). Resist this. The strategy in Section 6 was chosen deliberately. Stick to it.
5. **Stop and ask the user** when you hit one of the explicit STOP conditions listed in Section 11. Don't guess.
6. **When in doubt, the priority order is:** (1) accessibility, (2) trust signals, (3) performance, (4) SEO, (5) visual polish. Do not sacrifice any earlier item for a later one.

---

## 📑 TABLE OF CONTENTS

1. Product context — what we're building and why
2. Tech stack — non-negotiable choices
3. Project structure — file layout
4. Design system — tokens, type, layout
5. Component library — what to build first
6. SEO strategy — keyword-to-page mapping
7. The page-building loop — Research → Outline → Write
8. Page build order — what to ship first
9. Per-page specifications — content, structure, SEO
10. Quality checklist — before marking any page done
11. STOP conditions — when to ask before continuing
12. Deployment & post-launch

---

# 1. PRODUCT CONTEXT

**The business:** Dr Neil's Healthcare is a Houston-area homeopathy practice run by one practitioner (Dr. Neil) offering 60-minute consultations at $150. Service area is greater Houston with telehealth across Texas.

**The category challenge:** Homeopathy is medically controversial. The website's primary job is **building trust** — visitors arrive skeptical and need to feel the practitioner is honest, qualified, and not overselling. Every design and copy decision should be evaluated against: *"Does this make the practitioner feel more trustworthy or less?"*

**The buyer:** Typically 30–55, frustrated with conventional medicine (rushed 12-minute appointments, prescription-only solutions), looking for someone who listens. Often researching for weeks before booking. Often booking for chronic conditions: allergies, anxiety, eczema, children's recurring issues.

**The voice:** Warm, clinically credible, anti-jargon, holistic-first. Honest about controversy ("homeopathy isn't accepted by most modern medical experts"). Refuses to oversell. This honesty *is* the marketing.

---

# 2. TECH STACK

These choices are not negotiable. Do not substitute frameworks "because you prefer X."

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14+** (App Router) | SSR/SSG for SEO, file-based routing, image optimization built-in |
| Language | **TypeScript** | Type safety on a 14+ page project pays for itself |
| Styling | **Tailwind CSS** | Constraint-based; design tokens become Tailwind config |
| UI components | **Custom + Radix UI primitives** for accessibility (Dialog, Accordion, Popover) | Radix gives WCAG-AA-correct keyboard nav for free |
| Forms | **React Hook Form + Zod validation** | Standard, accessible, well-typed |
| Fonts | **Fraunces** (display) + **Instrument Sans** (body) via `next/font/google` | Self-hosted, no FOIT, GDPR-clean |
| Icons | **Lucide React** | Open-source, tree-shakeable, consistent stroke |
| Booking | **Embed iframe from SimplePractice or IntakeQ** (HIPAA-compliant) | Healthcare requires BAA — Calendly free tier is not HIPAA-compliant |
| Schema markup | **next-seo** or hand-rolled JSON-LD | Required for FAQ rich snippets |
| Analytics | **Plausible** or **Fathom** (privacy-respecting) | Avoids GDPR/cookie banner overhead |
| Hosting | **Vercel** | Zero-config Next.js, edge network, free tier sufficient at launch |
| Image hosting | Vercel's built-in `next/image` with images in `/public` | Auto WebP/AVIF, lazy-loading, responsive |

**Node version:** Node 20 LTS or higher.
**Package manager:** pnpm (faster, disk-efficient — but npm/yarn are acceptable).

---

# 3. PROJECT STRUCTURE

Create this exact file structure. Do not improvise.

```
dr-neils-healthcare/
├── app/
│   ├── layout.tsx                          # Root layout (fonts, theme provider, header, footer)
│   ├── page.tsx                            # Homepage
│   ├── about-dr-neil/page.tsx
│   ├── how-it-works/page.tsx
│   ├── pricing/page.tsx
│   ├── book/page.tsx
│   ├── faq/page.tsx
│   ├── conditions/
│   │   ├── allergies/page.tsx
│   │   ├── anxiety/page.tsx
│   │   ├── eczema/page.tsx
│   │   ├── children/page.tsx
│   │   ├── insomnia/page.tsx               # Phase 2
│   │   └── migraines/page.tsx              # Phase 2
│   ├── houston/
│   │   ├── sugar-land/page.tsx
│   │   └── katy/page.tsx
│   ├── blog/
│   │   ├── page.tsx                        # Blog index
│   │   └── [slug]/page.tsx                 # Dynamic blog post
│   ├── sitemap.ts                          # Auto-generated sitemap
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── bento/
│   │   ├── BentoGrid.tsx                   # 12-col CSS grid wrapper
│   │   ├── BentoCard.tsx                   # Base card (variants: default, feature, stat, dark)
│   │   ├── HeroCard.tsx
│   │   ├── StatCard.tsx
│   │   ├── ProcessCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── MapCard.tsx
│   │   ├── ConditionsCard.tsx
│   │   └── BotanicalCard.tsx
│   ├── primitives/
│   │   ├── Button.tsx                      # Primary, ghost, large variants
│   │   ├── Pill.tsx                        # The "🟢 Now serving..." style
│   │   ├── Eyebrow.tsx                     # Small caps section labels
│   │   └── DisplayHeading.tsx              # Fraunces with italic accent support
│   ├── sections/
│   │   ├── ConditionsGrid.tsx              # 8-tile condition grid
│   │   ├── PricingTiers.tsx                # 3 pricing cards
│   │   ├── FAQAccordion.tsx                # 2-col accordion (Radix)
│   │   └── FinalCTA.tsx
│   └── seo/
│       ├── FAQSchema.tsx                   # JSON-LD FAQPage
│       ├── LocalBusinessSchema.tsx
│       └── PersonSchema.tsx
│
├── content/
│   ├── conditions.ts                       # Condition data (8 conditions, copy + icons)
│   ├── testimonials.ts                     # Real testimonials
│   ├── faqs.ts                             # FAQ items keyed by page
│   ├── pricing.ts                          # 3 tiers
│   └── seo.ts                              # Meta titles/descriptions per page
│
├── lib/
│   ├── utils.ts                            # cn() for Tailwind class merging
│   └── analytics.ts
│
├── public/
│   ├── images/                             # Real photography
│   ├── og/                                 # Open Graph images per page
│   └── favicons/
│
├── styles/
│   └── globals.css                         # Tailwind directives + CSS variables
│
├── tailwind.config.ts                      # Design tokens here
├── next.config.js
├── tsconfig.json
└── package.json
```

**Why this structure:**
- `content/` separates copy from components — easy to update without touching JSX
- `components/bento/` houses the design-system-specific cards
- `components/primitives/` houses the atomic building blocks
- `components/seo/` isolates schema markup so it's reusable across pages

---

# 4. DESIGN SYSTEM

This is the existing system from the working prototype. Implement it exactly in `tailwind.config.ts` and `globals.css`.

## 4.1 Color tokens (CSS variables in `globals.css`)

```css
:root[data-theme="light"] {
  --bg-page: #F5F1EA;
  --bg-card: #FCFAF5;
  --bg-card-hover: #FFFFFF;
  --bg-card-feature: #1B3A2F;       /* deep forest green */
  --bg-elevated: #FFFFFF;
  --ink-primary: #1A1A1A;
  --ink-secondary: #5A5A55;
  --ink-tertiary: #8A8A82;
  --ink-on-dark: #F5F1EA;
  --accent: #2A8C46;                 /* spring-forest green CTA */
  --accent-hover: #1F6E37;
  --accent-soft: #DCEFE2;
  --moss: #1B3A2F;
  --moss-soft: #DDE6DF;
  --border: rgba(26, 26, 26, 0.08);
  --border-strong: rgba(26, 26, 26, 0.16);
  --shadow-card: 0 1px 2px rgba(26,26,26,0.04), 0 8px 24px rgba(26,26,26,0.04);
  --shadow-card-hover: 0 4px 8px rgba(26,26,26,0.06), 0 24px 48px rgba(26,26,26,0.10);
  --glow: transparent;
  --grain-opacity: 0.025;
}

:root[data-theme="dark"] {
  --bg-page: #0B0F0E;
  --bg-card: rgba(30, 43, 34, 0.55);
  --bg-card-hover: rgba(40, 56, 45, 0.65);
  --bg-card-feature: #7FBE9A;
  --bg-elevated: #14201A;
  --ink-primary: #F2EFE6;
  --ink-secondary: #B8C2BB;
  --ink-tertiary: #7A857E;
  --ink-on-dark: #0B0F0E;
  --accent: #C4F060;                 /* electric chartreuse — glows in dark */
  --accent-hover: #D4FF7A;
  --accent-soft: rgba(196, 240, 96, 0.15);
  --moss: #7FBE9A;
  --moss-soft: rgba(127, 190, 154, 0.12);
  --border: rgba(127, 190, 154, 0.10);
  --border-strong: rgba(127, 190, 154, 0.22);
  --shadow-card: 0 0 0 1px rgba(127,190,154,0.06), 0 8px 32px rgba(0,0,0,0.4);
  --shadow-card-hover: 0 0 0 1px rgba(127,190,154,0.18), 0 0 60px rgba(127,190,154,0.08), 0 16px 48px rgba(0,0,0,0.5);
  --glow: rgba(127, 190, 154, 0.5);
  --grain-opacity: 0.04;
}
```

Then in `tailwind.config.ts`, expose these as Tailwind colors:

```ts
theme: {
  extend: {
    colors: {
      'bg-page': 'var(--bg-page)',
      'bg-card': 'var(--bg-card)',
      'bg-card-feature': 'var(--bg-card-feature)',
      'ink-primary': 'var(--ink-primary)',
      'ink-secondary': 'var(--ink-secondary)',
      'ink-tertiary': 'var(--ink-tertiary)',
      'accent': 'var(--accent)',
      'accent-soft': 'var(--accent-soft)',
      'moss': 'var(--moss)',
      'moss-soft': 'var(--moss-soft)',
      'border-soft': 'var(--border)',
      'border-strong': 'var(--border-strong)',
    },
    fontFamily: {
      display: ['var(--font-fraunces)', 'serif'],
      sans: ['var(--font-instrument-sans)', 'system-ui', 'sans-serif'],
    },
  },
}
```

## 4.2 Typography rules

| Use | Class pattern | Notes |
|---|---|---|
| H1 (page headline) | `font-display text-5xl md:text-7xl font-normal leading-[0.98] tracking-tight` | Use `<em>` inside H1 for italic accent words (color = `text-accent`) |
| H2 (section) | `font-display text-3xl md:text-5xl font-normal leading-[1.05] tracking-tight` | Same italic-em pattern |
| H3 (card heading) | `font-display text-2xl font-normal tracking-tight` | |
| Eyebrow | `text-xs font-medium uppercase tracking-[0.14em] text-ink-tertiary` | Always above an H1/H2 |
| Body | `text-base leading-[1.55] text-ink-secondary` | |
| Display number (stat) | `font-display text-8xl font-medium tracking-[-0.04em] leading-[0.9]` | For "$150", "60 min" |

**Fraunces variable axes:** Use `font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;` on italic accent words for the signature wonky-italic look. Set up as a Tailwind utility `font-display-italic`.

## 4.3 Spacing & layout

- **Container:** `max-w-7xl mx-auto px-5 md:px-8`
- **Section padding:** `py-16 md:py-20`
- **Card padding:** `p-6` (small), `p-8` (medium), `p-10` (hero)
- **Card border radius:** `rounded-2xl` (small/medium), `rounded-3xl` (hero, final CTA)
- **Button border radius:** `rounded-full`
- **Bento grid gap:** `gap-4` (16px)

## 4.4 The Bento grid system

This is the signature layout pattern. Implement once in `BentoGrid.tsx`:

```tsx
// components/bento/BentoGrid.tsx
export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-4 auto-rows-[140px]">
      {children}
    </div>
  );
}
```

Each `BentoCard` accepts a `span` prop for both column and row spans:

```tsx
// Example usage
<BentoCard colSpan={8} rowSpan={2} variant="feature">
  ...
</BentoCard>
<BentoCard colSpan={4} rowSpan={2} variant="stat">
  ...
</BentoCard>
```

On mobile (`<768px`), every card becomes `col-span-4` (full width) regardless of desktop span. Implement this with conditional Tailwind classes.

## 4.5 Motion rules

- **Card hover:** `transform: translateY(-4px); transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);`
- **Theme toggle transition:** 600ms ease on background-color and color
- **Stagger reveal on scroll:** Intersection Observer + `transition-delay` increments of 50ms per card
- **Honor `prefers-reduced-motion`:** disable all animations when set

## 4.6 Accessibility requirements (non-negotiable)

- All interactive elements have visible focus rings (`focus-visible:ring-2 ring-accent ring-offset-2`)
- All form fields have associated `<label>` elements (not just placeholders)
- Color contrast meets WCAG AA in both light and dark modes (verify with `npx @axe-core/cli`)
- Skip-to-content link as first focusable element
- All images have meaningful `alt` text (never empty unless purely decorative)
- All Radix primitives used as-shipped (don't strip ARIA attributes)
- FAQ accordions use Radix `<Accordion>` not custom JS
- Theme toggle has `aria-label="Toggle dark mode"`
- Theme preference persists in `localStorage` and respects `prefers-color-scheme` on first visit

---

# 5. COMPONENT LIBRARY

Build these components **in this order** before writing any pages. Each component should be in its own file with a colocated `.test.tsx` if you're adding tests.

### Phase A — Primitives (build first, ~2 hours)

1. `Button.tsx` — variants: `primary`, `ghost`, sizes: `default`, `large`
2. `Pill.tsx` — for the eyebrow chips
3. `Eyebrow.tsx` — uppercase tiny-caps section labels
4. `DisplayHeading.tsx` — renders H1/H2/H3 with the Fraunces italic-em pattern (accepts children with `<em>` tags)

### Phase B — Layout (build second, ~3 hours)

5. `Header.tsx` — logo, nav, theme toggle, CTA. Sticky on scroll with blur backdrop.
6. `Footer.tsx` — links, legal disclaimer, copyright
7. `ThemeToggle.tsx` — the 56×30 toggle with sun/moon icons that move
8. `BentoGrid.tsx` — the 12-column wrapper
9. `BentoCard.tsx` — base card with variant prop

### Phase C — Bento card variants (build third, ~4 hours)

10. `HeroCard.tsx` — H1 + subhead + CTA + trust strip + hero visual
11. `StatCard.tsx` — large number + label (e.g., "$150 — Initial consultation")
12. `ProcessCard.tsx` — numbered steps with optional meta column
13. `TestimonialCard.tsx` — blockquote + avatar + attribution
14. `MapCard.tsx` — stylized Houston SVG with pulsing pins
15. `ConditionsCard.tsx` — wide card with pill list
16. `BotanicalCard.tsx` — small card with decorative line-art SVG

### Phase D — Section components (build fourth, ~3 hours)

17. `ConditionsGrid.tsx` — 8-tile grid with SVG icons (reads from `content/conditions.ts`)
18. `PricingTiers.tsx` — 3 cards (Initial / Package / Follow-up); middle is featured
19. `FAQAccordion.tsx` — Radix Accordion in 2 columns (reads from `content/faqs.ts`)
20. `FinalCTA.tsx` — full-width deep-green CTA card with glow

### Phase E — SEO components (build fifth, ~1 hour)

21. `FAQSchema.tsx` — JSON-LD `FAQPage` schema; takes FAQ array, outputs `<script type="application/ld+json">`
22. `LocalBusinessSchema.tsx` — `LocalBusiness` + `MedicalBusiness` schema
23. `PersonSchema.tsx` — `Person` schema for Dr. Neil

**Do not start writing pages until Phases A–E are complete.** Building pages on missing components leads to inconsistency.

---

# 6. SEO STRATEGY

## 6.1 Keyword-to-page mapping (DO NOT DEVIATE)

The site has 14 priority pages. Each page targets **one primary keyword + 5–8 natural variations**. Do not build additional pages "for SEO." Do not stuff additional keywords into pages.

| URL | Primary keyword | Page intent |
|---|---|---|
| `/` | homeopathy Houston | Brand + service + first impression |
| `/about-dr-neil` | classical homeopath Houston | Practitioner credibility |
| `/how-it-works` | homeopathic consultation Houston | Process explanation |
| `/pricing` | homeopathy consultation cost Houston | Transparent pricing |
| `/book` | book homeopathy appointment Houston | Conversion |
| `/faq` | (no single primary — 10 long-tail Qs) | Trust building |
| `/conditions/allergies` | homeopathy for allergies Houston | **Highest-ROI page — Houston-specific** |
| `/conditions/anxiety` | homeopathy for anxiety | High-volume condition |
| `/conditions/eczema` | homeopathy for eczema | Chronic condition |
| `/conditions/children` | homeopathy for children Houston | Family segment |
| `/conditions/insomnia` | homeopathy for insomnia | Phase 2 |
| `/conditions/migraines` | homeopathy for migraines | Phase 2 |
| `/houston/sugar-land` | homeopath Sugar Land | Suburb capture (Indian-diaspora angle) |
| `/houston/katy` | homeopath Katy | Suburb capture (young families) |

## 6.2 Per-page SEO requirements

Every page MUST have:

1. **`<title>` meta** — exactly one, under 60 characters, includes primary keyword
2. **`<meta name="description">`** — under 155 characters, includes primary keyword + a hook
3. **Exactly one `<h1>`** — the primary keyword appears in it
4. **At least 800 words of body copy** — unique to that page (no copy-paste between pages)
5. **2–4 H2s** — secondary keywords appear in some of them naturally
6. **At least 2 internal links** — to other pages within the site
7. **At least 1 external link** — to a credible source (Mayo Clinic, NCH, etc.)
8. **Open Graph image** — `/public/og/{page-slug}.jpg` at 1200×630
9. **Canonical URL** — `<link rel="canonical">`
10. **Schema markup** — appropriate JSON-LD (see Section 6.3)

Store all meta in `content/seo.ts`:

```ts
// content/seo.ts
export const seoConfig = {
  '/': {
    title: "Dr Neil's Healthcare | Homeopathy in Houston | $150 Consultation",
    description: "Personalized homeopathic care in Houston, Sugar Land, Katy & beyond. 60-minute consultation $150. Remedies delivered in 7 days. Book online.",
    ogImage: '/og/home.jpg',
    keywords: ['homeopathy Houston', 'homeopath Houston', 'homeopathic doctor Houston'],
  },
  '/conditions/allergies': {
    title: 'Homeopathy for Allergies in Houston | Cedar Fever, Mold, Oak Pollen',
    description: "Personalized homeopathic relief for Houston's worst allergy seasons. Cedar fever, mold, oak pollen, ragweed. 60-minute consultation $150. Book on WhatsApp or online.",
    ogImage: '/og/allergies.jpg',
    keywords: ['homeopathy for allergies Houston', 'cedar fever homeopathy', 'mold allergy homeopathy'],
  },
  // ...etc for every page
};
```

## 6.3 Schema markup requirements

| Page | Schemas to include |
|---|---|
| `/` | `LocalBusiness`, `MedicalBusiness` |
| `/about-dr-neil` | `Person` (linked to LocalBusiness) |
| `/how-it-works` | `HowTo` |
| `/pricing` | `Offer` (one per tier), `Service` |
| `/book` | `ReserveAction` |
| `/faq` | `FAQPage` ← **CRITICAL** for Google rich snippets |
| `/conditions/*` | `WebPage` with `about` referencing the condition |
| `/houston/*` | `LocalBusiness` with `areaServed` |

## 6.4 Internal linking rules

- Homepage links to: about, how-it-works, pricing, book, top 4 conditions, sugar-land, katy
- Every condition page links to: book, pricing, FAQ, 1–2 related conditions
- Every location page links to: book, top 3 conditions, homepage
- Every blog post links to: 2–3 relevant condition pages, book, FAQ

**Anchor text rules:** Use descriptive anchor text. "Learn about homeopathy for allergies" not "click here" or "read more."

---

# 7. THE PAGE-BUILDING LOOP

**Follow this loop for every page. Do not skip steps.**

### STEP 1 — RESEARCH (5 minutes per page)

Before writing JSX:

1. Open the SEO config for the page. Read the primary keyword, description, target keywords.
2. Open this document and re-read Section 9 for that specific page (it includes the section structure for that page).
3. Open `content/conditions.ts`, `content/testimonials.ts`, `content/faqs.ts` to see what data is already available.
4. **Write down** (as a comment at top of the page file): primary keyword, intent, target reader, top 3 trust signals to surface.

### STEP 2 — OUTLINE (5 minutes per page)

Write the page outline as a list of sections **before writing any JSX**. Use the structure rules in Section 9 for the page type. Output the outline as a top-of-file comment:

```tsx
// PAGE: /conditions/allergies
// PRIMARY KEYWORD: homeopathy for allergies Houston
// INTENT: Houston resident with allergies, considering homeopathy
//
// SECTIONS (in order):
// 1. Hero (8+4 bento) — H1 + subhead + CTA
// 2. Houston allergy reality (full-width card) — local context
// 3. The bento grid (12-col) — what we treat, how, real customer
// 4. Conditions tile grid — 8 condition tiles (highlight allergies)
// 5. Pricing tiers
// 6. FAQ (specific to allergies)
// 7. Final CTA
//
// INTERNAL LINKS: anxiety, children, how-it-works, book
// EXTERNAL LINK: 1 link to NCH or Mayo Clinic on allergy basics
// SCHEMA: WebPage + FAQPage (for the FAQ section)
```

### STEP 3 — WRITE (the rest of the time)

Only now write the JSX. The outline keeps you from drifting.

### STEP 4 — CHECK (5 minutes per page)

Run through the Quality Checklist (Section 10) before considering the page done.

---

# 8. PAGE BUILD ORDER

Build in this exact sequence. Do not skip ahead.

### Sprint 1 — Foundation (Days 1–3)

1. Pre-flight checklist (Section 11)
2. Tailwind config + globals.css with design tokens
3. Phase A primitives (Button, Pill, Eyebrow, DisplayHeading)
4. Phase B layout (Header, Footer, ThemeToggle, BentoGrid, BentoCard)
5. Theme toggle persistence working in both modes

**Checkpoint:** Header and footer render correctly in both light and dark modes. Toggle works.

### Sprint 2 — Core conversion pages (Days 4–7)

Build in this order:

6. Homepage (`/`) — uses every component you've built
7. Pricing (`/pricing`) — converts the most after homepage
8. Book (`/book`) — the actual booking destination
9. About (`/about-dr-neil`) — trust foundation
10. How It Works (`/how-it-works`) — process clarity

**Checkpoint:** A visitor can land on the homepage, click through to book, and complete a booking. End-to-end flow works.

### Sprint 3 — Content trust pages (Days 8–10)

11. FAQ (`/faq`) — with FAQPage schema (critical)
12. Conditions: Allergies (`/conditions/allergies`) — **highest-ROI page**
13. Conditions: Anxiety (`/conditions/anxiety`)
14. Conditions: Children (`/conditions/children`)
15. Conditions: Eczema (`/conditions/eczema`)

**Checkpoint:** Site has 9 pages, all schema markup verified with Google Rich Results Test.

### Sprint 4 — Location capture (Days 11–12)

16. Sugar Land (`/houston/sugar-land`)
17. Katy (`/houston/katy`)

### Sprint 5 — Polish & launch prep (Days 13–14)

18. Sitemap, robots.txt, 404 page
19. OG images for every page
20. Accessibility audit with axe-core
21. Lighthouse audit (target: 95+ on every page)
22. Browser testing (Chrome, Safari, Firefox, mobile Safari, mobile Chrome)

### Phase 2 (post-launch, when traffic data justifies it)

23. `/conditions/insomnia`, `/conditions/migraines`
24. Blog infrastructure + first 3 posts

---

# 9. PER-PAGE SPECIFICATIONS

This section tells you exactly what content sits on top of each page, how many sections to write, and how to structure them. **Read the spec for a page before writing it.**

## 9.1 The standard page anatomy

Every page follows this top-to-bottom flow unless explicitly noted:

1. **Header** (sticky, identical across all pages)
2. **Hero section** (page-specific — see per-page specs)
3. **2–5 content sections** (page-specific)
4. **Final CTA section** (varies in copy by page)
5. **Footer** (identical across all pages)

The hero and final CTA are bookends. The middle is where pages differ.

## 9.2 Homepage `/`

**Sections (in order):**

1. **Hero** — 8+4 bento (image + copy). H1: "Honest homeopathy. Personally *matched* to you." CTA: "Book my $150 consultation"
2. **Bento grid** (the signature) — 8 cards: feature, $150 stat, process, 60-min stat, Houston map, testimonial, conditions wide, allergy botanical
3. **Conditions tile grid** — 8 condition tiles
4. **Pricing tiers** — 3 cards
5. **FAQ accordion** — 6 most common questions
6. **Final CTA** — full-width green card

**Word count target:** 1,200–1,800 words

**Most important detail:** The bento grid IS this page. Spend the most time here.

## 9.3 About `/about-dr-neil`

**Sections (in order):**

1. **Hero** — H1: "Meet Dr. Neil — Classical Homeopath in Houston". Practitioner photo on right.
2. **Background bento** — credentials card, training card, philosophy quote card, languages card, professional memberships card
3. **Practice philosophy** — long-form prose section (no bento) explaining the approach
4. **What patients say** — 3 testimonial cards
5. **Final CTA** — soft version ("Curious if homeopathy fits you? Book a 60-minute consultation.")

**Word count target:** 1,000–1,400 words

**Required:** Real photo of Dr. Neil. AI-generated practitioner photos break trust. If photo isn't available yet, use a stylized illustrated portrait — never stock photography.

## 9.4 How It Works `/how-it-works`

**Sections (in order):**

1. **Hero** — H1: "What happens in a homeopathic consultation"
2. **5-step process bento** — wide card, each step is a row with number + label + meta + body
3. **What to bring + how to prepare** — 2-card row
4. **After your consultation** — process for receiving remedies, follow-up cadence
5. **FAQ accordion** — 4 process-specific questions
6. **Final CTA**

**Word count target:** 1,000–1,200 words

## 9.5 Pricing `/pricing`

**Sections (in order):**

1. **Hero** — H1: "Honest pricing. *No surprises.*" Subhead mentions HSA/FSA
2. **Pricing tiers** — 3 cards (Initial $150 / Package $279 / Follow-up $85), middle featured
3. **What's included** — bento card explaining each tier's inclusions
4. **Comparison context** — small card: "Most US homeopaths charge $200–$700"
5. **HSA/FSA explainer** — single card
6. **Pricing FAQ** — 5 questions specific to cost/insurance
7. **Final CTA**

**Word count target:** 800–1,000 words

## 9.6 Book `/book`

**Sections (in order):**

1. **Hero** — H1: "Book your consultation with Dr. Neil". Trust strip immediately below: "HIPAA-compliant booking · Confirmation in 5 minutes · Reschedule anytime up to 24h"
2. **Booking widget** — embedded iframe (SimplePractice/IntakeQ)
3. **Trust card row** — 3 small cards: in-person details, telehealth details, what happens next
4. **Prep checklist** — what to do before your appointment
5. **Final CTA** — soft, "Have questions first? Check the FAQ."

**Word count target:** 500–700 words (short — this page exists to convert, not educate)

## 9.7 FAQ `/faq`

**Sections (in order):**

1. **Hero** — H1: "Frequently asked questions about homeopathy"
2. **FAQ accordion** — grouped into 4 categories: About Homeopathy, About Our Practice, Logistics & Pricing, Conditions & Safety. 15–20 questions total.
3. **Final CTA**

**Word count target:** 2,000+ words (long is fine on FAQ — Google rewards comprehensive Q&A pages)

**Schema required:** `FAQPage` JSON-LD wrapping every question.

## 9.8 Condition pages `/conditions/*` (all follow this template)

**Sections (in order):**

1. **Hero** — H1 includes the condition + "homeopathy for [condition]". Subhead is honest ("Homeopathy isn't a quick fix. But for chronic, recurring [condition], it may offer something different.")
2. **The local context** — for allergies, this is the Houston-specific allergy reality. For other conditions, this is the patient experience pattern.
3. **What we actually do for [condition]** — bento grid with the approach, what to expect, timeline
4. **Real patient story** — testimonial card (only if real)
5. **What homeopathy can't do for [condition]** — honest limits ⚠️ critical for trust
6. **FAQ accordion** — 5–7 condition-specific questions
7. **Final CTA**

**Word count target:** 1,200–1,800 words

**Allergies page specifically:** Add unique Houston-climate content — cedar fever seasons, mold patterns, oak pollen timing. This is the highest-ROI page on the site.

## 9.9 Location pages `/houston/*` (all follow this template, with REAL local content)

⚠️ **Warning:** Location pages without genuinely unique content are doorway pages and will get penalized. Each must have actual local content.

**Sections (in order):**

1. **Hero** — H1 includes the suburb name + "homeopathy"
2. **About [suburb]** — neighborhoods served, drive time, in-person vs telehealth options
3. **Why [suburb] residents come to us** — specific local insight (Sugar Land = Indian diaspora; Katy = young families)
4. **Service options for [suburb]** — bento with telehealth card, in-person card, areas served
5. **FAQ accordion** — 4–5 location-specific questions ("How long does it take to get to the clinic from First Colony?", etc.)
6. **Final CTA**

**Word count target:** 800–1,200 words, **with at least 60% unique content vs the other location page**

---

# 10. QUALITY CHECKLIST

Before marking any page "done," verify:

### Content
- [ ] Primary keyword appears in `<title>`, `<h1>`, first paragraph, and image alt text once
- [ ] Page has at least 800 words of unique content (1,500+ for condition pages)
- [ ] Exactly one `<h1>`
- [ ] H2s and H3s follow logical hierarchy (no skipping levels)
- [ ] No keyword stuffing — keywords appear because they fit, not because they're forced
- [ ] At least 2 internal links to other pages on the site
- [ ] At least 1 external link to a credible source
- [ ] No placeholder text (`Lorem ipsum`, `[TBD]`, `Coming soon`) anywhere

### SEO
- [ ] `<title>` meta is unique to this page, under 60 chars, includes primary keyword
- [ ] `<meta name="description">` is unique, under 155 chars, includes primary keyword
- [ ] Canonical URL set
- [ ] Open Graph image exists at `/public/og/{slug}.jpg`
- [ ] Twitter Card meta tags set
- [ ] Appropriate JSON-LD schema present
- [ ] No `noindex` accidentally set

### Design system compliance
- [ ] All colors come from CSS variables (no hardcoded hex values in components)
- [ ] All typography uses Fraunces (display) or Instrument Sans (body)
- [ ] Italic accent words use `<em>` inside H1/H2/H3
- [ ] Bento grid cards use 4 or 12 column spans (mobile/desktop)
- [ ] Card hover states implemented
- [ ] Theme toggle works on this page

### Accessibility
- [ ] All images have `alt` text (or `alt=""` if purely decorative)
- [ ] Form fields have associated labels
- [ ] Focus rings visible on all interactive elements
- [ ] Color contrast passes WCAG AA (verify with axe-core)
- [ ] Keyboard navigation works (Tab through every interactive element)
- [ ] Screen reader announces content in correct order
- [ ] `prefers-reduced-motion` disables animations

### Performance
- [ ] Largest Contentful Paint < 2.5s on 4G mobile (verify with Lighthouse)
- [ ] Cumulative Layout Shift < 0.1
- [ ] All images use `next/image` with explicit width/height
- [ ] No client components imported in server components without `"use client"`
- [ ] Lighthouse score: 95+ on Performance, Accessibility, SEO, Best Practices

### Cross-browser
- [ ] Renders correctly in Chrome, Safari, Firefox
- [ ] Renders correctly on iOS Safari and mobile Chrome
- [ ] Theme toggle works in all browsers

---

# 11. STOP CONDITIONS

**Pause and ask the user — do not guess — when you hit any of these:**

1. **Practitioner credentials missing.** The about page and FAQ both reference Dr. Neil's qualifications. Texas regulates "Dr." in healthcare advertising. If actual credentials aren't provided, do not invent them. Ask the user: "What are Dr. Neil's actual credentials, certifications, and training? What state are they licensed in (if any)?"

2. **Testimonials missing or unattributed.** Don't fabricate. The site has placeholder testimonials. Ask: "Do you have 3+ real attributed customer testimonials to use? If not, we'll mark these sections as placeholders with TODOs."

3. **Booking system not chosen.** The `/book` page needs an actual embedded widget. Ask: "Which booking system will Dr. Neil use? SimplePractice, IntakeQ, and Calendly Pro all support HIPAA-compliant booking with a BAA. Calendly's free tier is not HIPAA-compliant — don't use it for healthcare."

4. **Practice address.** Affects schema markup, Google Business Profile, and footer. Ask: "What's the practice's physical address? Or is this a service-area business with telehealth only?"

5. **Phone number, email.** Needed for footer and schema. Ask if not provided.

6. **Photos.** A homeopath site without a real photo of the practitioner is significantly less trustworthy. Ask: "Do you have a real photo of Dr. Neil for the about page? If not, we'll use a stylized illustrated portrait — but please don't generate an AI portrait."

7. **FSSAI-equivalent in US (state license check).** Homeopaths in Texas may or may not be regulated depending on credentials. Ask: "Has Dr. Neil completed a Texas attorney review of the practitioner-credentials FAQ answer? If not, flag the FAQ as needing legal review before launch."

8. **Indian-diaspora angle.** The keyword research surfaced "indian homeopathic doctor near me" as a search pattern in Sugar Land. Ask: "Does Dr. Neil have Indian heritage or training in Indian homeopathy? If yes, we should lean into this on the Sugar Land page."

9. **Real reviews/data for the bento "312 consultations" line.** Don't fabricate stats. Ask: "What's the actual consultation count to date? Or should we remove this line until we have real data?"

10. **Whether the practice is solo or has multiple practitioners.** Affects copy ("Dr. Neil sees you" vs "our team sees you").

---

# 12. DEPLOYMENT & POST-LAUNCH

### Pre-launch checklist (before going live)

- [ ] All STOP-condition items resolved
- [ ] All 14 priority pages built and pass Quality Checklist
- [ ] Sitemap.xml accessible at `/sitemap.xml`
- [ ] robots.txt allows crawling
- [ ] Google Search Console verified
- [ ] Google Business Profile created and verified
- [ ] Schema markup validated with Google Rich Results Test
- [ ] All Open Graph images present and tested with [opengraph.xyz](https://opengraph.xyz)
- [ ] Mobile Lighthouse scores: 90+ on every metric
- [ ] Accessibility audit (axe-core) shows zero critical/serious issues
- [ ] Plausible/Fathom analytics installed
- [ ] HIPAA-compliant booking widget tested end-to-end
- [ ] Texas attorney has reviewed practitioner-credentials FAQ answer
- [ ] Real testimonials in place (or placeholders explicitly labeled)
- [ ] Real Dr. Neil photo on about page
- [ ] Legal disclaimer present in footer
- [ ] Cookie/privacy notice (if applicable)

### Day-1 launch tasks

1. Submit sitemap to Google Search Console
2. Submit to Bing Webmaster Tools
3. Create or verify Google Business Profile listing
4. Verify schema markup is being read (Search Console > Enhancements)
5. Set up 404 monitoring
6. Initial Lighthouse audit baseline saved

### Week-1 post-launch

- Daily check on Search Console for errors
- Confirm pages are getting indexed (`site:drneilshealthcare.com` in Google)
- First 10 patient bookings → ask each for a Google review
- Solicit first real testimonials with photo permission

### Month-1 post-launch

- Review which pages are getting organic impressions in Search Console
- Decide which Phase 2 condition pages to build based on data
- Write first blog post (allergy season guide is highest ROI)
- Begin building citations (Yelp, Healthgrades, BBB, etc.)

---

# FINAL NOTE TO THE LLM

This brief gives you everything you need to build the site. The structure I'm asking you to follow exists because it's been deliberately chosen to maximize trust, conversion, and SEO simultaneously — not to constrain you for its own sake.

**You will be tempted to:**
- Build more pages "for SEO" → Don't. The 14-page architecture is the strategy.
- Improvise on color/type to "be creative" → Don't. The design system is the brand.
- Skip the outline step → Don't. The outline is what makes the writing focused.
- Fabricate testimonials or credentials → **Never.** Ask the user instead.

**The thing that separates good output from bad on this project is honesty.** This is a healthcare site in a category that fights skepticism. Every section should sound like it was written by someone who refuses to oversell. If you find yourself writing something promotional, pull back.

When in doubt, ask. The user prefers a paused build with one good question over a finished build with one bad invention.

Now: start with the Pre-Flight Checklist (Section 11, STOP conditions). Resolve every blocker before you write any code.
