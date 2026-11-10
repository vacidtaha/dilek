"use client";

import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

type MenuLink = { href: string; label: string };

export function MobileMenu({
  links,
  openLabel,
  closeLabel,
  children,
}: {
  links: MenuLink[];
  openLabel: string;
  closeLabel: string;
  /** Panelin altında gösterilen dil seçici ve arama düğmesi. */
  children: ReactNode;
}) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="grid size-10 cursor-pointer place-items-center rounded-full text-brand-navy transition-colors hover:bg-slate-100"
      >
        {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`absolute inset-x-0 top-full grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {/* Üstteki header zaten backdrop-blur kullandığı için panel saydam olamaz; düz beyaz. */}
          <div className="border-t border-slate-200/80 bg-white px-6 pt-3 pb-6 shadow-[0_24px_40px_-24px_rgba(15,23,42,0.35)]">
            <nav className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-lg font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-brand-navy"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-200/80 pt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
