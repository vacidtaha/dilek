import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/i18n/config";
import { projectPhotos } from "@/lib/project-photos";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}`])),
    "x-default": `${siteUrl}/${defaultLocale}`,
  };
  // Büyütülünce açılan fotoğraflar dahil hepsi listelenir; görsel aramada bulunabilsinler.
  const images = Object.values(projectPhotos)
    .flat()
    .map((photo) => `${siteUrl}${photo.src}`);

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages },
    images,
  }));
}
