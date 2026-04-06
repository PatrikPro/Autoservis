import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana soukromí | ProFit Autoservis",
};

export default function OchranaSoukromiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="section-title mb-8">Ochrana soukromí</h1>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted">
        <p>
          Provozovatel webu ProFit Autoservis (dále jen &bdquo;Provozovatel&ldquo;)
          zpracovává osobní údaje v souladu s nařízením Evropského parlamentu a
          Rady (EU) 2016/679 (GDPR).
        </p>

        <h2 className="text-lg font-bold text-foreground">
          Jaké údaje sbíráme
        </h2>
        <p>
          Prostřednictvím kontaktního formuláře a rezervačního systému sbíráme
          jméno, e-mailovou adresu, telefonní číslo a údaje o vozidle (značka,
          model, rok výroby, SPZ). Tyto údaje slouží výhradně k vyřízení
          vašeho požadavku.
        </p>

        <h2 className="text-lg font-bold text-foreground">
          Jak údaje používáme
        </h2>
        <p>
          Údaje používáme pouze pro účely komunikace se zákazníkem,
          zpracování rezervací a zlepšení našich služeb. Data neprodáváme
          třetím stranám.
        </p>

        <h2 className="text-lg font-bold text-foreground">
          Doba uchovávání
        </h2>
        <p>
          Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu
          zpracování, nejdéle však 3 roky od posledního kontaktu.
        </p>

        <h2 className="text-lg font-bold text-foreground">Vaše práva</h2>
        <p>
          Máte právo na přístup ke svým údajům, jejich opravu, výmaz,
          omezení zpracování a právo podat stížnost u Úřadu pro ochranu
          osobních údajů.
        </p>

        <h2 className="text-lg font-bold text-foreground">Kontakt</h2>
        <p>
          V případě dotazů ohledně zpracování osobních údajů nás kontaktujte
          na{" "}
          <a
            href="mailto:info@profitautoservis.cz"
            className="text-primary hover:underline"
          >
            info@profitautoservis.cz
          </a>
          .
        </p>
      </div>
    </div>
  );
}
