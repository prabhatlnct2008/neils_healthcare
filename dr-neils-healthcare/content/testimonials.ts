/**
 * Testimonials Data
 * Real patient testimonials
 * NOTE: User indicated they have real testimonials - these are placeholders
 * Replace with real attributed testimonials before launch
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  condition?: string;
  avatar?: string; // Path to avatar image
}

export const testimonials: Testimonial[] = [
  {
    id: "priya-eczema",
    quote:
      "My six-year-old's eczema cleared in three months after years of steroid creams. The consultation was the first time anyone actually listened.",
    author: "Priya R.",
    location: "Sugar Land, TX",
    condition: "Children's eczema",
    avatar: "/images/testimonials/placeholder-priya.jpg",
  },
  {
    id: "marcus-anxiety",
    quote:
      "I'd been on anxiety medication for eight years and it never quite worked. Six months of homeopathy with Dr. Nill Mani and I'm sleeping again. I still see my psychiatrist — but for the first time, we're talking about stepping down medication, not adding more.",
    author: "Marcus T.",
    location: "Houston Heights, TX",
    condition: "Anxiety",
    avatar: "/images/testimonials/placeholder-marcus.jpg",
  },
  {
    id: "jennifer-menopause",
    quote:
      "I came to Dr. Nill Mani for perimenopause symptoms that my OB-GYN said were 'just normal.' I didn't want hormones, I wanted to feel like myself. Three months in, the hot flashes are 80% better and my sleep is back. I send everyone here.",
    author: "Jennifer M.",
    location: "Katy, TX",
    condition: "Perimenopause",
    avatar: "/images/testimonials/placeholder-jennifer.jpg",
  },
];

/**
 * Get testimonial by ID
 */
export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}

/**
 * Get testimonials for a specific condition
 */
export function getTestimonialsByCondition(condition: string): Testimonial[] {
  return testimonials.filter(
    (t) => t.condition?.toLowerCase() === condition.toLowerCase()
  );
}
