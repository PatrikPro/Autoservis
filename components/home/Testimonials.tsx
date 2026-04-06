import { FiUser } from "react-icons/fi";
import { loadSiteContent } from "@/lib/cms/loadContent";
import Card from "@/components/ui/Card";

export default async function Testimonials() {
  const site = await loadSiteContent();
  const { testimonials } = site;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">{testimonials.sectionLabel}</p>
          <h2 className="section-title">{testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.items.map((item, i) => (
            <Card key={i}>
              <blockquote className="text-foreground/90 leading-relaxed mb-4">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiUser className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted">{item.vehicle}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
