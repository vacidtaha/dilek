import Image from "next/image";
import Link from "next/link";
import { HeaderShell } from "@/components/header-shell";
import { PhoneIcon } from "@/components/icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

export async function Header() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const links = [
    { href: `/${locale}#hizmetler`, label: dict.nav.services },
    { href: `/${locale}#isler`, label: dict.nav.projects },
    { href: `/${locale}#iletisim`, label: dict.nav.contact },
  ];

  return (
    <HeaderShell>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6 transition-[height] duration-300 group-data-scrolled:h-16 md:px-12 lg:grid lg:h-32 lg:grid-cols-[1fr_auto_1fr] lg:group-data-scrolled:h-20">
        <Link href={`/${locale}#top`} className="shrink-0 justify-self-start">
          <Image
            src="/dileklogo.svg"
            alt="Dilek Kardeşler"
            width={340}
            height={200}
            loading="eager"
            className="h-16 w-auto transition-[height] duration-300 group-data-scrolled:h-12 lg:h-24 lg:group-data-scrolled:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          <LanguageSwitcher locale={locale} label={dict.languageSwitcher} />
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-navy/20 transition-[background-color,box-shadow,translate] hover:-translate-y-px hover:bg-brand-blue-deep hover:shadow-lg hover:shadow-brand-blue-deep/25"
          >
            <PhoneIcon className="size-[0.9375rem]" />
            {dict.nav.call}
          </a>
        </div>

        <div className="flex items-center gap-1 justify-self-end lg:hidden">
          <a
            href={contact.phoneHref}
            aria-label={dict.nav.call}
            className="grid size-10 place-items-center rounded-full bg-brand-navy text-white transition-colors hover:bg-brand-blue-deep"
          >
            <PhoneIcon className="size-[0.9375rem]" />
          </a>
          <MobileMenu
            links={links}
            openLabel={dict.nav.openMenu}
            closeLabel={dict.nav.closeMenu}
          >
            <LanguageSwitcher locale={locale} label={dict.languageSwitcher} />
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-deep"
            >
              <PhoneIcon className="size-[0.9375rem]" />
              {dict.nav.call}
            </a>
          </MobileMenu>
        </div>
      </div>
    </HeaderShell>
  );
}
