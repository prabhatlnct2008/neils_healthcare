import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Footer component - links, legal disclaimer, copyright
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border-soft bg-bg-page mt-auto">
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16">
        {/* Top section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-medium text-ink-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Book now
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-display text-sm font-medium text-ink-primary mb-4">
              What we treat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/conditions/allergies"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Allergies
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/anxiety"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Anxiety
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/eczema"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Eczema
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions/children"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Children's health
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display text-sm font-medium text-ink-primary mb-4">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-dr-neil"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  About Dr. Neil
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-display text-sm font-medium text-ink-primary mb-4">
              Service area
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/houston/sugar-land"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Sugar Land
                </Link>
              </li>
              <li>
                <Link
                  href="/houston/katy"
                  className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  Katy
                </Link>
              </li>
            </ul>
            <p className="text-xs text-ink-tertiary mt-4">
              Serving Houston, Sugar Land, Katy, Pearland, Friendswood, The Woodlands, Cypress, Spring, Memorial, River Oaks, Houston Heights
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-border-soft pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-display text-sm font-medium text-ink-primary mb-3">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-ink-secondary">
                <p>📞 [Phone]</p>
                <p>✉️ [Email]</p>
                <p>🌎 Telehealth across Texas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="bg-moss-soft/30 rounded-2xl p-6 mb-8 border border-border-soft">
          <p className="text-xs leading-relaxed text-ink-secondary">
            <strong>Legal Disclaimer:</strong> The information on this website is provided for educational purposes only and is not intended as medical advice, diagnosis, or treatment. Homeopathic claims have not been evaluated by the Food and Drug Administration, and the theory of homeopathy is not accepted by most modern medical experts. Homeopathy is not intended to diagnose, treat, cure, or prevent any disease and is not a substitute for the care of a licensed medical doctor. Always consult your physician before making changes to any medical regimen or starting a new treatment, and never discontinue prescription medication without consulting the prescribing doctor. Dr Neil's Healthcare and Dr. Neil do not practice medicine and are not licensed medical practitioners in the State of Texas. Patient testimonials reflect individual experiences and are not a guarantee of results; outcomes vary. No specific health outcome is promised or guaranteed.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink-tertiary pt-8 border-t border-border-soft">
          <p>© 2026 Dr Neil's Healthcare · Houston, TX</p>
          <p className="text-xs">
            Telehealth homeopathic consultations across Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
