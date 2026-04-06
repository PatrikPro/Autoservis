"use client";

import type { VehicleCategory } from "@/lib/cms/types";
import VehicleSelector from "@/components/calculator/VehicleSelector";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface StepVehicleProps {
  vehicles: VehicleCategory[];
  data: {
    vehicleCategory: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    licensePlate: string;
  };
  onUpdate: (fields: Record<string, string>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function StepVehicle({
  vehicles,
  data,
  onUpdate,
  onNext,
  onPrev,
}: StepVehicleProps) {
  const canProceed =
    data.vehicleCategory &&
    data.vehicleMake &&
    data.vehicleModel &&
    data.vehicleYear &&
    data.licensePlate;

  return (
    <div className="space-y-8">
      <VehicleSelector
        vehicles={vehicles}
        selected={data.vehicleCategory || null}
        onSelect={(id) => onUpdate({ vehicleCategory: id })}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Značka vozidla"
          placeholder="např. Škoda"
          value={data.vehicleMake}
          onChange={(e) => onUpdate({ vehicleMake: e.target.value })}
        />
        <Input
          label="Model"
          placeholder="např. Octavia"
          value={data.vehicleModel}
          onChange={(e) => onUpdate({ vehicleModel: e.target.value })}
        />
        <Input
          label="Rok výroby"
          type="number"
          placeholder="např. 2020"
          value={data.vehicleYear}
          onChange={(e) => onUpdate({ vehicleYear: e.target.value })}
        />
        <Input
          label="SPZ"
          placeholder="např. 1A2 3456"
          value={data.licensePlate}
          onChange={(e) => onUpdate({ licensePlate: e.target.value.toUpperCase() })}
        />
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          Zpět
        </Button>
        <Button onClick={onNext} disabled={!canProceed} size="lg">
          Pokračovat
        </Button>
      </div>
    </div>
  );
}
