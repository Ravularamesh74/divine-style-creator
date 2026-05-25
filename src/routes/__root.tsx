import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Home, RotateCcw, Sparkles } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MarqueeBanner } from "@/components/MarqueeBanner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary">
          <Sparkles className="h-4 w-4" />
          Lost In The Drop
        </p>

        <h1 className="mt-7 font-display text-8xl leading-none text-gradient-fire md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 font-display text-4xl uppercase md:text-6xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          This page does not exist, moved out, or sold out before you got here.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-fire px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-primary-foreground shadow-xl shadow-primary/25"
        >
          <Home className="h-5 w-5" />
          Go Home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-25" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="max-w-xl border border-border bg-card p-8 md:p-10">
        <AlertTriangle className="mx-auto h-12 w-12 text-primary" />

        <h1 className="mt-6 font-display text-4xl uppercase md:text-5xl">
          This Page Did Not Load
        </h1>

        <p className="mt-4 text-muted-foreground">
          Something went wrong on our side. Try again or head back to the
          kingdom.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center gap-3 rounded-lg bg-fire px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-primary-foreground"
          >
            <RotateCcw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-lg border border-border bg-background px-6 py-4 text-sm font-black uppercase tracking-[0.2em] transition hover:border-primary hover:text-primary"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Style Daddy — Streetwear Kingdom · Nacharam, Hyderabad",
      },
      {
        name: "description",
        content:
          "Stay Trendy · Stay Daddy. Bold streetwear, brutal prices. Oversized tees, cargo joggers, hoodies and more in Nacharam, Hyderabad.",
      },
      { name: "author", content: "Style Daddy" },
      { name: "theme-color", content: "#000000" },
      {
        property: "og:title",
        content: "Style Daddy — Streetwear Kingdom",
      },
      {
        property: "og:description",
        content:
          "Bold streetwear drops at unbeatable prices. Nacharam, Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Style Daddy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="dark flex min-h-screen flex-col bg-background text-foreground antialiased">
        <MarqueeBanner />
        <Header />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}