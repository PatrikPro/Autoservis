import { Metadata } from "next";
import { loadGallery } from "@/lib/cms/loadContent";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie | ProFit Autoservis",
  description: "Fotografie z naší dílny. Ukázky práce před a po opravě.",
};

export default async function GaleriePage() {
  const gallery = await loadGallery();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Fotogalerie</p>
        <h1 className="section-title mb-4">Z naší dílny</h1>
        <p className="section-subtitle">
          Výsledky naší práce mluví samy za sebe.
        </p>
      </div>

      {gallery.beforeAfter.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xl font-black text-foreground mb-6">
            Před a po
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.beforeAfter.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {gallery.workshop.length > 0 && (
        <div>
          <h2 className="text-xl font-black text-foreground mb-6">
            Naše dílna
          </h2>
          <GalleryGrid images={gallery.workshop} />
        </div>
      )}
    </div>
  );
}
