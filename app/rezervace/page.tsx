import { Metadata } from "next";
import { loadServices, loadVehicles } from "@/lib/cms/loadContent";
import ReservationForm from "@/components/reservation/ReservationForm";

export const metadata: Metadata = {
  title: "Rezervace | ProFit Autoservis",
  description:
    "Objednejte se online. Vyberte službu, zadejte údaje o vozidle a vyberte termín.",
};

export default async function RezervacePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const { categories, items } = await loadServices();
  const { categories: vehicles } = await loadVehicles();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Online objednání</p>
        <h1 className="section-title mb-4">Rezervace termínu</h1>
        <p className="section-subtitle">
          Vyberte službu, zadejte údaje o vozidle, zvolte termín a vyplňte kontakt.
        </p>
      </div>

      <ReservationForm
        categories={categories}
        items={items}
        vehicles={vehicles}
        initialServiceId={params.service}
      />
    </div>
  );
}
