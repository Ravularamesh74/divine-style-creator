import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Crown,
  Flame,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Zap,
} from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "All Products", to: "/shop" },
  { label: "New Arrivals", to: "/shop" },
  { label: "Sale", to: "/shop" },
  { label: "About", to: "/about" },
];

const supportLinks = [
  { label: "Contact", to: "/contact" },
  { label: "Instagram", href: "https://instagram.com/_style_daddy_" },
  { label: "WhatsApp", href: "https://wa.me/919640639926" },
  { label: "Store Location", to: "/contact" },
];

const highlights = [
  { icon: Flame, text: "Bold drops" },
  { icon: BadgePercent, text: "Brutal prices" },
  { icon: ShieldCheck, text: "Local trust" },
];

export function Footer() {
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-background">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
      <div className="absolute left-[-10rem] top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <section className="grid gap-10 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-4 w-4" />
              Hyderabad Streetwear Kingdom
            </p>

            <h2 className="mt-7 font-display text-6xl uppercase leading-none md:text-8xl">
              STAY TRENDY
              <span className="block text-gradient-fire">STAY DADDY</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Oversized fits, cargo energy, hoodies, daily essentials, and
              limited drops built for Nacharam's boldest wardrobes.
            </p>
          </div>

          <div className="border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <Crown className="h-9 w-9 text-primary" />
              <div>
                <h3 className="font-display text-3xl">JOIN THE CLUB</h3>
                <p className="text-sm text-muted-foreground">
                  Early access, deals, and drop alerts.
                </p>
              </div>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setJoined(true);
              }}
              className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
            >
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-fire px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground">
                {joined ? "Joined" : "Join Now"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="border border-border bg-background p-4 text-center"
                >
                  <item.icon className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-y border-border py-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src={logo}
                alt="Style Daddy"
                className="h-16 w-16 rounded-full border-2 border-primary glow-fire"
              />

              <div>
                <h3 className="font-display text-3xl">STYLE DADDY</h3>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">
                  Streetwear Kingdom
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              Fashion is identity, confidence, and attitude. Style Daddy brings
              streetwear heat to Hyderabad with fits that speak before you do.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="https://instagram.com/_style_daddy_"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border bg-card transition hover:border-pink-500 hover:text-pink-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/919640639926"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border bg-card transition hover:border-green-500 hover:text-green-500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl">SHOP</h4>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl">CONNECT</h4>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link to={link.to} className="transition hover:text-primary">
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-primary"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Store className="h-6 w-6 text-primary" />
              <h4 className="font-display text-2xl">VISIT STORE</h4>
            </div>

            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <p className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  7-26/3, Opp CS Brother, New Raghavendra Nagar, Nacharam,
                  Hyderabad - 500076
                </span>
              </p>

              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+91 96406 39926</span>
              </p>

              <p className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>styledaddy@gmail.com</span>
              </p>
            </div>

            <a
              href="https://wa.me/919640639926"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Order On WhatsApp
            </a>
          </div>
        </section>

        <section className="py-16 text-center">
          <p className="font-display text-4xl uppercase leading-none text-foreground/15 md:text-7xl">
            WE DO NOT FOLLOW TRENDS.
          </p>
          <p className="mt-3 font-display text-3xl uppercase text-gradient-fire md:text-5xl">
            WE CREATE THEM.
          </p>
        </section>

        <div className="border-t border-border py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Style Daddy. All Rights Reserved.</p>

            <p className="flex items-center gap-2">
              Built with
              <Heart className="h-4 w-4 fill-current text-red-500" />
              in Hyderabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}