// PAGE: /conditions/allergies
// PRIMARY KEYWORD: homeopathy for allergies Houston
// INTENT: Houston resident with allergies, considering homeopathy
//
// SECTIONS (in order):
// 1. Hero
// 2. Houston allergy reality — local context (cedar, oak, mold)
// 3. What we actually do for allergies
// 4. Real patient story
// 5. What homeopathy can't do — honest limits
// 6. Allergy-specific FAQ
// 7. Final CTA
//
// INTERNAL LINKS: book, pricing, how-it-works, children (eczema often linked to allergies)
// EXTERNAL LINK: 1 link to credible source on Houston allergies

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Homeopathy for Allergies in Houston | Cedar Fever, Mold, Oak Pollen",
  description:
    "Personalized homeopathic relief for Houston's worst allergy seasons. Cedar fever, mold, oak pollen, ragweed. 60-minute consultation $150. Book online.",
};

export default function AllergiesPage() {
  const allergyFAQs = [
    {
      question: "How long does it take for homeopathy to help allergies?",
      answer:
        "For seasonal allergies, some people notice relief within days. For chronic year-round allergies, expect 4–8 weeks before you notice a shift. Homeopathy works by recalibrating your immune response, not suppressing symptoms, so it takes time.",
    },
    {
      question: "Can I take homeopathy with my allergy medications?",
      answer:
        "Yes. There are no known interactions between homeopathic remedies and antihistamines, nasal steroids, or allergy shots. Many patients start homeopathy while still using their medications, then gradually reduce medications as symptoms improve — always in consultation with their prescriber.",
    },
    {
      question: "Will homeopathy work for cedar fever?",
      answer:
        "Cedar fever is one of the most common reasons Houston residents seek homeopathy. We match the remedy to your specific cedar fever pattern — when it hits, what makes it worse, whether you get sinus pressure, eye symptoms, or respiratory issues. Different patterns need different remedies.",
    },
    {
      question: "Can homeopathy help mold allergies?",
      answer:
        "Mold allergies are notoriously difficult to treat with conventional medicine because removing the trigger (Houston's humidity) isn't realistic. Homeopathy doesn't remove the mold — it supports your body's ability to tolerate it without constant inflammation. Many patients with year-round mold sensitivity report improvement.",
    },
    {
      question: "Does homeopathy cure allergies permanently?",
      answer:
        "We don't promise cures. What we see clinically is that some people experience long-lasting relief even after stopping remedies. Others need seasonal support. Allergies are complex — genetics, environment, gut health, stress all play a role. Homeopathy addresses the totality, not just the allergy.",
    },
    {
      question: "Should I start homeopathy before allergy season?",
      answer:
        "Ideally, yes. Starting 6–8 weeks before cedar season (December) or oak season (March) gives the remedy time to act before symptoms peak. But it's never too late — we see patients mid-season all the time.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Homeopathy for allergies in Houston</Eyebrow>

            <DisplayHeading as="h1">
              Cedar fever. Oak pollen. <em>Mold</em>.<br />
              Houston's allergy gauntlet.
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Homeopathy isn't a quick fix. But for chronic, recurring allergies — the kind where antihistamines stop working and you're tired of feeling foggy — it may offer something different.
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

      {/* Houston Allergy Reality */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">The Houston climate</Eyebrow>
              <DisplayHeading as="h2">
                If you live in Houston,<br />
                you know <em>this pattern</em>
              </DisplayHeading>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Houston has three brutal allergy seasons — and if you're sensitive to mold, you essentially have a fourth year-round season.
              </p>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-normal text-ink-primary mb-3">
                    🌲 Cedar fever (December–February)
                  </h3>
                  <p className="text-base">
                    Mountain cedar pollen from the Hill Country blankets Houston every winter. If you've never had allergies before and suddenly can't breathe in January, that's cedar fever. Sneezing fits, sinus pressure, eye swelling, exhaustion. It's relentless.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-normal text-ink-primary mb-3">
                    🌳 Oak pollen (March–April)
                  </h3>
                  <p className="text-base">
                    Houston has live oaks everywhere. When they pollinate in early spring, everything gets covered in yellow dust. Cars, sidewalks, your lungs. Oak pollen is heavier than cedar, so it settles — which means it's inescapable if you're outside.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-normal text-ink-primary mb-3">
                    🌾 Ragweed (August–November)
                  </h3>
                  <p className="text-base">
                    Just when summer humidity breaks, ragweed arrives. Less brutal than cedar or oak for most people, but if ragweed is your trigger, fall becomes miserable.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-normal text-ink-primary mb-3">
                    🦠 Mold (year-round)
                  </h3>
                  <p className="text-base">
                    Houston's humidity means mold spores are constantly present — indoors and outdoors. If you're sensitive to mold, you don't get a break. Chronic congestion, sinus pressure, post-nasal drip, brain fog. It's exhausting and hard to treat because the trigger is everywhere.
                  </p>
                </div>
              </div>

              <p className="text-base">
                <strong>External resource:</strong> The{" "}
                <a
                  href="https://www.houstonmethodist.org/blog/articles/2024/jan/cedar-fever-allergies-houston-treatment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Houston Methodist explains cedar fever
                </a>{" "}
                and why it's so brutal in Houston specifically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">Our approach</Eyebrow>
              <DisplayHeading as="h2">
                What we <em>actually do</em> for allergies
              </DisplayHeading>
            </div>

            <div className="space-y-6">
              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  1. We match the remedy to your pattern, not your diagnosis
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Two people with "cedar fever" can have completely different symptom patterns. One person sneezes violently, gets itchy eyes, and feels worse indoors. Another gets sinus pressure, a thick post-nasal drip, and feels worse in the morning. Different patterns = different remedies. This is why the consultation takes a full hour.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  2. We work on recalibration, not suppression
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Antihistamines block histamine receptors — your body still produces histamine, it just can't reach the target. Homeopathy works differently: the right remedy triggers your immune system to stop overreacting in the first place. It takes longer, but when it works, the relief is deeper.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  3. We look at the whole picture
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Allergies don't exist in isolation. If you also have eczema, asthma, digestive issues, or anxiety, those patterns inform which remedy you need. Classical homeopathy treats the person, not the allergy.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  4. Timeline: weeks to months, not days
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  If you're in the middle of cedar season and you need relief tomorrow, take an antihistamine. Homeopathy works over 4–8 weeks. Some people notice shifts faster, but chronic allergies take time to recalibrate. Ideally, start treatment 6–8 weeks before allergy season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Story */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Eyebrow className="mb-8">Patient story</Eyebrow>

            <div className="bg-moss-soft/30 border border-border-soft rounded-3xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl font-display leading-relaxed text-ink-primary mb-6">
                "I'd been on Zyrtec and Flonase for five years. Every cedar season I'd still wake up feeling like I'd been hit by a truck. Three months into homeopathy and this was the first January I could breathe."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-moss flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <div className="font-medium text-ink-primary text-lg">
                    [Patient Name]
                  </div>
                  <div className="text-ink-tertiary">Houston, TX · Cedar fever</div>
                </div>
              </div>
              <p className="text-sm text-ink-tertiary mt-6">
                ⚠️ Replace with real attributed testimonial before launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Homeopathy Can't Do */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">Honest limits</Eyebrow>
              <DisplayHeading as="h2">
                What homeopathy <em>can't do</em> for allergies
              </DisplayHeading>
            </div>

            <div className="bg-bg-card border border-border-strong rounded-2xl p-8 space-y-4">
              <p className="text-lg text-ink-primary leading-relaxed">
                <strong>Homeopathy is not emergency medicine.</strong> If you're having an anaphylactic reaction, you need an EpiPen and 911, not a homeopathic remedy.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Homeopathy doesn't work overnight.</strong> If you're in the middle of cedar season and miserable today, take an antihistamine. Homeopathy is for long-term recalibration, not acute rescue.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Homeopathy doesn't remove the allergen.</strong> You'll still be exposed to cedar, oak, mold. What changes is how your body responds.
              </p>

              <p className="text-base text-ink-secondary leading-relaxed">
                <strong>Results vary.</strong> Some people experience dramatic relief. Others see moderate improvement. Some see no change. We can't predict outcomes, which is why we're upfront about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Allergy FAQ */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Common questions</Eyebrow>
            <DisplayHeading as="h2">
              Allergy-specific <em>questions answered</em>
            </DisplayHeading>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {allergyFAQs.map((faq, index) => (
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

      {/* Related Conditions */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Eyebrow className="mb-8">Related conditions</Eyebrow>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/conditions/eczema"
                className="bg-bg-card border border-border-soft rounded-2xl p-6 hover:bg-bg-card-hover hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="font-display text-xl font-normal mb-2 text-ink-primary">
                  Eczema & skin issues
                </h3>
                <p className="text-sm text-ink-secondary">
                  Often linked to allergies — treating one can help the other
                </p>
              </Link>

              <Link
                href="/conditions/children"
                className="bg-bg-card border border-border-soft rounded-2xl p-6 hover:bg-bg-card-hover hover:-translate-y-1 transition-all duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <h3 className="font-display text-xl font-normal mb-2 text-ink-primary">
                  Children's health
                </h3>
                <p className="text-sm text-ink-secondary">
                  Kids respond beautifully to homeopathy for allergies
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <Eyebrow className="text-ink-on-dark/70">Ready to try?</Eyebrow>

            <DisplayHeading as="h2">
              Book your <em>allergy consultation</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              $150 for 60 minutes. A personalized remedy plan matched to your unique allergy pattern. Relief measured in weeks, not hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
              <Button variant="ghost" size="large" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Questions first? Email [Email] — Dr. Neil replies within one business day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
