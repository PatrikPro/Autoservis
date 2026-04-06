# Nasazení – ProFit Autoservis

## Vercel (doporučeno)

1. Importujte repozitář na [vercel.com](https://vercel.com)
2. Nastavte Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = vaše produkční doména (např. `https://profit-autoservis.vercel.app`)
   - `EXPORT_TOKEN` = bezpečný token pro CSV export rezervací
   - (volitelné) `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` + `RECAPTCHA_SECRET_KEY`
3. Deploy proběhne automaticky při push na `main`

## Jiný hosting

```bash
npm run build
npm run start
```

Aplikace běží na portu 3000 (nebo dle `PORT` env proměnné).

## Poznámky

- **Rezervace**: Výchozí in-memory store se resetuje při každém cold startu. Pro produkci implementujte `ReservationRepo` s databází (Upstash Redis, Vercel Postgres, Supabase).
- **Obrázky**: Placeholder SVG v `public/images/`. Nahraďte reálnými fotografiemi.
- **SEO**: Zkontrolujte metadata v `app/layout.tsx` a na jednotlivých stránkách.
