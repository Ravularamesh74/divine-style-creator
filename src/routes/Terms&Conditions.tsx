import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  ReceiptText,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/Terms&Conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's terms and conditions for orders, pricing, payments, delivery, returns, exchanges, bulk orders, website use, and customer support.",
      },
    ],
  }),
  component: TermsConditions,
});

const termCards = [
  {
    icon: ShoppingBag,
    title: "Orders",
    text: "Order acceptance depends on product availability, correct customer details, payment status, and confirmation from Style Daddy.",
  },
  {
    icon: ReceiptText,
    title: "Pricing",
    text: "Prices, offers, discounts, and availability may change without prior notice. Final order value is confirmed at checkout or support confirmation.",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Delivery timelines depend on stock, location, order type, and logistics. Urgent orders should be confirmed before purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Policies",
    text: "Returns, refunds, cancellations, shipping, and payments are handled according to the relevant Style Daddy policy pages.",
  },
];

const conditions = [
  "Customers must provide accurate name, phone number, address, size, and order details.",
  "Style Daddy may cancel or refuse orders with incorrect details, unavailable stock, suspicious activity, or failed payment.",
  "Product colors may look slightly different due to screen brightness, camera lighting, or editing.",
  "Size and fit can vary slightly based on product style, fabric, wash, or oversized silhouette.",
  "Offers, sale items, clearance items, custom orders, and bulk orders may have special conditions.",
  "Using the website or placing an order means you agree to these terms and linked policy pages.",
];

const customerDuties = [
  "Check size, color, quantity, price, and delivery details before confirming.",
  "Contact support quickly for cancellation, exchange, return, or payment issues.",
  "Do not misuse the website, fake orders, payment screenshots, or support channels.",
  "Do not copy Style Daddy content, branding, product images, or designs without permission.",
];

const legalNotes = [
  {
    title: "Product Information",
    text: "We try to keep product details accurate, but availability, color, fabric, fit, and pricing may be updated as stock changes.",
  },
  {
    title: "Bulk Orders",
    text: "Bulk, custom, or reserved quantity orders may require advance payment and may not be cancellable after confirmation.",
  },
  {
    title: "Limitation",
    text: "Style Daddy is not responsible for delays caused by incorrect customer details, unreachable phone numbers, courier issues, traffic, weather, or external events.",
  },
];

function TermsConditions() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Store Terms
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Terms &
            <span className="block text-gradient-fire">Conditions</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            These terms explain how Style Daddy orders, pricing, payments,
            delivery, returns, exchanges, bulk orders, and website use are
            handled. Please read them before placing an order.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20have%20a%20terms%20and%20conditions%20question."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Ask Support
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {termCards.map((item) => (
          <article key={item.title} className="border border-border bg-card p-6">
            <item.icon className="h-9 w-9 text-primary" />
            <h2 className="mt-5 font-display text-3xl">{item.title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <FileText className="h-4 w-4" />
              Main Conditions
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Read Before
              <span className="block text-gradient-fire">You Order.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {conditions.map((condition) => (
              <div key={condition} className="flex gap-3 border border-border bg-background p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{condition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <UserCheck className="h-4 w-4" />
            Customer Responsibility
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
            Confirm Details.
            <span className="block text-gradient-fire">Avoid Issues.</span>
          </h2>

          <div className="mt-8 grid gap-4">
            {customerDuties.map((duty) => (
              <div key={duty} className="flex gap-3 border border-border bg-card p-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{duty}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-8">
          <Scale className="h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl">Additional Notes</h2>
          <div className="mt-6 grid gap-4">
            {legalNotes.map((note) => (
              <article key={note.title} className="border border-border bg-background p-5">
                <h3 className="font-display text-2xl">{note.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-16">
        <div className="mx-auto max-w-7xl border border-border bg-background p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="font-display text-4xl">Important Note</h2>
          </div>
          <p className="mt-5 max-w-4xl leading-8 text-muted-foreground">
            Style Daddy may update these terms when store operations, policies,
            payment methods, product range, or delivery processes change.
            Continued use of the website or ordering after updates means you
            accept the latest terms.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20have%20a%20terms%20question."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Ask about store terms.
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
            href="mailto:styledaddy@gmail.com?subject=Terms%20And%20Conditions%20-%20Style%20Daddy"
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
