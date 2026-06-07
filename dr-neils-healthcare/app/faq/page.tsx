// PAGE: /faq
// PRIMARY KEYWORD: (no single primary — this page captures dozens of long-tail questions)
// INTENT: User has questions before booking
//
// SECTIONS (in order):
// 1. Hero
// 2. FAQ accordion grouped by category
// 3. Final CTA
//
// SCHEMA: FAQPage JSON-LD (critical for rich snippets)

"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DisplayHeading } from "@/components/primitives/DisplayHeading";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { faqs, getFAQsByCategory } from "@/content/faqs";
import { cn } from "@/lib/utils";

// Note: metadata must be exported from a Server Component
// Since we're using "use client" for Accordion functionality,
// we'll handle metadata via the layout or generate statically

export default function FAQPage() {
  const categories = [
    { id: "about-homeopathy", title: "About Homeopathy", faqs: getFAQsByCategory("about-homeopathy") },
    { id: "practice", title: "About Our Practice", faqs: getFAQsByCategory("practice") },
    { id: "logistics", title: "Logistics & Pricing", faqs: getFAQsByCategory("logistics") },
    { id: "conditions-safety", title: "Conditions & Safety", faqs: getFAQsByCategory("conditions-safety") },
  ];

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <FAQSchema faqs={faqs} />

      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-bg-page py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Eyebrow className="mx-auto">Frequently asked</Eyebrow>

              <DisplayHeading as="h1">
                Everything you actually<br />
                <em>want to know</em>
              </DisplayHeading>

              <p className="text-xl text-ink-secondary leading-relaxed">
                Honest answers to the questions we hear most. No jargon. No overselling.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion by Category */}
        <section className="w-full bg-bg-page py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id}>
                  <h2 className="font-display text-3xl font-normal text-ink-primary mb-8">
                    {category.title}
                  </h2>

                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const itemId = `${category.id}-${index}`;
                      const isOpen = openItems[itemId];

                      return (
                        <div
                          key={itemId}
                          className="bg-bg-card border border-border-soft rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 group"
                            aria-expanded={isOpen}
                          >
                            <h3 className="font-display text-xl md:text-2xl font-normal text-ink-primary group-hover:text-accent transition-colors flex-1">
                              {faq.question}
                            </h3>
                            <ChevronDown
                              className={cn(
                                "w-6 h-6 text-ink-tertiary flex-shrink-0 transition-transform duration-300 mt-1",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>

                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300",
                              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            )}
                          >
                            <div className="px-6 md:px-8 pb-6 md:pb-8">
                              <p className="text-base md:text-lg leading-relaxed text-ink-secondary">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="w-full bg-bg-page py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-3xl mx-auto bg-accent-soft border border-accent/20 rounded-3xl p-12 text-center space-y-6">
              <DisplayHeading as="h2">
                Still have <em>questions?</em>
              </DisplayHeading>

              <p className="text-lg text-ink-secondary leading-relaxed">
                If your question isn't answered here, email Dr. NillMani directly. We'd rather you ask than wonder.
              </p>

              <div className="space-y-2 text-base text-ink-secondary">
                <p>✉️ <strong>[Email]</strong></p>
                <p className="text-sm text-ink-tertiary">
                  Dr. NillMani personally replies within one business day
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="large" asChild>
                  <Link href="/book">Ready to book? Schedule here →</Link>
                </Button>
                <Button variant="ghost" size="large" asChild>
                  <Link href="/how-it-works">See how it works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
