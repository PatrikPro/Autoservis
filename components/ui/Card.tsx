import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-lg p-6",
        hover && "transition-all duration-200 hover:border-primary/40 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
