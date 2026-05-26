import { FAQ } from "@/content/faqs";

export interface FAQSchemaProps {
  faqs: FAQ[];
}

/**
 * FAQSchema component - JSON-LD FAQPage schema
 * Critical for Google rich snippets
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
