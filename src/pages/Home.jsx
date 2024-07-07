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
import A from "../componenets/Testing/A";

const Home = () => {
  return (
    <>
      <Navigation />
      <Mask />
      <ProductsSection />
      <ChooseSection />
      <ScrollerGravity />
      <NextLevel />
      <A />
    </>
  );
};

export default Home;
