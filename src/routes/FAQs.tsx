import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/FAQs")({
  head: () => ({
    meta: [
      { title: "FAQs - Style Daddy" },
      {
        name: "description",
        content:
          "Find answers about Style Daddy orders, sizing, delivery, returns, exchanges, payments, bulk orders, and menswear support.",
      },
    ],
  }),
  component: FAQs,
});

const categories = [
  {
    icon: ShoppingBag,
    title: "Orders",
    faqs: [
      {
        q: "How do I place an order?",
        a: "Choose your product, confirm size and quantity, then place the order through the website or contact Style Daddy directly on WhatsApp for quick help.",
      },
      {
        q: "Can I order through WhatsApp?",
        a: "Yes. You can message us with the product name, size, color, quantity, and delivery details. Our team will guide you with availability and payment.",
      },
      {
        q: "Can I change my order after placing it?",
        a: "Order changes are possible only before packing or dispatch. Contact us as fast as possible with your order details.",
      },
    ],
  },
  {
    icon: Ruler,
    title: "Size & Fit",
    faqs: [
      {
        q: "How do I choose the right size?",
        a: "For a regular fit, choose your usual size. For a streetwear oversized fit, go one size up. If you are unsure, send us your height, weight, and preferred fit on WhatsApp.",
      },
      {
        q: "Are oversized tees really oversized?",
        a: "Yes. Oversized pieces are designed with relaxed shoulders, wider chest space, and a streetwear shape. Check the product details before ordering.",
      },
      {
        q: "Do cargos and joggers fit true to size?",
        a: "Most bottoms are designed for comfortable movement. If you prefer a looser street fit, choose one size up or ask us before ordering.",
      },
    ],
  },
  {
    icon: Truck,
    title: "Shipping",
    faqs: [
      {
        q: "Where do you deliver?",
        a: "Style Daddy supports local Hyderabad customers and can guide delivery based on your location. Share your address or pincode for confirmation.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery time depends on stock availability, order size, and location. For urgent orders, contact us before placing the order.",
      },
      {
        q: "Can I pick up from the store?",
        a: "Store pickup may be available from Nacharam. Contact us before visiting so we can confirm product availability.",
      },
    ],
  },
  {
    icon: PackageCheck,
    title: "Returns & Exchange",
    faqs: [
      {
        q: "Can I return a product?",
        a: "Returns depend on product condition, order type, and policy eligibility. Products should be unused, unwashed, and in original condition.",
      },
      {
        q: "Can I exchange size?",
        a: "Size exchange may be possible if stock is available and the product is unused. Contact us quickly with your order details.",
      },
      {
        q: "Are sale products returnable?",
        a: "Sale, clearance, custom, and bulk order items may have limited return or exchange options. Check before ordering.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Payments & Bulk",
    faqs: [
      {
        q: "What payment methods are accepted?",
        a: "Payment options may include online payment, UPI, and other supported methods. Our team will confirm available payment options during checkout or WhatsApp order.",
      },
      {
        q: "Do you take bulk orders?",
        a: "Yes. We support bulk orders for colleges, teams, events, crews, creators, and resale. Share product type, quantity, sizes, and deadline for a quote.",
      },
      {
        q: "Do bulk orders get special pricing?",
        a: "Bulk pricing depends on quantity, product type, availability, and deadline. Higher quantity orders can receive better pricing.",
      },
    ],
  },
];

function FAQs() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Help Center
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Frequently Asked
            <span className="block text-gradient-fire">Questions</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Everything customers usually ask before buying Style Daddy
            streetwear: orders, fit, delivery, returns, payments, and bulk
            menswear orders.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Ask On WhatsApp
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-5">
        {categories.map((category) => (
          <div key={category.title} className="border border-border bg-card p-5">
            <category.icon className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-3xl">{category.title}</h2>
          </div>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8">
          {categories.map((category) => (
            <div key={category.title}>
              <div className="mb-5 flex items-center gap-3">
                <category.icon className="h-7 w-7 text-primary" />
                <h2 className="font-display text-4xl">{category.title}</h2>
              </div>

              <div className="grid gap-4">
                {category.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-border bg-background p-5"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-black uppercase tracking-[0.08em]">
                        {faq.q}
                      </span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20help."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Fast support for orders and size help.
            </p>
          </a>

          <a
            href="tel:+916309502357"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              +91 6309502357
            </p>
          </a>

          <a
            href="mailto:styledaddy@gmail.com?subject=Style%20Daddy%20Support"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Email</h3>
            <p className="mt-2 break-all text-muted-foreground group-hover:text-primary">
              styledaddy@gmail.com
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
