"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/kalkulacka", label: "Kalkulačka" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-black text-sm">
              P
            </span>
            <span className="font-black text-lg text-foreground tracking-tight">
              Pro<span className="text-primary">Fit</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted hover:text-foreground hover:bg-surface"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+420777888999"
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              <span>777 888 999</span>
            </a>
            <Link
              href="/rezervace"
              className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary-hover transition-colors"
            >
              Objednat se
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        links={NAV_LINKS}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
