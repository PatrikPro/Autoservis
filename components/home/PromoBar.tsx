import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import { loadPromo } from "@/lib/cms/loadContent";

export default async function PromoBar() {
  const promo = await loadPromo();
  if (!promo) return null;

  const Icon = promo.icon
    ? (FiIcons as Record<string, React.ComponentType<{ className?: string }>>)[promo.icon]
    : null;

  return (
    <section className="bg-gradient-to-r from-warning/10 via-warning/5 to-warning/10 border-y border-warning/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-lg bg-warning/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-warning" />
              </div>
            )}
            <div>
              <p className="font-bold text-foreground text-sm">
                {promo.headline}
              </p>
              <p className="text-xs text-muted">{promo.text}</p>
            </div>
          </div>
          <Link
            href={promo.ctaHref}
            className="shrink-0 bg-warning text-background text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-warning/90 transition-colors"
          >
            {promo.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
