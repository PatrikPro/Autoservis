"use client";

import type { ServiceCategory, ServiceItem } from "@/lib/cms/types";
import ServiceSelector from "@/components/calculator/ServiceSelector";
import Button from "@/components/ui/Button";

interface StepServiceProps {
  categories: ServiceCategory[];
  items: ServiceItem[];
  selected: string;
  onSelect: (id: string) => void;
  onNext: () => void;
}

export default function StepService({
  categories,
  items,
  selected,
  onSelect,
  onNext,
}: StepServiceProps) {
  return (
    <div className="space-y-8">
      <ServiceSelector
        categories={categories}
        items={items}
        selected={selected || null}
        onSelect={onSelect}
      />
      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!selected} size="lg">
          Pokračovat
        </Button>
      </div>
    </div>
  );
}
