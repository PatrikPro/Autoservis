"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import type { ServiceCategory, ServiceItem, VehicleCategory } from "@/lib/cms/types";
import { calculatePrice, formatPrice } from "@/lib/calculator/calculatePrice";
import VehicleSelector from "./VehicleSelector";
import ServiceSelector from "./ServiceSelector";

interface PriceCalculatorProps {
  categories: ServiceCategory[];
  items: ServiceItem[];
  vehicles: VehicleCategory[];
}

export default function PriceCalculator({
  categories,
  items,
  vehicles,
}: PriceCalculatorProps) {
  const [vehicleId, setVehicleId] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<string | null>(null);

  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.id === vehicleId) ?? null,
    [vehicles, vehicleId]
  );

  const selectedService = useMemo(
    () => items.find((s) => s.id === serviceId) ?? null,
    [items, serviceId]
  );

  const estimate = useMemo(() => {
    if (!selectedService || !selectedVehicle) return null;
    return calculatePrice(selectedService, selectedVehicle);
  }, [selectedService, selectedVehicle]);

  return (
    <div className="space-y-10">
      {/* Step 1 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-black flex items-center justify-center">
            1
          </span>
          <h2 className="text-xl font-black text-foreground">Vyberte typ vozidla</h2>
        </div>
        <VehicleSelector
          vehicles={vehicles}
          selected={vehicleId}
          onSelect={setVehicleId}
        />
      </div>

      {/* Step 2 */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-black flex items-center justify-center">
            2
          </span>
          <h2 className="text-xl font-black text-foreground">Vyberte službu</h2>
        </div>
        <ServiceSelector
          categories={categories}
          items={items}
          selected={serviceId}
          onSelect={setServiceId}
        />
      </div>

      {/* Result */}
      {estimate && (
        <div className="relative overflow-hidden rounded-lg border-2 border-primary bg-gradient-to-br from-primary/10 via-surface to-surface p-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <FiCheck className="w-5 h-5 text-success" />
              <p className="text-sm font-bold text-success">Orientační cena</p>
            </div>

            <p className="text-4xl sm:text-5xl font-black text-primary mb-2">
              {formatPrice(estimate.estimatedPrice)}
            </p>

            <p className="text-sm text-muted mb-6">
              {estimate.serviceName} &middot; {estimate.vehicleName}
              {estimate.multiplier !== 1 && (
                <span className="text-xs ml-2">
                  (základ {formatPrice(estimate.basePrice)} &times; {estimate.multiplier})
                </span>
              )}
            </p>

            <Link
              href={`/rezervace?service=${selectedService?.id ?? ""}`}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Objednat tuto službu
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
