"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ThemeToggle component - 56×30 toggle with sun/moon icons
 * Persists theme preference in localStorage and respects prefers-color-scheme on first visit
 */
export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);

    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark mode"
        className="relative inline-flex h-[30px] w-[56px] items-center rounded-full bg-moss-soft opacity-0"
        disabled
      >
        <span className="sr-only">Toggle dark mode</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === "dark"}
      className={cn(
        "relative inline-flex h-[30px] w-[56px] items-center rounded-full transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        theme === "light" ? "bg-moss-soft" : "bg-moss"
      )}
    >
      <span className="sr-only">Toggle dark mode</span>

      {/* Sliding indicator */}
      <span
        className={cn(
          "absolute inline-flex h-[22px] w-[22px] transform rounded-full bg-bg-elevated shadow-md transition-transform duration-300",
          theme === "light" ? "translate-x-1" : "translate-x-[30px]"
        )}
      />

      {/* Icons */}
      <span
        className={cn(
          "absolute left-1.5 inline-flex items-center justify-center transition-opacity duration-300",
          theme === "light" ? "opacity-100" : "opacity-0"
        )}
      >
        <Sun className="h-4 w-4 text-ink-primary" />
      </span>
      <span
        className={cn(
          "absolute right-1.5 inline-flex items-center justify-center transition-opacity duration-300",
          theme === "dark" ? "opacity-100" : "opacity-0"
        )}
      >
        <Moon className="h-4 w-4 text-ink-on-dark" />
      </span>
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";
