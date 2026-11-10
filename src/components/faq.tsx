import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Faq() {
  const { faq } = await getDictionary();

  return (
    <section id="sss" className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-3 lg:gap-16">
        <SectionHeading title={faq.title} />
        <div className="reveal lg:col-span-2">
          <FaqList items={faq.items} />
        </div>
      </div>
    </section>
  );
}
