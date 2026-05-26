// PAGE: /conditions/anxiety
// PRIMARY KEYWORD: homeopathy for anxiety
// INTENT: Someone with anxiety considering homeopathy

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Homeopathy for Anxiety & Stress | Dr Neil's Healthcare",
  description:
    "Homeopathic treatment for anxiety, panic attacks, and chronic stress. Personalized remedies matched to your unique pattern. Works alongside conventional care.",
};

export default function AnxietyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Homeopathy for anxiety</Eyebrow>

            <DisplayHeading as="h1">
              The 4 a.m. spiral.<br />
              The constant hum.<br />
              The <em>public-speaking dread</em>.
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Homeopathy doesn't promise to erase anxiety. But for chronic, recurring anxiety patterns — the kind where your doctor says "let's try another SSRI" and you're not sure you want to — it may offer a different path.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="large" asChild>
                <Link href="/book">Book $150 consultation →</Link>
              </Button>
              <Button variant="ghost" size="large" asChild>
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections following similar structure to allergies page */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="mb-8">
              <Eyebrow className="mb-4">Understanding anxiety patterns</Eyebrow>
              <DisplayHeading as="h2">
                Not all anxiety <em>looks the same</em>
              </DisplayHeading>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Two people with "generalized anxiety disorder" can have completely different experiences. That's why homeopathy matches the remedy to your unique pattern.
              </p>

              <p>
                One person wakes at 3 a.m. with racing thoughts about work. Another gets nauseous before social events. Another has constant muscle tension and can't sit still. Another has Sunday-night dread that starts Friday. Different patterns = different remedies.
              </p>

              <p>
                <strong>What we look at:</strong> When does your anxiety spike? What triggers it? What makes it better or worse? Do you feel it in your chest, your stomach, your head? Do you freeze or pace? Are you irritable or withdrawn? Do you catastrophize or go numb?
              </p>

              <p>
                Every detail narrows us toward the remedy that fits <em>you</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Limits */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">Honest limits</Eyebrow>
              <DisplayHeading as="h2">
                What homeopathy <em>can't do</em> for anxiety
              </DisplayHeading>
            </div>

            <div className="bg-bg-card border border-border-strong rounded-2xl p-8 space-y-4">
              <p className="text-lg text-ink-primary leading-relaxed">
                <strong>Homeopathy is not crisis intervention.</strong> If you're in acute crisis, call 988 (Suicide & Crisis Lifeline) or go to the nearest emergency room.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Homeopathy doesn't replace your psychiatrist or therapist.</strong> Many of our patients work with homeopathy alongside therapy and/or medication. Homeopathy supports — it doesn't substitute.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Never stop psychiatric medication without consulting your prescriber.</strong> If you're on an SSRI, benzodiazepine, or other psychiatric med, homeopathy can work alongside it. Some patients eventually taper meds (with their doctor's guidance) as symptoms improve. Others stay on meds. Both are fine.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Results vary.</strong> Some people experience significant relief. Others see moderate shifts. Some see no change. We can't predict, which is why we're upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <DisplayHeading as="h2">
              Book your <em>anxiety consultation</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              $150 for 30 minutes. A personalized remedy matched to your anxiety pattern. Works alongside therapy and medication.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
              <Button variant="ghost" size="large" asChild>
                <Link href="/faq">Read FAQ first</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
