import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/shipping-delivery")({
  head: () => ({
    meta: [
      { title: "Shopping & Delivery - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's shopping and delivery policy for local Hyderabad delivery, store pickup, order processing, delivery timelines, bulk orders, and support.",
      },
    ],
  }),
  component: ShoppingDelivery,
});

const deliveryCards = [
  {
    icon: Truck,
    title: "Local Delivery",
    text: "Delivery support may be available for Hyderabad customers based on location, order value, and product availability.",
  },
  {
    icon: Store,
    title: "Store Pickup",
    text: "Pickup from Nacharam may be available after confirming stock and order details with Style Daddy.",
  },
  {
    icon: Clock,
    title: "Processing Time",
    text: "Orders are processed after stock, size, payment, and customer details are confirmed.",
  },
  {
    icon: PackageCheck,
    title: "Bulk Delivery",
    text: "Bulk order timelines depend on quantity, sizes, stock arrangement, packing, and delivery location.",
  },
];

const deliveryRules = [
  "Delivery time depends on product availability, order confirmation, and customer location.",
  "Correct name, phone number, address, and landmark are required for smooth delivery.",
  "If delivery fails due to incorrect details or no response, re-delivery may take extra time.",
  "Urgent orders should be confirmed on WhatsApp before placing the order.",
  "Bulk and custom orders may need additional processing time before dispatch or pickup.",
];

const process = [
  {
    step: "01",
    title: "Order Confirmed",
    text: "We confirm product, size, color, quantity, payment status, and delivery details.",
  },
  {
    step: "02",
    title: "Packed",
    text: "Your items are checked and packed for delivery or store pickup.",
  },
  {
    step: "03",
    title: "Out For Delivery",
    text: "Delivery coordination starts based on location, availability, and chosen method.",
  },
  {
    step: "04",
    title: "Delivered",
    text: "Receive your Style Daddy fit and check the package at the time of delivery.",
  },
];

const importantNotes = [
  "Delivery charges, if any, may vary based on location and order type.",
  "Public holidays, weather, traffic, or stock delays can affect delivery timelines.",
  "Customers should be reachable on the phone number shared with the order.",
  "Store pickup should be done only after confirmation from Style Daddy.",
];

function ShoppingDelivery() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Shipping & Delivery
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Delivery
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            This page explains how Style Daddy handles order processing, local
            delivery, pickup, bulk order timelines, delivery details, and support
            for Hyderabad menswear customers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309376811?text=Hi%20Style%20Daddy%2C%20I%20need%20delivery%20support."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Delivery Help
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

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {deliveryCards.map((item) => (
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
              <ShieldCheck className="h-4 w-4" />
              Delivery Rules
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Clear Details.
              <span className="block text-gradient-fire">Fast Delivery.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {deliveryRules.map((rule) => (
              <div key={rule} className="flex gap-3 border border-border bg-background p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <PackageCheck className="h-4 w-4" />
            Order Journey
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
            From Cart
            <span className="block text-gradient-fire">To Closet.</span>
          </h2>
        </div>

        <div className="grid gap-4">
          {process.map((item) => (
            <article
              key={item.step}
              className="grid gap-4 border border-border bg-card p-6 md:grid-cols-[5rem_1fr]"
            >
              <div className="font-display text-5xl text-gradient-fire">
                {item.step}
              </div>
              <div>
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl">Important Notes</h2>
            </div>
            <ul className="mt-6 grid gap-4">
              {importantNotes.map((note) => (
                <li key={note} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <Home className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl">Store Pickup</h2>
            </div>
            <p className="mt-5 leading-8 text-muted-foreground">
              Pickup from Style Daddy at Nacharam may be available after product
              and payment confirmation. Please contact us before visiting so
              your item can be kept ready.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309376811?text=Hi%20Style%20Daddy%2C%20I%20need%20delivery%20support."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Fast delivery support.
            </p>
          </a>

          <a
            href="tel:+916309376811"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              +91 63093 76811
            </p>
          </a>

          <a
            href="mailto:styledaddy@gmail.com?subject=Delivery%20Support%20-%20Style%20Daddy"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Email</h3>
            <p className="mt-2 break-all text-muted-foreground group-hover:text-primary">
              styledaddy@gmail.com
            </p>
          </a>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl items-start gap-3 border border-border bg-card p-6 text-muted-foreground">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <p>
            Store area: New Raghavendra Nagar, Nacharam, Hyderabad - 500076.
            Contact before visiting for product availability and pickup timing.
          </p>
        </div>
      </section>
    </main>
  );
}
