import {
  CableDuctIcon,
  KerbIcon,
  LandscapeIcon,
  PaversIcon,
  PhoneIcon,
  TruckIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/i18n/get-dictionary";
import { contact } from "@/lib/contact";

/** Sıra, sözlükteki `services.items` ile eşleşir. */
const icons = [PaversIcon, KerbIcon, TruckIcon, CableDuctIcon, LandscapeIcon];

export async function Services() {
  const { services } = await getDictionary();

  return (
    <section id="hizmetler" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <SectionHeading title={services.title} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map(({ title, description }, index) => {
            const Icon = icons[index];
            return (
              <li
                key={title}
                className="reveal rounded-2xl bg-white p-8 ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
              >
                <Icon className="size-12 text-brand-navy" />
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{description}</p>
              </li>
            );
          })}
          <li className="reveal flex flex-col justify-between rounded-2xl bg-brand-navy p-8 text-white">
            <div>
              <h3 className="text-xl font-semibold">{services.quote.title}</h3>
              <p className="mt-2 text-white/70">{services.quote.description}</p>
            </div>
            <a
              href={contact.phoneHref}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-300 transition-colors hover:text-white"
            >
              <PhoneIcon className="size-[1.125rem]" />
              {contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
