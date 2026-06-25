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
  { label: "Collections", to: "/collections" },
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
  { label: "Bulk Order", to: "/bulk-order" },
  { label: "Track Order", to: "/track-order" },
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
                href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FDHAaZ0SMxCr8k86yzqhBMy%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnBnheJe5oRIEsqODCPlC6tVZ66D0AmyVyg6ZhBsksETdhCOoTnU4xgTYjsN8_aem_u6uFz7jkhiZHsGspu4lYRQ&e=AUCDWVX_8K2a4enbFMCGl23MOFGECeKMlh2CqPvXX_XJMaq-b87nbYo_oMt8_EH1qPaOhL15kVOK0y917SPRtG1GNufNyjvw2tqKw0gho5rF8Nr0qpQjgc0LtdsIRDvhMHjDMWZNkBlISSalL3St3xU"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center border border-border bg-card transition hover:border-green-500 hover:text-green-500"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@STyleDadDy-mens"
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
