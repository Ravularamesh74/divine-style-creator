import * as React from "react";

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const update = () => {
      setMatches(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  const xs = useMediaQuery(
    `(max-width:${BREAKPOINTS.xs}px)`
  );

  const sm = useMediaQuery(
    `(min-width:${BREAKPOINTS.xs + 1}px) and (max-width:${BREAKPOINTS.sm}px)`
  );

  const md = useMediaQuery(
    `(min-width:${BREAKPOINTS.sm + 1}px) and (max-width:${BREAKPOINTS.md}px)`
  );

  const lg = useMediaQuery(
    `(min-width:${BREAKPOINTS.md + 1}px) and (max-width:${BREAKPOINTS.lg}px)`
  );

  const xl = useMediaQuery(
    `(min-width:${BREAKPOINTS.lg + 1}px) and (max-width:${BREAKPOINTS.xl}px)`
  );

  const xxl = useMediaQuery(
    `(min-width:${BREAKPOINTS.xl + 1}px)`
  );

  const portrait = useMediaQuery(
    "(orientation: portrait)"
  );

  const landscape = useMediaQuery(
    "(orientation: landscape)"
  );

  const darkMode = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );

  const reducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  const touchDevice = useMediaQuery(
    "(pointer: coarse)"
  );

  const retina = useMediaQuery(
    "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
  );

  const width =
    typeof window !== "undefined"
      ? window.innerWidth
      : 0;

  const device =
    width < BREAKPOINTS.md
      ? "mobile"
      : width < BREAKPOINTS.lg
      ? "tablet"
      : "desktop";

  return React.useMemo(
    () => ({
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,

      portrait,
      landscape,

      darkMode,
      reducedMotion,

      touchDevice,
      retina,

      width,
      device,

      isMobile: device === "mobile",
      isTablet: device === "tablet",
      isDesktop: device === "desktop",
    }),
    [
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      portrait,
      landscape,
      darkMode,
      reducedMotion,
      touchDevice,
      retina,
      width,
      device,
    ]
  );
}