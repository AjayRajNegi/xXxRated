import Community from "../../components/HomeComponents/CommunityImage/Community";
import {
  LoadingAnimation,
  Mask,
  Squishy,
  HeroScrollDemo,
  HorizontalCarousal,
  Perspective,
  Footer,
  HoverImageLinks,
  ChooseSection,
} from "../../components/Index";

const Home = () => {
  return (
    <div>
      <LoadingAnimation />
      <Mask />
      <Squishy />
      <HeroScrollDemo />
      <Community />
      {/* <Perspective /> */}
      <HorizontalCarousal />
      <ChooseSection />
      <HoverImageLinks />
      <Footer />
    </div>
  );
};

export default Home;
