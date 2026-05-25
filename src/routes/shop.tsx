import { createFileRoute } from "@tanstack/react-router";
import {
  BadgePercent,
  Flame,
  Grid3X3,
  Search,
  Shirt,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Style Daddy" },
      {
        name: "description",
        content:
          "Browse the full Style Daddy collection: t-shirts, hoodies, jackets, joggers and more.",
      },
    ],
  }),
  component: Shop,
});

const stats = [
  { label: "Total Drops", value: products.length, icon: Grid3X3 },
  { label: "Categories", value: categories.length - 1, icon: Shirt },
  { label: "Max Offers", value: "40%", icon: BadgePercent },
];

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("ALL");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = cat === "ALL" || product.category === cat;
      const matchesSearch =
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [cat, query]);

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-25" />
      <div className="fixed left-[-10rem] top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="fixed bottom-[-12rem] right-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary">
              <Sparkles className="h-4 w-4" />
              The Full Drop
            </span>

            <h1 className="mt-8 font-display text-6xl uppercase leading-none md:text-8xl xl:text-9xl">
              SHOP
              <span className="block text-gradient-fire">EVERYTHING</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Curated streetwear for bold fits, daily flex, oversized comfort,
              cargo energy, and Nacharam-level drip.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-border bg-card p-5">
                <stat.icon className="h-6 w-6 text-primary" />
                <div className="mt-4 font-display text-4xl text-gradient-fire">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border border-border bg-card p-4 md:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex items-center gap-3 border border-border bg-background px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search drops, categories, fits..."
                className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-muted-foreground"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-4 py-3 text-xs font-black uppercase tracking-[0.2em] transition ${
                    cat === c
                      ? "border-primary bg-fire text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat === c ? (
                    <Flame className="h-4 w-4" />
                  ) : (
                    <Star className="h-4 w-4" />
                  )}
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-muted-foreground">
            Showing{" "}
            <span className="text-primary">
              {filtered.length}
            </span>{" "}
            drops
          </p>

          <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-accent">
            <Zap className="h-4 w-4" />
            DM fast before stock moves
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-border bg-card px-6 py-20 text-center">
            <Flame className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 font-display text-5xl">NO DROPS FOUND</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              No pieces match this search yet. Try another category or clear the
              search.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}