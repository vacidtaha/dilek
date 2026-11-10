import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary();
  return { title: dictionary.notFound.metaTitle };
}

/** Sitede karşılığı olmayan her adres, sitenin kendi "bulunamadı" sayfasını (not-found.tsx) gösterir. */
export default function UnknownPage() {
  notFound();
}
