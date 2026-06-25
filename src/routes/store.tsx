import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Star,
  Store,
} from "lucide-react";

export const Route = createFileRoute("/store")({
  component: StorePage,
});

function StorePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-400">
            <Store className="h-4 w-4" />
            Visit Our Store
          </div>

          <h1 className="mt-6 text-5xl font-black uppercase tracking-tight">
            STYLE <span className="text-red-500">DADDY</span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/70">
            Experience premium men's fashion in person. Explore our latest
            collections, oversized fits, shirts, cargos, and exclusive drops at
            our Hyderabad store.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Google Map */}
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Style Daddy Store Location"
            src="https://www.google.com/maps?q=STYLE+DADDY+Nacharam+Hyderabad&output=embed"
            className="h-[550px] w-full"
            loading="lazy"
          />
        </div>

        {/* Info Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-bold">4.7 Rating</span>
          </div>

          <h2 className="mt-6 text-3xl font-bold uppercase">
            Store Information
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 text-red-500" />
              <p className="text-white/70">
                7-26/3, Opposite CS Brother,
                <br />
                Sri Sai Nagar,
                <br />
                New Raghavendra Nagar,
                <br />
                Nacharam,
                <br />
                Hyderabad,
                Telangana – 500076
              </p>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 text-red-500" />
              <a
                href="tel:+916309376811"
                className="text-white hover:text-red-400"
              >
                +91 63093 76811
              </a>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 text-red-500" />
              <div>
                <p>Open Daily</p>
                <p className="text-white/60">10:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 grid gap-4">
            <a
              href="https://maps.google.com/?q=STYLE+DADDY+Nacharam+Hyderabad"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-4 font-semibold text-white transition hover:bg-red-600"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>

            <a
              href="https://wa.me/916309376811"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-green-500/10 px-5 py-4 font-semibold text-green-400 transition hover:bg-green-500/20"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-10 rounded-2xl bg-black/40 p-5">
            <h3 className="font-semibold uppercase tracking-wide text-red-400">
              Why Visit?
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>✔ Latest Premium Men's Fashion</li>
              <li>✔ Oversized T-Shirts & Streetwear</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Friendly Staff & Great Service</li>
              <li>✔ New Arrivals Every Week</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-3xl font-bold uppercase">
          Customer Reviews
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-yellow-400">★★★★★</p>
            <p className="mt-3 text-white/70">
              "The staff were very friendly, polite, and welcoming. Service was
              quick and smooth."
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-yellow-400">★★★★★</p>
            <p className="mt-3 text-white/70">
              "Good clothes with amazing prices and impressive quality."
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="text-yellow-400">★★★★☆</p>
            <p className="mt-3 text-white/70">
              "A great destination for men's streetwear and casual fashion."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}