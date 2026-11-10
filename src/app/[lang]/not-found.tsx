import Link from "next/link";
import { PaverPattern } from "@/components/paver-pattern";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export default async function NotFound() {
  const locale = await getLocale();
  const { notFound } = await getDictionary();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-navy px-8 py-14 text-white md:px-16 md:py-20">
          <PaverPattern className="absolute inset-0 -z-10 size-full text-white/10 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <p className="text-lg font-semibold text-sky-300">404</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {notFound.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{notFound.description}</p>
          <Link
            href={`/${locale}`}
            className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-sky-100"
          >
            {notFound.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
