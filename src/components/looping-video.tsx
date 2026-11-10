"use client";

import { useEffect, useRef } from "react";

/**
 * Sessiz, sürekli dönen video. Dosya ancak video ekrana yaklaşınca indirilir ve
 * ekrandan çıkınca duraklatılır; böylece sayfa açılışında veri harcanmaz.
 * Video yüklenene kadar saydamdır; kapak görselini, arkasına yerleştiren bileşen sağlar.
 */
export function LoopingVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // "Hareketi azalt" açıksa ya da tarayıcı otomatik oynatmayı engellerse oynatma düğmeleri gösterilir.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            video.controls = true;
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      className="relative size-full object-cover"
    />
  );
}
