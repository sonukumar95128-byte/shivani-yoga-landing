"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { event } from "@/lib/content";

export default function OptInForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const light = variant === "light";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          whatsapp: data.get("whatsapp"),
          email: data.get("email"),
        }),
      });
    } catch {
      /* still send them through */
    }
    router.push("/thank-you");
  }

  const field = light
    ? "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink outline-none focus:border-teal"
    : "w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="whatsapp" required inputMode="tel" placeholder="WhatsApp number" className={field} />
      <input name="email" required type="email" placeholder="Email" className={field} />
      <button type="submit" disabled={loading} className="gold-btn mt-1 rounded-full px-6 py-3.5 text-base font-bold tracking-wide disabled:opacity-70">
        {loading ? "Reserving…" : event.cta}
      </button>
      <p className={`text-center text-xs ${light ? "text-muted" : "text-white/60"}`}>
        {event.ctaNote}
      </p>
    </form>
  );
}
