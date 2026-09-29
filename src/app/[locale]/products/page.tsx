import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedProducts } from "@/lib/catalog";
import { copy, isLocale, localeTags, locales } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: copy[locale].catalogTitle, description: copy[locale].catalogIntro, alternates: { canonical: `/${locale}/products`, languages: Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}/products`])) } };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const products = publishedProducts();
  return <div className="wrap catalog-page"><p className="section-kicker">SQUISHY VIBE</p><h1>{t.catalogTitle}</h1><p className="page-intro">{t.catalogIntro}</p>
    {products.length ? <div className="product-grid">{products.map((product) => <Link className="product-card" key={product.slug} href={`/${locale}/products/${product.slug}`}><div className="product-card-image"><Image src={product.images[0]} alt={product.translations[locale].title} width={560} height={560} /></div><h2>{product.translations[locale].title}</h2><p>{product.translations[locale].description}</p></Link>)}</div> : <div className="empty-state"><span aria-hidden="true">✦</span><h2>{t.catalogEmpty}</h2><p>{t.catalogEmptyText}</p></div>}
  </div>;
}
