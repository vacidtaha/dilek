import Link from "next/link";
import { DirectionsIcon } from "@/components/icons";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

export async function Footer() {
  const locale = await getLocale();
  const { footer } = await getDictionary();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
        <div>
          <p className="text-[1.375rem] font-semibold md:text-[1.75rem]">Dilek Kardeşler</p>
          <p className="mt-1 text-[1.0625rem] text-white/70 md:text-lg">{footer.tagline}</p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold md:text-xl">{footer.contactTitle}</h2>
            <dl className="mt-3 space-y-2">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-white/60">{footer.phoneLabel}</dt>
                <dd>
                  <a href={contact.phoneHref} className="font-medium hover:text-sky-300">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-white/60">{footer.emailLabel}</dt>
                <dd>
                  <a href={contact.emailHref} className="font-medium hover:text-sky-300">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <nav className="mt-8 flex flex-col items-start gap-3 text-white/80">
            <Link href={`/${locale}#hizmetler`} className="hover:text-white">
              {footer.services}
            </Link>
            <Link href={`/${locale}#isler`} className="hover:text-white">
              {footer.projects}
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="text-lg font-semibold md:text-xl">{footer.locationTitle}</h2>
          <div className="mt-3 h-48 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15">
            <iframe
              src={`https://maps.google.com/maps?q=${contact.coordinates}&ll=${contact.coordinates}&t=m&z=14&hl=${locale}&output=embed`}
              title={footer.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full border-0"
            />
          </div>
          <a
            href={contact.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            <DirectionsIcon className="size-[0.9375rem]" />
            {footer.directions}
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/60 md:px-12">{footer.rights}</p>
        <p hidden>Designed by Haktan KÖKSAL</p>
      </div>
    </footer>
  );
}
