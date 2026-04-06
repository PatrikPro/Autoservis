import type { ServiceItem } from "@/lib/cms/types";
import type { ServiceFilterOptions } from "./types";

export function filterServiceItems(
  items: ServiceItem[],
  options: ServiceFilterOptions
): ServiceItem[] {
  let result = items;

  if (options.category) {
    result = result.filter((item) => item.category === options.category);
  }

  if (options.search) {
    const query = options.search.toLowerCase();
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  if (options.maxPrice !== undefined) {
    result = result.filter((item) => item.basePrice <= options.maxPrice!);
  }

  return result;
}
