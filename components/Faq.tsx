"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.q} className="card-soft overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-ink">{item.q}</span>
              <span className="text-teal">{active ? "–" : "+"}</span>
            </button>
            {active && (
              <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
