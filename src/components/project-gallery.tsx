"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, NextIcon, PhotosIcon, PreviousIcon } from "@/components/icons";
import type { ProjectPhoto } from "@/lib/project-photos";

type GalleryPhoto = ProjectPhoto & { alt: string };

const SWIPE_THRESHOLD = 50;
const VISIBLE_PHOTOS = 4;

/**
 * Tarayıcının doğru boyuttaki dosyayı seçmesi için fotoğrafların ekrandaki gerçek genişlikleri.
 * Sayfa içeriği en fazla 1056 piksel genişliğinde; yan boşluk telefonda 24, geniş ekranda 48 piksel.
 */
const coverSizes = {
  wide: "(min-width: 1152px) 1056px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)",
  half: "(min-width: 1152px) 516px, (min-width: 1024px) calc(50vw - 60px), (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)",
};
const thumbnailSizes = {
  wide: "(min-width: 1152px) 344px, (min-width: 768px) calc(33vw - 40px), calc(33vw - 21px)",
  half: "(min-width: 1152px) 164px, (min-width: 1024px) calc(17vw - 28px), (min-width: 768px) calc(33vw - 40px), calc(33vw - 21px)",
};

const lightboxButton =
  "grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function ProjectGallery({
  name,
  photos,
  labels,
  wide = false,
}: {
  name: string;
  photos: GalleryPhoto[];
  labels: { photoCount: string; close: string; previous: string; next: string };
  /** Kart tam genişlikte gösteriliyorsa kapak fotoğrafı daha yatay kırpılır. */
  wide?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const current = index === null ? null : photos[index];
  // Kartta kapak ve en fazla üç küçük fotoğraf görünür; kalanlar büyütülmüş görünümde.
  const hiddenCount = Math.max(photos.length - VISIBLE_PHOTOS, 0);
  const layout = wide ? "wide" : "half";

  // Pencerenin açık olup olmadığını yalnızca `index` belirler; ikisi birbirinden kopamaz.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const close = () => setIndex(null);
  const step = (delta: number) =>
    setIndex((value) => (value === null ? value : (value + delta + photos.length) % photos.length));

  return (
    <>
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {photos.map((photo, photoIndex) => {
          const cover = photoIndex === 0;
          const showsHiddenCount = hiddenCount > 0 && photoIndex === VISIBLE_PHOTOS - 1;

          return (
            <button
              key={photo.src}
              type="button"
              // Karta sığmayan fotoğraflar gizli durur ama sayfa kaynağında yer alır; böylece arama
              // motorları hepsini görür. Gizli fotoğraf, büyütülüp açılana kadar indirilmez.
              hidden={photoIndex >= VISIBLE_PHOTOS}
              onClick={() => setIndex(photoIndex)}
              className={`group relative cursor-pointer overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                cover
                  ? `col-span-3 aspect-video rounded-2xl md:rounded-3xl ${wide ? "lg:aspect-[21/9]" : ""}`
                  : "aspect-video rounded-lg md:rounded-2xl"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={cover ? coverSizes[layout] : thumbnailSizes[layout]}
                className="object-cover transition-[filter] duration-300 group-hover:brightness-90 motion-reduce:transition-none"
              />
              {cover && (
                <span
                  aria-hidden
                  className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-sm font-medium text-white backdrop-blur"
                >
                  <PhotosIcon className="size-4" />
                  {photos.length} {labels.photoCount}
                </span>
              )}
              {showsHiddenCount && (
                <span
                  aria-hidden
                  className="absolute inset-0 grid place-items-center bg-black/55 text-lg font-semibold text-white md:text-2xl"
                >
                  +{hiddenCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={name}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
        }}
        className="fixed inset-0 m-0 size-full max-h-none max-w-none items-center justify-center border-0 bg-black/90 p-0 backdrop-blur-sm open:flex"
      >
        <button
          type="button"
          onClick={close}
          aria-label={labels.close}
          className={`${lightboxButton} absolute top-4 right-4`}
        >
          <CloseIcon className="size-6" />
        </button>

        {current && index !== null && (
          <>
            <p className="absolute top-4 left-4 flex h-11 items-center text-sm font-medium text-white/80 md:left-6">
              {name} · {index + 1} / {photos.length}
            </p>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              loading="eager"
              // Genişlik açıkça hesaplanır: hem yan boşluklara hem ekran yüksekliğine sığan en büyük boyut.
              style={{
                width: `min(100vw - var(--gutter), (100dvh - 9rem) * ${current.width / current.height})`,
              }}
              className="h-auto rounded-lg [--gutter:2rem] md:[--gutter:11rem]"
            />
          </>
        )}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={labels.previous}
              className={`${lightboxButton} absolute bottom-4 left-4 md:top-1/2 md:bottom-auto md:left-6 md:-translate-y-1/2`}
            >
              <PreviousIcon className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={labels.next}
              className={`${lightboxButton} absolute right-4 bottom-4 md:top-1/2 md:right-6 md:bottom-auto md:-translate-y-1/2`}
            >
              <NextIcon className="size-6" />
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
