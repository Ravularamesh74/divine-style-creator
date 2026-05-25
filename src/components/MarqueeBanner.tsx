const items = [
  "🔥 STAY TRENDY · STAY DADDY",
  "💥 FLAT 40% OFF ALL ITEMS",
  "📍 NACHARAM, HYDERABAD",
  "💬 DM TO ORDER",
  "👑 STREETWEAR KINGDOM",
  "⚡ NEW DROPS WEEKLY",
];

export function MarqueeBanner() {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden bg-fire text-primary-foreground border-b-2 border-foreground">
      <div className="flex animate-marquee whitespace-nowrap py-2 font-display text-sm tracking-widest">
        {row.map((t, i) => (
          <span key={i} className="mx-8 flex items-center gap-3">
            {t}
            <span className="text-foreground">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
