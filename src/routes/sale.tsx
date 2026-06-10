import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgePercent,
  ArrowRight,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/sale")({
  component: SalePage,
});

const saleCategories = [
  {
    title: "Shirts",
    discount: "UP TO 40% OFF",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
  },
  {
    title: "T-Shirts",
    discount: "UP TO 50% OFF",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    title: "Jeans",
    discount: "UP TO 35% OFF",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
  {
    title: "Cargo Joggers",
    discount: "UP TO 45% OFF",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
  },
  {
    title: "Hoodies",
    discount: "UP TO 30% OFF",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  },
  {
    title: "Co-Ord Sets",
    discount: "UP TO 40% OFF",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  },
];

function SalePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <BadgePercent className="h-4 w-4" />
            Limited Time Offers
          </span>

          <h1 className="mt-8 font-display text-6xl uppercase md:text-8xl">
            SALE
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Grab premium Style Daddy streetwear at unbeatable prices.
            Limited stock. Limited time. Maximum style.
          </p>
        </div>
      </section>

      {/* SALE GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-center gap-3">
          <Flame className="h-6 w-6 text-primary" />
          <h2 className="font-display text-4xl uppercase">
            Hot Deals
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {saleCategories.map((item) => (
              <Link
              key={item.title}
              to="/shop"
              search={{ q: item.title }}
              className="group overflow-hidden border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 bg-fire px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary-foreground">
                  {item.discount}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-3xl uppercase">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-primary">
                  <span className="text-sm font-black uppercase tracking-[0.2em]">
                    Shop Offer
                  </span>

                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="font-display text-5xl uppercase md:text-7xl">
            UP TO
            <span className="block text-gradient-fire">
              50% OFF
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Premium oversized tees, cargos, hoodies, shirts,
            jeans, and accessories at special sale prices.
          </p>

          <Link
            to="/shop"
            search={{ q: "" }}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-primary-foreground"
          >
            Shop Sale
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </section>
    </main>
  );
}