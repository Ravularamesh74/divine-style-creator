import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgePercent,
  Flame,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import { useMemo } from "react";
import { useCart } from "@/hooks/use-cart";
import { WHATSAPP_NUMBER } from "@/lib/cart";
import { products } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Style Daddy" },
      {
        name: "description",
        content: "Review your Style Daddy cart and checkout on WhatsApp.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  const cartProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? { ...item, product } : undefined;
      })
      .filter(Boolean) as Array<
      (typeof items)[number] & { product: (typeof products)[number] }
    >;
  }, [items]);

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const oldTotal = cartProducts.reduce(
    (total, item) => total + item.product.oldPrice * item.quantity,
    0,
  );

  const savings = oldTotal - subtotal;
  const delivery = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + delivery;

  const checkoutMessage = encodeURIComponent(
    `Hi Style Daddy, I want to order:\n\n${cartProducts
      .map(
        (item) =>
          `${item.product.name} - Size ${item.size} - Qty ${item.quantity} - ₹${
            item.product.price * item.quantity
          }`,
      )
      .join("\n")}\n\nTotal: ₹${total}`,
  );

  if (cartProducts.length === 0) {
    return (
      <main className="relative isolate overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />

        <ShoppingBag className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-6 font-display text-6xl uppercase md:text-8xl">
          CART IS <span className="text-gradient-fire">EMPTY</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          No drops added yet. Go pick your fit and come back ready to checkout.
        </p>

        <Link
          to="/shop"
          search={{ q: undefined }}
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground"
        >
          Shop Drops
          <Flame className="h-5 w-5" />
        </Link>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-25" />

      <section className="mx-auto max-w-7xl px-6 py-14">
        <Link
          to="/shop"
          search={{ q: undefined }}
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                  Your Cart
                </p>
                <h1 className="mt-3 font-display text-6xl uppercase leading-none md:text-8xl">
                  BAGGED <span className="text-gradient-fire">DROPS</span>
                </h1>
              </div>

              <p className="font-black uppercase tracking-[0.22em] text-muted-foreground">
                {cartProducts.length} items
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {cartProducts.map((item) => (
                <article
                  key={`${item.productId}-${item.size}`}
                  className="grid gap-5 border border-border bg-card p-4 md:grid-cols-[9rem_1fr_auto]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="aspect-square w-full object-cover"
                  />

                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                      {item.product.category}
                    </p>
                    <h2 className="mt-2 font-display text-3xl">
                      {item.product.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Size {item.size} · ₹{item.product.price.toLocaleString()}{" "}
                      each
                    </p>

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId, item.size)}
                      className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">
                    <div className="flex items-center border border-border bg-background">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.quantity - 1,
                          )
                        }
                        className="grid h-11 w-11 place-items-center hover:text-primary"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="grid h-11 w-12 place-items-center font-black">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.size,
                            item.quantity + 1,
                          )
                        }
                        className="grid h-11 w-11 place-items-center hover:text-primary"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="font-display text-3xl text-gradient-fire">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="h-fit border border-border bg-card p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <BadgePercent className="h-7 w-7 text-primary" />
              <h2 className="font-display text-4xl">SUMMARY</h2>
            </div>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold">₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span className="font-bold">
                  {delivery === 0 ? "Free" : `₹${delivery}`}
                </span>
              </div>

              <div className="flex justify-between text-primary">
                <span>Savings</span>
                <span className="font-bold">₹{savings.toLocaleString()}</span>
              </div>

              <div className="mt-3 border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-black uppercase tracking-[0.2em]">
                    Total
                  </span>
                  <span className="font-display text-4xl text-gradient-fire">
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${checkoutMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-black"
            >
              <MessageCircle className="h-5 w-5" />
              Checkout On WhatsApp
            </a>

            <div className="mt-6 grid gap-3">
              <p className="flex items-center gap-3 border border-border bg-background p-4 text-sm font-bold">
                <Truck className="h-5 w-5 text-primary" />
                Free delivery above ₹999
              </p>

              <p className="flex items-center gap-3 border border-border bg-background p-4 text-sm font-bold">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Confirm order directly with store
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
