"use client";

import { useEffect, useState, type ReactNode } from "react";

const SCROLL_THRESHOLD = 16;

/**
 * Header'ı sarar ve sayfa kaydırıldığında `data-scrolled` özniteliğini ekler.
 * Küçülme, arka plan ve gölge geçişleri bu özniteliğe bağlı Tailwind sınıflarıyla yapılır.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className="group fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 data-scrolled:border-slate-200/80 data-scrolled:bg-white/90 data-scrolled:shadow-[0_8px_24px_-16px_rgba(15,23,42,0.25)]"
    >
      {children}
    </header>
  );
}
