import type { MetadataRoute } from "next";
import { publishedProducts } from "@/lib/catalog";
import { localeTags, locales } from "@/lib/i18n";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://squishyvibe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/products", ...publishedProducts().map((product) => `/products/${product.slug}`)];
  return paths.flatMap((path) => locales.map((locale) => ({
    url: `${base}/${locale}${path}`,
    alternates: { languages: Object.fromEntries(locales.map((code) => [localeTags[code], `${base}/${code}${path}`])) },
  })));
}
