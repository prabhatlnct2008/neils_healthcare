// PAGE: /conditions/children
// PRIMARY KEYWORD: homeopathy for children Houston

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Homeopathy for Children | Gentle, Individualized Care",
  description:
    "Homeopathic care for children in Houston. Ear infections, eczema, anxiety, recurring colds. Safe, gentle, effective. Parents and kids seen together.",
};

export default function ChildrenPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Homeopathy for children</Eyebrow>

            <DisplayHeading as="h1">
              Ear infections. Eczema. <em>Anxiety</em>.<br />
              Kids respond beautifully.
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Gentle, non-toxic, individualized. No side effects. No antibiotics unless actually needed. Homeopathy works with your child's body, not against it.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book pediatric consultation →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <DisplayHeading as="h2">
              What we treat <em>most often</em> in kids
            </DisplayHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-border-soft rounded-2xl p-6">
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Recurring ear infections
                </h3>
                <p className="text-base text-ink-secondary">
                  Chronic ear infections, especially after multiple rounds of antibiotics. Homeopathy can break the cycle.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-6">
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Eczema & skin issues
                </h3>
                <p className="text-base text-ink-secondary">
                  Childhood eczema responds beautifully to homeopathy. We work on the internal pattern, not just suppressing with creams.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-6">
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Anxiety & behavioral concerns
                </h3>
                <p className="text-base text-ink-secondary">
                  Social anxiety, separation anxiety, tantrums, sensory sensitivities. Homeopathy supports emotional regulation.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-6">
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Recurring colds & respiratory
                </h3>
                <p className="text-base text-ink-secondary">
                  Kids who are "always sick" — daycare colds, croup, respiratory infections. Homeopathy strengthens constitution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <DisplayHeading as="h2" className="mb-8">
              Safety for <em>children</em>
            </DisplayHeading>

            <div className="bg-accent-soft border border-accent/20 rounded-2xl p-8 space-y-4">
              <p className="text-lg text-ink-primary">
                <strong>Homeopathic remedies are extremely safe for children.</strong> They're non-toxic, have no side effects, and don't interact with medications.
              </p>

              <p className="text-base text-ink-secondary">
                <strong>Age guidance:</strong> Homeopathy is safe for infants, toddlers, and children of all ages. Dosing is the same regardless of age or weight — what matters is finding the right remedy.
              </p>

              <p className="text-base text-ink-secondary">
                <strong>Allergen note:</strong> Most homeopathic remedies are lactose-based pellets. If your child has a severe dairy allergy, alcohol-based liquid remedies are available.
              </p>

              <p className="text-base text-ink-secondary">
                <strong>When to see a pediatrician instead:</strong> High fever (&gt;104°F), severe dehydration, difficulty breathing, head injury, or any emergency situation. Homeopathy is not emergency medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <DisplayHeading as="h2">
              Book a <em>pediatric consultation</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Parents and kids seen together. 60 minutes, $150. Gentle, safe, effective.
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
