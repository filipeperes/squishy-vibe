import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { copy, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <header className="site-header">
    <div className="wrap header-inner">
      <Link className="wordmark" href={`/${locale}`} aria-label="Squishy Vibe home"><span className="brand-dot">✦</span> squishy<span>vibe</span></Link>
      <nav aria-label="Main navigation" className="header-nav">
        <Link href={`/${locale}/products`}>{t.navProducts}</Link>
        <Link href={`/${locale}#about`}>{t.navAbout}</Link>
      </nav>
      <LanguageSwitcher locale={locale} label={t.language} />
    </div>
  </header>;
}
