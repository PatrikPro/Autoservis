"use client";

import type { ServiceCategory, ServiceItem } from "@/lib/cms/types";
import { formatPrice } from "@/lib/calculator/calculatePrice";
import { cn } from "@/lib/utils";

interface ServiceSelectorProps {
  categories: ServiceCategory[];
  items: ServiceItem[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function ServiceSelector({
  categories,
  items,
  selected,
  onSelect,
}: ServiceSelectorProps) {
  return (
    <div className="space-y-6">
      {categories.map((cat) => {
        const catItems = items.filter((it) => it.category === cat.id);
        if (catItems.length === 0) return null;
        return (
          <div key={cat.id}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">
              {cat.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {catItems.map((item) => {
                const active = selected === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={cn(
                      "flex items-center justify-between gap-4 p-4 rounded-lg border text-left transition-all duration-200",
                      active
                        ? "border-primary bg-primary/10"
                        : "border-border bg-surface hover:border-primary/40"
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "font-bold text-sm",
                          active ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-muted whitespace-nowrap">
                      od {formatPrice(item.basePrice)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
