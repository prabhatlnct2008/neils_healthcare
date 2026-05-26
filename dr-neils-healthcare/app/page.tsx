import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Pill } from "@/components/primitives/Pill";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoCard } from "@/components/bento/BentoCard";
import { conditions } from "@/content/conditions";
import { pricingTiers } from "@/content/pricing";
import { getFAQsForPage } from "@/content/faqs";

export default function HomePage() {
  const homepageFAQs = getFAQsForPage("homepage");

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <BentoGrid>
            {/* Hero Card - 8 cols × 2 rows */}
            <BentoCard colSpan={8} rowSpan={2} variant="default">
              <div className="flex flex-col justify-center h-full space-y-6">
                <Pill variant="accent">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                  Now serving Houston, Sugar Land & Katy
                </Pill>

                <DisplayHeading as="h1">
                  Honest homeopathy.<br />Personally <em>matched</em> to you.
                </DisplayHeading>

                <p className="text-lg md:text-xl text-ink-secondary leading-relaxed max-w-2xl">
                  A 60-minute consultation with Dr. Neil, a remedy plan made for your body,
                  and natural medicine delivered to your door within 7 days.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="large" asChild>
                    <Link href="/book">Book my $150 consultation →</Link>
                  </Button>
                  <Button variant="ghost" size="large" asChild>
                    <Link href="#how-it-works">See how it works ↓</Link>
                  </Button>
                </div>

                {/* Trust micro-strip */}
                <div className="flex flex-wrap gap-4 pt-4 text-sm text-ink-secondary">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>200 years of tradition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>FDA-regulated remedies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <span>HSA / FSA eligible</span>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Trust Stat Card - 4 cols × 2 rows */}
            <BentoCard colSpan={4} rowSpan={2} variant="dark">
              <div className="flex flex-col justify-center h-full space-y-4">
                <Eyebrow className="text-ink-on-dark/70">Why patients stay</Eyebrow>

                <div>
                  <div className="font-display text-6xl md:text-7xl font-medium tracking-tight">
                    100%
                  </div>
                  <p className="text-lg mt-2">Personalized remedy plan in 48 hours</p>
                </div>

                <div className="space-y-2 pt-4 text-sm">
                  <div className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Real listening · no rushed visits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>✓</span>
                    <span>One remedy at a time · classical approach</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Human reply on email and phone</span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">What we treat</Eyebrow>
            <DisplayHeading as="h2">
              Because homeopathy treats <em>the person</em> — almost any chronic concern is worth a conversation.
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((condition) => (
              <Link
                key={condition.id}
                href={condition.slug}
                className="group bg-bg-card border border-border-soft rounded-2xl p-6 hover:bg-bg-card-hover hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="font-display text-xl font-normal mb-2 group-hover:text-accent transition-colors">
                  {condition.title}
                </h3>
                <p className="text-sm text-ink-secondary">{condition.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <Eyebrow className="mb-4">Pricing</Eyebrow>
            <DisplayHeading as="h2">
              Honest pricing. <em>No surprises.</em>
            </DisplayHeading>
            <p className="text-ink-secondary mt-4">
              HSA & FSA eligible · Superbills on request
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-bg-card border rounded-3xl p-8 ${
                  tier.featured
                    ? "border-accent shadow-[var(--shadow-card-hover)] scale-105"
                    : "border-border-soft shadow-[var(--shadow-card)]"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Pill variant="accent">{tier.badge}</Pill>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-normal mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-display text-5xl font-medium text-accent mb-2">
                    ${tier.price}
                  </div>
                  <p className="text-sm text-ink-secondary">
                    {tier.duration} · {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-accent">✓</span>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Frequently asked</Eyebrow>
            <DisplayHeading as="h2">
              Everything you actually <em>want to know.</em>
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homepageFAQs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-display text-xl font-normal text-ink-primary">
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

      {/* Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <Eyebrow className="text-ink-on-dark/70">Ready when you are</Eyebrow>

            <DisplayHeading as="h2">
              Sixty minutes.<br />
              One hundred fifty dollars.<br />
              Care that <em>actually fits</em>.
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              If you're tired of the 12-minute appointment, the prescription that suppresses
              a symptom, or the diagnostic shrug that says "your labs are normal" — let's
              have a real conversation.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book my $150 consultation →</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Still have questions? Email [Email] or call [Phone] — Dr. Neil personally
              replies within one business day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
