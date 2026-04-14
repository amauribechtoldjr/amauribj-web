import { useEffect, useState } from "react";

// default tailwind queries sizes
export const mediaQuerySizes = {
  "2xl": "(min-width: 96rem)",
  xl: "(min-width: 80rem)",
  lg: "(min-width: 64rem)",
  md: "(min-width: 48rem)",
  sm: "(min-width: 42rem)",
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
