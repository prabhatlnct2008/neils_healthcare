/**
 * FAQs Data
 * Frequently asked questions organized by category
 */

export interface FAQ {
  question: string;
  answer: string;
  category: "about-homeopathy" | "practice" | "logistics" | "conditions-safety";
}

export const faqs: FAQ[] = [
  // About Homeopathy
  {
    question: "Does homeopathy actually work?",
    answer:
      "Honestly: homeopathy is controversial in mainstream medical circles and we believe in being upfront about that. What we can tell you is that millions of patients worldwide report meaningful changes in chronic symptoms after careful, individualized care. We don't promise cures. We promise to listen, prescribe thoughtfully, and refer elsewhere if needed.",
    category: "about-homeopathy",
  },
  {
    question: "How long does homeopathy take to work?",
    answer:
      "For acute concerns, results can come within hours or days. For chronic issues like eczema, anxiety, or hormonal imbalances, expect first noticeable shifts within 4–6 weeks, with continued improvement over months. Homeopathy is a recalibration, not a quick fix.",
    category: "about-homeopathy",
  },
  {
    question: "Are homeopathic remedies FDA approved?",
    answer:
      "Homeopathic remedies are regulated by the FDA under the Federal Food, Drug, and Cosmetic Act and manufactured per the Homeopathic Pharmacopoeia of the United States (HPUS). They are **not** \"FDA approved\" the same way prescription drugs are — they haven't been evaluated through the FDA's new-drug-approval pathway. Homeopathic claims are not accepted by most modern medical experts, and homeopathy is not a substitute for conventional medical diagnosis or treatment.",
    category: "about-homeopathy",
  },
  {
    question: "Is a homeopath the same as a naturopath?",
    answer:
      "No. A naturopath is a broader practitioner who may use herbs, nutrition, supplements, hydrotherapy, and sometimes homeopathy. A *classical* homeopath like Dr. Neil uses one carefully selected homeopathic remedy at a time. We do not prescribe herbs, supplements, or vitamins. We do not run lab tests. We do one thing — homeopathy — and we do it carefully.",
    category: "about-homeopathy",
  },

  // Practice
  {
    question: "What happens during my $150 consultation?",
    answer:
      "A lot of questions. About your symptoms, your medical history, your sleep, your moods, your stress, your cravings, what time of day you feel best. Every detail helps Dr. Neil match the remedy to *you*. Most consultations run a full 30 minutes. We don't rush.",
    category: "practice",
  },
  {
    question: "Is Dr. Neil a medical doctor?",
    answer:
      "Dr. Neil holds an Indian homeopathy degree (BHMS) and is not licensed to diagnose disease, prescribe pharmaceuticals, or order labs in Texas. Dr. Neil works alongside your primary care physician and specialists. Nothing on this website is medical advice, and a homeopathic consultation is not a substitute for the care of a licensed medical doctor.",
    category: "practice",
  },
  {
    question: "Do you see patients in person or only online?",
    answer:
      "Both. We offer HIPAA-compliant secure video consultations for patients across Texas. All consultations are telehealth unless otherwise specified.",
    category: "practice",
  },

  // Logistics & Pricing
  {
    question: "Is homeopathy covered by insurance in Texas?",
    answer:
      "Almost never. However, homeopathic consultations are generally eligible under HSA and FSA accounts (IRS Section 213(d) — check with your plan administrator). We provide itemized superbills on request for out-of-network insurance reimbursement, though we cannot guarantee your insurer will pay.",
    category: "logistics",
  },
  {
    question: "How much will the remedies cost?",
    answer:
      "Remedies typically run $15–$45 each and are shipped directly from a licensed homeopathic pharmacy to your home. We don't mark up remedy costs — you pay the pharmacy directly. A single remedy often lasts months.",
    category: "logistics",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "24 hours' notice to reschedule. Within 24 hours forfeits 50% of the fee. No-shows forfeit the full fee. Life happens — talk to us.",
    category: "logistics",
  },

  // Conditions & Safety
  {
    question: "Is it safe to take with my prescriptions?",
    answer:
      "Yes. There are no known pharmaceutical interactions with homeopathic remedies. Never stop a prescription without consulting your prescriber — homeopathy works alongside conventional care, not in place of it.",
    category: "conditions-safety",
  },
  {
    question: "Is homeopathy safe for children?",
    answer:
      "Children typically respond beautifully to homeopathy — it's gentle, non-toxic, and well-tolerated. Dr. Neil sees kids regularly for ear infections, eczema, anxiety, behavioral concerns, and recurring colds. Pediatric consultations include time with the parent as well as the child, when developmentally appropriate.",
    category: "conditions-safety",
  },
  {
    question: "Is homeopathy safe during pregnancy and breastfeeding?",
    answer:
      "In experienced hands, yes. Homeopathic remedies have been used during pregnancy and lactation for two centuries. We work with morning sickness, anxiety, sleep issues, labor prep, and postpartum mood. Always disclose pregnancy or breastfeeding during your consultation so we can prescribe accordingly.",
    category: "conditions-safety",
  },
  {
    question: "Will I get worse before I get better?",
    answer:
      "Sometimes. A brief intensification of symptoms, called a \"homeopathic aggravation,\" can occur in the first few days after taking a remedy. It's typically short-lived and is generally considered a sign that the remedy is acting. Dr. Neil will prepare you for what to watch for and what's normal.",
    category: "conditions-safety",
  },
];

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

/**
 * Get all FAQs for a specific page
 */
export function getFAQsForPage(page: "homepage" | "pricing" | "conditions"): FAQ[] {
  if (page === "homepage") {
    // Return the 6 most common questions for the homepage
    return faqs.slice(0, 6);
  }
  if (page === "pricing") {
    return getFAQsByCategory("logistics");
  }
  if (page === "conditions") {
    return getFAQsByCategory("conditions-safety");
  }
  return [];
}
