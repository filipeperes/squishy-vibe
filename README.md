# Squishy Vibe

Independent global affiliate showcase based on the Dumpling Squishy technical stack. This folder is separate from the Brazilian project and contains no copied local affiliate offers.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en`. Supported routes: `/en`, `/pt`, `/es`, `/da`, and `/sv`, each with `/products` and eligible product pages. The language selector preserves the current route.

## Product publication rule

Add a product to `src/lib/catalog.ts` only after obtaining its own real affiliate URL and checking international shipping in the seller's checkout or delivery selector. Record the seller's country, at least one different destination country, the verification date, real product media, and copy for all five languages. `isEligible()` hides offers without those shipping fields or whose check is more than 45 days old. This is an editorial guard, not a live shipping API: visitors must confirm their own destination, taxes, price, and delivery terms on the seller's page.

The catalog is deliberately empty until the AliExpress affiliate account and international offers are ready. Pages use `noindex` during this stage. Remove that setting in `src/app/[locale]/layout.tsx` when the catalog contains verified offers and the live site has been checked.

## Deployment

Production is deployed as the separate Vercel project `squishy-vibe`. The canonical domain is `https://squishyvibe.com`; `www.squishyvibe.com` permanently redirects to it. GA4 uses the separate `Squishy Vibe` property (`G-JCJV07ESJK`) and loads only after visitor consent.

The Search Console domain property is verified by DNS. Its sitemap is `https://squishyvibe.com/sitemap.xml`. Pages intentionally remain `noindex` while the catalog is empty; remove that setting and resubmit the sitemap after verified offers are published.

Supabase is intentionally deferred while the static catalog needs no database. A separate project would add compute cost to the current Pro organization, and sharing the Brazilian project's credentials would break environment isolation. Add a dedicated project only when a database-backed feature is introduced and budgeted.
