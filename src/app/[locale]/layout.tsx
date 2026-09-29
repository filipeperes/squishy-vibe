import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { copy, isLocale, localeTags, locales } from "@/lib/i18n";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://squishyvibe.com";

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "Squishy Vibe | Discover squishy toys", template: "%s | Squishy Vibe" },
    description: copy[locale].aboutText,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}`])),
    },
    openGraph: { title: "Squishy Vibe", description: copy[locale].aboutText, siteName: "Squishy Vibe", url: `${siteUrl}/${locale}`, locale: localeTags[locale], type: "website" },
    icons: { icon: "/favicon.svg" },
    robots: { index: false, follow: true }, // Remove after verified offers are published.
  };
}

export const viewport: Viewport = { themeColor: "#7153e8", width: "device-width", initialScale: 1 };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <html lang={localeTags[locale]}><body>
    <a className="skip-link" href="#content">Skip to content</a>
    <SiteHeader locale={locale} />
    <main id="content">{children}</main>
    <SiteFooter locale={locale} />
    <AnalyticsConsent locale={locale} />
  </body></html>;
}
