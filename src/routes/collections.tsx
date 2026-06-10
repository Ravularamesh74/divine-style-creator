import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  Sparkles,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
  head: () => ({
    meta: [
      { title: "Collections | Style Daddy" },
      {
        name: "description",
        content:
          "Explore Style Daddy's streetwear collections for oversized essentials, hoodies, premium denim, and seasonal drops.",
      },
    ],
  }),
});

const collections = [
  {
    title: "Oversized Essentials",
    subtitle: "Everyday oversized fits",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000",
  },
  {
    title: "Streetwear Elite",
    subtitle: "Bold graphics & statement looks",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1000",
  },
  {
    title: "Cargo Culture",
    subtitle: "Utility-inspired styling",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000",
  },
  {
    title: "Hoodie Society",
    subtitle: "Premium layering collection",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1000",
  },
  {
    title: "Denim District",
    subtitle: "Relaxed & baggy denim fits",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1000",
  },
  {
    title: "Summer Drops",
    subtitle: "Lightweight seasonal essentials",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000",
  },
];

function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Style Daddy Collections
          </span>

          <h1 className="mt-8 font-display text-6xl uppercase md:text-8xl">
            COLLECTIONS
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Discover curated menswear collections built around
            oversized silhouettes, premium fabrics, cargo culture,
            modern streetwear, and everyday confidence.
          </p>

        </div>
      </section>

      {/* COLLECTION GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 flex items-center gap-3">
          <Flame className="h-6 w-6 text-primary" />
          <h2 className="font-display text-4xl uppercase">
            Featured Collections
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group overflow-hidden border border-border bg-card transition hover:-translate-y-2 hover:border-primary"
            >
              <div className="overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                  Collection
                </p>

                <h3 className="mt-3 font-display text-3xl uppercase">
                  {collection.title}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {collection.subtitle}
                </p>

                <Link
                  to="/shop"
                  search={{ q: collection.title }}
                  className="mt-6 inline-flex items-center gap-2 font-black uppercase tracking-[0.2em] text-primary"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>
            </article>
          ))}

        </div>

      </section>

      {/* BRAND MESSAGE */}
      <section className="border-y border-border bg-card py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <Crown className="mx-auto h-12 w-12 text-primary" />

          <h2 className="mt-6 font-display text-5xl uppercase md:text-7xl">
            STYLE DADDY
            <span className="block text-gradient-fire">
              MENSWEAR
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Every collection is designed to help modern men build
            a wardrobe that feels effortless, stylish, and
            confidence-driven. From oversized tees and cargo
            joggers to premium hoodies and streetwear essentials,
            Style Daddy creates collections that work together
            seamlessly.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="font-display text-5xl uppercase md:text-7xl">
            Ready To
            <span className="block text-gradient-fire">
              Build Your Fit?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore the latest collections and discover your next
            favourite outfit.
          </p>

          <Link
            to="/shop"
            search={{ q: "" }}
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-primary-foreground"
          >
            Shop Collection
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

    </main>
  );
}