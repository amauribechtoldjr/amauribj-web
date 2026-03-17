import { useEffect, useState } from "react";

const SCROLL_TRACK_TOP = 18; // top 10% of viewport
const SCROLL_TRACK_BOTTOM = 80; // bottom 10% of viewport

export const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topPosition =
    SCROLL_TRACK_TOP + scrollPercent * (SCROLL_TRACK_BOTTOM - SCROLL_TRACK_TOP);

  return (
    <div
      className="fixed ml-50 -translate-x-1/2"
      style={{ top: `${topPosition}vh` }}
    >
      <div className="h-2 w-20 bg-orange-500" />
      <div className="h-2 w-20 bg-orange-500 mt-2" />
    </div>
  );
};
