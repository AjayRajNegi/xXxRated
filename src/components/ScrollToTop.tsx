import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the Lenis instance from the window object
    const lenis = (window as any).lenis;

    if (lenis) {
      // Use Lenis for smooth scrolling
      lenis.scrollTo(0, {
        immediate: true,
        duration: 0,
      });
    } else {
      // Fallback to regular scroll if Lenis is not available
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
