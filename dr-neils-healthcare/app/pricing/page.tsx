// PAGE: /pricing
// PRIMARY KEYWORD: homeopathy consultation cost Houston
// INTENT: Houston resident considering homeopathy, wants to know cost
//
// SECTIONS (in order):
// 1. Hero — H1 + subhead with HSA/FSA mention
// 2. Pricing tiers — 3 cards
// 3. What's included — detailed breakdown
// 4. Comparison context — market context card
// 5. HSA/FSA explainer
// 6. Pricing FAQ
// 7. Final CTA

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { Pill } from "@/components/primitives/Pill";
import { pricingTiers, paymentInfo } from "@/content/pricing";
import { getFAQsByCategory } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Pricing | $150 Homeopathic Consultation | Dr Neil's Healthcare",
  description:
    "Transparent pricing for homeopathic care. Initial consultation $150, follow-ups $85. HSA/FSA eligible. No hidden fees. Book online.",
};

export default function PricingPage() {
  const pricingFAQs = getFAQsByCategory("logistics");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Eyebrow className="mx-auto">Pricing</Eyebrow>

            <DisplayHeading as="h1">
              Honest pricing. <em>No surprises.</em>
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Most US homeopaths charge $200–$700 for a new-patient visit. We believe
              individualized care should be accessible to working families, not just the
              wealthy.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Pill variant="accent">HSA & FSA eligible</Pill>
              <Pill variant="default">Superbills on request</Pill>
              <Pill variant="default">No hidden fees</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-bg-card border rounded-3xl p-8 transition-all duration-300 ${
                  tier.featured
                    ? "border-accent shadow-[var(--shadow-card-hover)] md:scale-105 md:-translate-y-2"
                    : "border-border-soft shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Pill variant="accent">{tier.badge}</Pill>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl font-normal mb-3">
                    {tier.name}
                  </h2>
                  <div className="font-display text-6xl font-medium text-accent mb-3 tracking-tight">
                    ${tier.price}
                  </div>
                  <p className="text-base text-ink-secondary">
                    {tier.duration}
                  </p>
                  <p className="text-sm text-ink-tertiary mt-1">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-3 text-base">
                      <span className="text-accent text-lg flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-ink-secondary">{inclusion}</span>
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
        </div>
      </section>

      {/* What's Included Detail */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <Eyebrow className="mb-4">Transparent inclusions</Eyebrow>
            <DisplayHeading as="h2">
              What you get for <em>$150.</em>
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* What's Included */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-2xl font-normal mb-6 text-accent">
                ✓ What's included
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">30-minute consultation</strong> (in-person or video) with Dr. Neil personally
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Pre-consultation intake form</strong> — completed online before your visit so we use every minute on you, not paperwork
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Detailed written remedy plan</strong> delivered within 48 hours
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Dosing instructions</strong> in plain English — what to take, when, and what to expect
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">A 30-day email window</strong> for clarifying questions about your plan
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Honest answers</strong> — including when homeopathy isn't the right fit, and when to see another type of provider
                  </div>
                </li>
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-2xl font-normal mb-6 text-ink-secondary">
                ⚪ What's not included
              </h3>
              <p className="text-sm text-ink-tertiary mb-6">(and why we're upfront about it)</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-ink-tertiary flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Remedies themselves</strong> (typically $15–$45, shipped directly from a licensed homeopathic pharmacy — you pay the pharmacy, we don't mark up)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-tertiary flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Follow-up consultations</strong> (we recommend one at 4–6 weeks, $85, significantly less than the initial)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-tertiary flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Lab testing</strong> (we don't run labs — if you need them, we'll recommend a primary care or specialist)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ink-tertiary flex-shrink-0 mt-1">•</span>
                  <div>
                    <strong className="text-ink-primary">Emergency or acute medical care</strong> (we are not a substitute for your primary physician or urgent care)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Context + HSA/FSA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Market Context */}
            <div className="bg-moss-soft/30 border border-border-soft rounded-2xl p-8">
              <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                How our pricing compares
              </h3>
              <p className="text-base text-ink-secondary leading-relaxed mb-4">
                Most homeopaths in the U.S. charge <strong>$200–$400</strong> for a new-patient visit. Some charge <strong>$700</strong>.
              </p>
              <p className="text-base text-ink-secondary leading-relaxed">
                Dr. Neil charges <strong className="text-accent">$150</strong> because we believe individualized care should be accessible to working families, not just the wealthy. Our remedies are also priced honestly — typically $15–$45 — and they often last for months.
              </p>
            </div>

            {/* HSA/FSA */}
            <div className="bg-accent-soft border border-accent/20 rounded-2xl p-8">
              <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                HSA & FSA eligible
              </h3>
              <p className="text-base text-ink-secondary leading-relaxed mb-4">
                Homeopathic consultations are generally eligible under <strong>HSA and FSA accounts</strong> (IRS Section 213(d) — check with your plan administrator).
              </p>
              <p className="text-base text-ink-secondary leading-relaxed">
                We accept HSA/FSA cards directly. We also provide <strong>itemized superbills</strong> on request for out-of-network insurance reimbursement, though we cannot guarantee your insurer will pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Common questions</Eyebrow>
            <DisplayHeading as="h2">
              Pricing & insurance <em>questions answered.</em>
            </DisplayHeading>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {pricingFAQs.map((faq, index) => (
              <div key={index} className="border-b border-border-soft pb-8 last:border-0">
                <h3 className="font-display text-xl md:text-2xl font-normal text-ink-primary mb-4">
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-ink-secondary">
                  {faq.answer}
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

      {/* Payment Details */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mx-auto bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-normal mb-6 text-ink-primary">
              Payment details
            </h3>
            <div className="space-y-4 text-sm text-ink-secondary leading-relaxed">
              <p>{paymentInfo.accepted}</p>
              <p>{paymentInfo.hsa}</p>
              <p>{paymentInfo.insurance}</p>
              <p><strong>Remedy costs:</strong> {paymentInfo.remedyCost}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <Eyebrow className="text-ink-on-dark/70">Ready to book?</Eyebrow>

            <DisplayHeading as="h2">
              Fair pricing.<br />
              Real expertise.<br />
              <em>No surprises.</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              $150 for 30 minutes. A written remedy plan in 48 hours. Honest answers about
              what homeopathy can and can't do.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book my consultation →</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Have questions about pricing? Email [Email] or call [Phone]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
