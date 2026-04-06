"use client";

import { RESERVATION_TIME_SLOTS } from "@/lib/forms/schemas";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface StepDateTimeProps {
  data: { date: string; time: string };
  onUpdate: (fields: Record<string, string>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepDateTime({
  data,
  onUpdate,
  onNext,
  onPrev,
}: StepDateTimeProps) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="space-y-8">
      <div>
        <Input
          label="Datum"
          type="date"
          min={minDate}
          value={data.date}
          onChange={(e) => onUpdate({ date: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Čas
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
          {RESERVATION_TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => onUpdate({ time: slot })}
              className={cn(
                "py-2 text-sm font-bold rounded-lg border transition-colors",
                data.time === slot
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          Zpět
        </Button>
        <Button
          onClick={onNext}
          disabled={!data.date || !data.time}
          size="lg"
        >
          Pokračovat
        </Button>
      </div>
    </div>
  );
}
