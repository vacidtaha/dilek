import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { Factory } from "@/components/factory";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { defaultLocale, locales, openGraphLocales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { siteName } from "@/lib/site";
import { buildStructuredData } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { metadata } = await getDictionary();
  const path = `/${locale}`;

  return {
    title: { absolute: metadata.title },
    description: metadata.description,
    alternates: {
      canonical: path,
      // Her dil sürümü diğerini gösterir; dili eşleşmeyen ziyaretçi için varsayılan sürüm Türkçe.
      languages: {
        ...Object.fromEntries(locales.map((item) => [item, `/${item}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName,
      title: metadata.title,
      description: metadata.description,
      locale: openGraphLocales[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => openGraphLocales[item]),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: metadata.shareImageAlt }],
    },
    twitter: { card: "summary_large_image" },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export default async function Home() {
  const structuredData = buildStructuredData(await getLocale(), await getDictionary());

  return (
    <main>
      <script
        type="application/ld+json"
        // "<" kaçışı, metinlerin içinden etiket kapatılmasını önler.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Services />
      <Factory />
      <Projects />
      <Faq />
      <ContactCta />
    </main>
  );
}
