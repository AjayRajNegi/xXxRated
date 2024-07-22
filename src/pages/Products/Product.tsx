import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar, Navigation, Index } from "../../components/Index";

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
    <div className="">
      <div className="">
        <Navbar />
        <Navigation />
      </div>
      <div className="mb-[100vh] mt-[25vh]">
        <Index />
      </div>
    </div>
  );
};

export default Product;
