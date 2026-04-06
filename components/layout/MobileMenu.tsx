"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  links: Array<{ href: string; label: string }>;
  pathname: string;
  onClose: () => void;
}

export default function MobileMenu({ open, links, pathname, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
      <nav className="px-4 py-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              pathname === link.href
                ? "text-primary bg-primary/10"
                : "text-muted hover:text-foreground hover:bg-surface"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/rezervace"
          onClick={onClose}
          className="block text-center bg-primary text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-primary-hover transition-colors mt-3"
        >
          Objednat se
        </Link>
      </nav>
    </div>
  );
}
