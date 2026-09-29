"use client";

import { usePathname, useRouter } from "next/navigation";
import { isLocale, localeNames, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <label className="language-control">
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        aria-label={label}
        onChange={(event) => {
          const next = event.target.value;
          if (!isLocale(next)) return;
          const segments = pathname.split("/");
          segments[1] = next;
          router.push(segments.join("/") || `/${next}`);
        }}
      >
        {locales.map((entry) => <option key={entry} value={entry}>{localeNames[entry]}</option>)}
      </select>
    </label>
  );
}
