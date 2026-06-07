// PAGE: /houston/katy
// PRIMARY KEYWORD: homeopath Katy
// UNIQUE ANGLE: Young families, pediatric care

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Homeopath in Katy | Dr NillMani's Healthcare",
  description:
    "Classical homeopathy serving Katy, TX. Family-focused care for children and adults. Telehealth and Houston consultations. Serving Cinco Ranch, Cross Creek.",
};

export default function KatyPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Serving Katy, TX</Eyebrow>

            <DisplayHeading as="h1">
              Family-focused<br />
              homeopathy in <em>Katy</em>
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Telehealth consultations for all of Katy — Cinco Ranch, Cross Creek Ranch, Old Katy, and surrounding areas. Gentle, safe care for kids and adults. $150 for 30 minutes.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <DisplayHeading as="h2">
              Why Katy families<br />
              <em>choose homeopathy</em>
            </DisplayHeading>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Katy has one of the highest concentrations of young families in the Houston area. Many parents are looking for natural alternatives to repeated antibiotics, steroids, and medications for their kids.
              </p>

              <p>
                Homeopathy offers gentle, non-toxic care that works with your child's body. No side effects. No interactions with medications. Safe for infants, toddlers, and kids of all ages.
              </p>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 space-y-4">
                <h3 className="font-display text-2xl font-normal text-ink-primary mb-4">
                  Common conditions in Katy families
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Recurring ear infections:</strong> The most common reason Katy parents seek homeopathy. After multiple rounds of antibiotics, homeopathy can break the cycle.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Childhood eczema:</strong> Steroid creams suppress symptoms. Homeopathy addresses why your child's body is producing eczema in the first place.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Allergies & asthma:</strong> Katy's proximity to Houston means cedar fever, oak pollen, and mold hit hard. Homeopathy recalibrates immune overreaction.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Anxiety & behavioral concerns:</strong> Social anxiety, separation anxiety, sensory sensitivities. Homeopathy supports emotional regulation without medication.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Women's health:</strong> PMS, perimenopause, fertility support. Many Katy moms seek gentle, hormone-free support.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <DisplayHeading as="h2" className="mb-8">
              Service options for <em>Katy</em>
            </DisplayHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-border-soft rounded-2xl p-8">
                <div className="text-4xl mb-4">📹</div>
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Telehealth from Katy
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed mb-4">
                  All consultations are conducted via secure, HIPAA-compliant video. No need to drive to Houston — meet with Dr. NillMani from your home in Cinco Ranch, Cross Creek, Old Katy, or anywhere in Katy.
                </p>
                <p className="text-sm text-ink-tertiary">
                  30-minute consultation · $150
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Family consultations
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed mb-4">
                  Pediatric consultations include time with parents and child together. Dr. NillMani sees the whole family picture — genetics, stress patterns, lifestyle — to find the right remedy.
                </p>
                <p className="text-sm text-ink-tertiary">
                  Same pricing: $150 for 30 minutes
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/conditions/children"
                className="inline-flex items-center gap-2 text-accent hover:underline text-lg"
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
              Book your family's<br />
              consultation from <em>Katy</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Telehealth consultations across Katy. Gentle, safe care for kids and adults. Classical homeopathy. $150 for 30 minutes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
              <Button variant="ghost" size="large" asChild>
                <Link href="/conditions/children">Children's health</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Questions? Email [Email] — Dr. NillMani replies within one business day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
