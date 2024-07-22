import {
  Footer,
  Navbar,
  Navigation,
  TextParallaxContentExample,
} from "../../components/Index";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fbd747]">
        <Navigation />
      </div>
      <div className="bg-white pt-5 md:pt-0">
        <TextParallaxContentExample />
        <Footer />
      </div>
    </>
  );
};

export default About;
