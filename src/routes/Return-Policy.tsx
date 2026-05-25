import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  PackageCheck,
  Phone,
  RotateCcw,
  Ruler,
  ShieldCheck,
  Shirt,
  Sparkles,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/Return-Policy")({
  head: () => ({
    meta: [
      { title: "Return Policy - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's return policy for men's streetwear orders, size exchanges, product condition rules, return eligibility, and support.",
      },
    ],
  }),
  component: ReturnPolicy,
});

const returnCards = [
  {
    icon: Clock,
    title: "Raise Quickly",
    text: "Return or exchange requests should be raised as soon as possible after receiving the product.",
  },
  {
    icon: Shirt,
    title: "Unused Condition",
    text: "Products must be unused, unwashed, unaltered, and in original condition with tags or packing where applicable.",
  },
  {
    icon: Ruler,
    title: "Size Exchange",
    text: "Size exchange may be possible if the product is eligible and replacement stock is available.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection Required",
    text: "All returns are checked before approval, exchange, store credit, or refund processing.",
  },
];

const eligibleReturns = [
  "Wrong size delivered compared to confirmed order",
  "Wrong product, color, or design delivered",
  "Eligible unused product with valid return request",
  "Product issue reported with photos and order details",
  "Size exchange request approved before stock runs out",
];

const nonReturnable = [
  "Used, washed, damaged, stained, altered, or perfumed products",
  "Products without original packing, tags, or required proof where applicable",
  "Sale, clearance, custom, or final-sale products where return is not offered",
  "Bulk orders, reserved orders, or custom quantity orders after confirmation",
  "Returns requested without order number, phone number, or valid reason",
];

const process = [
  {
    step: "01",
    title: "Contact Support",
    text: "Share order number, phone number, product photos, and reason for return or exchange.",
  },
  {
    step: "02",
    title: "Eligibility Check",
    text: "Our team checks order status, product type, issue details, and policy eligibility.",
  },
  {
    step: "03",
    title: "Product Inspection",
    text: "Returned products are inspected for usage, washing, damage, tags, and original condition.",
  },
  {
    step: "04",
    title: "Resolution",
    text: "If approved, we guide you with exchange, store credit, replacement, or refund where applicable.",
  },
];

function ReturnPolicy() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Return & Exchange Support
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Return
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            This policy explains when Style Daddy products can be returned or
            exchanged, what condition is required, and how the return request is
            checked before approval.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20return%20or%20exchange%20support."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Return Help
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
        {returnCards.map((item) => (
          <article key={item.title} className="border border-border bg-card p-6">
            <item.icon className="h-9 w-9 text-primary" />
            <h2 className="mt-5 font-display text-3xl">{item.title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl">Eligible Returns</h2>
            </div>

            <div className="mt-6 grid gap-3">
              {eligibleReturns.map((item) => (
                <div key={item} className="flex gap-3 border border-border bg-background p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <XCircle className="h-8 w-8 text-primary" />
              <h2 className="font-display text-4xl">Not Returnable</h2>
            </div>

            <div className="mt-6 grid gap-3">
              {nonReturnable.map((item) => (
                <div key={item} className="flex gap-3 border border-border bg-background p-4">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <RotateCcw className="h-4 w-4" />
            Return Process
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
            Check.
            <span className="block text-gradient-fire">Then Resolve.</span>
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
        <div className="mx-auto max-w-7xl border border-border bg-background p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="font-display text-4xl">Important Note</h2>
          </div>
          <p className="mt-5 max-w-4xl leading-8 text-muted-foreground">
            Return approval is not automatic. The product must pass inspection
            and match the eligibility rules. If an exchange size is unavailable,
            Style Daddy will guide you with the next possible option.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20return%20or%20exchange%20support."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Fast return support.
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
            href="mailto:styledaddy@gmail.com?subject=Return%20Support%20-%20Style%20Daddy"
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
