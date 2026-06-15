import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  Sparkles,
  Shirt,
  ShoppingBag,
} from "lucide-react";

export const Route = createFileRoute("/new-in")({
  component: NewInPage,
});

const categories = [
  {
    title: "Shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
  },
  {
    title: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    title: "Trousers",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
  },
  {
    title: "Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
  {
    title: "Oversized Tees",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
  },
  {
    title: "Cargo Joggers",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
  },
  {
    title: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
  },
];

function NewInPage() {
  return (
    <main className="min-h-screen bg-background">


      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-center gap-3">
          <Flame className="h-6 w-6 text-primary" />
          <h2 className="font-display text-4xl uppercase">
            Shop By Category
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/shop"
              search={{ q: category.title }}
              className="group overflow-hidden border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-display text-2xl uppercase">
                  {category.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-primary">
                  <span className="text-sm font-black uppercase tracking-[0.2em]">
                    Shop Now
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED MESSAGE */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-primary" />

          <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
            Fresh Drops
            <span className="block text-gradient-fire">
              Every Week
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Style Daddy constantly updates collections with new streetwear,
            oversized fits, cargo styles, hoodies, and trend-driven essentials
            so you never miss the latest fashion movement.
          </p>

          <Link
            to="/shop"
            search={{ q: "" }}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-primary-foreground"
          >
            Explore All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}