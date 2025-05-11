import Lenis from "lenis";
import { useEffect, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    // Make lenis instance available globally
    (window as any).lenis = lenis;

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  const element = useRoutes(routes);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>
    </>
  );
};

export default App;
