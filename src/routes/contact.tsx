import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Style Daddy" },
      { name: "description", content: "DM us, drop by Nacharam, or send a message. Style Daddy is ready to talk drip." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative isolate py-20">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-display tracking-widest text-accent">GET IN TOUCH</span>
          <h1 className="mt-2 font-display text-6xl md:text-8xl">TALK TO <span className="text-gradient-fire">DADDY</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Questions, custom orders, collabs — slide in any way you want.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-8 md:grid-cols-3">
        {[
          { icon: Instagram, t: "INSTAGRAM", d: "@_style_daddy_", href: "https://instagram.com/_style_daddy_" },
          { icon: MapPin, t: "LOCATION", d: "Nacharam, Hyderabad 500076", href: "https://maps.google.com/?q=Nacharam+Hyderabad" },
          { icon: MessageCircle, t: "ORDER", d: "DM us on Instagram", href: "https://instagram.com/_style_daddy_" },
        ].map((c) => (
          <a key={c.t} href={c.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-8 hover:border-primary hover:-translate-y-1 transition">
            <c.icon className="h-10 w-10 text-primary group-hover:text-accent transition" />
            <h3 className="mt-4 font-display text-2xl tracking-wide">{c.t}</h3>
            <p className="mt-1 text-muted-foreground">{c.d}</p>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fire opacity-20 blur-3xl" />
          <h2 className="font-display text-4xl">SEND A <span className="text-gradient-fire">MESSAGE</span></h2>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative mt-8 grid gap-4"
          >
            <input required placeholder="Your name" className="rounded-xl border border-border bg-background px-5 py-3 focus:border-primary outline-none transition" />
            <input required type="email" placeholder="Email or Insta handle" className="rounded-xl border border-border bg-background px-5 py-3 focus:border-primary outline-none transition" />
            <textarea required rows={5} placeholder="What's on your mind?" className="rounded-xl border border-border bg-background px-5 py-3 focus:border-primary outline-none transition resize-none" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-fire px-7 py-3.5 font-bold tracking-widest text-primary-foreground glow-fire">
              <Send className="h-4 w-4" /> {sent ? "SENT — WE'LL DM BACK" : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
