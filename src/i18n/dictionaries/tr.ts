import { contact } from "@/lib/contact";

export const tr = {
  // Arama sonuçlarında görünen başlık ve açıklama. Uzarsa kesilir: başlık 60, açıklama 160 karakter dolayında kalmalı.
  metadata: {
    title: "Sivas Parke Taşı Ve Kaldırım Taşı Üretimi | Dilek Kardeşler",
    description: `Sivas'ta parke taşı, kaldırım taşı ve hızlı tren kablo kanal betonu üretimi; karayolu lojistiği ve çevre düzenlemesi. Teklif için arayın: ${contact.phone}.`,
    shareImageAlt: "Dilek Kardeşler Beton Yapı Elemanları logosu",
  },
  notFound: {
    metaTitle: "Sayfa Bulunamadı",
    title: "Aradığınız Sayfa Bulunamadı",
    description:
      "Adres yanlış yazılmış ya da sayfa kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.",
    home: "Ana Sayfaya Dön",
  },
  languageSwitcher: "Dil seçimi",
  nav: {
    services: "Hizmetlerimiz",
    projects: "İşlerimiz",
    contact: "İletişim",
    call: "Bizi Arayın",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
  },
  hero: {
    title: "Parke Taşından Hızlı Tren Hattına Beton Çözümler",
    description:
      "Sivas'taki fabrikamızla parke ve kaldırım taşı üretiminden hızlı tren kablo kanallarına, karayolu lojistiğinden çevre düzenlemesine kadar projelerinizin yanındayız.",
    call: "Bizi Arayın",
    services: "Hizmetlerimiz",
  },
  services: {
    title: "Hizmetlerimiz",
    items: [
      {
        title: "Parke Taşı Üretimi",
        description:
          "Yaya yolları, otoparklar ve meydanlar için dayanıklı beton parke taşları üretiyoruz.",
      },
      {
        title: "Kaldırım Taşı Üretimi",
        description: "Kaldırım ve yol kenarı uygulamalarına uygun beton kaldırım taşları üretiyoruz.",
      },
      {
        title: "Karayolu Lojistiği Hizmetleri",
        description: "Ürünlerinizi karayoluyla şantiyenize zamanında ve güvenle ulaştırıyoruz.",
      },
      {
        title: "Hızlı Tren Kablo Kanal Betonu Ve Kapağı Üretimi",
        description: "Hızlı tren hatları için beton kablo kanallarını ve kapaklarını üretiyoruz.",
      },
      {
        title: "Çevre Düzenlemesi Hizmeti",
        description:
          "Parke ve kaldırım uygulamalarıyla çevre düzenlemesi projelerini hayata geçiriyoruz.",
      },
    ],
    quote: {
      title: "Projeniz İçin Teklif Alın",
      description: "İhtiyacınızı anlatın, size en uygun çözümü birlikte belirleyelim.",
    },
  },
  factory: {
    title: "Fabrikamızın Üretim Hattından Görüntüler",
    description:
      "Ürünlerimizi Sivas'taki kendi fabrikamızda üretiyoruz. Bu kısa görüntülerde parke taşlarımızın üretim hattındaki yolculuğunu izleyebilirsiniz.",
    videos: [
      "Parke taşı üretim hattından görüntü, birinci video",
      "Parke taşı üretim hattından görüntü, ikinci video",
    ],
  },
  projects: {
    title: "Yaptığımız İşler",
    featured: {
      badge: "Öne Çıkan Proje",
      title: "Malatya Adıyaman Arası Hızlı Tren Hattı",
      description: "Beton Kablo Kanal Hattı Üretimi",
    },
    gallery: {
      title: "Fotoğraflarla İşlerimiz",
      photoCount: "Fotoğraf",
      close: "Kapat",
      previous: "Önceki fotoğraf",
      next: "Sonraki fotoğraf",
      // `id` değerleri src/lib/project-photos.ts içindeki anahtarlarla eşleşir.
      items: [
        {
          id: "lefax",
          name: "Le Faxx Jeans",
          alts: [
            "Le Faxx Jeans binasının önündeki parke taşı döşeli alan ve yeşil alan",
            "Bina boyunca uzanan parke taşı döşeli yol ve otopark",
            "Parke taşı döşeli saha yolu ve yükleme alanı",
            "Bina kenarında bordürlerle çevrili parke taşı zemin",
          ],
        },
        {
          id: "seripol",
          name: "Seripol",
          alts: [
            "Seripol binasının önündeki altıgen parke taşı döşeli alan",
            "Depo sahasında parke taşı döşeli zemin ve istiflenmiş ürünler",
            "Fabrika avlusunda altıgen parke taşı döşeli geniş saha",
            "Seripol tabelasının bulunduğu parke taşı döşeli fabrika sahası",
            "Bina ile bahçe duvarı arasındaki altıgen parke taşı döşeli yol",
            "Seripol tır girişindeki parke taşı döşeli yol",
          ],
        },
        {
          id: "ofisline",
          name: "Ofisline",
          alts: [
            "Ofisline fabrika satış merkezinin önündeki parke taşı döşeli otopark",
            "Ofisline tabelalı binanın yanındaki parke taşı döşeli yol",
            "Bina önündeki parke taşı döşeli geniş saha",
            "Ofisline binası boyunca uzanan parke taşı döşeli yol",
            "Bina ile bahçe duvarı arasındaki parke taşı döşeli servis yolu",
            "Ofisline binasının yanındaki parke taşı döşeli yol ve yeşil alan",
          ],
        },
      ],
    },
    institutionsStat: "Kamu Kurumu Ve Belediye",
    housingStat: "TOKİ Konut Projesi",
    institutionsTitle: "Belediyeler Ve Kamu Kurumları",
    institutions: [
      "Kangal Belediyesi",
      "Deliilyas Belediyesi",
      "Altınyayla Belediyesi",
      "Hafik Belediyesi",
      "Yıldız Belediyesi",
      "Zara Belediyesi",
      "Doğanşar Belediyesi",
      "Doğanşar Kaymakamlığı",
    ],
    villagesNote: "Aynı Zamanda Bu İlçelerin Birçok Köyüne Verilen Hizmetler",
    housingTitle: "TOKİ Konut Projeleri",
    housing: [
      "Erzurum Merkez TOKİ Konutları",
      "Sivas Merkez TOKİ Konutlarının Çevre Düzenleme Hizmeti",
    ],
  },
  faq: {
    title: "Sıkça Sorulan Sorular",
    items: [
      {
        question: "Hangi ürünleri üretiyorsunuz?",
        answer:
          "Parke taşı, kaldırım taşı ve hızlı tren hatları için beton kablo kanalı ile kapağı üretiyoruz.",
      },
      {
        question: "Ürünleri şantiyeye teslim ediyor musunuz?",
        answer:
          "Evet. Karayolu lojistiği hizmetimizle ürünlerinizi şantiyenize ulaştırıyoruz. Teslimat planı için bizimle iletişime geçebilirsiniz.",
      },
      {
        question: "Çevre düzenlemesi işlerini de üstleniyor musunuz?",
        answer:
          "Evet. Üretimin yanı sıra çevre düzenlemesi hizmeti de veriyoruz; Sivas Merkez TOKİ Konutlarının çevre düzenlemesi bu işlerimizden biri.",
      },
      {
        question: "Daha önce hangi projelerde çalıştınız?",
        answer:
          "Malatya–Adıyaman hızlı tren hattının beton kablo kanallarını ürettik. Bunun yanında Sivas'ın birçok ilçe belediyesine, Doğanşar Kaymakamlığı'na ve TOKİ konut projelerine hizmet verdik.",
      },
      {
        question: "Nasıl fiyat teklifi alabilirim?",
        answer:
          "Bizi telefonla arayabilir, WhatsApp'tan yazabilir ya da e-posta gönderebilirsiniz. İhtiyacınız olan ürünü, yaklaşık miktarı ve teslim yerini iletirseniz size özel teklif hazırlarız.",
      },
    ],
  },
  contact: {
    title: "Projeniz İçin Bize Ulaşın",
    description:
      "Ürünlerimiz ve hizmetlerimiz hakkında bilgi almak için bizi arayabilir, WhatsApp'tan yazabilir ya da e-posta gönderebilirsiniz.",
    whatsapp: "WhatsApp'tan Yazın",
    email: "E-posta Gönderin",
  },
  footer: {
    tagline: "Beton Yapı Elemanları",
    contactTitle: "İletişim",
    phoneLabel: "Telefon:",
    emailLabel: "E-posta:",
    locationTitle: "Konum",
    mapTitle: "Dilek Kardeşler konumu, Google Haritalar",
    directions: "Yol Tarifi Al",
    services: "Hizmetlerimiz",
    projects: "Yaptığımız İşler",
    rights: "© Dilek Kardeşler. Tüm hakları saklıdır.",
  },
};

export type Dictionary = typeof tr;
