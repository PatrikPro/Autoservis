"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface StepContactProps {
  data: {
    name: string;
    email: string;
    phone: string;
    note: string;
  };
  onUpdate: (fields: Record<string, string>) => void;
  onPrev: () => void;
  onSubmit: () => void;
  submitting: boolean;
  estimate: string | null;
  serviceName: string;
  vehicleName: string;
}

export default function StepContact({
  data,
  onUpdate,
  onPrev,
  onSubmit,
  submitting,
  estimate,
  serviceName,
  vehicleName,
}: StepContactProps) {
  const canSubmit = data.name && data.email && data.phone;

  return (
    <div className="space-y-8">
      {estimate && (
        <Card className="bg-primary/5 border-primary/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-sm text-muted">Vybraná služba</p>
              <p className="font-bold text-foreground">
                {serviceName} &middot; {vehicleName}
              </p>
            </div>
            <p className="text-2xl font-black text-primary">{estimate}</p>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Jméno a příjmení"
          placeholder="Jan Novák"
          value={data.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="jan@example.cz"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
        />
        <Input
          label="Telefon"
          type="tel"
          placeholder="+420 777 123 456"
          value={data.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
        />
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">
            Poznámka (volitelné)
          </label>
          <textarea
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none"
            rows={3}
            placeholder="Např. popis problému, preference..."
            value={data.note}
            onChange={(e) => onUpdate({ note: e.target.value })}
          />
        </div>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          Zpět
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!canSubmit || submitting}
          size="lg"
        >
          {submitting ? "Odesílám..." : "Odeslat rezervaci"}
        </Button>
      </div>
    </div>
  );
}
