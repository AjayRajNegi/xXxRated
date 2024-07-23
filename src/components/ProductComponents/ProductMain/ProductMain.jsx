import zW from "../../../assets/images/zW.png";
import zB from "../../../assets/images/zB.png";
import zBl from "../../../assets/images/zBl.png";

import nB from "../../../assets/images/nB.png";
import nC from "../../../assets/images/nC.png";
import nD from "../../../assets/images/nD.png";
import nH from "../../../assets/images/nH.png";

import gB from "../../../assets/images/gB.png";
import gG from "../../../assets/images/gG.png";
import gO from "../../../assets/images/gO.png";
import gP from "../../../assets/images/gP.png";
import gR from "../../../assets/images/gR.png";
import "./ProductMain.css";
import { Link } from "react-router-dom";

const ProductMain = () => {
  return (
    <div>
      <div className="products text-black">
        <div
          className="products-header justify-between lg:flex"
          style={{ gap: "50vw" }}
        >
          <div className="products-header-first text-left text-2xl md:text-4xl">
            PRODUCTS
          </div>
          <div className="products-header-second xs:text-right pt-6 leading-4 lg:text-left">
            OUR MISSION IS TO FIND CUSTOMIZED SOLUTIONS FOR THE MOST DEMANDING
            CUSTOMERS, DEVELOPING INNOVATIVE IDEAS AND PAYING PARTICULAR
            ATTENTION TO THE ENVIRONMENTAL IMPACTS OF INDUSTRIAL PRODUCTION.
          </div>
        </div>
        {/* Zipline Container */}
        <div className="products-main zipline grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">ZIP LINE</p>
          </div>
          <div className="products-product">
            <p>ZIP-WHITE</p>
            <img src={zW} alt="" />
          </div>
          <div className="products-product">
            <p>ZIP-BLUE</p>
            <img src={zB} alt="" />
          </div>
          <div className="products-product">
            <p>ZIP-BLACK</p>
            <img src={zBl} alt="" />
          </div>
        </div>
        {/* No Gas Container */}
        <div className="products-main no-gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">NO-GAS</p>
          </div>
          <div className="products-product">
            <p>CLIMAX NO-GAS</p>
            <img src={nC} alt="" />
          </div>
          <div className="products-product">
            <p>BOLD NO-GAS</p>
            <img src={nB} alt="" />
          </div>
          <div className="products-product">
            <p>DIRTY NO-GAS</p>
            <img src={nD} alt="" />
          </div>
          <div className="products-product">
            <p>HARD NO-GAS</p>
            <img src={nH} alt="" />
          </div>
        </div>
        {/* Gas Container */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">GAS</p>
          </div>
          <div className="products-product">
            <p>INTIMIDATE R</p>
            <img src={gO} alt="" />
          </div>
          <Link to="/pleasureG" className="products-product">
            <p>PLEASURE B</p>
            <img src={gB} alt="" />
          </Link>
          <div className="products-product">
            <p>NAUGHTY P</p>
            <img src={gP} alt="" />
          </div>
          <div className="products-product">
            <p>FOREPLAY G</p>
            <img src={gG} alt="" />
          </div>
          <div className="products-product">
            <p>SENSUAL R</p>
            <img src={gR} alt="" />
          </div>
        </div>
        {/* 
        <hr className="products-hr" /> */}
      </div>
    </div>
  );
};

export default ProductMain;
