// PAGE: /houston/sugar-land
// PRIMARY KEYWORD: homeopath Sugar Land
// UNIQUE ANGLE: Indian-American demographic, IIT and Stanford credentials

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Homeopath in Sugar Land | Dr. Neil's Healthcare",
  description:
    "Classical homeopathy serving Sugar Land, TX. IIT- and Stanford-trained practitioner. Telehealth across First Colony, Telfair, Riverstone, Sweetwater.",
};

export default function SugarLandPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <Eyebrow>Serving Sugar Land, TX</Eyebrow>

            <DisplayHeading as="h1">
              Classical homeopathy<br />
              in <em>Sugar Land</em>
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              Telehealth consultations for all of Sugar Land — First Colony, Telfair, Riverstone, Sweetwater, and surrounding areas. IIT and Stanford-trained practitioner. $150 for 30 minutes.
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
              Why Sugar Land residents<br />
              <em>choose Dr. Nill Mani</em>
            </DisplayHeading>

            <div className="prose prose-lg max-w-none space-y-6 text-ink-secondary leading-relaxed">
              <p className="text-xl text-ink-primary">
                Sugar Land has one of the highest Indian-American populations in Texas. Many residents grew up with homeopathy in their families and are looking for a practitioner who understands that tradition.
              </p>

              <p>
                Dr. Nill Mani's multi-disciplinary training — including a PhD from IIT and certification in herbal medicine from Stanford — brings a thoughtful, integrative approach to classical homeopathy, adapted for Houston's climate and lifestyle.
              </p>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 space-y-4">
                <h3 className="font-display text-2xl font-normal text-ink-primary mb-4">
                  Common conditions in Sugar Land families
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Children's health:</strong> Eczema, recurring ear infections, anxiety, digestive issues. Many Sugar Land families prefer homeopathy over repeated antibiotics and steroids.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Women's hormonal health:</strong> PMS, PCOS, perimenopause, fertility support. Homeopathy offers gentle, non-hormonal support.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Allergies:</strong> Houston's cedar fever, oak pollen, and year-round mold hit Sugar Land hard. Classical homeopathy addresses the immune overreaction, not just symptoms.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <div>
                      <strong className="text-ink-primary">Stress & anxiety:</strong> High-pressure careers, family obligations, cultural expectations. Homeopathy supports emotional resilience.
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
              Service options for <em>Sugar Land</em>
            </DisplayHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-border-soft rounded-2xl p-8">
                <div className="text-4xl mb-4">📹</div>
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Telehealth from Sugar Land
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed mb-4">
                  All consultations are conducted via secure, HIPAA-compliant video. No need to drive to Houston — meet with Dr. Nill Mani from your home in First Colony, Telfair, Riverstone, or anywhere in Sugar Land.
                </p>
                <p className="text-sm text-ink-tertiary">
                  30-minute consultation · $150
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                  Remedies shipped to Sugar Land
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed mb-4">
                  After your consultation, remedies ship directly from a licensed homeopathic pharmacy to your Sugar Land address. Typical arrival: 5–7 business days.
                </p>
                <p className="text-sm text-ink-tertiary">
                  Remedy cost: $15–$45 (separate from consultation)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <DisplayHeading as="h2">
              Book your consultation<br />
              from <em>Sugar Land</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Telehealth consultations across Sugar Land. IIT and Stanford-trained. Classical approach. $150 for 30 minutes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large" asChild>
                <Link href="/book">Book consultation →</Link>
              </Button>
              <Button variant="ghost" size="large" asChild>
                <Link href="/conditions/allergies">Treating allergies</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Questions? Email [Email] — Dr. Nill Mani replies within one business day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
