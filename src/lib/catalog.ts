import type { Locale } from "@/lib/i18n";

/** Curated offers must have a real affiliate link and verified cross-border delivery. */
export type Product = {
  slug: string;
  translations: Record<Locale, { title: string; description: string }>;
  seller: string;
  affiliateUrl: string;
  sellerCountry: string;
  verifiedShippingCountries: string[];
  shippingVerifiedAt: string; // YYYY-MM-DD
  images: string[];
  videoUrl?: string;
};

// Keep empty until each offer is checked in its affiliate portal and the seller's delivery flow.
// Never copy Brazilian domestic affiliate links from Dumpling Squishy into this catalog.
export const products: Product[] = [];

export function isEligible(product: Product): boolean {
  if (!/^https:\/\//.test(product.affiliateUrl)) return false;
  if (!product.sellerCountry || !/^\d{4}-\d{2}-\d{2}$/.test(product.shippingVerifiedAt)) return false;
  if (!product.verifiedShippingCountries.some((country) => country !== product.sellerCountry)) return false;
  if (product.images.length === 0) return false;
  const verified = new Date(`${product.shippingVerifiedAt}T00:00:00Z`).getTime();
  return Number.isFinite(verified) && verified <= Date.now() && Date.now() - verified <= 45 * 86400000;
}

export function publishedProducts(): Product[] {
  return products.filter(isEligible);
}

export function getPublishedProduct(slug: string): Product | undefined {
  return publishedProducts().find((product) => product.slug === slug);
}
