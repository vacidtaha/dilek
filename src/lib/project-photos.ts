export type ProjectPhoto = { src: string; width: number; height: number };

/**
 * Fotoğraflı işlerin görselleri. Anahtarlar sözlükteki `projects.gallery.items[].id` ile,
 * sıra da aynı öğenin `alts` dizisiyle eşleşir. İlk fotoğraf kapak olarak büyük gösterilir.
 */
export const projectPhotos: Record<string, ProjectPhoto[]> = {
  lefax: [
    { src: "/isler/lefax-1.jpeg", width: 2048, height: 1152 },
    { src: "/isler/lefax-2.jpeg", width: 2048, height: 1152 },
    { src: "/isler/lefax-3.jpeg", width: 2048, height: 1152 },
    { src: "/isler/lefax-4.jpeg", width: 2048, height: 1152 },
  ],
  seripol: [
    { src: "/isler/seripol-1.jpeg", width: 1600, height: 900 },
    { src: "/isler/seripol-2.jpeg", width: 2048, height: 1152 },
    { src: "/isler/seripol-3.jpeg", width: 2048, height: 1152 },
    { src: "/isler/seripol-4.jpeg", width: 2048, height: 1152 },
    { src: "/isler/seripol-5.jpeg", width: 1600, height: 900 },
    { src: "/isler/seripol-6.jpeg", width: 2048, height: 1152 },
  ],
  ofisline: [
    { src: "/isler/ofisline-1.jpeg", width: 2048, height: 1152 },
    { src: "/isler/ofisline-2.jpeg", width: 2048, height: 1152 },
    { src: "/isler/ofisline-3.jpeg", width: 2048, height: 1152 },
    { src: "/isler/ofisline-4.jpeg", width: 2048, height: 1152 },
    { src: "/isler/ofisline-5.jpeg", width: 2048, height: 1152 },
    { src: "/isler/ofisline-6.jpeg", width: 1152, height: 2048 },
  ],
};
