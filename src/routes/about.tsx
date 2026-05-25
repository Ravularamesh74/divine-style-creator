import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Crown,
  Flame,
  Heart,
  MapPin,
  Shirt,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Style Daddy" },
      {
        name: "description",
        content:
          "Style Daddy is Nacharam's streetwear destination for bold drops, brutal prices, and unmatched drip.",
      },
    ],
  }),
  component: About,
});

const stats = [
  { k: "57+", v: "Style Drops", icon: Flame },
  { k: "1.3K", v: "Drip Followers", icon: Heart },
  { k: "100%", v: "Trend Locked", icon: Crown },
];

const story = [
  {
    t: "BORN IN NACHARAM",
    d: "Built in Hyderabad's everyday hustle, Style Daddy started with one simple mission: make sharp streetwear feel reachable.",
    icon: MapPin,
  },
  {
    t: "DROPS WITH INTENT",
    d: "Every piece is picked for fit, attitude, comfort, and price. No random racks. No boring basics. Only wearable heat.",
    icon: Shirt,
  },
  {
    t: "PRICE THAT HITS",
    d: "Looking premium should not feel impossible. We keep the look expensive and the bill friendly.",
    icon: BadgePercent,
  },
  {
    t: "COMMUNITY FIRST",
    d: "Style Daddy is powered by the people who wear it, tag it, remix it, and make every fit their own.",
    icon: Sparkles,
  },
];

const values = [
  "Oversized energy",
  "Street-ready fits",
  "Fast-moving drops",
  "Budget friendly heat",
  "Hyderabad attitude",
  "Daily-wear comfort",
];

function About() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[88vh] overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-20 bg-background" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="absolute left-1/2 top-0 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
              <Zap className="h-4 w-4" />
              Nacharam Streetwear Code
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-6xl leading-none md:text-8xl xl:text-9xl">
              STYLE
              <span className="block text-gradient-fire">DADDY</span>
              <span className="block text-4xl text-muted-foreground md:text-6xl">
                IS NOT A SHOP.
              </span>
              <span className="block text-4xl md:text-6xl">
                IT IS A FIT MOVEMENT.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              We bring bold streetwear, sharp daily fits, oversized silhouettes,
              cargo energy, and trend-first pieces to Nacharam at prices that
              keep your wardrobe moving.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.25em] text-primary-foreground shadow-lg shadow-primary/25 transition hover:scale-105"
              >
                Explore Drops
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-4 text-sm font-black uppercase tracking-[0.25em] transition hover:border-primary hover:text-primary"
              >
                Visit Store
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <div className="absolute inset-0 rounded-full border border-primary/30" />
            <div className="absolute inset-8 rounded-full border border-accent/30" />
            <div className="absolute inset-16 rounded-full bg-card/80 shadow-2xl shadow-primary/20 backdrop-blur" />

            <img
              src={logo}
              alt="Style Daddy"
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-primary glow-fire animate-float md:h-72 md:w-72"
            />

            <div className="absolute left-4 top-16 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
              <Flame className="h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-2xl">BOLD</p>
            </div>

            <div className="absolute bottom-16 right-4 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur">
              <Crown className="h-6 w-6 text-accent" />
              <p className="mt-2 font-display text-2xl">ROYAL</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.v}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-fire opacity-0 transition group-hover:opacity-100" />
            <s.icon className="mx-auto h-9 w-9 text-primary" />
            <div className="mt-5 font-display text-7xl text-gradient-fire">
              {s.k}
            </div>
            <div className="mt-2 text-sm font-black uppercase tracking-[0.35em] text-muted-foreground">
              {s.v}
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-primary">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              FROM LOCAL HUSTLE TO
              <span className="block text-gradient-fire">STREET ROYALTY</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {story.map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent"
              >
                <c.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-display text-2xl tracking-wide">
                  {c.t}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-card" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-accent">
              The Manifesto
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              WE DO NOT CHASE FASHION.
              <span className="block text-gradient-fire">WE WEAR THE MOMENT.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-5"
              >
                <Star className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-bold uppercase tracking-[0.18em]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <MapPin className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">
          FIND THE KINGDOM IN
          <span className="block text-gradient-fire">NACHARAM</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          7-26/3, opp CS Brother, New Raghavendra Nagar, Nacharam,
          Hyderabad 500076
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-fire px-9 py-4 text-sm font-black uppercase tracking-[0.28em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:scale-105"
        >
          Get In Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}