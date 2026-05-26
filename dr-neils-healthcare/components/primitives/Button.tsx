import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "default" | "large";
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, asChild = false, ...props }, ref) => {
    const classes = cn(
      // Base styles
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",

      // Variant styles. ink-on-dark flips with the theme so the label stays
      // readable on the green accent in light mode and the chartreuse accent in dark.
      variant === "primary" && [
        "bg-accent text-ink-on-dark hover:bg-accent-hover",
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
    );

    // When asChild is set, render the single child element (e.g. a Next.js
    // <Link>) with the button styles merged in, rather than wrapping an anchor
    // inside a <button> (which is invalid HTML).
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
        ref,
        ...props,
      } as React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLButtonElement> });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
