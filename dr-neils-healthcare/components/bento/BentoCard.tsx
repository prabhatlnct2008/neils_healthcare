import React from "react";
import { cn } from "@/lib/utils";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  colSpan?: 4 | 8 | 12;
  rowSpan?: 1 | 2 | 3 | 4;
  variant?: "default" | "feature" | "stat" | "dark";
  hover?: boolean;
}

/**
 * BentoCard component - base card with variant prop
 * Accepts colSpan and rowSpan for grid positioning
 * On mobile (<768px), every card becomes col-span-4 (full width)
 */
export const BentoCard: React.FC<BentoCardProps> = ({
  className,
  children,
  colSpan = 4,
  rowSpan = 1,
  variant = "default",
  hover = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Grid positioning - mobile is always full width (col-span-4)
        "col-span-4",
        colSpan === 8 && "md:col-span-8",
        colSpan === 12 && "md:col-span-12",

        // Row spans
        rowSpan === 1 && "row-span-1",
        rowSpan === 2 && "row-span-2",
        rowSpan === 3 && "row-span-3",
        rowSpan === 4 && "row-span-4",

        // Base card styles
        "rounded-2xl p-6 md:p-8",
        "transition-all duration-300",

        // Variant styles
        variant === "default" && [
          "bg-bg-card border border-border-soft",
          hover && "hover:bg-bg-card-hover hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        ],
        variant === "feature" && [
          "bg-bg-card-feature text-ink-on-dark",
          hover && "hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        ],
        variant === "stat" && [
          "bg-bg-card border border-border-soft",
          "flex flex-col justify-center",
        ],
        variant === "dark" && [
          "bg-moss text-ink-on-dark",
          hover && "hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        ],

        // Default shadow
        variant !== "feature" && "shadow-[var(--shadow-card)]",

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

BentoCard.displayName = "BentoCard";
