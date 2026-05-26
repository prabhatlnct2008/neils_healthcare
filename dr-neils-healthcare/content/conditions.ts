/**
 * Conditions Data
 * Information about the 8 primary conditions treated
 */

export interface Condition {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  icon: string; // Will use Lucide icons or custom SVGs
}

export const conditions: Condition[] = [
  {
    id: "allergies",
    title: "Allergies & hay fever",
    subtitle: "Cedar fever, oak, mold, ragweed — the full Houston gauntlet.",
    slug: "/conditions/allergies",
    description:
      "Homeopathic treatment for Houston's brutal allergy seasons. Cedar fever, oak pollen, mold allergies, and ragweed. Personalized remedies matched to your specific symptoms.",
    icon: "wind", // Lucide icon name
  },
  {
    id: "anxiety",
    title: "Anxiety & stress",
    subtitle: "For the 4 a.m. spiral, the constant hum, the public-speaking dread.",
    slug: "/conditions/anxiety",
    description:
      "Homeopathic treatment for anxiety, panic attacks, and chronic stress. Matched to your unique anxiety pattern. Works alongside conventional care.",
    icon: "brain",
  },
  {
    id: "insomnia",
    title: "Sleep & insomnia",
    subtitle: "Falling-asleep, 3 a.m. waking, stress-related — different patterns, different remedies.",
    slug: "/conditions/insomnia",
    description:
      "Homeopathic treatment for insomnia and sleep disturbances. Different remedies for different patterns: can't fall asleep, wake at 3am, stress-related, hormonal.",
    icon: "moon",
  },
  {
    id: "eczema",
    title: "Eczema & skin",
    subtitle: "Topical creams suppress. We work on the internal pattern producing it.",
    slug: "/conditions/eczema",
    description:
      "Homeopathic treatment for eczema, atopic dermatitis, and chronic skin conditions. Working on the internal pattern, not just suppressing symptoms. Effective for children's eczema.",
    icon: "droplet",
  },
  {
    id: "migraines",
    title: "Migraines",
    subtitle: "Location, trigger, time of day — every detail narrows to the right remedy.",
    slug: "/conditions/migraines",
    description:
      "Homeopathic treatment for migraines and chronic headaches. Location, triggers, time of day, what makes it better or worse—every detail matters for finding the right remedy.",
    icon: "zap",
  },
  {
    id: "digestive",
    title: "Digestive issues",
    subtitle: "IBS, reflux, bloating — homeopathy's strongest territories.",
    slug: "/conditions/digestive",
    description:
      "Homeopathic treatment for IBS, acid reflux, bloating, and chronic digestive issues. One of homeopathy's most successful areas.",
    icon: "activity",
  },
  {
    id: "womens-health",
    title: "Women's health",
    subtitle: "PMS, perimenopause, menopause, fertility support.",
    slug: "/conditions/womens-health",
    description:
      "Homeopathic treatment for PMS, perimenopause, menopause, hormonal imbalances, and fertility support. Gentle, individualized care for hormonal transitions.",
    icon: "heart",
  },
  {
    id: "children",
    title: "Children's health",
    subtitle: "Ear infections, eczema, anxiety, recurring colds — kids respond beautifully.",
    slug: "/conditions/children",
    description:
      "Homeopathic care for children: ear infections, eczema, anxiety, behavioral concerns, recurring colds. Safe, gentle, effective. Parents and kids seen together.",
    icon: "baby",
  },
];

/**
 * Get a condition by ID
 */
export function getCondition(id: string): Condition | undefined {
  return conditions.find((c) => c.id === id);
}

/**
 * Get a condition by slug
 */
export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
