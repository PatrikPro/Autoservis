import { Metadata } from "next";
import { loadServices, loadVehicles } from "@/lib/cms/loadContent";
import PriceCalculator from "@/components/calculator/PriceCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka cen | ProFit Autoservis",
  description:
    "Online kalkulačka cen autoservisu. Vyberte typ vozidla a službu — okamžitě uvidíte orientační cenu.",
};

export default async function KalkulackaPage() {
  const { categories, items } = await loadServices();
  const { categories: vehicles } = await loadVehicles();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Online nástroj</p>
        <h1 className="section-title mb-4">Kalkulačka cen</h1>
        <p className="section-subtitle">
          Vyberte typ vozidla a službu. Ceny jsou orientační — přesnou cenu
          potvrdíme po prohlídce.
        </p>
      </div>

      <PriceCalculator
        categories={categories}
        items={items}
        vehicles={vehicles}
      />
    </div>
  );
}
