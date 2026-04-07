import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDollarSign } from "react-icons/fi";
import { loadSiteContent } from "@/lib/cms/loadContent";

export default async function Hero() {
  const site = await loadSiteContent();

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      <Image
        src="/images/hero-bg.jpg"
        alt="Profesionální autoservis"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="section-label mb-4">Autoservis Praha 10</p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
            {site.hero.headline}
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
            {site.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={site.hero.ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
            >
              {site.hero.ctaLabel}
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={site.hero.secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 bg-surface/80 backdrop-blur-sm border border-border text-foreground font-bold text-base px-8 py-4 rounded-lg hover:border-primary/50 transition-colors"
            >
              <FiDollarSign className="w-5 h-5" />
              {site.hero.secondaryCtaLabel}
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              15+ let zkušeností
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Certifikovaní mechanici
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Online kalkulačka cen
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
