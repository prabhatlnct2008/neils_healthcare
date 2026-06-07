// PAGE: /how-it-works
// PRIMARY KEYWORD: homeopathic consultation Houston
// INTENT: Visitor wants to understand the process before booking
//
// SECTIONS (in order):
// 1. Hero
// 2. 5-step process — detailed walkthrough
// 3. What to bring + how to prepare
// 4. After your consultation
// 5. Process-specific FAQ
// 6. Final CTA

import { Metadata } from "next";
import Link from "next/link";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "How a Homeopathic Consultation Works | Dr NillMani's Healthcare",
  description:
    "From booking to your first dose: learn what happens in a 30-minute homeopathic consultation. No rushed visits. Real listening. Personalized remedies.",
};

export default function HowItWorksPage() {
  const processSteps = [
    {
      number: "01",
      title: "Book your consultation",
      meta: "10 minutes online",
      description:
        "Choose a time that works for you through our online booking system. You'll receive immediate confirmation and a link to complete your intake form. The intake form takes about 10 minutes and covers your medical history, current symptoms, lifestyle, and what you're hoping to address.",
    },
    {
      number: "02",
      title: "Your 30-minute consultation",
      meta: "Telehealth across Texas",
      description:
        "Join Dr. NillMani for a half hour via secure, HIPAA-compliant video. This isn't a rushed 12-minute appointment. Dr. NillMani will ask detailed questions about your current symptoms, your medical history, your sleep patterns, your stress, what you crave, what you can't stand, what time of day you feel best. Every detail helps match the right remedy to your unique pattern. Most patients tell us this is the first time a healthcare provider has actually listened.",
    },
    {
      number: "03",
      title: "Your personalized remedy plan",
      meta: "Delivered in 48 hours",
      description:
        "Within 48 hours, Dr. NillMani reviews your case and matches you to the remedy — or combination of remedies — that fits your unique pattern. You'll receive a detailed written plan with dosing instructions, what to expect, what to watch for, and when to follow up. The plan is written in plain English, not medical jargon.",
    },
    {
      number: "04",
      title: "Remedies at your door",
      meta: "5–7 business days",
      description:
        "Your remedies ship directly from a licensed homeopathic pharmacy to your home anywhere in Texas. Remedies typically arrive within 5–7 business days. You'll pay the pharmacy directly (typically $15–$45 per remedy) — we don't mark up remedy costs. A single remedy often lasts for months.",
    },
    {
      number: "05",
      title: "Follow-up at 4–6 weeks",
      meta: "15 minutes, $85",
      description:
        "Healing isn't a one-shot deal. We check in to assess what's shifted, what hasn't, and whether we need to adjust. Follow-up consultations are 15 minutes and $85. This is where we fine-tune and track progress over time. Some patients need only one follow-up. Others benefit from ongoing support every 4–8 weeks.",
    },
  ];

  const processFAQs = [
    {
      question: "What happens during my $150 consultation?",
      answer:
        "A lot of questions. About your symptoms, your medical history, your sleep, your moods, your stress, your cravings, what time of day you feel best. Every detail helps Dr. NillMani match the remedy to *you*. Most consultations run a full 30 minutes. We don't rush.",
    },
    {
      question: "Do I need to prepare anything before my appointment?",
      answer:
        "Complete the intake form (you'll receive it after booking), find a quiet private space for telehealth, have your medication list ready, and think about your symptoms — what makes them better, what makes them worse, when they're strongest. Don't stress about what to say — Dr. NillMani will guide the conversation.",
    },
    {
      question: "How long until I see results?",
      answer:
        "For acute concerns, results can come within hours or days. For chronic issues like eczema, anxiety, or hormonal imbalances, expect first noticeable shifts within 4–6 weeks, with continued improvement over months. Homeopathy is a recalibration, not a quick fix.",
    },
    {
      question: "What if the remedy doesn't work?",
      answer:
        "Not every remedy works for every person on the first try. If you don't notice shifts within 4–6 weeks, we adjust. That's what the follow-up appointments are for — to track what's working and refine the approach. Homeopathy is iterative.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-bg-page py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Eyebrow className="mx-auto">The process</Eyebrow>

            <DisplayHeading as="h1">
              What happens in a<br />
              <em>homeopathic consultation</em>
            </DisplayHeading>

            <p className="text-xl text-ink-secondary leading-relaxed">
              From your first click to your first dose — here's exactly how it works.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section id="how-it-works" className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="font-display text-5xl font-medium text-accent tracking-tight">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-normal text-ink-primary mb-2">
                        {step.title}
                      </h2>
                      <p className="text-sm text-accent font-medium">{step.meta}</p>
                    </div>
                    <p className="text-base text-ink-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring + How to Prepare */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <Eyebrow className="mb-4">Preparation</Eyebrow>
            <DisplayHeading as="h2">
              What to <em>bring</em> and how to <em>prepare</em>
            </DisplayHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* What to Bring */}
            <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-2xl font-normal mb-6 text-ink-primary">
                What to bring
              </h3>
              <ul className="space-y-4 text-base text-ink-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Your completed intake form</strong> (emailed after booking)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">List of current medications</strong> — prescription, OTC, supplements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Recent lab results</strong> (if you have them) — not required, but helpful
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Questions you want to ask</strong> — write them down beforehand
                  </div>
                </li>
              </ul>
            </div>

            {/* How to Prepare */}
            <div className="bg-moss-soft/30 border border-border-soft rounded-2xl p-8">
              <h3 className="font-display text-2xl font-normal mb-6 text-ink-primary">
                How to prepare
              </h3>
              <ul className="space-y-4 text-base text-ink-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Find a quiet, private space</strong> for your telehealth call
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Test your video/audio</strong> ahead of time
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Think about your symptoms</strong> — when they started, patterns, triggers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg flex-shrink-0 mt-0.5">•</span>
                  <div>
                    <strong className="text-ink-primary">Block out the full half hour</strong> — don't schedule back-to-back
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* After Your Consultation */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Eyebrow className="mb-4">After your consultation</Eyebrow>
              <DisplayHeading as="h2">
                What happens <em>next</em>
              </DisplayHeading>
            </div>

            <div className="space-y-6">
              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  1. You'll receive your remedy plan (48 hours)
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Dr. NillMani reviews your case and writes a detailed plan: which remedy (or remedies), dosing instructions, what to expect, what to watch for, and when to follow up. You'll receive this via email within 48 hours.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  2. Order your remedies
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Your plan will include instructions for ordering remedies from a licensed homeopathic pharmacy. They ship directly to your home (typically $15–$45 per remedy, 5–7 days). You pay the pharmacy directly — we don't mark up costs.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  3. Start your remedy and observe
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Follow the dosing instructions exactly. Notice what shifts — energy, sleep, mood, symptoms. Keep notes. Some people notice changes within days. Others take weeks. Trust the process.
                </p>
              </div>

              <div className="bg-bg-card border border-border-soft rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl font-normal mb-4 text-ink-primary">
                  4. Follow up at 4–6 weeks
                </h3>
                <p className="text-base text-ink-secondary leading-relaxed">
                  Schedule your follow-up consultation (15 minutes, $85) at the 4-6 week mark. Dr. NillMani will assess what's working, what's not, and whether to continue, adjust, or change remedies. This is how homeopathy works — iteratively, over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Common questions</Eyebrow>
            <DisplayHeading as="h2">
              <em>Process</em> questions answered
            </DisplayHeading>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processFAQs.map((faq, index) => (
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

      {/* Final CTA */}
      <section className="w-full bg-bg-page py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-bg-card-feature text-ink-on-dark rounded-3xl p-12 md:p-16 text-center space-y-6">
            <Eyebrow className="text-ink-on-dark/70">Ready to start?</Eyebrow>

            <DisplayHeading as="h2">
              Book your <em>30-minute consultation</em>
            </DisplayHeading>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              $150. A half hour with Dr. NillMani. A personalized remedy plan in 48 hours. No rush. Real listening.
            </p>

            <div className="pt-4">
              <Button size="large" asChild>
                <Link href="/book">Book now →</Link>
              </Button>
            </div>

            <p className="text-sm text-ink-on-dark/70 pt-4">
              Still have questions? Email [Email] — Dr. NillMani personally replies within one business day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
