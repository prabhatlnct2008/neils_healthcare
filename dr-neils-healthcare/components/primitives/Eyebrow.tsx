import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/**
 * Eyebrow component - small caps section labels
 * Always appears above H1/H2 headings
 */
export const Eyebrow: React.FC<EyebrowProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.14em] text-ink-tertiary",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

Eyebrow.displayName = "Eyebrow";
