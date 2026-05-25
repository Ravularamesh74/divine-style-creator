import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  CreditCard,
  Mail,
  MessageCircle,
  Phone,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's refund policy for prepaid orders, failed payments, cancellations, returns, bulk orders, and refund timelines.",
      },
    ],
  }),
  component: RefundPolicy,
});

const refundCards = [
  {
    icon: RefreshCcw,
    title: "Eligible Refunds",
    text: "Refunds may apply for approved cancellations, approved returns, duplicate payments, or verified failed payment cases.",
  },
  {
    icon: CreditCard,
    title: "Original Payment Method",
    text: "Where possible, prepaid refunds are processed back to the same payment method used for the order.",
  },
  {
    icon: Clock,
    title: "Processing Time",
    text: "Refund timelines may depend on bank, UPI, card, or payment gateway processing after approval.",
  },
  {
    icon: ShieldCheck,
    title: "Verification Required",
    text: "Order number, payment proof, customer phone number, and reason may be required before refund approval.",
  },
];

const eligibleCases = [
  "Order cancelled before packing or dispatch and approved by Style Daddy",
  "Product return approved under the return policy",
  "Payment debited but order not confirmed after verification",
  "Duplicate payment received for the same order",
  "Product unavailable after successful prepaid payment",
];

const nonRefundableCases = [
  "Products used, washed, damaged, altered, or missing original condition",
  "Orders already delivered with no valid return or issue request",
  "Custom, reserved, or bulk orders after confirmation",
  "Shipping, handling, or convenience charges where applicable",
  "Incorrect customer details causing failed delivery or delay",
];

const process = [
  {
    step: "01",
    title: "Raise Request",
    text: "Contact Style Daddy with your order number, phone number, payment proof, and reason.",
  },
  {
    step: "02",
    title: "Verification",
    text: "Our team checks payment, order status, product condition, and policy eligibility.",
  },
  {
    step: "03",
    title: "Approval",
    text: "If eligible, we confirm the refund amount, method, and expected processing timeline.",
  },
  {
    step: "04",
    title: "Refund Processing",
    text: "The refund is initiated through the suitable payment route after approval.",
  },
];

function RefundPolicy() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Refund Support
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Refund
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            This policy explains when refunds may be approved, how refund
            requests are verified, which charges may not be refundable, and how
            to contact Style Daddy for payment support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20refund%20support."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Refund Help
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
        {refundCards.map((item) => (
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
              <h2 className="font-display text-4xl">Eligible Cases</h2>
            </div>

            <div className="mt-6 grid gap-3">
              {eligibleCases.map((item) => (
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
              <h2 className="font-display text-4xl">Not Refundable</h2>
            </div>

            <div className="mt-6 grid gap-3">
              {nonRefundableCases.map((item) => (
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
            <ReceiptText className="h-4 w-4" />
            Refund Process
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
            Verified.
            <span className="block text-gradient-fire">Then Processed.</span>
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
            Refund approval is not automatic. Every request is checked against
            order status, payment status, product condition, delivery status,
            and the applicable Style Daddy return or cancellation policy.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20refund%20support."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Fast refund support.
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
            href="mailto:styledaddy@gmail.com?subject=Refund%20Support%20-%20Style%20Daddy"
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
