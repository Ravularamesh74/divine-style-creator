import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Flame,
  ArrowRight,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

import logo from "@/assets/logo.png";
import { SearchDialog } from "@/components/SearchDialog";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";


const nav = [

  { to: "/", label: "HOME" },
  { to: "/new-in", label: "NEW IN" },
  { to: "/sale", label: "SALE" },
  { to: "/shop", label: "PRODUCTS" },
  { to: "/collections", label: "COLLECTIONS" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },


] as const;

export function Header() {
  const { count: cartCount } = useCart();
  const { user, setOpenAuth, setAuthMode } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
  <div
    className="fixed left-0 top-0 z-[100] h-1 bg-fire"
    style={{ width: `${scroll}%` }}
  />

  <header className="sticky top-0 z-50 bg-black text-white shadow-sm">

    {/* TOP BAR */}
    <div className="bg-black text-white">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">

        {/* left: hidden on small to reduce clutter */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase">
          <button>STYLE DADDY CLUB</button>

          <div>
            Delivering To
            <div className="underline">Add delivery location</div>
          </div>
        </div>

        {/* mobile icon row */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link to={user ? "/cart" : "/"} className="relative p-2">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-fire px-1 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* right: desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/store" as any}>Store</Link>

          <button
            onClick={() => {
              setAuthMode(user ? "account" : "login");
              setOpenAuth(true);
            }}
          >
            {user ? user.name : "Login"}
          </button>

          <Link to={"/wishlist" as any}>Wishlist</Link>

          <Link
            to={user ? "/cart" : "/"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                setAuthMode("login");
                setOpenAuth(true);
              }
            }}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-fire px-1 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>

    {/* MAIN HEADER */}
    <div className="border-b border-white/10">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center px-4 md:px-6 text-white">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Style Daddy" className="h-10 w-10 rounded-full md:h-16 md:w-16" />

          <div className="hidden sm:block">
            <h1 className="text-sm md:text-lg font-bold tracking-[0.18em] text-white">STYLE DADDY</h1>
            <p className="text-[10px] md:text-xs text-white">MEN'S-WEAR</p>
          </div>
        </Link>

        {/* NAV */}
        <nav className="ml-6 hidden lg:flex gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to as any}
              className="text-sm uppercase text-white hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* SEARCH */}
        {/* desktop search input */}
        <button
          onClick={() => setSearchOpen(true)}
          className="ml-auto hidden md:flex w-80 items-center gap-3 border-b border-white/20 pb-2 text-white"
        >
          <Search className="h-5 w-5" />
          <span className="text-white/70">Search Style Daddy</span>
        </button>
      </div>
    </div>

  </header>

  <SearchDialog
    open={searchOpen}
    onOpenChange={setSearchOpen}
  />
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
                    to={item.to as any}
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href="https://wa.me/916309376811"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-lg bg-green-500 px-6 py-4 font-black uppercase tracking-[0.18em] text-black"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>

            <Link
              to={user ? "/cart" : "/"}
              onClick={(event) => {
                if (!user) {
                  event.preventDefault();
                  setAuthMode("login");
                  setOpenAuth(true);
                }
              }}
              className="relative flex items-center justify-center gap-3 rounded-lg border border-border bg-card px-6 py-4 font-black uppercase tracking-[0.18em] transition hover:border-primary hover:text-primary"
            >
              <ShoppingBag className="h-5 w-5" />
              {user ? "Cart" : "Login to buy"}
              {cartCount > 0 && (
                <span className="rounded-full bg-fire px-2 py-0.5 text-[10px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
