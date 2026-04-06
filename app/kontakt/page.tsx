import { Metadata } from "next";
import { loadSiteContent } from "@/lib/cms/loadContent";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Kontakt | ProFit Autoservis",
  description:
    "Kontaktujte nás. Adresa, telefon, e-mail a otevírací doba servisu.",
};

export default async function KontaktPage() {
  const site = await loadSiteContent();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <p className="section-label mb-3">Kontakt</p>
        <h1 className="section-title mb-4">Napište nám</h1>
        <p className="section-subtitle">
          Máte dotaz nebo chcete objednat servis? Ozvěte se nám.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
      </div>

      {site.contact.mapEmbedUrl && (
        <div className="mt-16 rounded-lg overflow-hidden border border-border">
          <iframe
            src={site.contact.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa – ProFit Autoservis"
          />
        </div>
      )}
    </div>
  );
}
