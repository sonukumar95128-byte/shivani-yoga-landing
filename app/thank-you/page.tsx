import Link from "next/link";
import { event } from "@/lib/content";

export default function ThankYou() {
  return (
    <main className="sunburst flex min-h-screen items-center justify-center px-4 py-16 text-white">
      <div className="w-full max-w-lg rounded-3xl bg-white/8 p-8 text-center ring-1 ring-white/12">
        <p className="wordmark text-2xl">{event.brand}</p>
        <h1 className="mt-6 text-3xl font-semibold">Seat reserved.</h1>
        <p className="mt-4 text-sm leading-7 text-white/75">
          9, 10 aur 11 October · {event.time} · Zoom link WhatsApp / email pe
          session se pehle aayegi. Calendar pe block kar lo.
        </p>
        <ul className="mt-6 space-y-2 text-left text-sm text-white/80">
          <li>• Quiet corner + mat / towel</li>
          <li>• 10 minute pehle join karo</li>
          <li>• Phone silent, camera optional</li>
        </ul>
        <Link
          href="/"
          className="gold-btn mt-8 inline-flex rounded-full px-6 py-3 text-sm font-bold"
        >
          Back to page
        </Link>
      </div>
    </main>
  );
}
