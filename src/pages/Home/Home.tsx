import { HoverImageLinks } from "../../components/Footer/HoverImageLinks";
import {
  LoadingAnimation,
  Mask,
  Squishy,
  HeroScrollDemo,
  HorizontalCarousal,
} from "../../components/Index";
import Perspective from "../../components/PerspectiveScroll/Perspective";

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
    </div>
  );
};

export default Home;
