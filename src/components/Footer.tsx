import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Crown,
  Flame,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Percent,
  ShieldCheck,
  Sparkles,
  Store,
  Youtube,
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

const aboutLinks = [
  { label: "Our Story", to: "/about" },
  { label: "Our Store", to: "/contact" },
  { label: "Men's Wear", to: "/shop" },
  { label: "New Drops", to: "/shop" },
  { label: "We Care", to: "/contact" },
  { label: "Style Guide", to: "/about" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Return Policy", to: "/return-policy" },
  { label: "Refund Policy", to: "/refund-policy" },
  { label: "Cancellation Policy", to: "/cancellation-policy" },
  { label: "Shipping & Delivery", to: "/shipping-delivery" },
];

const customerServiceLinks = [
  { label: "Payment Policy", to: "/payment-policy" },
  { label: "FAQs", to: "/faqs" },
  { label: "Size Guide", to: "/size-guide" },
  { label: "Bulk Order", to: "/contact" },
  { label: "Track Order", to: "/contact" },
  { label: "Contact Us", to: "/contact" },
];

const highlights = [
  { icon: Flame, text: "Bold drops" },
  { icon: Percent, text: "Brutal prices" },
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

        <section className="grid gap-10 border-y border-border py-14 lg:grid-cols-[1.25fr_0.8fr_0.9fr_0.9fr_1.15fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src={logo}
                alt="Style Daddy"
                className="h-20 w-20 rounded-full border-2 border-primary glow-fire"
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
                href="https://wa.me/916309502357"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border bg-card transition hover:border-green-500 hover:text-green-500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border bg-card transition hover:border-red-500 hover:text-red-500"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterLinkGroup title="SHOP" links={quickLinks} />
          <FooterLinkGroup title="ABOUT US" links={aboutLinks} />
          <FooterLinkGroup title="POLICIES" links={policyLinks} />

          <div>
            <h4 className="font-display text-2xl">CUSTOMER SERVICE</h4>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {customerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
              <Moon className="h-4 w-4 fill-current text-red-500" />
              by{" "}
              <a
                href="https://www.instagram.com/_style_daddy_/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary"
              >
                Style Daddy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="font-display text-2xl">{title}</h4>
      <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
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
  );
}
