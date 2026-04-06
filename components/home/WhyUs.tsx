import * as FiIcons from "react-icons/fi";
import { loadSiteContent } from "@/lib/cms/loadContent";
import Card from "@/components/ui/Card";

export default async function WhyUs() {
  const site = await loadSiteContent();
  const { whyUs } = site;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">{whyUs.sectionLabel}</p>
          <h2 className="section-title">{whyUs.title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.items.map((item, i) => {
            const Icon = (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[item.icon];
            return (
              <Card key={i} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
