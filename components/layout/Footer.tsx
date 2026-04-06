import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const FOOTER_NAV = [
  { href: "/sluzby", label: "Služby a ceny" },
  { href: "/kalkulacka", label: "Kalkulačka cen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/rezervace", label: "Rezervace" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/ochrana-soukromi", label: "Ochrana soukromí" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-black text-sm">
                P
              </span>
              <span className="font-black text-lg text-foreground tracking-tight">
                Pro<span className="text-primary">Fit</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Profesionální autoservis s moderním vybavením. Přijďte se přesvědčit.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Navigace
            </h3>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Průmyslová 42, Praha 10
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+420777888999" className="hover:text-primary transition-colors">
                  +420 777 888 999
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@profitautoservis.cz" className="hover:text-primary transition-colors">
                  info@profitautoservis.cz
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiClock className="w-4 h-4 text-primary shrink-0" />
                Po–Pá 7:00–18:00, So 8:00–12:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} ProFit Autoservis. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
