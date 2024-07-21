import { useEffect } from "react";
import Lenis from "lenis";
import { HoverImageLinks } from "../../components/Footer/HoverImageLinks";
import {
  LoadingAnimation,
  Mask,
  Squishy,
  HeroScrollDemo,
  HorizontalCarousal,
} from "../../components/Index";
import Perspective from "../../components/PerspectiveScroll/Perspective";
import Footer from "../../components/Footer/StickyFooter/Footer1";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <LoadingAnimation />
      <Mask />
      <Squishy />
      <HeroScrollDemo />
      <Perspective />
      <HorizontalCarousal />
      <HoverImageLinks />
      <Footer />
    </div>
  );
};

export default Home;
