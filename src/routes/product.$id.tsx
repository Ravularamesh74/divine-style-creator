import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  Flame,
  Instagram,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/lib/products";

function NotFound() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-28 text-center">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-35" />

      <div className="mx-auto max-w-2xl">
        <p className="font-black uppercase tracking-[0.4em] text-primary">
          Missing Drop
        </p>
        <h1 className="mt-4 font-display text-8xl text-gradient-fire md:text-9xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          This drop does not exist or already left the rack.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground"
        >
          Back To Shop
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <Zap className="mx-auto h-10 w-10 text-primary" />
      <h1 className="mt-5 font-display text-5xl">Something Broke</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>

      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-8 inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 font-black uppercase tracking-[0.22em] text-primary-foreground"
      >
        Try Again
        <RotateCcw className="h-5 w-5" />
      </button>
    </main>
  );
}

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = products.find((x) => x.id === params.id);

    return {
      meta: [
        { title: p ? `${p.name} — Style Daddy` : "Product — Style Daddy" },
        {
          name: "description",
          content: p?.description ?? "Style Daddy product",
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProductPage,
});

const sizes = ["S", "M", "L", "XL", "XXL"];

const promises = [
  { icon: ShieldCheck, text: "Quality checked fit" },
  { icon: Truck, text: "Hyderabad pickup support" },
  { icon: PackageCheck, text: "DM order confirmation" },
];

function ProductPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);
  if (!product) return <NotFound />;

  const off = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  const related = products.filter((p) => p.id !== id).slice(0, 3);

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-25" />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back To Shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl" />

            <div className="relative overflow-hidden border border-border bg-card">
              {product.badge && (
                <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-lg bg-fire px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-primary-foreground">
                  <Flame className="h-4 w-4" />
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {promises.map((item) => (
                <div
                  key={item.text}
                  className="border border-border bg-card p-4 text-center"
                >
                  <item.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center border border-border bg-card p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-accent">
                <Sparkles className="h-4 w-4" />
                {product.category}
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-primary">
                <BadgeCheck className="h-4 w-4" />
                Verified Drop
              </span>
            </div>

            <h1 className="mt-6 font-display text-5xl uppercase leading-none md:text-7xl">
              {product.name}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="font-display text-6xl text-gradient-fire">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-2xl text-muted-foreground line-through">
                ₹{product.oldPrice.toLocaleString()}
              </span>
              <span className="rounded-lg bg-accent px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-accent-foreground">
                -{off}% Off
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">
                Select Size
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-13 w-14 border font-black transition ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart({
                    productId: product.id,
                    size: selectedSize,
                    quantity: 1,
                  });
                  setAdded(true);
                  setTimeout(() => setAdded(false), 2000);
                }}
                className="inline-flex flex-1 items-center justify-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1"
              >
                <ShoppingBag className="h-5 w-5" />
                {added ? "Added To Cart" : `Add Size ${selectedSize} To Cart`}
              </button>

              <button
                type="button"
                onClick={() => navigate({ to: "/cart" })}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-border bg-background px-6 py-4 text-sm font-black uppercase tracking-[0.24em] transition hover:border-primary hover:text-primary"
              >
                View Cart
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <a
              href={`https://instagram.com/_style_daddy_`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              Or DM on Instagram
            </a>

            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground">
              {[
                "Premium cotton blend",
                "Pre-shrunk and colorfast",
                "Pickup or DM delivery in Hyderabad",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Star className="h-4 w-4" />
              More Heat
            </span>

            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              You Might Also
              <span className="block text-gradient-fire">Like</span>
            </h2>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-black uppercase tracking-[0.22em] text-primary"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}