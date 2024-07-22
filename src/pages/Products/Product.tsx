import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar, Navigation, Index, Footer } from "../../components/Index";
import ProductMain from "../../components/ProductComponents/ProductMain/ProductMain";

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
      <div className="">
        <Navbar />
        <Navigation />
      </div>
      <div className="mt-[25vh]">
        <Index />
      </div>
      <ProductMain />
      <Footer />
    </>
  );
};

export default Product;
