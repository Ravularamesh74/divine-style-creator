import {
  BadgePercent,
  Crown,
  Flame,
  MapPin,
  MessageCircle,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Crown,
    text: "STYLE DADDY",
    accent: "PREMIUM STREETWEAR",
  },
  {
    icon: BadgePercent,
    text: "FLAT 40% OFF",
    accent: "LIMITED TIME",
  },
  {
    icon: Sparkles,
    text: "NEW DROPS",
    accent: "EVERY WEEK",
  },
  {
    icon: Truck,
    text: "FAST DELIVERY",
    accent: "ACROSS INDIA",
  },
  {
    icon: MapPin,
    text: "NACHARAM",
    accent: "HYDERABAD",
  },
  {
    icon: MessageCircle,
    text: "WHATSAPP ORDERS",
    accent: "+91 96406 39926",
  },
  {
    icon: Flame,
    text: "BOLD FITS",
    accent: "BRUTAL PRICES",
  },
  {
    icon: Zap,
    text: "DM TO ORDER",
    accent: "INSTANT SUPPORT",
  },
];

function MarqueeTrack() {
  return (
    <div className="flex min-w-max shrink-0 animate-marquee items-center">
      {items.map((item) => (
        <div
          key={`${item.text}-${item.accent}`}
          className="group mx-7 flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-foreground/90 transition hover:text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
            <item.icon className="h-4 w-4" />
          </span>

          <span>{item.text}</span>

          <span className="text-primary">{item.accent}</span>

          <span className="text-lg text-primary/60">✦</span>
        </div>
      ))}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section className="relative overflow-hidden border-b border-primary/20 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute left-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="group relative flex overflow-hidden whitespace-nowrap py-3">
        <div className="flex group-hover:[animation-play-state:paused]">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}