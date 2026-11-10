import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { locales } from "@/i18n/config";
import { getLocale } from "@/i18n/get-dictionary";
import { siteName, siteUrl } from "@/lib/site";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Sayfaya özel etiketler (başlık, açıklama, canonical, paylaşım önizlemesi) page.tsx içinde tanımlı.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await getLocale()}
      data-scroll-behavior="smooth"
      className="scroll-pt-16 motion-safe:scroll-smooth lg:scroll-pt-20"
    >
      {/* Header sabit konumlu olduğu için üst boşluk, header'ın açık halindeki yüksekliğine eşit. */}
      <body className="pt-20 lg:pt-32">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
