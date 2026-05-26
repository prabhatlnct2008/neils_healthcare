// PAGE: /about-dr-neil
// PRIMARY KEYWORD: classical homeopath Houston
// INTENT: Visitor wants to know practitioner credentials and approach
//
// SECTIONS (in order):
// 1. Hero with photo
// 2. Background bento — credentials, training, philosophy, languages
// 3. Practice philosophy — long-form prose
// 4. What patients say — 3 testimonials
// 5. Soft CTA

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoCard } from "@/components/bento/BentoCard";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "About Dr. Neil | Classical Homeopath in Houston, TX",
  description:
    "Meet Dr. Neil, a classical homeopath serving Houston with an Indian homeopathy degree (BHMS). Personalized, evidence-informed care for chronic conditions.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text Content - 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <Eyebrow>Meet your homeopath</Eyebrow>

              <DisplayHeading as="h1">
                Dr. Neil<br />
                <em>Classical Homeopath</em><br />
                in Houston
              </DisplayHeading>

              <p className="text-xl text-ink-secondary leading-relaxed">
                Trained in classical homeopathy with an Indian homeopathy degree (BHMS), Dr. Neil brings unhurried, individualized care to Houston's homeopathy community.
              </p>

              <div className="pt-4">
                <Button size="large" asChild>
                  <Link href="/book">Book a consultation →</Link>
                </Button>
              </div>
            </div>

            {/* Photo Placeholder - 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-moss-soft border border-border-soft rounded-3xl p-12 md:p-16 aspect-[3/4] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">👤</div>
                  <p className="text-sm text-ink-tertiary">
                    Real photo of Dr. Neil<br />to be added here
                  </p>
                  <p className="text-xs text-ink-tertiary max-w-xs">
                    Environmental portrait recommended: Dr. Neil in consulting space, natural lighting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Bento Grid */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <BentoGrid>
            {/* Credentials Card */}
            <BentoCard colSpan={4} rowSpan={2} variant="default">
              <div className="h-full flex flex-col justify-center space-y-4">
                <Eyebrow>Credentials & training</Eyebrow>
                <h2 className="font-display text-2xl font-normal text-ink-primary">
                  Indian Homeopathy Degree (BHMS)
                </h2>
                <div className="space-y-3 text-base text-ink-secondary">
                  <p>
                    <strong className="text-ink-primary">[CUSTOMIZE THIS SECTION]</strong>
                  </p>
                  <p>
                    Dr. Neil holds a Bachelor of Homeopathic Medicine and Surgery (BHMS) degree, completing [X] years of training in classical homeopathy at [Institution Name].
                  </p>
                  <p>
                    With [X] years in clinical practice, Dr. Neil specializes in [top 2-3 areas: e.g., women's hormonal health, pediatric care, chronic skin conditions].
                  </p>
                  <p className="text-sm text-ink-tertiary pt-2">
                    ⚠️ <strong>Legal Note:</strong> Get Texas attorney review of credentials language before launch.
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Philosophy Quote */}
            <BentoCard colSpan={4} rowSpan={1} variant="feature">
              <div className="h-full flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl font-display leading-relaxed">
                  "Homeopathy isn't about suppressing symptoms. It's about understanding <em className="text-accent italic">why</em> they're happening."
                </blockquote>
              </div>
            </BentoCard>

            {/* Languages */}
            <BentoCard colSpan={4} rowSpan={1} variant="default">
              <div className="space-y-3">
                <Eyebrow>Languages spoken</Eyebrow>
                <p className="text-lg text-ink-primary">
                  English, [Add languages: Hindi, Gujarati, Spanish, etc.]
                </p>
                <p className="text-sm text-ink-tertiary">
                  Important for Houston's diverse community, especially Sugar Land's Indian-American population
                </p>
              </div>
            </BentoCard>

            {/* Professional Memberships */}
            <BentoCard colSpan={8} rowSpan={1} variant="default">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <Eyebrow className="mb-2">Professional memberships</Eyebrow>
                  <p className="text-base text-ink-secondary">
                    [Add memberships: Council for Homeopathic Certification, North American Society of Homeopaths, etc.]
                  </p>
                </div>
                <div className="text-sm text-ink-tertiary">
                  Continuing education: [Ongoing training areas]
                </div>
              </div>
            </BentoCard>

            {/* Quick Facts */}
            <BentoCard colSpan={4} rowSpan={1} variant="stat">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center border-b border-border-soft pb-2">
                  <span className="text-ink-tertiary">Years in practice:</span>
                  <span className="font-medium text-ink-primary">[X years]</span>
                </div>
                <div className="flex justify-between items-center border-b border-border-soft pb-2">
                  <span className="text-ink-tertiary">Specializes in:</span>
                  <span className="font-medium text-ink-primary">[Top conditions]</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ink-tertiary">Practice type:</span>
                  <span className="font-medium text-ink-primary">Solo, classical</span>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Practice Philosophy - Long Form */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <Eyebrow className="mb-4">Practice philosophy</Eyebrow>
              <DisplayHeading as="h2">
                The approach: <em>one remedy at a time</em>
              </DisplayHeading>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Dr. Neil practices <strong>classical homeopathy</strong> — a centuries-old approach that differs fundamentally from how most modern medicine works.
              </p>

              <p>
                In classical homeopathy, we don't treat your diagnosis. We treat <em>you</em>. Two people with the same condition — say, migraines — will often receive completely different remedies, because their symptoms express differently. One person's migraine starts behind the right eye, gets worse in bright light, and comes with nausea. Another person's starts at the back of the head, feels like a tight band, and improves with pressure. Different patterns, different remedies.
              </p>

              <p>
                This is why the consultation takes 30 minutes. Dr. Neil needs to understand not just your symptoms, but <em>you</em>: your sleep patterns, your stress triggers, what you crave, what makes you feel better or worse, your childhood illnesses, your family history. Classical homeopathy works by matching the remedy to the totality of who you are.
              </p>

              <p>
                <strong>One remedy at a time.</strong> Dr. Neil doesn't prescribe 14-supplement protocols or layered combinations. Classical homeopathy means selecting the single best-matched remedy, giving it time to act, and observing what shifts. If the remedy is correct, your body knows what to do with it. If it's not, we adjust. This careful, individualized approach is how homeopathy has been practiced for 200 years.
              </p>

              <p>
                <strong>Honesty over overselling.</strong> Dr. Neil will tell you when homeopathy isn't the right fit. Some conditions need conventional care. Some need a specialist. Some need emergency intervention. Homeopathy works best for chronic, recurring concerns where your body needs support recalibrating, not suppression. If you need labs, imaging, or a prescription, Dr. Neil will refer you to the right provider.
              </p>

              <p>
                <strong>Working alongside your other doctors.</strong> Dr. Neil doesn't replace your primary care physician, your psychiatrist, or your specialist. Homeopathy works <em>alongside</em> conventional care. Many patients continue their prescriptions while working with homeopathy. There are no known drug interactions with homeopathic remedies, and Dr. Neil will never tell you to stop a medication without consulting your prescriber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Patients Say */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">What patients say</Eyebrow>
            <DisplayHeading as="h2">
              In their <em>own words</em>
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              >
                <blockquote className="text-base text-ink-secondary leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-moss-soft flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <div className="font-medium text-ink-primary">{testimonial.author}</div>
                    <div className="text-sm text-ink-tertiary">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-ink-tertiary">
              ⚠️ Replace with real attributed testimonials before launch. FTC requires real patient consent.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Before Booking */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mx-auto bg-accent-soft border border-accent/20 rounded-3xl p-12 text-center space-y-6">
            <DisplayHeading as="h2">
              Have a question for <em>Dr. Neil</em><br />before booking?
            </DisplayHeading>

            <p className="text-lg text-ink-secondary leading-relaxed">
              Not every situation is right for homeopathy, and that's okay. If you're unsure whether your concern is a good fit, email Dr. Neil directly.
            </p>

            <div className="space-y-2 text-base text-ink-secondary">
              <p>✉️ <strong>[Email]</strong></p>
              <p className="text-sm text-ink-tertiary">
                Dr. Neil personally replies within one business day
              </p>
            </div>

            <div className="pt-6">
              <Button size="large" asChild>
                <Link href="/book">Ready to book? Schedule here →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
