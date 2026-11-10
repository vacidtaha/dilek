import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import { en } from "./dictionaries/en";
import { type Dictionary, tr } from "./dictionaries/tr";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export async function getLocale() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary() {
  return dictionaries[await getLocale()];
}
