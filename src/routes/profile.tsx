import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  Heart,
  MapPin,
  CreditCard,
  Wallet,
  Gift,
  Bell,
  Settings,
  User,
} from "lucide-react";

import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

const cards = [
  {
    title: "My Orders",
    subtitle: "Track & manage your purchases",
    icon: Box,
    to: "/track-order",
  },
  {
    title: "Wishlist",
    subtitle: "Your favourite collections",
    icon: Heart,
    to: "/wishlist",
  },
  {
    title: "Saved Addresses",
    subtitle: "Manage delivery locations",
    icon: MapPin,
    to: null,
  },
  {
    title: "Payment Methods",
    subtitle: "Cards, UPI & wallets",
    icon: CreditCard,
    to: null,
  },
  {
    title: "Wallet",
    subtitle: "Gift cards & balance",
    icon: Wallet,
    to: "/cart",
  },
  {
    title: "Rewards",
    subtitle: "Exclusive member benefits",
    icon: Gift,
    to: null,
  },
  {
    title: "Notifications",
    subtitle: "Offers & order updates",
    icon: Bell,
    to: null,
  },
  {
    title: "Account Settings",
    subtitle: "Security & preferences",
    icon: Settings,
    to: "/profile",
  },
];

function ProfilePage() {
  const { user, setOpenAuth, setAuthMode } = useAuth();

  if (!user) {
    return (
      <main className="min-h-screen bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
            <User className="h-10 w-10" />
          </div>
          <h1 className="mt-8 font-display text-5xl uppercase">Your Profile</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Please login to view your profile dashboard and manage your account.
          </p>
          <button
            type="button"
            onClick={() => {
              setAuthMode("login");
              setOpenAuth(true);
            }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-fire px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-primary-foreground"
          >
            Sign in
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 text-primary">
            <User className="h-10 w-10" />
          </div>

          <h1 className="mt-8 font-display text-5xl uppercase md:text-6xl">Your Profile</h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Welcome back, {user.name}. Manage your orders, wishlist and account from one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-3xl border border-border bg-card px-6 py-5 text-left shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Email</p>
              <p className="mt-2 text-lg font-black">{user.email}</p>
            </div>
            <div className="rounded-3xl border border-border bg-card px-6 py-5 text-left shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Member since</p>
              <p className="mt-2 text-lg font-black">Not available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">Dashboard</p>
          <h2 className="mt-4 font-display text-4xl uppercase">Profile shortcuts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Quick access to your orders, wishlist, saved addresses and account settings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-black uppercase tracking-[0.1em]">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.subtitle}</p>

                {card.to ? (
                  <Link
                    to={card.to as any}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-primary"
                  >
                    Open
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-8 cursor-not-allowed text-sm font-black uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Coming soon
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
