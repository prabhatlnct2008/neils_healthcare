import React from "react";
import { cn } from "@/lib/utils";

export interface DisplayHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

/**
 * DisplayHeading component - renders H1/H2/H3 with Fraunces font
 * Supports italic accent words via <em> tags which get special wonky-italic styling
 *
 * Usage:
 * <DisplayHeading as="h1">
 *   Honest homeopathy. Personally <em>matched</em> to you.
 * </DisplayHeading>
 */
export const DisplayHeading: React.FC<DisplayHeadingProps> = ({
  as: Component = "h1",
  className,
  children,
  ...props
}) => {
  const baseStyles = "font-display font-normal tracking-tight";

  const sizeStyles = {
    h1: "text-5xl md:text-7xl leading-[0.98]",
    h2: "text-3xl md:text-5xl leading-[1.05]",
    h3: "text-2xl leading-tight",
  };

  // Process children to add special styling to <em> tags
  const processChildren = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === "string") {
      return child;
    }

    if (React.isValidElement(child)) {
      // If it's an <em> tag, add the accent color and wonky italic styling
      if (child.type === "em") {
        const existingClassName = (child.props as { className?: string }).className;
        return React.cloneElement(child, {
          className: cn("text-accent italic font-display-italic not-italic", existingClassName),
        } as any);
      }

      // If it has children, recursively process them
      if (child.props && (child.props as any).children) {
        return React.cloneElement(child, {
          children: React.Children.map((child.props as any).children, processChildren),
        } as any);
      }
    }

    if (Array.isArray(child)) {
      return React.Children.map(child, processChildren);
    }

    return child;
  };

  return (
    <Component
      className={cn(
        baseStyles,
        sizeStyles[Component],
        className
      )}
      {...props}
    >
      {React.Children.map(children, processChildren)}
    </Component>
  );
};

DisplayHeading.displayName = "DisplayHeading";
