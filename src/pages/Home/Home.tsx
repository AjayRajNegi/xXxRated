import { HoverImageLinks } from "../../components/Footer/HoverImageLinks";
import {
  LoadingAnimation,
  Mask,
  Squishy,
  HeroScrollDemo,
  HorizontalCarousal,
} from "../../components/Index";

const Home = () => {
  return (
    <div>
      <LoadingAnimation />
      <Mask />
      <Squishy />
      <HeroScrollDemo />
      <HorizontalCarousal />
      <HoverImageLinks />
    </div>
  );
};

export default Home;
