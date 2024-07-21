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
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
