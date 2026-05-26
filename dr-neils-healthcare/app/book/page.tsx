// PAGE: /book
// PRIMARY KEYWORD: book homeopathy appointment Houston
// INTENT: User is ready to book, wants simple process
//
// SECTIONS (in order):
// 1. Hero with trust strip
// 2. Booking form (Turso SQLite DB integration - TO BE IMPLEMENTED)
// 3. Trust cards — telehealth details, what happens next
// 4. Prep checklist
// 5. Soft CTA

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "Book Appointment | Dr Neil's Healthcare | Houston Homeopathy",
  description:
    "Book your homeopathic consultation online. In-person or telehealth across Texas. HIPAA-compliant booking. $150 for 30 minutes.",
};

export default function BookPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Eyebrow className="mx-auto">Book your consultation</Eyebrow>

            <DisplayHeading as="h1">
              Book your consultation<br />with <em>Dr. Neil</em>
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              30 minutes. $150. A personalized remedy plan delivered within 48 hours.
            </p>

            {/* Trust Strip */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-ink-secondary">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span>
                <span>HIPAA-compliant booking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span>
                <span>Confirmation in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">✓</span>
                <span>Reschedule anytime up to 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-5 md:px-8">
          <div className="bg-bg-card border border-border-soft rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
            <div className="text-center space-y-4 py-12">
              <h2 className="font-display text-2xl font-normal text-ink-primary">
                Booking System Integration
              </h2>
              <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
                🚧 <strong>TO BE IMPLEMENTED:</strong> Turso SQLite DB booking form will be integrated here.
              </p>
              <p className="text-base text-ink-tertiary max-w-2xl mx-auto">
                This section should include a form that:
              </p>
              <ul className="text-left text-base text-ink-secondary space-y-2 max-w-lg mx-auto">
                <li>• Collects patient name, email, phone</li>
                <li>• Allows selection of consultation type (Initial, Follow-up, Package)</li>
                <li>• Provides date/time selection</li>
                <li>• Offers telehealth option (default for this practice)</li>
                <li>• Accepts payment via Stripe or similar</li>
                <li>• Stores booking data in Turso SQLite DB</li>
                <li>• Sends confirmation email</li>
              </ul>
              <div className="pt-6">
                <p className="text-sm text-ink-tertiary">
                  For now, contact directly: [Email] or [Phone]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards Row */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Telehealth Details */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                Telehealth across Texas
              </h3>
              <p className="text-base text-ink-secondary leading-relaxed">
                Secure, HIPAA-compliant video consultations from anywhere in Texas. All you need is a quiet space and a stable internet connection.
              </p>
            </div>

            {/* What Happens Next */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                What happens next
              </h3>
              <ul className="text-base text-ink-secondary space-y-2">
                <li>1. You'll receive confirmation within 5 minutes</li>
                <li>2. Complete a 10-minute intake form</li>
                <li>3. Join your consultation at the scheduled time</li>
                <li>4. Receive your remedy plan in 48 hours</li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-display text-xl font-normal mb-3 text-ink-primary">
                Need help booking?
              </h3>
              <p className="text-base text-ink-secondary leading-relaxed mb-4">
                We're here to help. Email or call with any questions about scheduling, pricing, or what to expect.
              </p>
              <p className="text-sm text-ink-secondary">
                📞 [Phone]<br />
                ✉️ [Email]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prep Checklist */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">Before your appointment</Eyebrow>
              <DisplayHeading as="h2">
                How to <em>prepare</em>
              </DisplayHeading>
            </div>

            <div className="bg-moss-soft/30 border border-border-soft rounded-2xl p-8">
              <ul className="space-y-4 text-base text-ink-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-ink-primary">Complete the intake form</strong> — You'll receive this after booking. It takes about 10 minutes and covers your medical history, current symptoms, and lifestyle details.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-ink-primary">Find a quiet space</strong> — For telehealth appointments, choose a private location where you can talk freely without interruptions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-ink-primary">Have your medication list ready</strong> — Bring a list of any prescription medications, supplements, or over-the-counter remedies you're currently taking.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-ink-primary">Think about your symptoms</strong> — What makes them better? What makes them worse? What time of day are they strongest? Every detail helps.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-ink-primary">Don't stress about what to say</strong> — There are no wrong answers. Dr. Neil will guide the conversation and ask what's needed.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="w-full bg-bg-page pb-16 md:pb-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl mx-auto bg-bg-card border border-border-soft rounded-2xl p-6">
            <h3 className="font-display text-lg font-normal mb-3 text-ink-primary">
              Cancellation policy
            </h3>
            <p className="text-base text-ink-secondary leading-relaxed">
              <strong>24 hours' notice to reschedule.</strong> Within 24 hours forfeits 50% of the fee. No-shows forfeit the full fee. Life happens — talk to us.
            </p>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-accent-soft border border-accent/20 rounded-3xl p-12 md:p-16 text-center space-y-6">
            <DisplayHeading as="h2">
              Have questions <em>first?</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-ink-secondary">
              Not sure if homeopathy is right for you? Want to understand the process better before booking? That's completely normal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="primary" asChild>
                <Link href="/faq">Read the FAQ →</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/how-it-works">See how it works</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-tertiary pt-4">
              Or email [Email] — Dr. Neil personally replies within one business day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
