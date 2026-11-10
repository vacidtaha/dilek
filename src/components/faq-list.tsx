"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${id}-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl bg-white ring-1 transition-shadow ${open ? "ring-brand-blue/40" : "ring-slate-200"}`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-lg font-semibold text-slate-900 md:p-6"
              >
                {item.question}
                <ChevronDownIcon
                  className={`size-5 shrink-0 text-brand-blue transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="-mt-1 px-5 pb-5 text-slate-600 md:px-6 md:pb-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
