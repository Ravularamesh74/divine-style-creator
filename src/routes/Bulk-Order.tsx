import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Boxes,
  Check,
  Clock,
  Crown,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/Bulk-Order")({
  head: () => ({
    meta: [
      { title: "Bulk Order - Style Daddy" },
      {
        name: "description",
        content:
          "Bulk order men's streetwear from Style Daddy. Oversized tees, hoodies, cargos, co-ord sets, uniforms, event outfits, college drops, and custom quantity support in Hyderabad.",
      },
    ],
  }),
  component: BulkOrder,
});

const benefits = [
  {
    icon: BadgePercent,
    title: "Bulk Pricing",
    text: "Better pricing for higher quantities on tees, hoodies, cargos, and combo fits.",
  },
  {
    icon: Shirt,
    title: "Menswear Range",
    text: "Oversized tees, daily basics, hoodies, joggers, cargos, and streetwear sets.",
  },
  {
    icon: PackageCheck,
    title: "Order Support",
    text: "Get help with sizes, colors, quantity planning, and delivery coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Local Trust",
    text: "Nacharam-based support for colleges, events, teams, stores, and creators.",
  },
];

const orderTypes = [
  "College groups and student clubs",
  "Dance crews and event teams",
  "Corporate casual wear and staff outfits",
  "Influencer merch and creator drops",
  "Retail resale and boutique sourcing",
  "Birthday squads, trips, and friend groups",
];

const quantityTiers = [
  { qty: "10-24 pcs", label: "Starter Bulk", note: "Best for friends, small events, and quick group fits." },
  { qty: "25-49 pcs", label: "Crew Drop", note: "Ideal for college teams, creators, and local campaigns." },
  { qty: "50+ pcs", label: "Power Order", note: "Priority quote support for bigger drops and repeat orders." },
];

const process = [
  {
    step: "01",
    title: "Send Requirement",
    text: "Tell us product type, quantity, sizes, colors, deadline, and delivery area.",
  },
  {
    step: "02",
    title: "Get Quote",
    text: "We share pricing, availability, estimated timeline, and style recommendations.",
  },
  {
    step: "03",
    title: "Confirm Order",
    text: "Finalize sizes, payment, and delivery details with direct support.",
  },
  {
    step: "04",
    title: "Receive Drop",
    text: "Your bulk order gets packed and delivered with clear coordination.",
  },
];

function BulkOrder() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-4 w-4" />
              Bulk Menswear Orders
            </span>

            <h1 className="mt-7 font-display text-6xl uppercase leading-none md:text-8xl">
              Order More.
              <span className="block text-gradient-fire">Pay Smarter.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Get Style Daddy streetwear in bulk for colleges, crews, events,
              teams, creators, and resale. Oversized tees, hoodies, cargos, and
              complete men&apos;s fits with local Hyderabad support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20want%20to%20place%20a%20bulk%20order."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Quote
              </a>

              <a
                href="mailto:styledaddy@gmail.com?subject=Bulk%20Order%20Enquiry%20-%20Style%20Daddy"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Mail Details
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <Crown className="h-10 w-10 text-primary" />
              <div>
                <h2 className="font-display text-3xl">Bulk Enquiry</h2>
                <p className="text-sm text-muted-foreground">
                  Share the basics and we will respond fast.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <input className="border border-border bg-background px-5 py-4 outline-none focus:border-primary" placeholder="Name / Team / College" />
              <input className="border border-border bg-background px-5 py-4 outline-none focus:border-primary" placeholder="Phone number" />
              <input className="border border-border bg-background px-5 py-4 outline-none focus:border-primary" placeholder="Product needed: tees, hoodies, cargos..." />
              <input className="border border-border bg-background px-5 py-4 outline-none focus:border-primary" placeholder="Quantity and deadline" />
              <textarea className="min-h-28 border border-border bg-background px-5 py-4 outline-none focus:border-primary" placeholder="Sizes, colors, delivery area, custom notes" />
            </div>

            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20want%20bulk%20order%20details."
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-fire px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground transition hover:-translate-y-1"
            >
              Send On WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <article key={item.title} className="border border-border bg-card p-6">
            <item.icon className="h-9 w-9 text-primary" />
            <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Boxes className="h-4 w-4" />
              Quantity Tiers
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Bigger Order.
              <span className="block text-gradient-fire">Better Deal.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {quantityTiers.map((tier) => (
              <div
                key={tier.qty}
                className="grid gap-3 border border-border bg-background p-5 md:grid-cols-[10rem_12rem_1fr]"
              >
                <div className="font-display text-3xl text-primary">{tier.qty}</div>
                <div className="font-black uppercase tracking-[0.16em]">{tier.label}</div>
                <p className="leading-7 text-muted-foreground">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <Users className="h-4 w-4" />
            Best For
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
            Group Fits
            <span className="block text-gradient-fire">That Hit.</span>
          </h2>

          <div className="mt-8 grid gap-3">
            {orderTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 border border-border bg-card p-4">
                <Check className="h-5 w-5 text-primary" />
                <span className="font-bold">{type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {process.map((item) => (
            <article key={item.step} className="border border-border bg-card p-6">
              <div className="font-display text-5xl text-gradient-fire">{item.step}</div>
              <h3 className="mt-3 font-display text-3xl">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="border border-border bg-card p-6">
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call</h3>
            <a href="tel:+916309502357" className="mt-2 block text-muted-foreground hover:text-primary">
              +91 6309502357
            </a>
          </div>

          <div className="border border-border bg-card p-6">
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Email</h3>
            <a href="mailto:styledaddy@gmail.com" className="mt-2 block break-all text-muted-foreground hover:text-primary">
              styledaddy@gmail.com
            </a>
          </div>

          <div className="border border-border bg-card p-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Visit</h3>
            <p className="mt-2 text-muted-foreground">
              Nacharam, Hyderabad - 500076
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
