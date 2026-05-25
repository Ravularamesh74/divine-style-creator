import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Style Daddy" },
      { name: "description", content: "Browse the full Style Daddy collection: t-shirts, hoodies, jackets, joggers and more." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("ALL");
  const filtered = cat === "ALL" ? products : products.filter((p) => p.category === cat);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <span className="font-display tracking-widest text-accent text-sm">THE FULL DROP</span>
        <h1 className="mt-2 font-display text-6xl md:text-8xl">SHOP <span className="text-gradient-fire">EVERYTHING</span></h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Curated streetwear for the bold. Filter by category and find your fit.</p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-5 py-2 font-display tracking-widest text-sm transition ${
              cat === c
                ? "border-primary bg-fire text-primary-foreground glow-fire"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">No drops in this category yet — check back soon.</p>
      )}
    </section>
  );
}
