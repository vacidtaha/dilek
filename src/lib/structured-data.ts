import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/tr";
import { contact } from "@/lib/contact";
import { siteName, siteUrl } from "@/lib/site";

/**
 * Arama motorlarına işletmeyi tanıtan yapılandırılmış veri (schema.org).
 * Yalnızca sitede zaten yer alan bilgiler yazılır; açık adres ve çalışma saatleri teyit edilince eklenebilir.
 */
export function buildStructuredData(locale: Locale, dictionary: Dictionary) {
  const [latitude, longitude] = contact.coordinates.split(",").map(Number);
  const businessId = `${siteUrl}/#business`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        publisher: { "@id": businessId },
      },
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: siteName,
        description: dictionary.metadata.description,
        url: `${siteUrl}/${locale}`,
        logo: `${siteUrl}/dileklogo.svg`,
        image: `${siteUrl}/og.png`,
        telephone: contact.phoneHref.replace("tel:", ""),
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: contact.city,
          addressCountry: contact.countryCode,
        },
        geo: { "@type": "GeoCoordinates", latitude, longitude },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dictionary.services.title,
          itemListElement: dictionary.services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.description },
          })),
        },
      },
    ],
  };
}
