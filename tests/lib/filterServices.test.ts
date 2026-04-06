import { describe, it, expect } from "vitest";
import { filterServiceItems } from "@/lib/services/filterServices";
import type { ServiceItem } from "@/lib/cms/types";

const items: ServiceItem[] = [
  {
    id: "prezuti",
    name: "Přezutí pneumatik",
    description: "Sezónní přezutí",
    basePrice: 800,
    category: "pneuservis",
    available: true,
    order: 1,
  },
  {
    id: "olej",
    name: "Výměna motorového oleje",
    description: "Výměna oleje včetně filtru",
    basePrice: 1500,
    category: "oleje",
    available: true,
    order: 1,
  },
  {
    id: "brzdy",
    name: "Výměna brzdových destiček",
    description: "Přední brzdové destičky",
    basePrice: 2200,
    category: "brzdy",
    available: true,
    order: 1,
  },
  {
    id: "diagnostika",
    name: "Kompletní diagnostika",
    description: "Počítačová diagnostika",
    basePrice: 990,
    category: "diagnostika",
    available: true,
    order: 1,
  },
];

describe("filterServiceItems", () => {
  it("returns all items with no filters", () => {
    const result = filterServiceItems(items, {});
    expect(result).toHaveLength(4);
  });

  it("filters by category", () => {
    const result = filterServiceItems(items, { category: "pneuservis" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("prezuti");
  });

  it("filters by search term in name", () => {
    const result = filterServiceItems(items, { search: "olej" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("olej");
  });

  it("filters by search term in description", () => {
    const result = filterServiceItems(items, { search: "počítačová" });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("diagnostika");
  });

  it("search is case-insensitive", () => {
    const result = filterServiceItems(items, { search: "PŘEZUTÍ" });
    expect(result).toHaveLength(1);
  });

  it("filters by max price", () => {
    const result = filterServiceItems(items, { maxPrice: 1000 });
    expect(result).toHaveLength(2);
    expect(result.every((i) => i.basePrice <= 1000)).toBe(true);
  });

  it("combines category + search filters", () => {
    const result = filterServiceItems(items, {
      category: "oleje",
      search: "filtr",
    });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("olej");
  });

  it("returns empty array when nothing matches", () => {
    const result = filterServiceItems(items, { search: "neexistuje" });
    expect(result).toHaveLength(0);
  });
});
