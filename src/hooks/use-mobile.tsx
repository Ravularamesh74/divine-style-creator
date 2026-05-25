import * as React from "react";

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export function useMediaQuery(query: string) {
  const getMatches = React.useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  }, [query]);

  const [matches, setMatches] = React.useState(getMatches);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      setMatches(event.matches);
    };

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  const isMobile = useMediaQuery(
    `(max-width:${BREAKPOINTS.mobile - 1}px)`
  );

  const isTablet = useMediaQuery(
    `(min-width:${BREAKPOINTS.mobile}px) and (max-width:${
      BREAKPOINTS.tablet - 1
    }px)`
  );

  const isDesktop = useMediaQuery(
    `(min-width:${BREAKPOINTS.tablet}px)`
  );

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}