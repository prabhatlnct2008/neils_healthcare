import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "default" | "large";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",

          // Variant styles
          variant === "primary" && [
            "bg-accent text-white hover:bg-accent-hover",
            "shadow-md hover:shadow-lg",
          ],
          variant === "ghost" && [
            "bg-transparent border-2 border-ink-primary text-ink-primary",
            "hover:bg-ink-primary hover:text-bg-page",
          ],

          // Size styles
          size === "default" && "px-6 py-3 text-base",
          size === "large" && "px-8 py-4 text-lg",

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
