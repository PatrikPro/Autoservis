import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CalculatorCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-surface to-surface border border-primary/20 p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl">
            <p className="section-label mb-3">Online nástroj</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Kalkulačka cen
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Vyberte typ vozidla a službu — okamžitě uvidíte orientační cenu.
              Žádné překvapení, žádné skryté poplatky.
            </p>
            <Link
              href="/kalkulacka"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Spočítat cenu
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="hidden lg:block absolute bottom-8 right-12 text-8xl font-black text-primary/[0.07] select-none">
            Kč
          </div>
        </div>
      </div>
    </section>
  );
}
