"use client";

import { useId, useState } from "react";

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-[#70AA26] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactFaq({ items }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="m-0 list-none space-y-3 p-0">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <li
            key={item.q}
            className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_8px_24px_-12px_rgba(15,23,42,0.08)]"
          >
            <button
              id={btnId}
              type="button"
              className="flex w-full cursor-pointer touch-manipulation items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold leading-snug text-neutral-900 transition-colors hover:bg-neutral-50 sm:px-6 sm:py-[1.125rem] sm:text-base"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              {item.q}
              <Chevron open={open} />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!open}
              className="border-t border-neutral-200 px-5 pb-5 pt-1 text-[14px] leading-relaxed text-neutral-600 sm:px-6"
            >
              {item.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
