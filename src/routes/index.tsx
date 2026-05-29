import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Check,
  Crown,
  Flame,
  Gauge,
  Instagram,
  Layers3,
  MapPin,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  WandSparkles,
  Zap,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Daddy - Premium Men's Streetwear in Nacharam" },
      {
        name: "description",
        content:
          "Style Daddy is Nacharam's menswear and streetwear destination for oversized tees, cargo joggers, hoodies, co-ord sets, daily fits, bold drops, fit guidance, and real-world prices.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "57+", v: "Street Drops" },
  { k: "1.3K", v: "Local Fam" },
  { k: "40%", v: "Drop Deals" },
  { k: "24H", v: "Fast Reply" },
];

const tags = [
  "Oversized Tees",
  "Cargo Joggers",
  "Heavy Hoodies",
  "Street Sets",
  "Layering Fits",
  "Sneaker Ready",
  "Daily Wear",
  "Limited Drops",
];

const features = [
  {
    icon: Zap,
    t: "Fast Street Drops",
    d: "Fresh colors, graphics, cargos, and hoodie rotations built around what men actually wear every week.",
  },
  {
    icon: BadgePercent,
    t: "Premium Look, Real Price",
    d: "Clean silhouettes, strong fabric feel, and loud styling without turning every outfit into a luxury bill.",
  },
  {
    icon: ShieldCheck,
    t: "Nacharam Trust",
    d: "Local store energy, easy contact, clear order support, and fits you can ask about before buying.",
  },
];

const menswearSystems = [
  {
    icon: Shirt,
    title: "Oversized Tee Formula",
    copy: "Boxy shoulders, relaxed chest, strong sleeve fall, and enough length to sit clean over cargos or denim.",
    points: ["Back-print graphics", "Drop-shoulder cuts", "240 GSM style feel"],
  },
  {
    icon: Gauge,
    title: "Cargo Balance",
    copy: "Utility pockets, tapered or straight stacks, and ankle structure that works with sneakers, slides, and boots.",
    points: ["Relaxed thigh room", "Street-ready pockets", "Easy all-day movement"],
  },
  {
    icon: Layers3,
    title: "Layering Control",
    copy: "Hoodies, overshirts, and tees designed to stack without making the outfit look bulky or lazy.",
    points: ["Tee under hoodie", "Open overshirt fits", "Clean color blocking"],
  },
  {
    icon: WandSparkles,
    title: "Statement Details",
    copy: "Graphics, washed tones, contrast panels, zip details, and textured basics that make simple outfits hit harder.",
    points: ["Loud when needed", "Neutral when daily", "Made for reels and streets"],
  },
];

const outfitCodes = [
  {
    name: "College Beast",
    fit: "Oversized graphic tee + black cargo joggers + white sneakers",
    mood: "Easy, bold, no overthinking.",
  },
  {
    name: "Weekend King",
    fit: "Heavy hoodie + relaxed denim + cap + chunky sneakers",
    mood: "Comfort with shape and presence.",
  },
  {
    name: "Night Flex",
    fit: "Dark co-ord set + chain + clean low-top sneakers",
    mood: "Minimal color, maximum attitude.",
  },
  {
    name: "Daily Rotation",
    fit: "Plain oversized tee + utility pants + slides",
    mood: "Errands, hangouts, rides, repeat.",
  },
];

const fitGuide = [
  { label: "Slim", detail: "Choose true size for a cleaner body line." },
  { label: "Street", detail: "Go one size up for the Style Daddy oversized shape." },
  { label: "Heavy", detail: "Pair wide bottoms with boxy tops for balanced volume." },
];

const fabricNotes = [
  "Breathable cotton-rich tees for Hyderabad heat",
  "Ribbed necks and cuffs that keep shape longer",
  "Soft fleece hoodies for late-night rides and winter layering",
  "Utility bottoms with pocket space, movement, and street structure",
];

const services = [
  { icon: Truck, label: "Local delivery support" },
  { icon: Ruler, label: "Fit help before order" },
  { icon: PackageCheck, label: "Drop updates on Instagram" },
  { icon: MapPin, label: "Nacharam streetwear base" },
];

function Home() {
  const featured = products.slice(0, 4);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate min-h-[94vh] overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-20">
          <img
            src={hero}
            alt=""
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
        </div>

        <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />

        <div className="mx-auto grid min-h-[94vh] max-w-7xl items-center px-6 pb-16 pt-24">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/35 bg-background/65 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Nacharam Men's Streetwear 2026
            </span>

            <h1 className="mt-8 max-w-5xl font-display text-6xl uppercase leading-none md:text-8xl xl:text-9xl">
              Style Daddy
              <span className="block text-gradient-fire">Menswear</span>
              Built To Flex
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              Oversized tees, cargo joggers, heavy hoodies, co-ord sets, and
              daily street fits with strong silhouettes, cleaner layering, local
              support, and prices made for real Hyderabad wardrobes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1"
              >
                Shop The Drop
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="https://instagram.com/_style_daddy_"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                Follow Drops
              </a>
            </div>

            <div className="mt-14 grid max-w-3xl grid-cols-2 border border-border bg-card/70 backdrop-blur md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="border-b border-r border-border p-5 last:border-r-0 md:border-b-0">
                  <div className="font-display text-4xl text-gradient-fire md:text-5xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-black uppercase tracking-[0.22em]"
            >
              <Star className="h-3.5 w-3.5 text-primary" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <Crown className="h-4 w-4" />
            Menswear System
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
            Not Random.
            <span className="block text-gradient-fire">Styled Correct.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Modern streetwear is about controlled volume: boxy tops, relaxed
            bottoms, sharper cuffs, clean sneakers, and layers that make the fit
            look intentional from the first glance.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {menswearSystems.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
            >
              <item.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{item.copy}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-bold">
                    <Check className="h-4 w-4 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
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
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 lg:grid-cols-4">
        {outfitCodes.map((outfit, index) => (
          <article key={outfit.name} className="border border-border bg-card p-7">
            <div className="font-display text-5xl text-gradient-fire">
              0{index + 1}
            </div>
            <h3 className="mt-5 font-display text-3xl">{outfit.name}</h3>
            <p className="mt-4 font-black uppercase leading-7 tracking-[0.12em]">
              {outfit.fit}
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">{outfit.mood}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Ruler className="h-4 w-4" />
              Fit Guide
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
              Pick The
              <span className="block text-gradient-fire">Right Shape</span>
            </h2>
          </div>

          <div className="grid gap-4 lg:col-span-2">
            {fitGuide.map((fit) => (
              <div
                key={fit.label}
                className="grid gap-3 border border-border bg-background p-5 md:grid-cols-[10rem_1fr]"
              >
                <div className="font-display text-3xl text-primary">{fit.label}</div>
                <p className="leading-7 text-muted-foreground">{fit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1fr_0.85fr]">
        <div className="border border-border bg-card p-8 md:p-10">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <ShoppingBag className="h-4 w-4" />
            Fabric And Detail
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
            Built For
            <span className="block text-gradient-fire">Real Wear</span>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {fabricNotes.map((note) => (
              <div key={note} className="flex gap-3 border border-border bg-background p-5">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-4 border border-border bg-card p-6"
            >
              <service.icon className="h-8 w-8 text-primary" />
              <span className="font-black uppercase tracking-[0.16em]">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.t}
              className="group border border-border bg-card p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              <f.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-5 font-display text-3xl tracking-wide">{f.t}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border px-6 py-28">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-35" />
        <div className="mx-auto max-w-5xl text-center">
          <Crown className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 font-display text-6xl uppercase leading-none md:text-8xl">
            Ready To
            <span className="block text-gradient-fire">Own The Fit?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Start with one oversized tee, one cargo, one hoodie, and one clean
            sneaker pairing. Build the rotation. Repeat the damage.
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
