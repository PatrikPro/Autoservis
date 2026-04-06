"use client";

import { useState } from "react";
import type { ServiceCategory, ServiceItem, VehicleCategory } from "@/lib/cms/types";
import { formatPrice, calculatePrice } from "@/lib/calculator/calculatePrice";
import { cn } from "@/lib/utils";
import StepService from "./StepService";
import StepVehicle from "./StepVehicle";
import StepDateTime from "./StepDateTime";
import StepContact from "./StepContact";
import { FiCheck } from "react-icons/fi";

const STEPS = ["Služba", "Vozidlo", "Termín", "Kontakt"];

interface ReservationFormProps {
  categories: ServiceCategory[];
  items: ServiceItem[];
  vehicles: VehicleCategory[];
  initialServiceId?: string;
}

interface FormData {
  serviceId: string;
  vehicleCategory: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  licensePlate: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  note: string;
}

export default function ReservationForm({
  categories,
  items,
  vehicles,
  initialServiceId,
}: ReservationFormProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<FormData>({
    serviceId: initialServiceId ?? "",
    vehicleCategory: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    licensePlate: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const update = (fields: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...fields }));

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const selectedService = items.find((i) => i.id === data.serviceId);
  const selectedVehicle = vehicles.find((v) => v.id === data.vehicleCategory);
  const estimate =
    selectedService && selectedVehicle
      ? calculatePrice(selectedService, selectedVehicle)
      : null;

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          vehicleYear: Number(data.vehicleYear),
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Nepodařilo se odeslat rezervaci.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Neznámá chyba.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
          <FiCheck className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-2xl font-black text-foreground mb-2">
          Rezervace přijata!
        </h2>
        <p className="text-muted">
          Potvrzení jsme odeslali na <strong>{data.email}</strong>. Brzy se ozveme.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Steps indicator */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors",
                i === step
                  ? "bg-primary text-white"
                  : i < step
                  ? "bg-primary/10 text-primary"
                  : "bg-surface text-muted"
              )}
            >
              <span className="w-6 h-6 rounded-full bg-current/10 flex items-center justify-center text-xs">
                {i < step ? <FiCheck className="w-3.5 h-3.5" /> : i + 1}
              </span>
              {label}
            </div>
            {i < STEPS.length - 1 && (
              <div className="w-6 h-px bg-border shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      {step === 0 && (
        <StepService
          categories={categories}
          items={items}
          selected={data.serviceId}
          onSelect={(id) => update({ serviceId: id })}
          onNext={next}
        />
      )}
      {step === 1 && (
        <StepVehicle
          vehicles={vehicles}
          data={data}
          onUpdate={update}
          onNext={next}
          onPrev={prev}
        />
      )}
      {step === 2 && (
        <StepDateTime
          data={data}
          onUpdate={update}
          onNext={next}
          onPrev={prev}
        />
      )}
      {step === 3 && (
        <StepContact
          data={data}
          onUpdate={update}
          onPrev={prev}
          onSubmit={handleSubmit}
          submitting={submitting}
          estimate={estimate ? formatPrice(estimate.estimatedPrice) : null}
          serviceName={selectedService?.name ?? ""}
          vehicleName={selectedVehicle?.name ?? ""}
        />
      )}

      {error && (
        <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
      )}
    </div>
  );
}
