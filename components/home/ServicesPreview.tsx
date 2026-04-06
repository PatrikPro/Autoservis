import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import * as FiIcons from "react-icons/fi";
import { loadServices } from "@/lib/cms/loadContent";
import Card from "@/components/ui/Card";

export default async function ServicesPreview() {
  const { categories } = await loadServices();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-3">Co děláme</p>
          <h2 className="section-title mb-4">Naše služby</h2>
          <p className="section-subtitle">
            Kompletní péče o vaše vozidlo pod jednou střechou.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[cat.icon];
            return (
              <Card key={cat.id} hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/sluzby"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
          >
            Zobrazit kompletní ceník
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
