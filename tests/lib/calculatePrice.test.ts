import { describe, it, expect } from "vitest";
import {
  calculatePrice,
  formatPrice,
} from "@/lib/calculator/calculatePrice";
import type { ServiceItem, VehicleCategory } from "@/lib/cms/types";

const mockService: ServiceItem = {
  id: "vymena-oleje",
  name: "Výměna motorového oleje",
  description: "Výměna oleje včetně filtru",
  basePrice: 1500,
  category: "oleje",
  available: true,
  order: 1,
};

const osobni: VehicleCategory = {
  id: "osobni",
  name: "Osobní auto",
  description: "Hatchback, sedan, kombi",
  icon: "FiNavigation",
  multiplier: 1.0,
};

const suv: VehicleCategory = {
  id: "suv",
  name: "SUV / Crossover",
  description: "SUV, crossover, terénní",
  icon: "FiTruck",
  multiplier: 1.25,
};

const dodavka: VehicleCategory = {
  id: "dodavka",
  name: "Dodávka / Užitkové",
  description: "Dodávka, pick-up, mikrobus",
  icon: "FiPackage",
  multiplier: 1.5,
};

describe("calculatePrice", () => {
  it("returns base price for osobni (multiplier 1.0)", () => {
    const result = calculatePrice(mockService, osobni);
    expect(result.estimatedPrice).toBe(1500);
    expect(result.multiplier).toBe(1.0);
  });

  it("applies 1.25x multiplier for SUV", () => {
    const result = calculatePrice(mockService, suv);
    expect(result.estimatedPrice).toBe(1875);
  });

  it("applies 1.5x multiplier for dodavka", () => {
    const result = calculatePrice(mockService, dodavka);
    expect(result.estimatedPrice).toBe(2250);
  });

  it("rounds to nearest integer", () => {
    const oddService: ServiceItem = {
      ...mockService,
      basePrice: 333,
    };
    const result = calculatePrice(oddService, suv);
    expect(result.estimatedPrice).toBe(416);
    expect(Number.isInteger(result.estimatedPrice)).toBe(true);
  });

  it("includes service and vehicle names", () => {
    const result = calculatePrice(mockService, osobni);
    expect(result.serviceName).toBe("Výměna motorového oleje");
    expect(result.vehicleName).toBe("Osobní auto");
  });
});

describe("formatPrice", () => {
  it("formats price with Kč suffix", () => {
    const formatted = formatPrice(1500);
    expect(formatted).toContain("1");
    expect(formatted).toContain("500");
    expect(formatted).toContain("Kč");
  });
});
