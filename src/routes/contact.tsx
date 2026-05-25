import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Copy,
  Flame,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Style Daddy" },
      {
        name: "description",
        content:
          "Contact Style Daddy for orders, collaborations, support and inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const phone = "+91 96406 39926";
const address =
  "7-26/3, Opp CS Brother, New Raghavendra Nagar, Nacharam, Hyderabad - 500076";

const contactCards = [
  {
    title: "WhatsApp",
    value: phone,
    href: "https://wa.me/919640639926",
    icon: MessageCircle,
    tone: "text-green-500 hover:border-green-500",
  },
  {
    title: "Call Direct",
    value: "10 AM - 9 PM",
    href: "tel:+919640639926",
    icon: Phone,
    tone: "text-primary hover:border-primary",
  },
  {
    title: "Instagram",
    value: "@_style_daddy_",
    href: "https://instagram.com/_style_daddy_",
    icon: Instagram,
    tone: "text-pink-500 hover:border-pink-500",
  },
];

const quickInfo = [
  { label: "Response", value: "Fast replies", icon: Zap },
  { label: "Orders", value: "Pickup & support", icon: Store },
  { label: "Trust", value: "Local store", icon: ShieldCheck },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-30" />

      <section className="relative isolate px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary">
              <Sparkles className="h-4 w-4" />
              Contact Style Daddy
            </span>

            <h1 className="mt-8 font-display text-6xl uppercase leading-none md:text-8xl xl:text-9xl">
              TALK TO
              <span className="block text-gradient-fire">STYLE DADDY</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Orders, collaborations, support, styling help, store visits, or
              custom inquiries. Reach us fast and get the fit sorted.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919640639926"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1"
              >
                WhatsApp Now
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+919640639926"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-7 py-4 text-sm font-black uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                Call Store
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg border border-border bg-card p-6 shadow-2xl shadow-primary/10">
            <div className="border border-primary/20 bg-background p-8 text-center">
              <img
                src={logo}
                alt="Style Daddy"
                className="mx-auto h-40 w-40 rounded-full ring-4 ring-primary glow-fire animate-float"
              />

              <div className="mt-8 flex items-center justify-center gap-2 text-primary">
                <Flame className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-[0.35em]">
                  Nacharam Drip Line
                </span>
              </div>

              <p className="mt-5 font-display text-4xl leading-none">
                STREETWEAR HELP DESK
              </p>

              <div className="mt-8 grid gap-3">
                {quickInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border border-border bg-card px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm font-bold text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className={`group border border-border bg-card p-8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${card.tone}`}
            >
              <card.icon className="h-10 w-10" />
              <h3 className="mt-6 font-display text-3xl">{card.title}</h3>
              <p className="mt-3 text-muted-foreground">{card.value}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em]">
                Open
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="border border-border bg-card p-6 md:p-10">
            <div className="flex items-center gap-3">
              <Send className="h-7 w-7 text-primary" />
              <h2 className="font-display text-4xl md:text-5xl">
                SEND A MESSAGE
              </h2>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 grid gap-5"
            >
              <input
                required
                placeholder="Your Name"
                className="w-full border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <textarea
                required
                rows={6}
                placeholder="Tell us what you need"
                className="w-full resize-none border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <button
                type="submit"
                className="inline-flex w-fit items-center gap-3 rounded-lg bg-fire px-8 py-4 font-black uppercase tracking-[0.22em] text-primary-foreground transition hover:-translate-y-1"
              >
                <Send className="h-5 w-5" />
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>

          <div className="border border-border bg-card p-6 md:p-10">
            <MapPin className="h-10 w-10 text-primary" />

            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              VISIT THE STORE
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              {address}
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3 border border-border bg-background p-4">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-bold">Open daily, 10 AM - 9 PM</span>
              </div>

              <div className="flex items-center gap-3 border border-border bg-background p-4">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <span className="font-bold">Orders, pickup and fit support</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 font-black uppercase tracking-[0.2em] text-primary-foreground"
              >
                <Navigation className="h-5 w-5" />
                Open Maps
              </a>

              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-background px-6 py-4 font-black uppercase tracking-[0.2em] transition hover:border-primary hover:text-primary"
              >
                <Copy className="h-5 w-5" />
                {copied ? "Copied" : "Copy Address"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}