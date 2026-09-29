import Link from "next/link";
import { copy, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <footer className="site-footer"><div className="wrap footer-inner">
    <div><Link className="wordmark" href={`/${locale}`}>squishy<span>vibe</span></Link><p>© {new Date().getFullYear()} squishyvibe.com</p></div>
    <p>{t.affiliateNote}</p>
  </div></footer>;
}
