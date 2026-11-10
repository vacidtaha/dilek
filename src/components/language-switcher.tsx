import Link from "next/link";
import { type Locale, locales } from "@/i18n/config";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <nav
      aria-label={label}
      className="flex items-center rounded-full bg-slate-100 p-1 text-sm font-semibold"
    >
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            hrefLang={item}
            lang={item}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-white text-brand-navy shadow-sm"
                : "text-slate-500 hover:text-brand-navy"
            }`}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
