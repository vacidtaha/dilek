import { EnvelopeIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { PaverPattern } from "@/components/paver-pattern";
import { getDictionary } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

export async function ContactCta() {
  const dict = await getDictionary();

  return (
    <section id="iletisim" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal relative isolate overflow-hidden rounded-3xl bg-brand-navy px-8 py-14 text-white md:px-16 md:py-20">
          <PaverPattern className="absolute inset-0 -z-10 size-full text-white/10 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/75">{dict.contact.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-navy transition-colors hover:bg-sky-100"
            >
              <PhoneIcon className="size-[1.125rem]" />
              {contact.phone}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="size-[1.125rem]" />
              {dict.contact.whatsapp}
            </a>
            <a
              href={contact.emailHref}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              <EnvelopeIcon className="size-[1.125rem]" />
              {dict.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
