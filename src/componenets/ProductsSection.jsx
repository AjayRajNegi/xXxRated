import React from "react";
import gR from "./images/NoB/gR.png";
import zW from "./images/NoB/zW.png";
import nB from "./images/NoB/nB.png";
import "./styles/ProductSection.css";

const ProductsSection = () => {
  return (
    <>
      <div className="product-section bg-black text-white">
        <div
          className="product-section-header justify-between lg:flex"
          style={{ gap: "50vw" }}
        >
          <div className="product-section-header-first text-left text-2xl md:text-4xl">
            PRODUCTS
          </div>
          <div className="product-section-header-second xs:text-right pt-6 leading-4 lg:text-left">
            OUR MISSION IS TO FIND CUSTOMIZED SOLUTIONS FOR THE MOST DEMANDING
            CUSTOMERS, DEVELOPING INNOVATIVE IDEAS AND PAYING PARTICULAR
            ATTENTION TO THE ENVIRONMENTAL IMPACTS OF INDUSTRIAL PRODUCTION.
          </div>
        </div>
        <div className="product-section-main grid grid-cols-1 gap-7 md:grid-cols-2 2xl:grid-cols-3">
          <div className="product-section-product">
            <p>ZIPLINE</p>
            <img src={zW} alt="" />
          </div>
          <div className="product-section-product">
            <p>NO-GAS</p>
            <img src={nB} alt="" />
          </div>
          <div className="product-section-product">
            <p>GAS</p>
            <img src={gR} alt="" />
          </div>
        </div>
        <hr className="product-section-hr" />
      </div>
    </>
  );
};

export default ProductsSection;
