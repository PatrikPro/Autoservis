import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "muted" | "warning";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded",
        {
          "bg-primary/15 text-primary": variant === "primary",
          "bg-border text-muted": variant === "muted",
          "bg-warning/15 text-warning": variant === "warning",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
