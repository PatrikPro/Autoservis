"use client";

import { useState, useMemo } from "react";
import type { ServiceCategory, ServiceItem } from "@/lib/cms/types";
import { filterServiceItems } from "@/lib/services/filterServices";
import { cn } from "@/lib/utils";
import ServiceCard from "./ServiceCard";
import Input from "@/components/ui/Input";

interface ServiceGridProps {
  categories: ServiceCategory[];
  items: ServiceItem[];
}

export default function ServiceGrid({ categories, items }: ServiceGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      filterServiceItems(items, {
        category: activeCategory ?? undefined,
        search: search || undefined,
      }),
    [items, activeCategory, search]
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 text-sm font-bold rounded-lg transition-colors",
              !activeCategory
                ? "bg-primary text-white"
                : "bg-surface border border-border text-muted hover:text-foreground"
            )}
          >
            Vše
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-sm font-bold rounded-lg transition-colors",
                activeCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-surface border border-border text-muted hover:text-foreground"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="sm:ml-auto w-full sm:w-64">
          <Input
            placeholder="Hledat službu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          Žádné služby neodpovídají vašemu hledání.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}
