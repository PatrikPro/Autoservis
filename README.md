# ProFit Autoservis – Web

Moderní, responzivní web pro autoservis. Postavený na **Next.js 15**, **TypeScript** a **Tailwind CSS**.

## Rychlý start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikace běží na [http://localhost:3000](http://localhost:3000).

## Skripty

| Příkaz            | Popis                       |
| ----------------- | --------------------------- |
| `npm run dev`     | Dev server (Turbopack)      |
| `npm run build`   | Produkční build             |
| `npm run start`   | Produkční server            |
| `npm run lint`    | ESLint                      |
| `npm run test`    | Vitest (unit + integration) |
| `npm run test:watch` | Vitest watch mode        |

## Tech stack

- **Next.js 15** (App Router, Server Components, Route Handlers)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** (custom design tokens: industrial palette)
- **react-hook-form** + **zod** (formuláře + validace)
- **react-icons** (Feather ikony – `react-icons/fi`)
- **clsx** + **tailwind-merge** (utility `cn()`)
- **vitest** + **@testing-library/react** (testy)

## Stránky

| URL               | Popis                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| `/`               | Homepage – hero, služby, kalkulačka, proč my, recenze, promo          |
| `/sluzby`         | Kompletní katalog služeb s filtry                                     |
| `/kalkulacka`     | Interaktivní kalkulačka cen (typ vozidla × služba)                    |
| `/galerie`        | Fotogalerie s before/after porovnáním                                 |
| `/rezervace`      | 4-krokový formulář (služba → vozidlo → datum/čas → kontakt)          |
| `/kontakt`        | Kontaktní formulář + mapa + otevírací doba                            |
| `/ochrana-soukromi` | GDPR / ochrana soukromí (placeholder)                               |

## Úprava obsahu

Veškerý text a data jsou v adresáři `content/` jako JSON soubory.

## SEO a prostředí

Nastavte `NEXT_PUBLIC_SITE_URL` v `.env.local` na produkční doménu.

---

_Detaily k nasazení viz DEPLOYMENT.md._
