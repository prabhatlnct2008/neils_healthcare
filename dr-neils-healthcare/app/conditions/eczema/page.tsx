// PAGE: /conditions/eczema
// PRIMARY KEYWORD: homeopathy for eczema

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Homeopathy for Eczema | Addressing the Pattern, Not Just the Symptom",
  description:
    "Homeopathic treatment for eczema and atopic dermatitis. Working on the internal pattern, not suppressing symptoms. Especially effective for children's eczema.",
};

export default function EczemaPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Homeopathy for eczema</Eyebrow>

            <DisplayHeading as="h1">
              Topical creams suppress.<br />
              We work on the <em>pattern</em><br />
              producing it.
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Steroid creams push eczema down. When you stop, it comes back — often worse. Homeopathy works differently: we address why your body is producing eczema in the first place.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book $150 consultation →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <DisplayHeading as="h2">
              Why eczema is <em>different</em> with homeopathy
            </DisplayHeading>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Conventional dermatology treats eczema as a skin problem. Homeopathy treats it as a symptom of an internal pattern.
              </p>

              <p>
                The pattern might be allergic (eczema + hay fever + asthma — the "atopic triad"). It might be stress-related (flares during exams or life transitions). It might be digestive (eczema linked to food sensitivities or gut inflammation). It might be inherited (your parent had eczema; you have eczema; your kid has eczema).
              </p>

              <p>
                <strong>What we look at:</strong> Where on your body does it appear? What makes it better or worse? Is it dry, weepy, cracked, bleeding? Does it itch at night? Does heat help or hurt? What else is going on — allergies, asthma, digestive issues, stress?
              </p>

              <p>
                Every detail helps us find the remedy that matches your internal eczema pattern — not just your skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <DisplayHeading as="h2" className="mb-8">
              Especially effective for <em>children's eczema</em>
            </DisplayHeading>

            <div className="bg-moss-soft/30 border border-border-soft rounded-2xl p-8 space-y-4">
              <p className="text-lg text-ink-primary">
                Childhood eczema responds beautifully to homeopathy. Kids' bodies are still developing — the right remedy can shift the pattern before it becomes chronic.
              </p>

              <p className="text-base text-ink-secondary">
                Many parents come to us after years of steroid creams, wet wraps, and elimination diets. The eczema keeps coming back. Homeopathy addresses the why, not just the what.
              </p>

              <p className="text-base text-ink-secondary">
                <strong>Timeline:</strong> Eczema takes time. Expect 2–4 months before you see sustained improvement. Some kids improve faster. Some take longer. Chronic skin conditions require patience.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/conditions/children"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Learn more about homeopathy for children →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <DisplayHeading as="h2">
              Book your <em>eczema consultation</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              $150 for 60 minutes. A personalized remedy matched to your eczema pattern. Safe for children and adults.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
