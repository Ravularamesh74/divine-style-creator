import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Flame, Heart, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Style Daddy" },
      { name: "description", content: "Style Daddy is Nacharam's go-to streetwear brand. Bold drops, brutal prices, unmatched drip." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img src={logo} alt="Style Daddy" className="mx-auto h-32 w-32 rounded-full ring-4 ring-primary glow-fire animate-float" />
          <h1 className="mt-8 font-display text-6xl md:text-8xl">WHO WE <span className="text-gradient-fire">ARE</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Style Daddy is Nacharam's go-to streetwear brand. We bring the latest trends straight to your wardrobe at prices that won't break the bank. From oversized tees to cargo joggers — we've got everything to keep your drip game strong. 💥
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
        {[
          { k: "57+", v: "Posts", icon: Flame },
          { k: "1.3K", v: "Followers", icon: Heart },
          { k: "100%", v: "Trendy", icon: Crown },
        ].map((s) => (
          <div key={s.v} className="rounded-3xl border border-border bg-card p-10 text-center hover:border-primary transition">
            <s.icon className="mx-auto h-8 w-8 text-primary" />
            <div className="mt-4 font-display text-6xl text-gradient-fire">{s.k}</div>
            <div className="mt-2 font-display tracking-widest text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-5xl md:text-6xl text-center">OUR <span className="text-gradient-fire">STORY</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "BORN IN NACHARAM", d: "Started in the heart of Hyderabad's hustle. Built by the streets, for the streets." },
            { t: "TRENDS ON LOCK", d: "We watch the runways so you don't have to. Every drop is hand-picked for vibe and value." },
            { t: "PRICED TO MOVE", d: "Premium fits without premium price tags. Drip shouldn't drain the wallet." },
            { t: "COMMUNITY FIRST", d: "Style Daddy is a family. Tag us, slide in, become part of the kingdom." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-8 hover:border-accent transition">
              <h3 className="font-display text-2xl tracking-wide text-accent">{c.t}</h3>
              <p className="mt-2 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <MapPin className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mt-4 font-display text-4xl">FIND US IN <span className="text-gradient-fire">NACHARAM</span></h2>
        <p className="mt-3 text-muted-foreground">7-26/3, opp CS Brother, New Raghavendra Nagar, Nacharam, Hyderabad 500076</p>
        <Link to="/contact" className="mt-8 inline-flex rounded-full bg-fire px-8 py-3 font-bold tracking-widest text-primary-foreground">GET IN TOUCH</Link>
      </section>
    </>
  );
}
