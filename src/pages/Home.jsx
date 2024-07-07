import React from "react";
import {
  LodingAnimation,
  Navigation,
  Mask,
  ProductsSection,
  ChooseSection,
  NextLevel,
  ScrollerGravity,
} from "../componenets/Index";
import Scroller from "../componenets/Scroller";

const Home = () => {
  return (
    <>
      <Navigation />
      <Mask />
      <ProductsSection />
      <ChooseSection />
      <ScrollerGravity />
      <NextLevel />
      <Scroller />
    </>
  );
};

export default Home;
