import { useEffect } from "react";
import Lenis from "lenis";
import {
  LoadingAnimation,
  Mask,
  Squishy,
  HeroScrollDemo,
  HorizontalCarousal,
  Perspective,
  Footer,
  HoverImageLinks,
} from "../../components/Index";

const Home = () => {
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
