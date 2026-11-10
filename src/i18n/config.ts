export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

/** Paylaşım önizlemelerinde (Open Graph) kullanılan dil kodları. */
export const openGraphLocales: Record<Locale, string> = { tr: "tr_TR", en: "en_US" };
