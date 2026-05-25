import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  Instagram,
  Menu,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[100] h-1 bg-fire shadow-lg shadow-primary/40 transition-all duration-150" style={{ width: `${scroll}%` }} />

      <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-2xl">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-24 items-center justify-between gap-5">
            <Link to="/" className="group flex min-w-0 items-center gap-4">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl transition duration-500 group-hover:scale-150" />
                <img
                  src={logo}
                  alt="Style Daddy"
                  className="relative h-16 w-16 rounded-full border-2 border-primary object-cover glow-fire"
                />
              </div>

              <div className="min-w-0">
                <h1 className="font-display text-2xl leading-none tracking-[0.22em]">
                  STYLE
                </h1>
                <p className="mt-1 text-xs font-black tracking-[0.35em] text-primary">
                  DADDY
                </p>
              </div>
            </Link>

            <nav className="hidden items-center rounded-full border border-border bg-card/70 p-1 lg:flex">
              {nav.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.to);

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`relative rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.25em] transition ${
                      active
                        ? "bg-fire text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/_style_daddy_"
                target="_blank"
                rel="noreferrer"
                className="hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition hover:border-pink-500 hover:text-pink-500 md:flex"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/91 6309502357"
                target="_blank"
                rel="noreferrer"
                className="hidden h-12 w-12 items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 transition hover:bg-green-500 hover:text-black md:flex"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              <Link
                to="/shop"
                className="hidden items-center gap-3 rounded-full bg-fire px-7 py-3.5 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-1 md:inline-flex"
              >
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Link>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition hover:border-primary hover:text-primary lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 top-24 z-40 overflow-y-auto bg-background/95 px-6 py-8 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 border border-border bg-card p-5">
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-primary">
                <Sparkles className="h-4 w-4" />
                Style Daddy Menu
              </p>
              <h2 className="mt-3 font-display text-4xl leading-none">
                STAY TRENDY
                <span className="block text-gradient-fire">STAY DADDY</span>
              </h2>
            </div>

            <nav className="grid gap-3">
              {nav.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.to);

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center justify-between border p-5 text-2xl font-black uppercase tracking-[0.18em] transition ${
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card"
                    }`}
                  >
                    {item.label}
                    <ChevronRight className="h-6 w-6" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/91 6309502357"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-4 font-black uppercase tracking-[0.18em] text-black"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>

              <Link
                to="/shop"
                className="flex items-center justify-center gap-3 rounded-lg bg-fire px-6 py-4 font-black uppercase tracking-[0.18em] text-primary-foreground"
              >
                <Flame className="h-5 w-5" />
                Shop Drops
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}