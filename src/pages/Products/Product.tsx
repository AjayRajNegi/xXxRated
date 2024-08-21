import Lenis from "lenis";
import { useEffect } from "react";
import {
  Navbar,
  Navigation,
  Index,
  Footer,
  ProductMain,
  RevealLinks,
} from "../../components/Index";

const Product = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="mt-[25vh] lg:mt-0">
        <Index />
      </div>
      <RevealLinks />
      <ProductMain />
      <Footer />
    </>
  );
};

export default Product;
