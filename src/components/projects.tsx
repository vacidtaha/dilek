import { HousingIcon, InstitutionIcon, TrainIcon } from "@/components/icons";
import { PaverPattern } from "@/components/paver-pattern";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/i18n/get-dictionary";
import { projectPhotos } from "@/lib/project-photos";

export async function Projects() {
  const { projects } = await getDictionary();
  const { gallery } = projects;
  const stats = [
    { value: projects.institutions.length, label: projects.institutionsStat },
    { value: projects.housing.length, label: projects.housingStat },
  ];

  return (
    <section id="isler" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-28">
        <SectionHeading title={projects.title} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="reveal relative isolate flex flex-col items-start justify-between gap-12 overflow-hidden rounded-3xl bg-brand-navy p-8 text-white md:p-12 lg:col-span-2">
            <PaverPattern className="absolute inset-0 -z-10 size-full text-white/10 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-sky-300">
              <TrainIcon className="size-4" />
              {projects.featured.badge}
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
                {projects.featured.title}
              </h3>
              <p className="mt-3 text-lg text-white/75">{projects.featured.description}</p>
            </div>
          </article>

          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="reveal flex flex-col-reverse justify-center rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200"
              >
                <dt className="mt-1 text-slate-600">{stat.label}</dt>
                <dd className="text-5xl font-semibold tracking-tight text-brand-navy">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16">
          <h3 className="reveal text-[1.375rem] font-bold text-slate-900 md:text-[1.75rem]">
            {gallery.title}
          </h3>
          <div className="mt-6 grid gap-x-6 gap-y-10 lg:grid-cols-2">
            {gallery.items.map((item, itemIndex) => {
              const photos = (projectPhotos[item.id] ?? []).map((photo, index) => ({
                ...photo,
                alt: item.alts[index] ?? item.name,
              }));
              // İş sayısı tekse ilk iş tam genişlikte durur, kalanlar ikişerli dizilir.
              const wide = gallery.items.length % 2 === 1 && itemIndex === 0;

              return (
                <article key={item.id} className={`reveal ${wide ? "lg:col-span-2" : ""}`}>
                  <h4 className="mb-4 text-xl font-bold text-brand-navy md:text-2xl">{item.name}</h4>
                  <ProjectGallery
                    name={item.name}
                    photos={photos}
                    wide={wide}
                    labels={{
                      photoCount: gallery.photoCount,
                      close: gallery.close,
                      previous: gallery.previous,
                      next: gallery.next,
                    }}
                  />
                </article>
              );
            })}
          </div>
        </div>

        <div className="reveal mt-16">
          <h3 className="text-[1.375rem] font-bold text-slate-900 md:text-[1.75rem]">
            {projects.institutionsTitle}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.institutions.map((name) => (
              <li key={name} className="flex items-center gap-2.5 rounded-xl px-3.5 py-4 ring-1 ring-slate-200">
                <InstitutionIcon className="size-5 shrink-0 text-brand-blue" />
                <span className="text-[1.0625rem] font-semibold text-slate-800">{name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.9375rem] font-medium text-slate-500">{projects.villagesNote}</p>
        </div>

        <div className="reveal mt-12">
          <h3 className="text-[1.375rem] font-bold text-slate-900 md:text-[1.75rem]">
            {projects.housingTitle}
          </h3>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {projects.housing.map((name) => (
              <li key={name} className="flex items-center gap-2.5 rounded-xl px-3.5 py-4 ring-1 ring-slate-200">
                <HousingIcon className="size-5 shrink-0 text-brand-blue" />
                <span className="text-[1.0625rem] font-semibold text-slate-800">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
