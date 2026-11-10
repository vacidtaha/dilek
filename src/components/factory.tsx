import Image from "next/image";
import { LoopingVideo } from "@/components/looping-video";
import { PaverPattern } from "@/components/paver-pattern";
import { getDictionary } from "@/i18n/get-dictionary";

/** Sıra, sözlükteki `factory.videos` etiketleriyle eşleşir. Her videonun aynı adda bir kapak görseli var. */
const videos = ["/videos/fabrika-1", "/videos/fabrika-2"];

export async function Factory() {
  const { factory } = await getDictionary();

  return (
    <section id="fabrika" className="relative isolate overflow-hidden bg-brand-navy text-white">
      <PaverPattern className="absolute inset-0 -z-10 size-full text-white/10 [mask-image:linear-gradient(to_right,black,transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="reveal">
          {/* Diğer bölüm başlıklarından bir kademe büyük: yanında videolar olduğu için sol taraf boş kalmasın. */}
          <h2 className="text-[2rem] leading-tight font-semibold tracking-tight md:text-[3.25rem]">
            {factory.title}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/75 md:text-xl">{factory.description}</p>
        </div>
        <div className="reveal flex gap-3 md:gap-4">
          {videos.map((path, index) => (
            <div
              key={path}
              className="relative aspect-[9/16] w-1/2 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/15 sm:w-48 lg:w-56"
            >
              {/* Kapak görseli videonun altında durur: ekrana yaklaşınca, ekrana uygun boyutta indirilir. */}
              <Image
                src={`${path}.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, calc(50vw - 30px)"
                className="object-cover"
              />
              <LoopingVideo src={`${path}.mp4`} label={factory.videos[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
