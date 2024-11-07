import "./ProductMain.css";
import { Link } from "react-router-dom";

import oW from "../../../assets/images/OUD/WhiteOud.png";
import oB from "../../../assets/images/OUD/BlueOud.png";
import oR from "../../../assets/images/OUD/Spizy-removebg.png";
import oG from "../../../assets/images/OUD/GreenOud.png";
import oBl from "../../../assets/images/OUD/BlackOud.png";
import oBC from "../../../assets/images/OUD/BodyCombo.png";

import zW from "../../../assets/images/zW.png";
import zB from "../../../assets/images/zB.png";
import zBl from "../../../assets/images/zBl.png";
import zCB from "../../../assets/images/Zip/zipCombo.png";

import nB from "../../../assets/images/nB.png";
import nC from "../../../assets/images/nC.png";
import nD from "../../../assets/images/nD.png";
import nH from "../../../assets/images/nH.png";
import nCB from "../../../assets/images/NG/nGasCombo.png";

import gB from "../../../assets/images/gB.png";
import gG from "../../../assets/images/gG.png";
import gO from "../../../assets/images/gO.png";
import gP from "../../../assets/images/gP.png";
import gR from "../../../assets/images/gR.png";

import pBP from "../../../assets/images/Pocket/PBP.png";
import pCP from "../../../assets/images/Pocket/PCP.png";
import pDP from "../../../assets/images/Pocket/PDP.png";
import pHP from "../../../assets/images/Pocket/PHP.png";

import pT from "../../../assets/images/Pocket.png";
import hT from "../../../assets/images/hotshot.png";
import hM from "../../../assets/images/hotshotM.png";

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
        {/* OUD Container */}
        <div className="products-main oud grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">BODY SPRAY</p>
          </div>
          <Link to="/blackOUD" className="products-product">
            <p>SUPREME</p>
            <img src={oBl} alt="" />
          </Link>
          <Link to="/blueOUD" className="products-product">
            <p>AQUAX</p>
            <img src={oB} alt="" />
          </Link>
          <Link to="/redOUD" className="products-product">
            <p>SPIZY</p>
            <img src={oR} alt="" />
          </Link>
          <Link to="/greenOUD" className="products-product">
            <p>ICONIC</p>
            <img src={oG} alt="" />
          </Link>
          <Link to="/whiteOUD" className="products-product">
            <p>WILD </p>
            <img src={oW} alt="" className="h-450px] relative top-8" />
          </Link>
        </div>
        {/* Zipline Container */}
        <div className="products-main zipline grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">ZIP LINE</p>
          </div>
          <Link to="/whiteZ" className="products-product">
            <p>ZIP-WHITE</p>
            <img src={zW} alt="" />
          </Link>
          <Link to="/blueZ" className="products-product">
            <p>ZIP-BLUE</p>
            <img src={zB} alt="" />
          </Link>
          <Link to="/blackZ" className="products-product">
            <p>ZIP-BLACK</p>
            <img src={zBl} alt="" />
          </Link>
        </div>
        {/* No Gas Container */}
        <div className="products-main no-gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">NO-GAS</p>
          </div>
          <Link to="/climaxN" className="products-product">
            <p>CLIMAX NO-GAS</p>
            <img src={nC} alt="" />
          </Link>
          <Link to="/boldN" className="products-product">
            <p>BOLD NO-GAS</p>
            <img src={nB} alt="" />
          </Link>
          <Link to="/dirtyN" className="products-product">
            <p>DIRTY NO-GAS</p>
            <img src={nD} alt="" />
          </Link>
          <Link to="/hardN" className="products-product">
            <p>HARD NO-GAS</p>
            <img src={nH} alt="" />
          </Link>
        </div>
        {/* HotShot */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">HOTSHOT</p>
          </div>

          <Link to="/hotshot" className="products-product">
            <p>WOMEN</p>
            <img src={hT} alt="" />
          </Link>
          <Link to="/hotshotM" className="products-product">
            <p>MEN</p>
            <img src={hM} alt="" />
          </Link>
        </div>
        {/* Pocket */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">POCKET</p>
          </div>
          <Link to="/climaxP" className="products-product">
            <p>CLIMAX NO-GAS POCKET</p>
            <img src={pCP} alt="" />
          </Link>
          <Link to="/boldP" className="products-product">
            <p>BOLD NO-GAS POCKET</p>
            <img src={pBP} alt="" />
          </Link>
          <Link to="/dirtyP" className="products-product">
            <p>DIRTY NO-GAS POCKET</p>
            <img src={pDP} alt="" />
          </Link>
          <Link to="/hardP" className="products-product">
            <p>HARD NO-GAS POCKET</p>
            <img src={pHP} alt="" />
          </Link>
        </div>
        {/* COMBOS */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">COMBOS</p>
          </div>
          {/* <Link to="/comboO" className="products-product h-[340px]">
            <p>COMBO BODY-SPRAY</p>
            <img src={zCB} alt="" className="h-[275px] pt-[100px]" />
          </Link> */}
          <Link to="/comboO" className="products-product h-[340px]">
            <p>COMBO BODY-SPRAY</p>
            <img
              src={oBC}
              alt=""
              className="relative top-8 h-[225px] min-w-[350px] pt-[100px]"
            />
          </Link>
          <Link to="/comboZ" className="products-product h-[340px]">
            <p>COMBO ZIPLINE</p>
            <img src={zCB} alt="" className="h-[275px] pt-[100px]" />
          </Link>
          <Link to="/comboN" className="products-product">
            <p>COMBO NO-GAS</p>
            <img src={nCB} alt="" className="h-[275px] pt-[100px]" />
          </Link>
          <Link to="/pocket" className="products-product">
            <p>COMBO POCKET</p>
            <img src={pT} alt="" className="pt-[100px]" />
          </Link>
          <Link to="/hotshot" className="products-product">
            <p>HOTSHOT WOMEN</p>
            <img src={hT} alt="" />
          </Link>
          <Link to="/hotshotM" className="products-product">
            <p>HOTSHOT MEN</p>
            <img src={hM} alt="" />
          </Link>
        </div>

        {/* Gas Container */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">GAS</p>
          </div>
          <Link to="/intimateG" className="products-product">
            <p>INTIMATE R</p>
            <img src={gO} alt="" />
          </Link>
          <Link to="/pleasureG" className="products-product">
            <p>PLEASURE B</p>
            <img src={gB} alt="" />
          </Link>
          <Link to="/naughtyG" className="products-product">
            <p>NAUGHTY P</p>
            <img src={gP} alt="" />
          </Link>
          <Link to="/foreplayG" className="products-product">
            <p>FOREPLAY G</p>
            <img src={gG} alt="" />
          </Link>
          <Link to="/sensualG" className="products-product">
            <p>SENSUAL R</p>
            <img src={gR} alt="" />
          </Link>
        </div>

        {/* 
        <hr className="products-hr" /> */}
      </div>
    </div>
  );
};

export default ProductMain;
