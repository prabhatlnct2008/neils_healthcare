import React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * BentoGrid component - 12-column CSS grid wrapper
 * 4 columns on mobile, 12 columns on desktop
 */
export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 md:grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

BentoGrid.displayName = "BentoGrid";
