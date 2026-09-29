import type { Locale } from "@/lib/i18n";

/** Curated offers must have a real affiliate link and verified cross-border delivery. */
export type Product = {
  slug: string;
  translations: Record<Locale, { title: string; description: string }>;
  seller: string;
  marketplace: "Shopee" | "AliExpress" | "Amazon";
  affiliateUrl: string;
  shippingVerification: {
    scope: "international";
    source: "shopee-affiliate-catalog" | "seller-checkout";
    checkedAt: string; // YYYY-MM-DD
  };
  images: string[];
  videoUrl?: string;
};

// Publish only offers checked in their affiliate portal with an international shipping signal.
// Never copy Brazilian domestic affiliate links from Dumpling Squishy into this catalog.
const checkedAt = "2026-09-29";

export const products: Product[] = [
  {
    slug: "glitter-dumpling-mystery-box",
    translations: {
      en: { title: "Glitter dumpling mystery box", description: "A colorful dumpling squishy presented as a surprise item with a glitter finish." },
      pt: { title: "Caixa surpresa dumpling com glitter", description: "Dumpling squishy colorido em formato surpresa e acabamento com glitter." },
      es: { title: "Caja sorpresa dumpling con purpurina", description: "Squishy dumpling colorido en formato sorpresa y acabado con purpurina." },
      da: { title: "Glitter dumpling overraskelsesæske", description: "En farverig dumpling squishy som overraskelsesprodukt med glitterfinish." },
      sv: { title: "Glittrig dumpling överraskningsbox", description: "En färgglad dumpling squishy som överraskningsprodukt med glitterfinish." },
    },
    seller: "Rio Life Shop",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/7faCBPDe3L",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-824i6-mphwb6gyh8nh8c.webp"],
  },
  {
    slug: "four-glitter-dumpling-squishies",
    translations: {
      en: { title: "Set of four glitter dumpling squishies", description: "A four-piece set of colorful dumpling squishies with glitter details." },
      pt: { title: "Kit com quatro dumpling squishies com glitter", description: "Conjunto com quatro dumpling squishies coloridos e detalhes com glitter." },
      es: { title: "Set de cuatro dumpling squishies con purpurina", description: "Conjunto de cuatro dumpling squishies coloridos con detalles de purpurina." },
      da: { title: "Sæt med fire glitter dumpling squishies", description: "Et sæt med fire farverige dumpling squishies med glitterdetaljer." },
      sv: { title: "Set med fyra glittriga dumpling squishies", description: "Ett set med fyra färgglada dumpling squishies med glitterdetaljer." },
    },
    seller: "Rio Life Shop",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/5VVhbQLtRw",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-824j8-mphwnj3ds35u65.webp"],
  },
  {
    slug: "giant-glitter-dumpling-squishy",
    translations: {
      en: { title: "Giant glitter dumpling squishy", description: "A larger dumpling squishy in a mystery-box style with a glitter finish." },
      pt: { title: "Dumpling squishy gigante com glitter", description: "Dumpling squishy em tamanho maior, estilo caixa surpresa e acabamento com glitter." },
      es: { title: "Dumpling squishy gigante con purpurina", description: "Dumpling squishy de mayor tamaño, estilo caja sorpresa y acabado con purpurina." },
      da: { title: "Stor glitter dumpling squishy", description: "En større dumpling squishy i overraskelsesæske-stil med glitterfinish." },
      sv: { title: "Stor glittrig dumpling squishy", description: "En större dumpling squishy i överraskningsbox-stil med glitterfinish." },
    },
    seller: "fnythketdhf3.br",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/5LCHP7MWmv",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-8259x-msnlh4dsopoo29.webp"],
  },
  {
    slug: "two-glitter-dumpling-squishies",
    translations: {
      en: { title: "Two glitter dumpling squishies", description: "A two-piece dumpling squishy set with glitter and mystery-box presentation." },
      pt: { title: "Kit com dois dumpling squishies com glitter", description: "Conjunto com dois dumpling squishies, glitter e apresentação em caixa surpresa." },
      es: { title: "Set de dos dumpling squishies con purpurina", description: "Conjunto de dos dumpling squishies con purpurina y presentación de caja sorpresa." },
      da: { title: "Sæt med to glitter dumpling squishies", description: "Et sæt med to dumpling squishies med glitter og overraskelsesæske." },
      sv: { title: "Set med två glittriga dumpling squishies", description: "Ett set med två dumpling squishies med glitter och överraskningsbox." },
    },
    seller: "Ba xi 2",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/5q8Y02Kcm2",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-822yb-mofin4h8pfrg38.webp"],
  },
  {
    slug: "dumpling-squishy-glitter-set",
    translations: {
      en: { title: "Dumpling squishy glitter set", description: "A mixed set of dumpling squishies with several colors and glitter finishes." },
      pt: { title: "Conjunto de dumpling squishies com glitter", description: "Conjunto variado de dumpling squishies em várias cores e acabamentos com glitter." },
      es: { title: "Conjunto de dumpling squishies con purpurina", description: "Conjunto variado de dumpling squishies en varios colores y acabados con purpurina." },
      da: { title: "Dumpling squishy sæt med glitter", description: "Et blandet sæt dumpling squishies i flere farver og glitterfinish." },
      sv: { title: "Dumpling squishy set med glitter", description: "Ett blandat set dumpling squishies i flera färger och glitterfinish." },
    },
    seller: "tcxjjnsm3.br",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/5fp7njLG71",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-82598-msxyfxrrcikp89.webp"],
  },
  {
    slug: "soft-glitter-dumpling-steamer",
    translations: {
      en: { title: "Soft glitter dumpling in steamer box", description: "A colorful glitter dumpling squishy supplied in a steamer-shaped box; color may vary." },
      pt: { title: "Dumpling macio com glitter e cestinha", description: "Dumpling squishy colorido com glitter em caixa tipo cestinha; a cor pode variar." },
      es: { title: "Dumpling suave con purpurina y cestita", description: "Dumpling squishy colorido con purpurina en caja tipo vaporera; el color puede variar." },
      da: { title: "Blød glitter dumpling i dampkurv", description: "En farverig glitter dumpling squishy i en dampkurvformet æske; farven kan variere." },
      sv: { title: "Mjuk glittrig dumpling i ångkorg", description: "En färgglad glittrig dumpling squishy i en ångkorgsformad box; färgen kan variera." },
    },
    seller: "tjxjlysm2.br",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.com.br/6AlOOeJM68",
    shippingVerification: { scope: "international", source: "shopee-affiliate-catalog", checkedAt },
    images: ["https://down-bs-br.img.susercontent.com/sg-11134201-82597-msjid7qb3w1ud9.webp"],
  },
];

export function isEligible(product: Product): boolean {
  if (!/^https:\/\//.test(product.affiliateUrl)) return false;
  if (product.shippingVerification.scope !== "international") return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(product.shippingVerification.checkedAt)) return false;
  if (product.images.length === 0) return false;
  const verified = new Date(`${product.shippingVerification.checkedAt}T00:00:00Z`).getTime();
  return Number.isFinite(verified) && verified <= Date.now() && Date.now() - verified <= 45 * 86400000;
}

export function publishedProducts(): Product[] {
  return products.filter(isEligible);
}

export function getPublishedProduct(slug: string): Product | undefined {
  return publishedProducts().find((product) => product.slug === slug);
}
