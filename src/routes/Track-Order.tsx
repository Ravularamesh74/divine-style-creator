import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track Order - Style Daddy" },
      {
        name: "description",
        content:
          "Track your Style Daddy order status, delivery progress, pickup details, and get WhatsApp support for menswear orders in Hyderabad.",
      },
    ],
  }),
  component: TrackOrder,
});

const statusSteps = [
  {
    icon: ReceiptText,
    title: "Order Received",
    text: "Your order details, product, size, color, and quantity are recorded.",
  },
  {
    icon: ShieldCheck,
    title: "Confirmed",
    text: "Stock, payment, customer details, and delivery method are checked.",
  },
  {
    icon: PackageCheck,
    title: "Packed",
    text: "Your Style Daddy products are checked and packed for delivery or pickup.",
  },
  {
    icon: Truck,
    title: "Out For Delivery",
    text: "Delivery coordination begins based on your location and order type.",
  },
];

const neededDetails = [
  "Order number or product name",
  "Registered phone number",
  "Customer name",
  "Delivery area or pincode",
  "Payment screenshot if payment issue exists",
];

const supportNotes = [
  "Tracking updates may depend on delivery partner or local delivery status.",
  "If your order is urgent, contact us on WhatsApp for the fastest update.",
  "Bulk orders may take longer due to quantity, sizes, and packing.",
  "Store pickup should be done only after confirmation from Style Daddy.",
];

function TrackOrder() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-4 w-4" />
              Order Tracking
            </span>

            <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
              Track
              <span className="block text-gradient-fire">Your Order</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Check your Style Daddy order status, delivery progress, pickup
              confirmation, or bulk order update. Keep your phone number and
              order details ready for faster support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20want%20to%20track%20my%20order."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                Track On WhatsApp
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

          <div className="border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <Search className="h-10 w-10 text-primary" />
              <div>
                <h2 className="font-display text-3xl">Find Order</h2>
                <p className="text-sm text-muted-foreground">
                  Enter details and message support.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <input
                className="border border-border bg-background px-5 py-4 outline-none focus:border-primary"
                placeholder="Order number"
              />
              <input
                className="border border-border bg-background px-5 py-4 outline-none focus:border-primary"
                placeholder="Registered phone number"
              />
              <input
                className="border border-border bg-background px-5 py-4 outline-none focus:border-primary"
                placeholder="Customer name"
              />
            </div>

            <a
              href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20please%20help%20me%20track%20my%20order."
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-fire px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground transition hover:-translate-y-1"
            >
              Send Tracking Request
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {statusSteps.map((item) => (
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
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <ReceiptText className="h-4 w-4" />
              Keep Ready
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Details Help
              <span className="block text-gradient-fire">Track Faster.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {neededDetails.map((detail) => (
              <div key={detail} className="flex gap-3 border border-border bg-background p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-border bg-card p-8">
          <Clock className="h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl">Tracking Notes</h2>
          <div className="mt-6 grid gap-4">
            {supportNotes.map((note) => (
              <div key={note} className="flex gap-3 border border-border bg-background p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-8">
          <MapPin className="h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl">Pickup Location</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Store pickup may be available from New Raghavendra Nagar, Nacharam,
            Hyderabad - 500076. Please confirm your product is ready before
            visiting.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309502357?text=Hi%20Style%20Daddy%2C%20I%20want%20to%20track%20my%20order."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Fastest tracking support.
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
            href="mailto:styledaddy@gmail.com?subject=Track%20Order%20-%20Style%20Daddy"
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
