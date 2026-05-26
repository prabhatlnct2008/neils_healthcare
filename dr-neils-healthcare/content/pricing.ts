/**
 * Pricing Data
 * Pricing tiers and inclusions
 */

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  inclusions: string[];
  featured?: boolean;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "initial",
    name: "Initial Consultation",
    price: 150,
    duration: "60 minutes",
    description: "For new patients",
    inclusions: [
      "Full 60-minute consultation",
      "Written remedy plan in 48 hours",
      "30-day email follow-up window",
    ],
    ctaText: "Book consultation",
    ctaLink: "/book",
  },
  {
    id: "package",
    name: "Constitutional Package",
    price: 279,
    duration: "Initial + 2 follow-ups",
    description: "Saves $41 vs separate bookings",
    inclusions: [
      "One 60-minute initial consultation",
      "Two 30-minute follow-ups (within 6 months)",
      "Acute support between visits",
      "Priority booking",
    ],
    featured: true,
    badge: "Best value",
    ctaText: "Get the package",
    ctaLink: "/book?package=constitutional",
  },
  {
    id: "followup",
    name: "Follow-up",
    price: 85,
    duration: "30 minutes",
    description: "For existing patients",
    inclusions: [
      "Treatment progress review",
      "Remedy adjustment if needed",
      "Recommended every 4–6 weeks",
    ],
    ctaText: "Book follow-up",
    ctaLink: "/book?type=followup",
  },
];

/**
 * Payment and insurance information
 */
export const paymentInfo = {
  accepted: "All major credit cards accepted",
  hsa: "HSA/FSA cards accepted. Homeopathic consultations are generally eligible under IRS Section 213(d) — check with your plan administrator.",
  insurance:
    "Homeopathy is rarely covered by insurance in Texas, but we provide itemized superbills on request for out-of-network reimbursement claims. We cannot guarantee your insurer will pay.",
  remedyCost: "Remedies typically cost $15–$45 and are shipped directly from a licensed homeopathic pharmacy. We don't mark up remedy costs — you pay the pharmacy directly.",
};
