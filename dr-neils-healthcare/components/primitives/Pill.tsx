import React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

/**
 * Pill component for small chips/badges
 * Used for eyebrow chips like "🟢 Now serving Houston, Sugar Land & Katy"
 */
export const Pill: React.FC<PillProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
        variant === "default" && "bg-moss-soft text-ink-primary border border-border-soft",
        variant === "accent" && "bg-accent-soft text-accent border border-accent/20",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

Pill.displayName = "Pill";
