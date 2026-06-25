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
import FEATURE_IMG_1 from "@/assets/Men's T-shirt, Japanese Regional Style _Tokyo Frog Warrior_ Creative Printed T-shirt Daily T-shirt.jpg";
import FEATURE_IMG_2 from "@/assets/ghost.jpg";
import FEATURE_IMG_3 from "@/assets/FRACTYR.jpg";
import BOX_IMG_1 from "@/assets/slim.jpg";
import BOX_IMG_2 from "@/assets/street.jpg";
import BOX_IMG_3 from "@/assets/heavy.jpg";
import BLUE_OVERSIZE_TS from "@/assets/BLUE-OVERSIZE-T-SHIRT.jpeg";
import WIDE_LEG_BP from "@/assets/PT-WIDE-LEG-BP.jpeg";
import BLACK_OS_TS from "@/assets/BLACK-OS-TS.jpeg";
import TRI_TS_BP2 from "@/assets/TRI-TS-BP2.jpeg";

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
    image: FEATURE_IMG_1,
    t: "Fast Street Drops",
    d: "Fresh colors, graphics, cargos, and hoodie rotations built around what men actually wear every week.",
  },
  {
    icon: BadgePercent,
    image: FEATURE_IMG_2,
    t: "Premium Look, Real Price",
    d: "Clean silhouettes, strong fabric feel, and loud styling without turning every outfit into a luxury bill.",
  },
  {
    icon: ShieldCheck,
    image: FEATURE_IMG_3,
    t: "Nacharam Trust",
    d: "Local store energy, easy contact, clear order support, and fits you can ask about before buying.",
  },
];

const menswearSystems = [
  {
    icon: Shirt,
    image: BLUE_OVERSIZE_TS,
    title: "Oversized Tee Formula",
    copy: "Boxy shoulders, relaxed chest, strong sleeve fall, and enough length to sit clean over cargos or denim.",
    points: ["Back-print graphics", "Drop-shoulder cuts", "240 GSM style feel"],
  },
  {
    icon: Gauge,
    image: WIDE_LEG_BP,
    title: "Cargo Balance",
    copy: "Utility pockets, tapered or straight stacks, and ankle structure that works with sneakers, slides, and boots.",
    points: ["Relaxed thigh room", "Street-ready pockets", "Easy all-day movement"],
  },
  {
    icon: Layers3,
    image: BLACK_OS_TS,
    title: "Layering Control",
    copy: "Hoodies, overshirts, and tees designed to stack without making the outfit look bulky or lazy.",
    points: ["Tee under hoodie", "Open overshirt fits", "Clean color blocking"],
  },
  {
    icon: WandSparkles,
    image: TRI_TS_BP2,
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
    image:
      "https://i.pinimg.com/736x/e0/98/f1/e098f133992b8a3eae2993b953602984.jpg",
  },
  {
    name: "Weekend King",
    fit: "Heavy hoodie + relaxed denim + cap + chunky sneakers",
    mood: "Comfort with shape and presence.",
    image:
      "https://i.pinimg.com/736x/25/7f/f1/257ff1bc977e09d9127df223301b3887.jpg",
  },
  {
    name: "Night Flex",
    fit: "Dark co-ord set + chain + clean low-top sneakers",
    mood: "Minimal color, maximum attitude.",
    image:
      "https://i.pinimg.com/736x/19/ac/98/19ac980c510435f89c3c8ebb9b31a9c4.jpg",
  },
  {
    name: "Daily Rotation",
    fit: "Plain oversized tee + utility pants + slides",
    mood: "Errands, hangouts, rides, repeat.",
    image:
      "https://i.pinimg.com/736x/63/c3/7a/63c37a6d208eabb9b472de4cb17a729d.jpg",
  },
];

const fitGuide = [
  {
    label: "Slim",
    detail: "Perfect for fashion-forward individuals seeking a crisp and sophisticated aesthetic, the Slim Fit offers a close yet comfortable cut that flatters the physique. Its versatile design transitions seamlessly from casual outings to evening events, giving you a sharp, elevated look with every wear.",
    image: BOX_IMG_1,
  },
  {
    label: "Street",
    detail: "Inspired by global street fashion and everyday hustle, this fit offers a relaxed profile with maximum comfort and standout style. Designed for creators, trendsetters, and anyone who lives beyond the ordinary.",
    image: BOX_IMG_2,
  },
  {
    label: "Heavy",
    detail: "Built from premium 240–300 GSM heavyweight fabric, offering exceptional thickness, durability, and a refined feel. Perfect for those who want a luxury streetwear experience with enhanced structure, minimal shrinkage, and long-lasting performance.",
    image: BOX_IMG_3,
  },
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
                search={{ q: undefined }}
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
        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-slate-950/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.3)]">
            <div className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute left-8 bottom-8 h-24 w-24 rounded-full border border-orange-400/20 bg-orange-400/5" />
            <div className="relative space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
                <Crown className="h-4 w-4" />
                Menswear System
              </span>
              <h2 className="max-w-xl font-display text-5xl uppercase leading-tight text-white md:text-7xl">
                Not Random.
                <span className="block text-gradient-fire">Styled Correct.</span>
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Modern streetwear is about controlled volume, clean layering,
                and strong silhouettes that feel intentional from every angle.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background/90 p-5">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                    Design Code
                  </span>
                  <p className="mt-4 text-xl font-semibold text-white">
                    Volume play + sharp edges
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-background/90 p-5">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent">
                    Fit Signal
                  </span>
                  <p className="mt-4 text-xl font-semibold text-white">
                    Oversized structure with balance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-3xl border border-border bg-background">
              <img
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Streetwear model in black outfit"
                className="h-80 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-3xl border border-border bg-background">
                <img
                  src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TUVOUyUyMFdFQVIlMjBTSE9QfGVufDB8fDB8fHww"
                  alt="Streetwear detail and texture"
                  className="h-36 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-background">
                <img
                  src="https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHQtc2hpcnR8ZW58MHx8MHx8fDA%3D"
                  alt="Blue oversized tee"
                  className="h-36 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-background/90 p-6">
              <div className="text-sm font-black uppercase tracking-[0.3em] text-accent">
                Real Fit
              </div>
              <p className="text-lg leading-7 text-slate-300">
                Street-ready proportions built to stack over cargos and denim
                without feeling bulky.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-background">
              <img
                src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg"
                alt="Layered streetwear outfit"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {menswearSystems.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-card transition hover:-translate-y-1 hover:border-primary"
            >
              <div className="relative overflow-hidden bg-background">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
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
              </div>
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
              search={{ q: undefined }}
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
          <article key={outfit.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
            <div className="overflow-hidden bg-background">
              <img
                src={outfit.image}
                alt={outfit.name}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="border-t border-border bg-card p-6">
              <div className="font-display text-5xl text-gradient-fire">0{index + 1}</div>
              <h3 className="mt-3 font-display text-3xl">{outfit.name}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{outfit.mood}</p>
            </div>
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
              <div key={fit.label} className="grid gap-3 overflow-hidden rounded-3xl border border-border bg-background md:grid-cols-[14rem_1fr]">
                <div className="relative h-52 overflow-hidden md:h-auto">
                  <img
                    src={fit.image}
                    alt={fit.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <div className="font-display text-3xl text-primary">{fit.label}</div>
                  <p className="mt-3 leading-7 text-muted-foreground">{fit.detail}</p>
                </div>
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
              className="group relative overflow-hidden border border-border bg-card transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
            >
              <img
                src={f.image}
                alt={f.t}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
              <div className="relative flex min-h-[22rem] flex-col justify-end p-8">
                <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-primary backdrop-blur">
                  <f.icon className="h-5 w-5" />
                  {f.t}
                </div>
                <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                  {f.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}