"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../primitives/Button";

/**
 * Header component - logo, nav, theme toggle, CTA
 * Sticky on scroll with blur backdrop
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-bg-page/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-xl md:text-2xl font-display font-medium text-ink-primary group-hover:text-accent transition-colors">
              Dr NillMani's <em className="italic font-display-italic text-accent">Healthcare</em>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/conditions/allergies"
              className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              What we treat
            </Link>
            <Link
              href="/about-dr-nillmani"
              className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              About Dr. NillMani
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right side - Theme toggle + CTA */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/book">Book — $150</Link>
            </Button>
            <Button asChild size="default" className="sm:hidden">
              <Link href="/book">Book</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
