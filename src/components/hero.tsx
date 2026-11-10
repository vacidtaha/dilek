import Link from "next/link";
import { ChevronRightIcon, PhoneIcon } from "@/components/icons";
import { PaverPattern } from "@/components/paver-pattern";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

export async function Hero() {
  const locale = await getLocale();
  const { hero } = await getDictionary();

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <PaverPattern className="absolute inset-0 -z-10 size-full text-white/10 [mask-image:linear-gradient(to_left,black,transparent_80%)]" />
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-32">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl">{hero.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-sky-100"
          >
            <PhoneIcon className="size-[1.125rem]" />
            {hero.call}
          </a>
          <Link
            href={`/${locale}#hizmetler`}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            {hero.services}
            <ChevronRightIcon className="-mr-1.5 size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
