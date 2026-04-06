import type { ServiceItem, VehicleCategory } from "@/lib/cms/types";

export interface PriceEstimate {
  basePrice: number;
  multiplier: number;
  estimatedPrice: number;
  vehicleName: string;
  serviceName: string;
}

export function calculatePrice(
  service: ServiceItem,
  vehicle: VehicleCategory
): PriceEstimate {
  const estimatedPrice = Math.round(service.basePrice * vehicle.multiplier);

  return {
    basePrice: service.basePrice,
    multiplier: vehicle.multiplier,
    estimatedPrice,
    vehicleName: vehicle.name,
    serviceName: service.name,
  };
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("cs-CZ")} Kč`;
}
