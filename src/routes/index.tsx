import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Crown,
  Flame,
  Instagram,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Daddy — Stay Trendy · Stay Daddy" },
      {
        name: "description",
        content:
          "Nacharam's streetwear kingdom. Bold drops, brutal prices. Oversized tees, cargo joggers, hoodies.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "57+", v: "Drops" },
  { k: "1.3K", v: "Fam" },
  { k: "40%", v: "Off" },
];

const features = [
  {
    icon: Zap,
    t: "INSTANT DROPS",
    d: "New styles move fast. Fresh pieces, weekly energy, zero boring racks.",
  },
  {
    icon: BadgePercent,
    t: "BRUTAL PRICES",
    d: "Streetwear that looks premium without making your wallet cry.",
  },
  {
    icon: ShieldCheck,
    t: "LOCAL TRUST",
    d: "Nacharam-based, easy to contact, easy to order, easy to flex.",
  },
];

const tags = [
  "Oversized Tees",
  "Cargo Joggers",
  "Hoodies",
  "Street Sets",
  "Daily Fits",
  "Limited Drops",
];

function Home() {
  const featured = products.slice(0, 4);

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={hero}
            alt=""
            className="h-full w-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary backdrop-blur">
              <Sparkles className="h-4 w-4" />
              New Collection 2026
            </span>

            <h1 className="mt-8 font-display text-6xl uppercase leading-none md:text-8xl xl:text-9xl">
              STAY
              <span className="block text-gradient-fire">TRENDY</span>
              STAY
              <span className="block text-gradient-fire">DADDY</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Nacharam's streetwear kingdom for oversized tees, cargo joggers,
              hoodies, daily fits, bold drops, and prices built for real people.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="https://instagram.com/_style_daddy_"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                Follow Us
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 border border-border bg-card/70 backdrop-blur">
              {stats.map((s) => (
                <div key={s.v} className="border-r border-border p-5 last:border-r-0">
                  <div className="font-display text-4xl text-gradient-fire md:text-5xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs font-black uppercase tracking-[0.28em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-black uppercase tracking-[0.24em]"
            >
              <Star className="h-3.5 w-3.5 text-primary" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Flame className="h-4 w-4" />
              Trending Now
            </span>

            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Hottest
              <span className="block text-gradient-fire">Drops</span>
            </h2>
          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 font-black uppercase tracking-[0.24em] text-primary"
          >
            View All
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.t}
              className="group border border-border bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              <f.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-5 font-display text-3xl tracking-wide">
                {f.t}
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-45" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <Crown className="mx-auto h-12 w-12 text-primary" />

          <h2 className="mt-6 font-display text-6xl uppercase leading-none md:text-8xl">
            READY TO
            <span className="block text-gradient-fire">FLEX?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Cop the latest Style Daddy drops before they disappear. Limited
            stock, loud fits, Nacharam energy.
          </p>

          <Link
            to="/shop"
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1"
          >
            Explore The Drop
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}