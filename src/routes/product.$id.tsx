import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Instagram, Check } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-display text-6xl">404</h1>
      <p className="mt-2 text-muted-foreground">This drop doesn't exist.</p>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-fire px-6 py-3 font-bold">Back to Shop</Link>
    </div>
  );
}

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl">Something broke.</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-fire px-6 py-3 font-bold">Try again</button>
    </div>
  );
}

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = products.find((x) => x.id === params.id);
    return {
      meta: [
        { title: p ? `${p.name} — Style Daddy` : "Product — Style Daddy" },
        { name: "description", content: p?.description ?? "Style Daddy product" },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <NotFound />;
  const off = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const related = products.filter((p) => p.id !== id).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {product.badge && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-fire px-4 py-1.5 text-xs font-bold tracking-widest text-primary-foreground">
              {product.badge}
            </span>
          )}
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-display tracking-widest text-accent">{product.category}</p>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">{product.name}</h1>
          <div className="mt-6 flex items-baseline gap-3 flex-wrap">
            <span className="font-display text-5xl text-gradient-fire">₹{product.price.toLocaleString()}</span>
            <span className="text-xl text-muted-foreground line-through">₹{product.oldPrice.toLocaleString()}</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-widest">-{off}% OFF</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <p className="font-display tracking-widest text-sm text-muted-foreground">SELECT SIZE</p>
            <div className="mt-3 flex gap-2">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <button key={s} className="h-12 w-12 rounded-full border border-border font-bold hover:border-primary hover:text-primary transition">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-fire px-8 py-4 font-bold tracking-widest text-primary-foreground animate-pulse-glow"
          >
            <Instagram className="h-5 w-5" /> DM TO ORDER
          </a>

          <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
            {["Premium cotton blend", "Pre-shrunk + colorfast", "Pickup or DM delivery in Hyderabad"].map((f) => (
              <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-4xl">YOU MIGHT ALSO <span className="text-gradient-fire">LIKE</span></h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
