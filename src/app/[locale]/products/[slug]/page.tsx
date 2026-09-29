import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getPublishedProduct, publishedProducts } from "@/lib/catalog";
import { ProductMedia } from "@/components/product-media";
import { copy, isLocale, localeTags, locales } from "@/lib/i18n";

export function generateStaticParams() { return locales.flatMap((locale) => publishedProducts().map((product) => ({ locale, slug: product.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getPublishedProduct(slug);
  if (!product) return {};
  return { title: product.translations[locale].title, description: product.translations[locale].description, alternates: { canonical: `/${locale}/products/${slug}`, languages: Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}/products/${slug}`])) }, openGraph: { images: product.images.slice(0, 1) } };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = getPublishedProduct(slug);
  if (!product) notFound();
  const t = copy[locale];
  return <div className="wrap pdp"><Link className="back-link" href={`/${locale}/products`}><ArrowLeft size={18}/>{t.back}</Link><div className="pdp-grid"><ProductMedia product={product} label={t.images} title={product.translations[locale].title}/><div><p className="section-kicker">{product.seller}</p><h1>{product.translations[locale].title}</h1><p className="page-intro">{product.translations[locale].description}</p><div className="shipping-note"><h2>{t.shippingTitle}</h2><p>{t.shippingCheck}</p></div><a className="button button-primary full-button" href={`/go/${slug}`} rel="sponsored nofollow" target="_blank">{t.viewOffer}<ExternalLink size={18}/></a><p className="fine-print">{t.affiliateNote}</p></div></div></div>;
}
