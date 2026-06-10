import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  Flame,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shirt,
  Sparkles,
  Star,
  Store,
  Users,
  Zap,
} from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Style Daddy" },
      {
        name: "description",
        content:
          "Style Daddy is Nacharam's streetwear destination for bold fits, honest prices, fresh drops, and everyday drip.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "57+", label: "Style Drops", icon: Flame },
  { value: "1.3K+", label: "Instagram Family", icon: Users },
  { value: "40%", label: "Offers On Drops", icon: BadgeCheck },
  { value: "4.8+", label: "Customer Love", icon: Star },
];

const fabrics = [
  "Oversized Tees",
  "Cargo Joggers",
  "Hoodies",
  "Street Shirts",
  "Combo Fits",
];

const anthem = [
  {
    title: "Customer First",
    text: "We help every customer find a fit that matches their comfort, budget, and personality.",
    icon: Heart,
  },
  {
    title: "Streetwear For All",
    text: "Fashion for every style, every body, and every everyday moment. Clean fits, loud fits, and everything between.",
    icon: Users,
  },
  {
    title: "Fresh Drops",
    text: "We keep the collection moving with trend-first styles, bold graphics, and pieces made for daily flex.",
    icon: Sparkles,
  },
  {
    title: "Honest Pricing",
    text: "No unnecessary markups. Just strong streetwear, fair prices, and value that actually feels good.",
    icon: BadgeCheck,
  },
];

function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-pattern opacity-25" />

      <section className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary">
            <Sparkles className="h-4 w-4" />
            About Style Daddy
          </p>

          <h1 className="mt-8 font-display text-6xl uppercase leading-none md:text-8xl xl:text-9xl">
            Stay Trendy
            <span className="block text-gradient-fire">Stay Daddy</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Style Daddy is Nacharam's streetwear destination for people who want
            bold fits, daily comfort, sharp prices, and a wardrobe that never
            feels boring.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/shop"
              search={{ q: undefined }}
              className="inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground"
            >
              Shop Drops
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-7 py-4 text-sm font-black uppercase tracking-[0.22em] hover:border-primary hover:text-primary"
            >
              Visit Store
              <MapPin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border border-border bg-card p-8 text-center shadow-2xl shadow-primary/10">
          <img
            src={logo}
            alt="Style Daddy"
            className="mx-auto h-40 w-40 rounded-full ring-4 ring-primary glow-fire animate-float"
          />

          <p className="mt-8 font-display text-4xl uppercase leading-none">
            Your Fit.
            <span className="block text-gradient-fire">Your Drip.</span>
          </p>

          <p className="mt-5 text-muted-foreground">
            Honest prices, trend-first fashion, and streetwear confidence from
            Nacharam.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-primary">
              Our Journey
            </p>

            <h2 className="mt-4 font-display text-5xl uppercase leading-none md:text-7xl">
              Built From The Streets
              <span className="block text-gradient-fire">For The Streets</span>
            </h2>
          </div>

          <div className="border border-border bg-card p-8 text-lg leading-8 text-muted-foreground">
            <p>
              Style Daddy started with one clear belief: streetwear should look
              premium, feel comfortable, and still stay affordable for everyday
              customers.
            </p>

            <p className="mt-5">
              From Nacharam, Hyderabad, we built a brand for people who want
              oversized tees, cargo joggers, hoodies, shirts, jackets, and combo
              fits without overpaying for the look.
            </p>

            <p className="mt-5">
              We live by one motto: Stay Trendy, Stay Daddy. Because your
              wardrobe should move with your ambition, your mood, and your
              personal style.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-border bg-card p-7">
              <stat.icon className="h-8 w-8 text-primary" />
              <div className="mt-5 font-display text-5xl text-gradient-fire">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
          <div>
            <Zap className="h-10 w-10 text-primary" />
            <h2 className="mt-5 font-display text-5xl uppercase">
              Our <span className="text-gradient-fire">Mission</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our mission is simple: make streetwear easier, sharper, and more
              affordable. We bring fresh styles, reliable quality, and prices
              that let you build more fits without breaking your budget.
            </p>
          </div>

          <div>
            <Crown className="h-10 w-10 text-primary" />
            <h2 className="mt-5 font-display text-5xl uppercase">
              Our <span className="text-gradient-fire">Vision</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our vision is to become Hyderabad's most loved streetwear store:
              the place people trust for bold looks, friendly support, and
              everyday value that feels premium.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
          Fits That Speak
          <span className="block text-gradient-fire">For Themselves</span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          We focus on the pieces customers actually want to wear: breathable
          fabrics, relaxed silhouettes, bold graphics, useful pockets, easy
          layering, and comfort made for Indian weather.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {fabrics.map((fabric) => (
            <Link
              key={fabric}
              to="/shop"
              search={{ q: undefined }}
              className="group border border-border bg-card p-6 transition hover:-translate-y-2 hover:border-primary"
            >
              <Shirt className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-display text-3xl">{fabric}</h3>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
                Shop Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-primary">
          Our Anthem
        </p>

        <h2 className="mt-4 font-display text-5xl uppercase leading-none md:text-7xl">
          Fashion That
          <span className="block text-gradient-fire">Respects Your Wallet</span>
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {anthem.map((item) => (
            <div key={item.title} className="border border-border bg-card p-7">
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-display text-3xl">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-5xl uppercase">
              Style <span className="text-gradient-fire">Daddy</span>
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Nacharam's go-to streetwear destination for bold drops, honest
              pricing, and daily-wear confidence.
            </p>

            <p className="mt-6 font-display text-4xl uppercase text-primary">
              #StayDaddy
            </p>
          </div>

          <div className="grid gap-4 text-muted-foreground">
            <p className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              Customer Care +91 63059 03257
            </p>

            <p className="flex gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
              WhatsApp Orders +91 63059 03257
            </p>

            <p className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              styledaddy@gmail.com
            </p>

            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              7-26/3, Opp CS Brother, New Raghavendra Nagar, Nacharam,
              Hyderabad - 500076
              
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}