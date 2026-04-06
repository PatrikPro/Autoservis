import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-white hover:bg-primary-hover active:scale-[0.97]":
              variant === "primary",
            "bg-surface border border-border text-foreground hover:border-primary/50 active:scale-[0.97]":
              variant === "secondary",
            "bg-transparent text-muted hover:text-foreground":
              variant === "ghost",
          },
          {
            "text-sm px-4 py-2 rounded-md": size === "sm",
            "text-sm px-6 py-3 rounded-lg": size === "md",
            "text-base px-8 py-4 rounded-lg": size === "lg",
          },
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
export default Button;
