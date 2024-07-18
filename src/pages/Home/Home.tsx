import { LoadingAnimation, Mask, Squishy } from "../../components/Index";

const Home = () => {
  return (
    <div>
      <LoadingAnimation />
      <Mask />
      <Squishy />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
