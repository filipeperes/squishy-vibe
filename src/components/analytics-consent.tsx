"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Consent = "granted" | "denied" | null;

const labels: Record<Locale, { text: string; accept: string; reject: string }> = {
  en: { text: "We use Google Analytics to understand site usage. Analytics only starts after you accept.", accept: "Accept analytics", reject: "Reject" },
  pt: { text: "Usamos o Google Analytics para entender o uso do site. A medição só começa após sua autorização.", accept: "Aceitar analytics", reject: "Recusar" },
  es: { text: "Usamos Google Analytics para entender el uso del sitio. La medición solo comienza si aceptas.", accept: "Aceptar analytics", reject: "Rechazar" },
  da: { text: "Vi bruger Google Analytics til at forstå brugen af siden. Målingen starter kun, hvis du accepterer.", accept: "Acceptér analytics", reject: "Afvis" },
  sv: { text: "Vi använder Google Analytics för att förstå hur webbplatsen används. Mätningen startar bara om du godkänner.", accept: "Godkänn analytics", reject: "Avvisa" },
};

const storageKey = "squishy-vibe-analytics-consent";

export function AnalyticsConsent({ locale }: { locale: Locale }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    queueMicrotask(() => {
      setConsent(saved === "granted" || saved === "denied" ? saved : null);
      setReady(true);
    });
  }, []);

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
  }

  return <>
    {measurementId && consent === "granted" ? <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { anonymize_ip: true });
      `}</Script>
    </> : null}
    {ready && consent === null ? <aside className="consent-banner" aria-label="Analytics consent">
      <p>{labels[locale].text}</p>
      <div>
        <button type="button" className="consent-reject" onClick={() => choose("denied")}>{labels[locale].reject}</button>
        <button type="button" className="consent-accept" onClick={() => choose("granted")}>{labels[locale].accept}</button>
      </div>
    </aside> : null}
  </>;
}
