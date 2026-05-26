/**
 * SEO Configuration
 * Meta titles, descriptions, OG images, and keywords for each page
 */

export interface PageSEO {
  title: string;
  description: string;
  ogImage: string;
  keywords: string[];
  canonical?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  "/": {
    title: "Dr Neil's Healthcare | Homeopathy in Houston | $150 Consultation",
    description:
      "Personalized homeopathic care in Houston, Sugar Land, Katy & beyond. 30-minute consultation $150. Remedies delivered in 7 days. Book online.",
    ogImage: "/og/home.jpg",
    keywords: [
      "homeopathy Houston",
      "homeopath Houston",
      "homeopathic doctor Houston",
      "classical homeopath Houston",
      "homeopath near me",
    ],
  },

  "/about-dr-neil": {
    title: "About Dr. Neil | Classical Homeopath in Houston, TX",
    description:
      "Meet Dr. Neil, a classical homeopath serving Houston with an Indian homeopathy degree (BHMS). Personalized, evidence-informed care for chronic conditions.",
    ogImage: "/og/about.jpg",
    keywords: [
      "classical homeopath Houston",
      "Dr Neil homeopathy",
      "best homeopath Houston",
      "Indian homeopathic doctor Houston",
    ],
  },

  "/how-it-works": {
    title: "How a Homeopathic Consultation Works | Dr Neil's Healthcare",
    description:
      "From booking to your first dose: learn what happens in a 30-minute homeopathic consultation. No rushed visits. Real listening. Personalized remedies.",
    ogImage: "/og/how-it-works.jpg",
    keywords: [
      "homeopathic consultation Houston",
      "what happens in homeopathic consultation",
      "homeopathy appointment process",
      "first homeopathic visit",
    ],
  },

  "/pricing": {
    title: "Pricing | $150 Homeopathic Consultation | Dr Neil's Healthcare",
    description:
      "Transparent pricing for homeopathic care. Initial consultation $150, follow-ups $85. HSA/FSA eligible. No hidden fees. Book online.",
    ogImage: "/og/pricing.jpg",
    keywords: [
      "homeopathy consultation cost Houston",
      "affordable homeopath Houston",
      "homeopathic doctor cost",
      "HSA eligible homeopathy",
    ],
  },

  "/book": {
    title: "Book Appointment | Dr Neil's Healthcare | Houston Homeopathy",
    description:
      "Book your homeopathic consultation online. In-person or telehealth across Texas. HIPAA-compliant booking. $150 for 30 minutes.",
    ogImage: "/og/book.jpg",
    keywords: [
      "book homeopathy appointment Houston",
      "schedule homeopath Houston",
      "online homeopathy consultation Texas",
      "telehealth homeopath",
    ],
  },

  "/faq": {
    title: "FAQ | Homeopathy Questions Answered | Dr Neil's Healthcare",
    description:
      "Get answers to common questions about homeopathy: safety, effectiveness, what to expect, insurance, and more. Honest, evidence-based answers.",
    ogImage: "/og/faq.jpg",
    keywords: [
      "homeopathy questions",
      "is homeopathy safe",
      "does homeopathy work",
      "homeopathy FAQ",
    ],
  },

  "/conditions/allergies": {
    title: "Homeopathy for Allergies in Houston | Cedar Fever, Mold, Oak Pollen",
    description:
      "Personalized homeopathic relief for Houston's worst allergy seasons. Cedar fever, mold, oak pollen, ragweed. 30-minute consultation $150. Book online.",
    ogImage: "/og/allergies.jpg",
    keywords: [
      "homeopathy for allergies Houston",
      "cedar fever homeopathy",
      "mold allergy homeopathy",
      "oak pollen homeopathy Houston",
      "natural allergy treatment Houston",
    ],
  },

  "/conditions/anxiety": {
    title: "Homeopathy for Anxiety & Stress | Dr Neil's Healthcare",
    description:
      "Homeopathic treatment for anxiety, panic attacks, and chronic stress. Personalized remedies matched to your unique pattern. Works alongside conventional care.",
    ogImage: "/og/anxiety.jpg",
    keywords: [
      "homeopathy for anxiety",
      "homeopathic treatment anxiety",
      "homeopathy panic attacks",
      "natural anxiety treatment",
    ],
  },

  "/conditions/eczema": {
    title: "Homeopathy for Eczema | Addressing the Pattern, Not Just the Symptom",
    description:
      "Homeopathic treatment for eczema and atopic dermatitis. Working on the internal pattern, not suppressing symptoms. Especially effective for children's eczema.",
    ogImage: "/og/eczema.jpg",
    keywords: [
      "homeopathy for eczema",
      "homeopathic treatment eczema",
      "childhood eczema homeopathy",
      "natural eczema treatment",
    ],
  },

  "/conditions/children": {
    title: "Homeopathy for Children | Gentle, Individualized Care",
    description:
      "Homeopathic care for children in Houston. Ear infections, eczema, anxiety, recurring colds. Safe, gentle, effective. Parents and kids seen together.",
    ogImage: "/og/children.jpg",
    keywords: [
      "homeopathy for children Houston",
      "pediatric homeopathy",
      "homeopath for kids Houston",
      "is homeopathy safe for children",
    ],
  },

  "/houston/sugar-land": {
    title: "Homeopath in Sugar Land | Dr Neil's Healthcare",
    description:
      "Classical homeopathy serving Sugar Land, TX. Telehealth and Houston consultations. Indian homeopathy training. Serving First Colony, Telfair, Riverstone.",
    ogImage: "/og/sugar-land.jpg",
    keywords: [
      "homeopath Sugar Land",
      "Indian homeopathic doctor Sugar Land",
      "homeopathy Sugar Land TX",
      "natural medicine Sugar Land",
    ],
  },

  "/houston/katy": {
    title: "Homeopath in Katy | Dr Neil's Healthcare",
    description:
      "Classical homeopathy serving Katy, TX. Family-focused care for children and adults. Telehealth and Houston consultations. Serving Cinco Ranch, Cross Creek.",
    ogImage: "/og/katy.jpg",
    keywords: [
      "homeopath Katy",
      "homeopathy Katy TX",
      "natural medicine Katy",
      "holistic doctor Katy",
    ],
  },
};

/**
 * Get SEO metadata for a specific page
 */
export function getPageSEO(path: string): PageSEO | undefined {
  return seoConfig[path];
}
