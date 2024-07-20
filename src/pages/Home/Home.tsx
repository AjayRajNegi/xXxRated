import { LoadingAnimation, Mask, Squishy } from "../../components/Index";
import { HeroScrollDemo } from "../../components/Scroll/HeroScrollDemo";

const Home = () => {
  return (
    <div>
      <LoadingAnimation />
      <Mask />
      <Squishy />
      <HeroScrollDemo />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
