import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Ruler,
  Shirt,
  Sparkles,
  StretchHorizontal,
  
  UserRound,
} from "lucide-react";

export const Route = createFileRoute("/size-guide")({
  head: () => ({
    meta: [
      { title: "Size Guide - Style Daddy" },
      {
        name: "description",
        content:
          "Find your Style Daddy menswear size for oversized tees, hoodies, cargos, joggers, and streetwear fits with measurement tips and support.",
      },
    ],
  }),
  component: SizeGuide,
});

const fitTypes = [
  {
    icon: Shirt,
    title: "Regular Fit",
    text: "Choose your usual size if you want a cleaner body shape with less extra room.",
  },
  {
    icon: StretchHorizontal,
    title: "Oversized Fit",
    text: "Go one size up for relaxed shoulders, wider chest, longer sleeve fall, and proper streetwear volume.",
  },
  {
    icon: UserRound,
    title: "Heavy Street Fit",
    text: "Pair oversized tops with relaxed cargos or joggers for a balanced full-streetwear look.",
  },
];

const teeSizes = [
  { size: "S", chest: "36-38", length: "26-27", shoulder: "16-17" },
  { size: "M", chest: "38-40", length: "27-28", shoulder: "17-18" },
  { size: "L", chest: "40-42", length: "28-29", shoulder: "18-19" },
  { size: "XL", chest: "42-44", length: "29-30", shoulder: "19-20" },
  { size: "XXL", chest: "44-46", length: "30-31", shoulder: "20-21" },
];

const bottomSizes = [
  { size: "S", waist: "28-30", length: "38-39", fit: "Slim/regular waist" },
  { size: "M", waist: "30-32", length: "39-40", fit: "Most common fit" },
  { size: "L", waist: "32-34", length: "40-41", fit: "Relaxed street fit" },
  { size: "XL", waist: "34-36", length: "41-42", fit: "Roomier cargo fit" },
  { size: "XXL", waist: "36-38", length: "42-43", fit: "Loose comfort fit" },
];

const measureTips = [
  "Measure a shirt or pant that already fits you well.",
  "Keep the garment flat on a table before measuring.",
  "Chest is measured across the front, then doubled if needed.",
  "Waist is measured across the waistband, then doubled if needed.",
  "For oversized tees, focus on chest, shoulder, sleeve fall, and length.",
  "If you are between sizes, choose based on the fit you want: clean or oversized.",
];

const recommendations = [
  {
    title: "Height 5'4 to 5'7",
    text: "M or L usually works for street fit depending on body type and desired oversized look.",
  },
  {
    title: "Height 5'8 to 5'11",
    text: "L or XL gives a stronger oversized shape for tees and hoodies.",
  },
  {
    title: "Height 6'0+",
    text: "XL or XXL is better for length, shoulder drop, and hoodie layering.",
  },
];

function SizeGuide() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative isolate border-b border-border px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
        <div className="absolute right-[-10rem] top-12 -z-10 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Menswear Fit Guide
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-6xl uppercase leading-none md:text-8xl">
            Size
            <span className="block text-gradient-fire">Guide</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Find the right Style Daddy size for oversized tees, hoodies, cargos,
            joggers, and daily streetwear fits. Use this guide before ordering,
            especially if you want the perfect oversized shape.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/916309376811?text=Hi%20Style%20Daddy%2C%20I%20need%20help%20choosing%20my%20size."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-500 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-black shadow-xl shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Size Help
            </a>

            <Link
              to="/shop"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-card/80 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Shop Fits
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {fitTypes.map((item) => (
          <article key={item.title} className="border border-border bg-card p-6">
            <item.icon className="h-9 w-9 text-primary" />
            <h2 className="mt-5 font-display text-3xl">{item.title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Shirt className="h-4 w-4" />
              Tees & Hoodies
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
              Topwear
              <span className="block text-gradient-fire">Size Chart</span>
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Measurements are approximate and can vary slightly by product
              style, fabric, and fit.
            </p>
          </div>

          <div className="overflow-hidden border border-border">
            <div className="grid grid-cols-4 bg-background p-4 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <span>Size</span>
              <span>Chest</span>
              <span>Length</span>
              <span>Shoulder</span>
            </div>
            {teeSizes.map((row) => (
              <div key={row.size} className="grid grid-cols-4 border-t border-border p-4 text-sm text-muted-foreground">
                <span className="font-black text-foreground">{row.size}</span>
                <span>{row.chest} in</span>
                <span>{row.length} in</span>
                <span>{row.shoulder} in</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
            <Ruler className="h-4 w-4" />
            Cargos & Joggers
          </span>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-7xl">
            Bottomwear
            <span className="block text-gradient-fire">Size Chart</span>
          </h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            For cargos, check waist and thigh comfort. For joggers, also think
            about ankle stack and sneaker pairing.
          </p>
        </div>

        <div className="overflow-hidden border border-border bg-card">
          <div className="grid grid-cols-4 bg-background p-4 text-xs font-black uppercase tracking-[0.18em] text-primary">
            <span>Size</span>
            <span>Waist</span>
            <span>Length</span>
            <span>Fit Note</span>
          </div>
          {bottomSizes.map((row) => (
            <div key={row.size} className="grid grid-cols-4 border-t border-border p-4 text-sm text-muted-foreground">
              <span className="font-black text-foreground">{row.size}</span>
              <span>{row.waist} in</span>
              <span>{row.length} in</span>
              <span>{row.fit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-accent">
              <Ruler className="h-4 w-4" />
              Measure Correctly
            </span>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">
              No Guessing.
              <span className="block text-gradient-fire">Measure Once.</span>
            </h2>

            <div className="mt-8 grid gap-3">
              {measureTips.map((tip) => (
                <div key={tip} className="flex gap-3 border border-border bg-background p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-background p-8">
            <HelpCircle className="h-10 w-10 text-primary" />
            <h2 className="mt-5 font-display text-4xl">Quick Fit Picks</h2>
            <div className="mt-6 grid gap-4">
              {recommendations.map((item) => (
                <article key={item.title} className="border border-border bg-card p-5">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <a
            href="https://wa.me/916309376811?text=Hi%20Style%20Daddy%2C%20my%20height%20and%20weight%20are%20..."
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">WhatsApp Size Help</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              Send height, weight, and fit preference.
            </p>
          </a>

          <a
            href="tel:+916309376811"
            className="group border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary"
          >
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-3xl">Call</h3>
            <p className="mt-2 text-muted-foreground group-hover:text-primary">
              +91 63093 76811
            </p>
          </a>

          <a
            href="mailto:styledaddy@gmail.com?subject=Size%20Help%20-%20Style%20Daddy"
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
