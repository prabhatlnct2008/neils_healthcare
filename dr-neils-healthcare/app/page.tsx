// PAGE: / (Homepage)
// PRIMARY KEYWORD: homeopathy Houston
// INTENT: Skeptical Houston-area visitor researching homeopathy; build trust, then convert
// TARGET READER: 30–55, frustrated with rushed conventional care, researching for weeks
// TOP 3 TRUST SIGNALS: honest about controversy, $150 transparent pricing, real listening (30 min)
//
// SECTIONS (in order, per landing copy v3):
//  1. Hero (8 col) + Trust Stat (4 col)
//  2. Trust Bar — 4-up benefit chips (full width)
//  3. What Is Homeopathy (8 col copy + 4 col visual)
//  4. Bento Grid (signature) — feature, $150, process, 30-min, map, testimonial, conditions, botanical
//  5. Conditions tile grid (8 conditions)
//  6. Why Houston Chooses Us (4 differentiators)
//  7. Meet Dr. Nill Mani (bio + photo)
//  8. What's Included in your $150 consultation
//  9. How It Works (full 5-step)
// 10. Testimonials (3 stories)
// 11. Pricing (3 tiers)
// 12. FAQ (2-col accordion) + FAQPage schema
// 13. Final CTA
// 14. Full legal disclaimer (prominent callout above footer)
//
// INTERNAL LINKS: /book, /how-it-works, /pricing, /faq, /about-dr-nillmani, condition pages
// EXTERNAL LINK: NCCIH (NIH) homeopathy overview
// SCHEMA: FAQPage

import React from "react";
import Link from "next/link";
import {
  Check,
  X,
  MapPin,
  Sparkles,
  Wallet,
  Package,
  Globe,
} from "lucide-react";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Pill } from "@/components/primitives/Pill";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoCard } from "@/components/bento/BentoCard";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { conditions } from "@/content/conditions";
import { pricingTiers } from "@/content/pricing";
import { paymentInfo } from "@/content/pricing";
import { testimonials } from "@/content/testimonials";
import { faqs } from "@/content/faqs";

// Render the lightweight markdown (**bold**, *italic*) used in FAQ answers.
function formatAnswer(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-ink-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const trustBar = [
  {
    icon: Sparkles,
    title: "Personalized to you",
    body: "No symptom checklists. We treat the whole person — body, mind, and history.",
  },
  {
    icon: Wallet,
    title: "Fair $150 pricing",
    body: "Most homeopaths charge $200–$700 for a new-patient visit. We don't.",
  },
  {
    icon: Package,
    title: "Delivered in 7 days",
    body: "Your remedy ships to your door anywhere in Texas within a week.",
  },
  {
    icon: Globe,
    title: "Statewide telehealth",
    body: "Secure video visits from Houston, Sugar Land, Katy, Pearland, or anywhere in Texas.",
  },
];

const processSteps = [
  { num: "01", label: "Book your consult", meta: "10 min" },
  { num: "02", label: "30-minute deep dive", meta: "secure video" },
  { num: "03", label: "Personalized plan", meta: "48 hr turnaround" },
  { num: "04", label: "Remedy at your door", meta: "5–7 days" },
];

const conditionPills = [
  "Allergies",
  "Anxiety",
  "Insomnia",
  "Eczema",
  "Migraines",
  "IBS & reflux",
  "PMS & menopause",
  "Children's health",
  "Hair fall",
  "Arthritis",
  "Autoimmune",
  "Recurring infections",
  "Fatigue",
  "Grief & mood",
];

const differentiators = [
  {
    title: "Fair pricing for real time and real expertise.",
    body: "Most homeopaths in the U.S. charge $200–$400 for a new-patient visit. Some charge $700. Dr. Nill Mani charges $150 because individualized care should be accessible to working families, not just the wealthy. Remedies are priced honestly too — typically $15–$45 — and often last for months. HSA and FSA eligible.",
  },
  {
    title: "Classical homeopathy, the way it should be practiced.",
    body: "We are homeopath consultants. That means one remedy at a time, chosen carefully, matched to the totality of who you are. No 14-supplement protocols. No shotgun approaches. The right remedy, given gently, is enough.",
  },
  {
    title: "You actually get listened to.",
    body: "Thirty minutes. No interruptions. No clock-watching. Patients tell us the consultation itself is part of the healing.",
  },
  {
    title: "Houston-based, accessible everywhere in Texas.",
    body: "Secure, HIPAA-compliant telehealth for patients across Sugar Land, Katy, Pearland, Friendswood, The Woodlands, Cypress, Spring, Memorial, the Heights, and the rest of Texas.",
  },
];

const included = [
  "30-minute consultation via secure video with Dr. Nill Mani personally",
  "Pre-consultation intake form — completed online so we use every minute on you, not paperwork",
  "Detailed written remedy plan delivered within 48 hours",
  "Dosing instructions in plain English — what to take, when, and what to expect",
  "A 30-day email window for clarifying questions about your plan",
  "Honest answers — including when homeopathy isn't the right fit, and when to see another provider",
];

const notIncluded = [
  "Remedies themselves (typically $15–$45, shipped from a licensed pharmacy — you pay the pharmacy, we don't mark up)",
  "Follow-up consultations (we recommend one at 4–6 weeks, $85, significantly less than the initial)",
  "Lab testing (we don't run labs — if you need them, we'll recommend a primary care provider or specialist)",
  "Emergency or acute medical care (we are not a substitute for your primary physician or urgent care)",
];

const journeySteps = [
  {
    num: "01",
    title: "Book your consultation ($150)",
    body: "Choose a time online. You'll fill out a 10-minute pre-consultation intake form so we don't waste any of your hour together on paperwork.",
  },
  {
    num: "02",
    title: "Your 30-minute consultation",
    body: "Over secure, HIPAA-compliant video. Dr. Nill Mani will go deep — your current concerns, your medical history, your sleep, your stress, what you crave, what you can't stand. There are no wrong answers. Most patients tell us this is the first time a provider has actually listened.",
  },
  {
    num: "03",
    title: "Your personalized remedy plan",
    body: "Within 48 hours, Dr. Nill Mani reviews your case and matches you to the remedy — or combination of remedies — that fits your unique pattern. You'll receive a written plan with dosing instructions, what to expect, and what to watch for.",
  },
  {
    num: "04",
    title: "Remedies at your door within 7 days",
    body: "Your remedies ship directly from a licensed homeopathic pharmacy to your home anywhere in Texas, typically arriving within 5–7 business days. Remedy costs are separate and usually range from $15–$45.",
  },
  {
    num: "05",
    title: "Follow-up at 4–6 weeks",
    body: "Healing isn't a one-shot deal. We check in to assess what's shifted, what hasn't, and whether we need to adjust. Follow-up consultations are 15 minutes and $85.",
  },
];

export default function HomePage() {
  const homepageFAQs = faqs.slice(0, 10);

  return (
    <div className="w-full">
      <FAQSchema faqs={homepageFAQs} />

      {/* 1. Hero + Trust Stat */}
      <section className="w-full bg-bg-page pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <BentoGrid>
            {/* Hero Card — 8 cols × 2 rows */}
            <BentoCard colSpan={8} rowSpan={2} variant="default" hover={false}>
              <div className="flex h-full flex-col justify-center space-y-6 py-2">
                <Pill variant="accent">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  Now serving Houston, Sugar Land &amp; Katy
                </Pill>

                <DisplayHeading as="h1">
                  Homeopathy — Medicine that <em>listens.</em>
                  <br />
                  Personalized medicine.
                </DisplayHeading>

                <p className="max-w-2xl text-lg leading-relaxed text-ink-secondary md:text-xl">
                  A 30-minute consultation with Dr. Nill Mani, a remedy plan made for
                  your body, and natural medicine delivered to your door within 7
                  days.
                </p>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <Button size="large" asChild>
                    <Link href="/book">Book my $150 consultation →</Link>
                  </Button>
                  <Button variant="ghost" size="large" asChild>
                    <Link href="#how-it-works">See how it works ↓</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-ink-secondary">
                  {[
                    "200 years of tradition",
                    "FDA-regulated remedies",
                    "HSA / FSA eligible",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* Trust Stat Card — 4 cols × 2 rows */}
            <BentoCard colSpan={4} rowSpan={2} variant="dark">
              <div className="flex h-full flex-col justify-center space-y-5 py-2">
                <Eyebrow className="text-ink-on-dark/70">Why patients stay</Eyebrow>

                <div>
                  <div className="font-display text-7xl font-medium leading-[0.9] tracking-tight">
                    100%
                  </div>
                  <p className="mt-3 text-lg">
                    Personalized remedy plan in 48 hours
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm text-ink-on-dark/90">
                  {[
                    "Real listening · no rushed visits",
                    "One remedy at a time · classical approach",
                    "A human reply on email and phone",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-moss"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* 2. Trust Bar — 4-up chips */}
      <section className="w-full bg-bg-page pb-12 md:pb-16">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBar.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border-soft bg-bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mb-1 font-display text-lg font-normal text-ink-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Is Homeopathy */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <Eyebrow>Understanding the modality</Eyebrow>
              <DisplayHeading as="h2">
                Real medicine, the way it was{" "}
                <em>practiced before it was rushed</em>.
              </DisplayHeading>

              <div className="space-y-5 text-base leading-relaxed text-ink-secondary">
                <p>
                  Homeopathy is a 200-year-old system of medicine built on a
                  single, deceptively simple principle:{" "}
                  <strong className="text-ink-primary">like cures like</strong>.
                  A substance that produces symptoms in a healthy person, when
                  carefully diluted, can prompt the body to resolve those same
                  symptoms in someone who is unwell. It is one of the world's most
                  widely practiced forms of medicine, used by over 200 million
                  people globally and regulated in the United States under the
                  Federal Food, Drug, and Cosmetic Act.
                </p>
                <p>
                  What makes homeopathy different from almost everything else
                  you've tried isn't the remedies. It's the{" "}
                  <strong className="text-ink-primary">consultation</strong>. A
                  conventional 12-minute appointment cannot capture who you are. A
                  homeopath's appointment can. Dr. Nill Mani spends a half hour asking about
                  your sleep, your appetite, your moods, your stress, what makes
                  your symptoms better, what makes them worse. The right remedy
                  isn't the one that matches your <em>diagnosis</em> — it's the one
                  that matches <em>you</em>.
                </p>
                <p>
                  <strong className="text-ink-primary">
                    We'll also be honest about what homeopathy isn't.
                  </strong>{" "}
                  It isn't a substitute for emergency medicine or a replacement for
                  a primary care physician. It doesn't cure cancer, set broken
                  bones, or treat acute infections. What it does, in our
                  experience, is offer real help for chronic and recurring concerns
                  where conventional medicine has run out of options. You can read
                  an independent overview from the{" "}
                  <a
                    href="https://www.nccih.nih.gov/health/homeopathy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    NIH's National Center for Complementary and Integrative Health
                  </a>
                  , and see exactly{" "}
                  <Link
                    href="/how-it-works"
                    className="text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    how a consultation works
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Visual card — "Like cures like" + dilution staircase */}
            <div className="lg:col-span-4">
              <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border-soft bg-bg-card p-8 shadow-[var(--shadow-card)]">
                <div className="space-y-3">
                  <Eyebrow>The principle</Eyebrow>
                  <h3 className="font-display text-3xl font-normal tracking-tight">
                    <em className="font-display-italic italic text-accent">
                      Like cures like.
                    </em>
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    A small, carefully matched dose triggers what your body
                    already knows how to do.
                  </p>
                </div>

                {/* Dilution staircase */}
                <div
                  className="flex items-end gap-1.5"
                  aria-hidden="true"
                >
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-accent"
                      style={{
                        height: `${28 + i * 12}px`,
                        opacity: 0.35 + i * 0.09,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bento Grid — the signature section */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10">
            <Eyebrow className="mb-4">The system</Eyebrow>
            <DisplayHeading as="h2">
              A half hour of <em>real listening</em>. A remedy made for you.
            </DisplayHeading>
          </div>

          <BentoGrid>
            {/* Card 1 — FEATURE (8 × 2) */}
            <BentoCard colSpan={8} rowSpan={2} variant="feature">
              <div className="flex h-full flex-col justify-center space-y-5 py-2">
                <Eyebrow className="text-ink-on-dark/70">Our approach</Eyebrow>
                <h3 className="font-display text-3xl font-normal leading-tight tracking-tight md:text-4xl">
                  The 12-minute appointment is the disease.{" "}
                  <em className="font-display-italic italic">We're the cure.</em>
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink-on-dark/85 md:text-lg">
                  Classical homeopathy means one carefully chosen remedy at a
                  time, matched to who you are — not the diagnosis on your chart.
                  No 14-supplement protocols. No five-minute visits. Just careful,
                  individualized care.
                </p>
              </div>
            </BentoCard>

            {/* Card 2 — STAT $150 (4 × 2) */}
            <BentoCard colSpan={4} rowSpan={2} variant="stat">
              <div className="space-y-2">
                <Eyebrow>Initial consultation</Eyebrow>
                <div className="font-display text-7xl font-medium leading-[0.9] tracking-tight text-accent">
                  $150
                </div>
                <p className="text-lg text-ink-primary">
                  For a half hour with Dr. Nill Mani
                </p>
                <p className="pt-1 text-sm italic text-ink-tertiary">
                  Most US homeopaths charge $200–$700
                </p>
              </div>
            </BentoCard>

            {/* Card 3 — PROCESS (4 × 2) */}
            <BentoCard colSpan={4} rowSpan={2} variant="default" hover={false}>
              <div className="space-y-4">
                <div>
                  <Eyebrow className="mb-2">How it works</Eyebrow>
                  <h3 className="font-display text-2xl font-normal tracking-tight">
                    From booking to door
                  </h3>
                </div>
                <ol className="space-y-3">
                  {processSteps.map((step) => (
                    <li key={step.num} className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-medium text-accent">
                        {step.num}
                      </span>
                      <span className="text-sm text-ink-primary">
                        {step.label}
                        <span className="block text-xs italic text-ink-tertiary">
                          {step.meta}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </BentoCard>

            {/* Card 4 — TESTIMONIAL QUICK (4 × 2) */}
            <BentoCard colSpan={4} rowSpan={2} variant="default" hover={false}>
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-3">
                  <Eyebrow>Patient story</Eyebrow>
                  <blockquote className="text-base leading-relaxed text-ink-primary">
                    &ldquo;My six-year-old's eczema cleared in three months after
                    years of steroid creams. The consultation was the first time
                    anyone actually listened.&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-moss-soft text-lg">
                    👤
                  </span>
                  <span className="text-sm text-ink-tertiary">
                    Priya R. · Sugar Land, TX
                  </span>
                </div>
              </div>
            </BentoCard>

            {/* Card 5 — 30 MIN STAT (4 × 1) */}
            <BentoCard colSpan={4} rowSpan={1} variant="stat">
              <div className="space-y-1">
                <Eyebrow>Every session</Eyebrow>
                <div className="font-display text-5xl font-medium tracking-tight text-ink-primary">
                  30 min
                </div>
                <p className="text-sm text-ink-secondary">
                  No clock-watching. No rushed prescription.
                </p>
              </div>
            </BentoCard>

            {/* Card 6 — HOUSTON MAP (4 × 1) */}
            <BentoCard colSpan={4} rowSpan={1} variant="default" hover={false}>
              <div className="flex h-full items-center justify-between gap-4">
                <div className="space-y-1">
                  <Eyebrow>Service area</Eyebrow>
                  <h3 className="font-display text-2xl font-normal tracking-tight">
                    All of greater Houston
                  </h3>
                  <p className="text-sm text-ink-secondary">
                    In-person home base · telehealth statewide
                  </p>
                </div>
                <div
                  className="relative h-16 w-16 flex-shrink-0"
                  aria-hidden="true"
                >
                  <MapPin className="absolute inset-0 m-auto h-8 w-8 text-accent" />
                  <span className="absolute left-1 top-2 h-2 w-2 animate-ping rounded-full bg-accent/60" />
                  <span className="absolute bottom-2 right-2 h-2 w-2 animate-ping rounded-full bg-accent/40 [animation-delay:400ms]" />
                </div>
              </div>
            </BentoCard>

            {/* Card 7 — CONDITIONS WIDE (8 × 1) */}
            <BentoCard colSpan={8} rowSpan={1} variant="default" hover={false}>
              <div className="space-y-3">
                <Eyebrow>What we work with most</Eyebrow>
                <h3 className="font-display text-xl font-normal tracking-tight">
                  Fourteen conditions, one approach:{" "}
                  <em className="font-display-italic italic text-accent">
                    match the person, not the diagnosis.
                  </em>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {conditionPills.map((pill, i) => (
                    <span
                      key={pill}
                      className={
                        i === 0
                          ? "rounded-full bg-accent px-3 py-1 text-sm font-medium text-ink-on-dark"
                          : "rounded-full border border-border-soft bg-moss-soft/40 px-3 py-1 text-sm text-ink-secondary"
                      }
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>

            {/* Card 8 — ALLERGY BOTANICAL (4 × 1) */}
            <BentoCard colSpan={4} rowSpan={1} variant="default" hover={false}>
              <div className="space-y-1">
                <Eyebrow>Houston allergy season</Eyebrow>
                <h3 className="font-display text-2xl font-normal tracking-tight">
                  Cedar, oak{" "}
                  <em className="font-display-italic italic text-accent">
                    &amp; mold.
                  </em>
                </h3>
                <p className="text-sm text-ink-secondary">
                  Local triggers, classical relief.{" "}
                  <Link
                    href="/conditions/allergies"
                    className="text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    See allergy care →
                  </Link>
                </p>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* 5. Conditions tile grid */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">What we treat</Eyebrow>
            <DisplayHeading as="h2">
              Because homeopathy treats <em>the person</em> — almost any chronic
              concern is worth a conversation.
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {conditions.map((condition) => (
              <Link
                key={condition.id}
                href={condition.slug}
                className="group rounded-2xl border border-border-soft bg-bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:bg-bg-card-hover hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="mb-2 font-display text-xl font-normal transition-colors group-hover:text-accent">
                  {condition.title}
                </h3>
                <p className="text-sm text-ink-secondary">
                  {condition.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Houston Chooses Us */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">What makes us different</Eyebrow>
            <DisplayHeading as="h2">
              Why patients in Houston, Sugar Land &amp; Katy{" "}
              <em>choose Dr. Nill Mani</em>.
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-soft bg-bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft font-display text-lg font-medium text-accent">
                  {i + 1}
                </div>
                <h3 className="mb-3 font-display text-xl font-normal text-ink-primary">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Meet Dr. Nill Mani */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Photo */}
            <div className="lg:col-span-4">
              <div className="flex aspect-[3/4] items-center justify-center rounded-3xl border border-border-soft bg-moss-soft p-10">
                <div className="space-y-3 text-center">
                  <div className="text-6xl">👤</div>
                  <p className="text-sm text-ink-tertiary">
                    Real photo of Dr. Nill Mani
                    <br />
                    to be added here
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 lg:col-span-8">
              <Eyebrow>Meet your homeopath</Eyebrow>
              <DisplayHeading as="h2">
                Dr. Nill Mani — <em>Homeopath Consultant</em> in Houston
              </DisplayHeading>

              <div className="space-y-4 text-base leading-relaxed text-ink-secondary">
                <p>
                  Dr. Nill Mani is a homeopath consultant serving the greater Houston
                  area, with a multi-disciplinary foundation: a Bachelor of
                  Electropathy Medicine &amp; Surgery (BEMS), a PhD in Biomedical
                  Engineering from IIT, and Stanford certification in herbal
                  medicine. The approach is unhurried, evidence-informed, and
                  deeply individualized: one carefully chosen remedy at a time,
                  matched to the totality of who you are.
                </p>
                <p>
                  Homeopathy is bought from a person, not a clinic — so Dr. Nill Mani
                  sees every patient personally. You can read the full background,
                  training, and credentials on the{" "}
                  <Link
                    href="/about-dr-nillmani"
                    className="text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    About Dr. Nill Mani
                  </Link>{" "}
                  page.
                </p>
              </div>

              {/* Quick facts */}
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ["Training", "Stanford · BEMS · PhD (IIT)"],
                  ["Approach", "Classical — one remedy at a time"],
                  ["Consultations", "Secure telehealth across Texas"],
                  ["Practice type", "Solo practitioner"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-border-soft bg-bg-card px-4 py-3"
                  >
                    <dt className="text-sm text-ink-tertiary">{label}</dt>
                    <dd className="text-right text-sm font-medium text-ink-primary">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-sm text-ink-tertiary">
                Have a question for Dr. Nill Mani before booking? Email{" "}
                <span className="font-medium text-ink-secondary">[Email]</span> —
                Dr. Nill Mani personally replies within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. What's Included */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Transparent inclusions</Eyebrow>
            <DisplayHeading as="h2">
              What you get for <em>$150</em>.
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Included */}
            <div className="rounded-3xl border border-border-soft bg-bg-card p-8 shadow-[var(--shadow-card)]">
              <h3 className="mb-6 font-display text-2xl font-normal text-ink-primary">
                What&apos;s included
              </h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <Check
                      className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div className="rounded-3xl border border-border-soft bg-moss-soft/30 p-8">
              <h3 className="mb-6 font-display text-2xl font-normal text-ink-primary">
                What&apos;s not included
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <X
                      className="mt-1 h-5 w-5 flex-shrink-0 text-ink-tertiary"
                      aria-hidden="true"
                    />
                    <span className="text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. How It Works — full 5-step */}
      <section id="how-it-works" className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">The full journey</Eyebrow>
            <DisplayHeading as="h2">
              From your first click to your <em>first dose</em>.
            </DisplayHeading>
          </div>

          <div className="mx-auto max-w-4xl space-y-5">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-border-soft bg-bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  <div className="font-display text-4xl font-medium tracking-tight text-accent md:text-5xl">
                    {step.num}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-xl font-normal text-ink-primary md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-secondary">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="large" asChild>
              <Link href="/book">Ready to start? Book my $150 consultation →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Patient stories</Eyebrow>
            <DisplayHeading as="h2">
              What patients <em>tell us</em>.
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-2xl border border-border-soft bg-bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <blockquote className="mb-6 text-base leading-relaxed text-ink-secondary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-soft text-2xl">
                    👤
                  </span>
                  <div>
                    <div className="font-medium text-ink-primary">{t.author}</div>
                    <div className="text-sm text-ink-tertiary">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-ink-tertiary">
            Placeholder stories — real, attributed testimonials will replace these
            before launch (FTC requires genuine patient consent).
          </p>
        </div>
      </section>

      {/* 11. Pricing */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <Eyebrow className="mb-4">Pricing</Eyebrow>
            <DisplayHeading as="h2">
              Honest pricing. <em>No surprises.</em>
            </DisplayHeading>
            <p className="mt-4 text-ink-secondary">
              HSA &amp; FSA eligible · Superbills on request
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl border bg-bg-card p-8 ${
                  tier.featured
                    ? "border-accent shadow-[var(--shadow-card-hover)] md:scale-105"
                    : "border-border-soft shadow-[var(--shadow-card)]"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Pill variant="accent">{tier.badge}</Pill>
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="mb-2 font-display text-2xl font-normal">
                    {tier.name}
                  </h3>
                  <div className="mb-2 font-display text-5xl font-medium text-accent">
                    ${tier.price}
                  </div>
                  <p className="text-sm text-ink-secondary">
                    {tier.duration} · {tier.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.featured ? "primary" : "ghost"}
                  className="w-full"
                  asChild
                >
                  <Link href={tier.ctaLink}>{tier.ctaText}</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-ink-tertiary">
            {paymentInfo.accepted}. {paymentInfo.hsa} {paymentInfo.insurance}
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Frequently asked</Eyebrow>
            <DisplayHeading as="h2">
              Everything you actually <em>want to know.</em>
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {homepageFAQs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-display text-xl font-normal text-ink-primary">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-ink-secondary">
                  {formatAnswer(faq.answer)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="ghost" asChild>
              <Link href="/faq">See all questions →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-6 rounded-3xl bg-bg-card-feature p-12 text-center text-ink-on-dark shadow-[var(--shadow-card-hover)] md:p-16">
            <Eyebrow className="text-ink-on-dark/70">Ready when you are</Eyebrow>

            <h2 className="font-display text-3xl font-normal leading-[1.05] tracking-tight md:text-5xl">
              Thirty minutes.
              <br />
              One hundred fifty dollars.
              <br />
              Care that{" "}
              <em className="font-display-italic italic">actually fits</em>.
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink-on-dark/85 md:text-xl">
              If you're tired of the 12-minute appointment, the prescription that
              suppresses a symptom, or the diagnostic shrug that says &ldquo;your
              labs are normal&rdquo; — let's have a real conversation.
            </p>

            <div className="pt-2">
              <Button size="large" asChild>
                <Link href="/book">Book my $150 consultation →</Link>
              </Button>
            </div>

            <p className="pt-2 text-sm text-ink-on-dark/70">
              Still have questions? Email [Email] or call [Phone] — Dr. Nill Mani
              personally replies within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* 14. Legal disclaimer */}
      <section className="w-full bg-bg-page pb-16 md:pb-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-4 rounded-2xl border border-border-strong bg-moss-soft/40 p-6 text-xs leading-relaxed text-ink-secondary md:p-8">
            <p>
              The information on this website is provided for educational purposes
              only and is not intended as medical advice, diagnosis, or treatment.
              Homeopathic claims have not been evaluated by the Food and Drug
              Administration, and the theory of homeopathy is not accepted by most
              modern medical experts. Homeopathy is not intended to diagnose,
              treat, cure, or prevent any disease and is not a substitute for the
              care of a licensed medical doctor.
            </p>
            <p>
              Always consult your physician before making changes to any medical
              regimen or starting a new treatment, and never discontinue
              prescription medication without consulting the prescribing doctor.
            </p>
            <p>
              Dr. Neil&apos;s Healthcare and Dr. Nill Mani do not practice medicine and
              are not licensed medical practitioners in the State of Texas. Patient
              testimonials reflect individual experiences and are not a guarantee
              of results; outcomes vary. No specific health outcome is promised or
              guaranteed.
            </p>
            <p className="font-medium text-ink-primary">
              If you are experiencing a medical emergency, call 911 or go to the
              nearest emergency room. If you are in crisis, call 988 (US Suicide
              &amp; Crisis Lifeline).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
