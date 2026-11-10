/**
 * Sitenin yayındaki adresi. Canonical, hreflang, sitemap, robots.txt, paylaşım görseli ve
 * yapılandırılmış veri bu adrese göre üretilir.
 *
 * Site başka bir adreste yayınlanacaksa (örn. www ile başlayan adres) yayın ortamında
 * SITE_URL değişkeni tanımlanır; tanımlı değilse aşağıdaki alan adı kullanılır.
 */
export const siteUrl = (process.env.SITE_URL ?? "https://dilekkardeslerbeton.com").replace(
  /\/+$/,
  "",
);

export const siteName = "Dilek Kardeşler";
