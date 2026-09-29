import Image from "next/image";
import {
  agenda,
  beforeAfter,
  event,
  pains,
  testimonials,
  whoFor,
  whoNot,
} from "@/lib/content";
import OptInForm from "@/components/OptInForm";
import Faq from "@/components/Faq";
import StickyCta from "@/components/StickyCta";

function MetaCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 ring-1 ring-white/10">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-lg">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-white/55">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <header className="sunburst relative overflow-hidden text-white">
        <div className="section-wrap relative z-10 py-8 md:py-14">
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/90">
            {event.brand}
          </p>
          <h1 className="wordmark text-center text-4xl md:text-6xl">{event.brand}</h1>
          <p className="tag-gradient mt-2 text-center text-sm italic md:text-lg">
            {event.tagline}
          </p>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-live px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {event.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                {event.headline}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                {event.subhead}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <MetaCard label="Dates" value={event.datesLabel} icon="📅" />
                <MetaCard label="Time" value={event.time} icon="⏰" />
                <MetaCard label="Language" value={event.language} icon="🌐" />
                <MetaCard label="Live" value={event.platform} icon="🎥" />
              </div>
            </div>

            <div id="reserve" className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/12 backdrop-blur-sm md:p-6">
              <div className="mb-5 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-gold/50">
                  <Image
                    src="/shivani.png"
                    alt={event.coach}
                    fill
                    className="object-cover object-[center_20%]"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{event.coach}</p>
                  <p className="text-sm text-white/65">{event.role}</p>
                  <p className="mt-1 text-xs text-gold">{event.seats}</p>
                </div>
              </div>
              <OptInForm />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-cream py-16">
        <div className="section-wrap">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal">
            Social proof
          </p>
          <h3 className="mt-2 text-center text-3xl font-semibold">
            Students jo practice ko life ka hissa bana chuke hain
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.name} className="card-soft rounded-3xl p-6">
                <p className="text-sm leading-6 text-muted">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece4] py-16">
        <div className="section-wrap">
          <h3 className="text-center text-3xl font-semibold">Kya yeh familiar hai?</h3>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {pains.map((p) => (
              <div key={p} className="card-soft flex items-start gap-3 rounded-2xl px-5 py-4">
                <span className="mt-0.5 text-magenta">●</span>
                <p className="text-sm leading-6">{p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-muted">
            Yeh 3 din inhi problems ke liye banaya gaya hai — theory nahi, live practice.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="section-wrap grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#efe4dc] p-7">
            <h4 className="text-lg font-semibold">Before the 3 days</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {beforeAfter.before.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-[#e7f6f4] p-7">
            <h4 className="text-lg font-semibold text-teal">After the 3 days</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {beforeAfter.after.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16">
        <div className="section-wrap">
          <h3 className="text-center text-3xl font-semibold">Aapka 3-day yoga reset</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted">
            9, 10 aur 11 October · {event.time} · {event.duration}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {agenda.map((day) => (
              <article key={day.day} className="card-soft rounded-3xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-magenta">
                  {day.day}
                </p>
                <p className="text-xs text-muted">{day.date}</p>
                <h4 className="mt-2 text-xl font-semibold">{day.title}</h4>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {day.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3ece4] py-16">
        <div className="section-wrap grid gap-6 md:grid-cols-2">
          <div className="card-soft rounded-3xl p-7">
            <h4 className="text-xl font-semibold">Yeh kiske liye hai</h4>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {whoFor.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="card-soft rounded-3xl p-7">
            <h4 className="text-xl font-semibold">Yeh kiske liye nahi</h4>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {whoNot.map((item) => (
                <li key={item}>✕ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sunburst py-16 text-white">
        <div className="section-wrap grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="wordmark text-3xl">{event.brand}</p>
            <h3 className="mt-4 text-3xl font-semibold">{event.coach}</h3>
            <p className="mt-2 text-white/70">{event.role}</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              Shivani live sessions mein body ko force nahi karti — tightness, breath
              aur daily routine ko simple steps mein todti hain. 3 din ka focus:
              aapko aisi practice dena jo class ke baad bhi chale.
            </p>
          </div>
          <div className="relative mx-auto h-80 w-64 overflow-hidden rounded-[2rem] ring-1 ring-white/15">
            <Image
              src="/shivani.png"
              alt={event.coach}
              fill
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="section-wrap grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-3xl font-semibold">Sawal jo log pehle poochte hain</h3>
            <p className="mt-2 text-muted">Free hai, beginner-friendly hai, Zoom pe live hai.</p>
            <div className="mt-6">
              <Faq />
            </div>
          </div>
          <div className="card-soft rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Last step
            </p>
            <h4 className="mt-2 text-2xl font-semibold">Seat reserve karo — 9 Oct se pehle</h4>
            <p className="mt-2 text-sm text-muted">
              {event.datesLabel} · {event.time} · {event.platform}
            </p>
            <div className="mt-5">
              <OptInForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-plum py-8 text-center text-white/60">
        <p className="wordmark text-xl">{event.brand}</p>
        <p className="mt-2 text-xs">
          3-Day Free Live Yoga Session · 9–11 Oct 2026 · {event.coach}
        </p>
      </footer>

      <StickyCta />
    </main>
  );
}
