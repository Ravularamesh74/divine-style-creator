// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const productPages = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
].map(
  (id) => ({
    path: `/product/${id}`,
    prerender: { enabled: true },
  }),
);

const staticPages = [
  "/",
  "/shop",
  "/cart",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/return-policy",
  "/refund-policy",
  "/shipping-delivery",
  "/cancellation-policy",
  "/payment-policy",
  "/faqs",
  "/size-guide",
  "/track-order",
  "/bulk-order",
].map((path) => ({
  path,
  prerender: { enabled: true },
}));

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Netlify serves static prerendered HTML; Cloudflare worker output breaks prerender.
  cloudflare: false,
  tanstackStart: {
    start: { entry: "start" },
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
    pages: [...staticPages, ...productPages],
  },
});
