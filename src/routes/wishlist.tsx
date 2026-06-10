import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  ShoppingCart,
  ArrowRight,
  Trash2,
} from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
});

const wishlistItems = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 2,
    name: "Cargo Joggers",
    price: "₹1499",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
  },
  {
    id: 3,
    name: "Heavyweight Hoodie",
    price: "₹1999",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
  },
  {
    id: 4,
    name: "Baggy Denim Jeans",
    price: "₹1799",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
  },
];

function WishlistPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* HERO */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <Heart className="mx-auto h-12 w-12 text-primary" />

          <h1 className="mt-6 font-display text-6xl uppercase md:text-8xl">
            Wishlist
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Save your favourite Style Daddy pieces and
            come back anytime to complete your fit.
          </p>

        </div>
      </section>

      {/* ITEMS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        {wishlistItems.length > 0 ? (
          <>
            <div className="mb-10 flex items-center justify-between">

              <h2 className="font-display text-4xl uppercase">
                Saved Items
              </h2>

              <span className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                {wishlistItems.length} Products
              </span>

            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {wishlistItems.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">

                    <h3 className="font-display text-2xl">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xl font-bold text-primary">
                      {item.price}
                    </p>

                    <div className="mt-6 flex gap-3">

                      <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-fire px-4 py-3 text-sm font-black uppercase tracking-[0.15em] text-primary-foreground">
                        <ShoppingCart className="h-4 w-4" />
                        Add To Cart
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-border hover:border-red-500 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </>
        ) : (
          <div className="py-20 text-center">

            <Heart className="mx-auto h-16 w-16 text-muted-foreground" />

            <h2 className="mt-6 font-display text-4xl uppercase">
              Your Wishlist Is Empty
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Save your favourite Style Daddy products and
              access them anytime from your wishlist.
            </p>

            <Link
              to="/shop"
              search={{ q: "" }}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground"
            >
              Start Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        )}

      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="font-display text-5xl uppercase md:text-7xl">
            Build Your
            <span className="block text-gradient-fire">
              Dream Fit
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Save today. Style tomorrow.
            Discover the latest Style Daddy drops.
          </p>

          <Link
            to="/shop"
            search={{ q: "" }}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-primary-foreground"
          >
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

    </main>
  );
}