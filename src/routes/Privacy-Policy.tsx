import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cookie,
  Database,
  Eye,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Style Daddy" },
      {
        name: "description",
        content:
          "Read Style Daddy's privacy policy to understand how customer information, order details, payment support data, cookies, and contact details are used and protected.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const privacyCards = [
  {
    icon: UserRound,
    title: "Information We Collect",
    text: "We may collect your name, phone number, email, address, size preference, order details, and support messages when you shop or contact us.",
  },
  {
    icon: ReceiptText,
    title: "Order Information",
    text: "Product selections, quantities, delivery details, payment status, and order history help us process and support your purchase.",
  },
  {
    icon: Lock,
    title: "Payment Safety",
    text: "We do not ask for sensitive passwords, OTPs, or full banking credentials. Payment verification should happen only through official Style Daddy channels.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    text: "The website may use cookies or basic analytics to improve browsing, remember preferences, and understand product interest.",
  },
];

const uses = [
  "To confirm and process your orders",
  "To contact you about delivery, payment, exchange, cancellation, or support",
  "To recommend sizing, availability, or product options",
  "To improve the website, product range, and customer experience",
  "To send drop alerts, offers, or updates when you choose to connect with us",
  "To prevent misuse, fraud, fake orders, or unauthorized activity",
];

const sharingRules = [
  {
    title: "Delivery Partners",
    text: "We may share required delivery details with shipping or local delivery partners only to complete your order.",
  },
  {
    title: "Payment Providers",
    text: "Payment status may be processed through banks, UPI, gateways, or payment partners based on your selected method.",
  },
  {
    title: "Legal Requirements",
    text: "Information may be shared if required by law, compliance, dispute resolution, or protection of business rights.",
  },
];

const customerRights = [
  "You can ask us to correct inaccurate contact or delivery information.",
  "You can request support about your order and payment records.",
  "You can choose not to receive promotional messages where applicable.",
  "You should contact us quickly if you believe your order or payment details were misused.",
];

function PrivacyPolicy() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Customer Data Promise
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Privacy
            <span className="block text-gradient-fire">Policy</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Style Daddy respects customer privacy. This policy explains what
            information we collect, why we use it, when it may be shared, and
            how you can contact us about your data.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309376811?text=Hi%20Style%20Daddy%2C%20I%20have%20a%20privacy%20policy%20question."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Privacy Help
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
        {privacyCards.map((item) => (
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
              <Database className="h-4 w-4" />
              How We Use Data
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Used For
              <span className="block text-gradient-fire">Your Order.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {uses.map((use) => (
              <div key={use} className="flex gap-3 border border-border bg-background p-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <Eye className="h-4 w-4" />
            Sharing Information
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
            Limited
            <span className="block text-gradient-fire">Sharing Only.</span>
          </h2>

          <div className="mt-8 grid gap-4">
            {sharingRules.map((rule) => (
              <article key={rule.title} className="border border-border bg-card p-6">
                <h3 className="font-display text-3xl">{rule.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{rule.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card p-8">
          <Lock className="h-10 w-10 text-primary" />
          <h2 className="mt-5 font-display text-4xl">Your Choices</h2>
          <ul className="mt-6 grid gap-4">
            {customerRights.map((right) => (
              <li key={right} className="flex gap-3 text-muted-foreground">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <a
            href="tel:+916309376811"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call Support</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              +91 63093 76811
            </p>
          </a>

          <a
            href="mailto:styledaddy@gmail.com?subject=Privacy%20Policy%20Question"
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
