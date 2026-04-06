"use client";

import * as FiIcons from "react-icons/fi";
import type { VehicleCategory } from "@/lib/cms/types";
import { cn } from "@/lib/utils";

interface VehicleSelectorProps {
  vehicles: VehicleCategory[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function VehicleSelector({
  vehicles,
  selected,
  onSelect,
}: VehicleSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {vehicles.map((v) => {
        const Icon = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[v.icon];
        const active = selected === v.id;
        return (
          <button
            key={v.id}
            onClick={() => onSelect(v.id)}
            className={cn(
              "flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all duration-200 text-center",
              active
                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                : "border-border bg-surface hover:border-primary/40"
            )}
          >
            <div
              className={cn(
                "w-14 h-14 rounded-lg flex items-center justify-center transition-colors",
                active ? "bg-primary text-white" : "bg-background text-muted"
              )}
            >
              {Icon && <Icon className="w-7 h-7" />}
            </div>
            <div>
              <p className={cn("font-bold", active ? "text-primary" : "text-foreground")}>
                {v.name}
              </p>
              <p className="text-xs text-muted mt-0.5">{v.description}</p>
            </div>
            {v.multiplier !== 1 && (
              <span className="text-xs font-bold text-muted">
                {v.multiplier === 1 ? "" : `×${v.multiplier}`}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
