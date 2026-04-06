import { Metadata } from "next";
import { loadServices } from "@/lib/cms/loadContent";
import ServiceGrid from "@/components/services/ServiceGrid";

export const metadata: Metadata = {
  title: "Služby a ceník | ProFit Autoservis",
  description:
    "Kompletní přehled služeb a orientační ceny. Pneuservis, oleje, brzdy, diagnostika, klimatizace a karosářské práce.",
};

export default async function SluzbyPage() {
  const { categories, items } = await loadServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Ceník</p>
        <h1 className="section-title mb-4">Služby a ceny</h1>
        <p className="section-subtitle">
          Orientační ceny pro osobní auta. Pro SUV a dodávky použijte naši{" "}
          <a href="/kalkulacka" className="text-primary hover:underline">
            kalkulačku cen
          </a>
          .
        </p>
      </div>

      <ServiceGrid categories={categories} items={items} />
    </div>
  );
}
