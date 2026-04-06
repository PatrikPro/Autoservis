import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProFit Autoservis | Profesionální autoservis Praha",
  description:
    "Kompletní servis osobních i užitkových vozidel. Pneuservis, diagnostika, brzdy, klimatizace a karosářské práce. Transparentní ceny, online kalkulačka.",
  keywords: [
    "autoservis",
    "Praha",
    "pneuservis",
    "diagnostika",
    "brzdy",
    "klimatizace",
    "výměna oleje",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
