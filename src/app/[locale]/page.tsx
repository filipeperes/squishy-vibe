import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Globe2, SearchCheck, Sparkles } from "lucide-react";
import { publishedProducts } from "@/lib/catalog";
import { copy, isLocale, localeTags, locales } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: `Squishy Vibe | ${copy[locale].catalogTitle}`, alternates: { canonical: `/${locale}`, languages: Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}`])) } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const featured = publishedProducts().slice(0, 3);
  return <>
    <section className="hero">
      <div className="hero-sparkles" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span><span>✦</span></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> {t.eyebrow}</span>
          <h1>{t.heroTitle} <em>{t.heroAccent}</em></h1>
          <p>{t.heroText}</p>
          <div className="hero-actions"><Link className="button button-primary" href={`/${locale}/products`}>{t.explore} <ArrowRight size={19} /></Link><Link className="button button-quiet" href={`/${locale}#about`}>{t.howItWorks}</Link></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orb orb-back"/><div className="orb orb-main"><div className="orb-shine"/><div className="eyes"><i/><i/></div><div className="smile"/></div><div className="orb orb-small"/><div className="art-label">squishy <strong>vibe</strong> ✦</div></div>
      </div>
    </section>
    <section className="wrap steps" aria-label={t.howItWorks}>
      <article><Sparkles /><h2>{t.focusOne}</h2><p>{t.focusOneText}</p></article>
      <article><SearchCheck /><h2>{t.focusTwo}</h2><p>{t.focusTwoText}</p></article>
      <article><Globe2 /><h2>{t.focusThree}</h2><p>{t.focusThreeText}</p></article>
    </section>
    <section className="wrap section-space">
      <div className="section-heading"><div><p className="section-kicker">SQUISHY VIBE</p><h2>{t.catalogTitle}</h2><p>{t.catalogIntro}</p></div><Link href={`/${locale}/products`} className="text-link">{t.explore} <ArrowRight size={18}/></Link></div>
      {featured.length ? <div className="product-grid">{featured.map((product) => <Link className="product-card" key={product.slug} href={`/${locale}/products/${product.slug}`}><div className="product-card-image">{product.images[0] ? <Image src={product.images[0]} alt={product.translations[locale].title} width={560} height={560} /> : null}</div><h3>{product.translations[locale].title}</h3><p>{product.translations[locale].description}</p></Link>)}</div> : <div className="empty-state"><span aria-hidden="true">✦</span><h3>{t.catalogEmpty}</h3><p>{t.catalogEmptyText}</p></div>}
    </section>
    <section id="about" className="about-band"><div className="wrap about-grid"><div><p className="section-kicker">SQUISHY VIBE</p><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p></div><div className="shipping-note"><Globe2 size={30}/><h3>{t.shippingTitle}</h3><p>{t.shippingText}</p></div></div></section>
  </>;
}
