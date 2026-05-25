import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Clock,
  CreditCard,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";

export const Route = createFileRoute("/Payment-Policy")({
  head: () => ({
    meta: [
      { title: "Payment Policy - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's payment policy for prepaid orders, UPI, COD availability, failed payments, refunds, bulk orders, and payment support.",
      },
    ],
  }),
  component: PaymentPolicy,
});

const paymentOptions = [
  {
    icon: Smartphone,
    title: "UPI Payments",
    text: "UPI may be accepted for quick prepaid orders after product and stock confirmation.",
  },
  {
    icon: CreditCard,
    title: "Cards & Online Payment",
    text: "Online payment options depend on the active checkout or confirmed order process.",
  },
  {
    icon: Wallet,
    title: "COD Availability",
    text: "Cash on delivery may be available for selected orders and locations. Confirm before ordering.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Bulk Advance",
    text: "Bulk, custom, or reserved quantity orders may require advance payment before processing.",
  },
];

const rules = [
  "Payment must be completed or confirmed before prepaid orders are processed.",
  "For WhatsApp orders, share payment screenshot only with the official Style Daddy contact.",
  "Do not make payment to unknown numbers, personal accounts, or unofficial links.",
  "Order confirmation depends on payment status, product availability, and correct customer details.",
  "Bulk order pricing, advance amount, and balance payment will be confirmed before processing.",
];

const failedPaymentSteps = [
  {
    icon: Clock,
    title: "Wait A Few Minutes",
    text: "Sometimes payment status takes time to update from bank or payment provider side.",
  },
  {
    icon: ReceiptText,
    title: "Check Debit Status",
    text: "If money was not debited, you can retry payment or contact us for another option.",
  },
  {
    icon: RefreshCcw,
    title: "If Amount Was Debited",
    text: "Share transaction ID, screenshot, order details, and phone number so we can verify.",
  },
];

const refundNotes = [
  "Eligible refunds are processed after cancellation, return, or failed payment verification.",
  "Refunds for prepaid orders are usually sent back through the original payment route where possible.",
  "Refund timing can depend on bank, UPI, card, or payment gateway processing time.",
  "Shipping, handling, or custom order charges may not be refundable in some cases.",
];

function PaymentPolicy() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Secure Checkout Support
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Payment
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            This page explains how payments work at Style Daddy, including UPI,
            prepaid orders, COD availability, bulk order advance payments,
            failed transactions, and refund support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20need%20payment%20support."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Payment Help
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
        {paymentOptions.map((item) => (
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
              Payment Rules
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Pay Safe.
              <span className="block text-gradient-fire">Order Smart.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {rules.map((rule) => (
              <div key={rule} className="flex gap-3 border border-border bg-background p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <AlertTriangle className="h-4 w-4" />
            Failed Payments
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
            Debited But
            <span className="block text-gradient-fire">Not Confirmed?</span>
          </h2>

          <div className="mt-8 grid gap-4">
            {failedPaymentSteps.map((item) => (
              <article key={item.title} className="border border-border bg-card p-6">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-8">
          <Landmark className="h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl">Refund Notes</h2>
          <ul className="mt-6 grid gap-4">
            {refundNotes.map((note) => (
              <li key={note} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{note}</span>
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
            href="mailto:styledaddy@gmail.com?subject=Payment%20Support%20-%20Style%20Daddy"
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
