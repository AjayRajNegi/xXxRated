import React from "react";
import {
  LodingAnimation,
  Navigation,
  Mask,
  ProductsSection,
  ChooseSection,
  NextLevel,
  ScrollerGravity,
  Footer,
} from "../componenets/Index";

const Home = () => {
  return (
    <>
      <Navigation />
      <Mask />
      <ProductsSection />
      <ChooseSection />
      <NextLevel />
      <ScrollerGravity />
      <Footer />
    </>
  );
};

export default Home;
