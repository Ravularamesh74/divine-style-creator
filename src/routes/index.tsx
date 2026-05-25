import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Instagram, Sparkles, Zap } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Style Daddy — Stay Trendy · Stay Daddy" },
      { name: "description", content: "Nacharam's streetwear kingdom. Bold drops, brutal prices. Oversized tees, cargo joggers, hoodies." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 4);
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" className="h-full w-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold tracking-widest text-accent-foreground glow-neon">
              <Sparkles className="h-3.5 w-3.5" /> NEW COLLECTION 2026
            </span>
            <h1 className="mt-6 font-display text-7xl leading-[0.9] tracking-tight md:text-9xl">
              STAY <span className="text-gradient-fire">TRENDY</span>
              <br />STAY <span className="text-gradient-fire">DADDY</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Your ultimate streetwear destination in Nacharam, Hyderabad. Bold styles, unbeatable prices, daily drops.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="group inline-flex items-center gap-2 rounded-full bg-fire px-7 py-3.5 font-bold tracking-wider text-primary-foreground animate-pulse-glow">
                SHOP NOW <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://instagram.com/_style_daddy_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-7 py-3.5 font-bold tracking-wider hover:bg-foreground hover:text-background transition">
                <Instagram className="h-4 w-4" /> FOLLOW US
              </a>
            </div>
            <div className="mt-12 flex gap-8">
              {[
                { k: "57+", v: "Drops" },
                { k: "1.3K", v: "Fam" },
                { k: "40%", v: "Off" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl text-gradient-fire">{s.k}</div>
                  <div className="text-xs tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-display tracking-widest text-accent">
              <Flame className="h-4 w-4" /> TRENDING NOW
            </span>
            <h2 className="mt-2 font-display text-5xl md:text-7xl">HOTTEST <span className="text-gradient-fire">DROPS</span></h2>
          </div>
          <Link to="/shop" className="group inline-flex items-center gap-2 font-display tracking-widest text-primary">
            VIEW ALL <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
          {[
            { icon: Zap, t: "INSTANT DROPS", d: "New styles weekly. Always fresh, never stale." },
            { icon: Flame, t: "FIRE PRICES", d: "Up to 40% off across the entire collection." },
            { icon: Sparkles, t: "DM TO ORDER", d: "Slide into our DMs. Order in seconds." },
          ].map((f) => (
            <div key={f.t} className="group relative overflow-hidden rounded-2xl border border-border p-8 transition hover:border-primary">
              <f.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-2xl tracking-wide">{f.t}</h3>
              <p className="mt-2 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-6xl md:text-8xl leading-none">
            READY TO <span className="text-gradient-fire">FLEX?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Cop the latest drops before they sell out. Limited stock, unlimited drip.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-fire px-8 py-4 font-bold tracking-widest text-primary-foreground animate-pulse-glow">
            EXPLORE THE DROP <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
