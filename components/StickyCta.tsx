"use client";

import { event } from "@/lib/content";

export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-plum/95 p-3 backdrop-blur md:hidden">
      <a href="#reserve" className="gold-btn flex w-full items-center justify-center rounded-full py-3 text-sm font-bold">
        Join Free · 9–11 Oct
      </a>
      <p className="mt-1 text-center text-[11px] text-white/60">{event.seats}</p>
    </div>
  );
}
