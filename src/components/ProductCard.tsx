import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Eye,
  Flame,
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import { useState } from "react";

import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  return (
    <article className="group relative overflow-hidden border border-border bg-card transition duration-500 hover:-translate-y-3 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-28 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      {product.badge && (
        <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-lg bg-fire px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-primary-foreground">
          <Flame className="h-3.5 w-3.5" />
          {product.badge}
        </div>
      )}

      <div className="absolute right-4 top-4 z-20 rounded-lg bg-red-500 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white">
        -{discount}%
      </div>

      <button
        type="button"
        onClick={() => setLiked((value) => !value)}
        className={`absolute right-4 top-16 z-20 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition duration-300 md:opacity-0 md:group-hover:opacity-100 ${
          liked
            ? "border-red-500 bg-red-500 text-white"
            : "border-border bg-background/70 hover:border-red-500 hover:text-red-500"
        }`}
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={liked ? "h-5 w-5 fill-current" : "h-5 w-5"} />
      </button>

      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-background">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70" />

          <div className="absolute bottom-5 left-5 right-5 flex translate-y-6 items-center justify-between opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-lg bg-background/90 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] backdrop-blur">
              <Eye className="h-4 w-4" />
              View Drop
            </span>

            <ArrowUpRight className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
            {product.category}
          </p>

          <h3 className="mt-3 line-clamp-2 font-display text-2xl leading-none transition group-hover:text-primary">
            {product.name}
          </h3>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="font-display text-4xl text-gradient-fire">
                ₹{product.price.toLocaleString()}
              </div>

              <div className="mt-1 text-sm text-muted-foreground line-through">
                ₹{product.oldPrice.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-2 border-t border-border">
        <Link
          to="/product/$id"
          params={{ id: product.id }}
          className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingBag className="h-4 w-4" />
          Details
        </Link>

        <button
          type="button"
          onClick={() => {
            addToCart({ productId: product.id, size: "M", quantity: 1 });
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className="inline-flex items-center justify-center gap-2 border-l border-border bg-green-500 px-4 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:brightness-110"
        >
          <ShoppingBag className="h-4 w-4" />
          {added ? "Added" : "Add"}
        </button>
      </div>
    </article>
  );
}