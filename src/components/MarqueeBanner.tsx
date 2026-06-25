import { Truck, Flame, Sparkles, ShieldCheck, Gift, Star } from "lucide-react";

const announcements = [
  {
    icon: Flame,
    text: "NEW DROP LIVE",
  },
  {
    icon: Truck,
    text: "FREE SHIPPING ₹1499+",
  },
  {
    icon: Gift,
    text: "USE CODE STYLE10 FOR 10% OFF",
  },
  {
    icon: ShieldCheck,
    text: "100% SECURE PAYMENTS",
  },
  {
    icon: Sparkles,
    text: "PREMIUM MEN'S STREETWEAR",
  },
  {
    icon: Star,
    text: "EASY 7-DAY RETURNS",
  },
];

const marqueeItems = [...announcements, ...announcements];

export function MarqueeBanner() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-24 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="group flex overflow-hidden whitespace-nowrap">
        <div className="flex min-w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex h-11 items-center gap-3 px-8"
              >
                <Icon className="h-4 w-4 text-red-500" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">
                  {item.text}
                </span>

                <span className="text-red-500">•</span>
              </div>
            );
          })}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex min-w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`duplicate-${index}`}
                className="flex h-11 items-center gap-3 px-8"
              >
                <Icon className="h-4 w-4 text-red-500" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">
                  {item.text}
                </span>

                <span className="text-red-500">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}