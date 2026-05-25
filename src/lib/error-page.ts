export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page did not load | Style Daddy</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#050505" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #050505;
        --card: rgba(255, 255, 255, 0.055);
        --border: rgba(255, 255, 255, 0.14);
        --text: #f8fafc;
        --muted: #a1a1aa;
        --primary: #ffb000;
        --accent: #ff3d00;
      }

      * {
        box-sizing: border-box;
      }

      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        overflow: hidden;
        padding: 1.5rem;
        background:
          radial-gradient(circle at 20% 20%, rgba(255, 176, 0, 0.22), transparent 32rem),
          radial-gradient(circle at 80% 80%, rgba(255, 61, 0, 0.16), transparent 30rem),
          linear-gradient(135deg, #050505, #101010 55%, #050505);
        color: var(--text);
        font: 15px/1.5 Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        opacity: 0.18;
        background-image:
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(circle at center, black, transparent 75%);
      }

      .card {
        position: relative;
        width: min(100%, 34rem);
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--card);
        padding: 2.25rem;
        text-align: center;
        box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(22px);
      }

      .card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 3px;
        background: linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent);
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0 0 1.25rem;
        border: 1px solid rgba(255, 176, 0, 0.3);
        background: rgba(255, 176, 0, 0.1);
        color: var(--primary);
        padding: 0.5rem 0.75rem;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.22em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        font-size: clamp(2.4rem, 9vw, 4.6rem);
        line-height: 0.95;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .gradient {
        display: block;
        color: var(--primary);
      }

      p {
        max-width: 27rem;
        margin: 1.25rem auto 0;
        color: var(--muted);
      }

      .actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 2rem;
      }

      a,
      button {
        min-height: 3rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        padding: 0 1.2rem;
        color: inherit;
        font: inherit;
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0.16em;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
      }

      .primary {
        background: linear-gradient(135deg, var(--primary), var(--accent));
        color: #050505;
      }

      .secondary {
        border-color: var(--border);
        background: rgba(255, 255, 255, 0.06);
      }

      @media (max-width: 420px) {
        .card {
          padding: 1.5rem;
        }

        a,
        button {
          width: 100%;
        }
      }
    </style>
  </head>

  <body>
    <main class="card">
      <p class="eyebrow">Style Daddy System Alert</p>

      <h1>
        This Page
        <span class="gradient">Did Not Load</span>
      </h1>

      <p>
        Something went wrong on our end. Try again, or head back to the Style Daddy kingdom.
      </p>

      <div class="actions">
        <button class="primary" type="button" onclick="location.reload()">Try Again</button>
        <a class="secondary" href="/">Go Home</a>
      </div>
    </main>
  </body>
</html>`;
}