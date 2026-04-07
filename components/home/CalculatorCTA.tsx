import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CalculatorCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg border border-primary/20">
          <Image
            src="/images/workshop-2.jpg"
            alt="Diagnostika vozidla"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={75}
          />

          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl pointer-events-none" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
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
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25"
              >
                Spočítat cenu
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="hidden lg:flex absolute bottom-8 right-12 items-end gap-3">
              <svg
                viewBox="0 0 200 80"
                className="w-48 h-auto text-primary/[0.08]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20 55 C20 55 35 20 65 20 L135 20 C165 20 175 35 178 40 L195 55 Z" />
                <circle cx="55" cy="60" r="12" />
                <circle cx="150" cy="60" r="12" />
                <line x1="10" y1="55" x2="195" y2="55" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
