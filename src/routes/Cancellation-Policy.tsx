import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  PackageX,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/Cancellation-Policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's cancellation policy for men's streetwear orders, prepaid orders, COD orders, bulk orders, and dispatch timelines.",
      },
    ],
  }),
  component: CancellationPolicy,
});

const policyPoints = [
  {
    icon: Clock,
    title: "Cancel Before Dispatch",
    text: "Orders can usually be cancelled before they are packed or dispatched. Contact us as soon as possible with your order details.",
  },
  {
    icon: PackageX,
    title: "After Dispatch",
    text: "Once an order is dispatched, cancellation may not be possible. You may need to follow the return or exchange process after delivery.",
  },
  {
    icon: RotateCcw,
    title: "Prepaid Refunds",
    text: "For eligible prepaid cancellations, the refund will be processed to the original payment method after confirmation.",
  },
  {
    icon: ShieldCheck,
    title: "Bulk Orders",
    text: "Bulk, custom, or specially arranged orders may not be cancellable after confirmation because stock and sizing are reserved.",
  },
];

const steps = [
  "Share your order number, name, and registered phone number.",
  "Tell us the reason for cancellation.",
  "Our team will check the order status.",
  "If eligible, we will confirm cancellation and refund details.",
];

const notAllowed = [
  "Orders already dispatched or out for delivery",
  "Used, washed, altered, or damaged products",
  "Custom bulk orders after confirmation",
  "Cancellation requests with incomplete order details",
];

function CancellationPolicy() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Style Daddy Support
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Cancellation
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            We understand plans change. This page explains when a Style Daddy
            order can be cancelled, when cancellation may not be possible, and
            how to contact us quickly.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20want%20to%20cancel%20my%20order."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Support
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
        {policyPoints.map((item) => (
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
              <CheckCircle2 className="h-4 w-4" />
              How To Cancel
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Act Fast.
              <span className="block text-gradient-fire">Share Details.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="grid gap-3 border border-border bg-background p-5 md:grid-cols-[5rem_1fr]"
              >
                <div className="font-display text-4xl text-primary">
                  0{index + 1}
                </div>
                <p className="leading-7 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div className="border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            <h2 className="font-display text-4xl">Important Notes</h2>
          </div>

          <p className="mt-5 leading-8 text-muted-foreground">
            Cancellation approval depends on the current order status. If the
            product has already been packed, shipped, customized, or reserved
            for a confirmed bulk order, cancellation may be declined.
          </p>
        </div>

        <div className="border border-border bg-card p-8">
          <div className="flex items-center gap-3">
            <XCircle className="h-8 w-8 text-primary" />
            <h2 className="font-display text-4xl">Not Eligible</h2>
          </div>

          <ul className="mt-6 grid gap-3">
            {notAllowed.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <XCircle className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <a
            href="tel:+916309502357"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call Support</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              +91 6309502357
            </p>
          </a>

          <a
            href="mailto:styledaddy@gmail.com?subject=Order%20Cancellation%20Request"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Email Support</h3>
            <p className="mt-2 break-all text-muted-foreground group-hover:text-primary">
              styledaddy@gmail.com
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
