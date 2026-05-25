import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const off = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:-translate-y-1 hover:glow-fire"
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-fire px-3 py-1 text-[10px] font-bold tracking-widest text-primary-foreground">
          {product.badge}
        </span>
      )}
      <span className="absolute right-3 top-3 z-10 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest text-accent">
        -{off}%
      </span>
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-display tracking-widest text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-display text-xl tracking-wide group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
