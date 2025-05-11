import "./ProductMain.css";
import { Link } from "react-router-dom";

import oW from "../../../assets/images/OUD/WhiteOud.png";
import oB from "../../../assets/images/OUD/BlueOud.png";
import oR from "../../../assets/images/OUD/Spizy-removebg.png";
import oG from "../../../assets/images/OUD/GreenOud.png";
import oBl from "../../../assets/images/OUD/BlackOud.png";
import oBC from "../../../assets/images/OUD/BodyCombo.png";

import lg from "../../../assets/images/EDP/legend.jpg";
import wh from "../../../assets/images/EDP/whisky.jpg";
import so from "../../../assets/images/EDP/softly.jpg";

import zW from "../../../assets/images/zW.webp";
import zB from "../../../assets/images/zB.webp";
import zBl from "../../../assets/images/zBl.webp";
import zCB from "../../../assets/images/Zip/zipCombo.webp";

import nB from "../../../assets/images/nB.webp";
import nC from "../../../assets/images/nC.webp";
import nD from "../../../assets/images/nD.webp";
import nH from "../../../assets/images/nH.webp";
import nCB from "../../../assets/images/NG/nGasCombo.webp";

import gB from "../../../assets/images/gB.webp";
import gG from "../../../assets/images/gG.webp";
import gO from "../../../assets/images/gO.webp";
import gP from "../../../assets/images/gP.webp";
import gR from "../../../assets/images/gR.webp";

import pBP from "../../../assets/images/Pocket/PBP.webp";
import pCP from "../../../assets/images/Pocket/PCP.webp";
import pDP from "../../../assets/images/Pocket/PDP.webp";
import pHP from "../../../assets/images/Pocket/PHP.webp";

import pT from "../../../assets/images/Pocket.webp";
import hT from "../../../assets/images/hotshot.webp";
import hM from "../../../assets/images/hotshotM.webp";

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
          <Link to="/oud/black" className="products-product">
            <p>SUPREME</p>
            <img src={oBl} alt="" />
          </Link>
          <Link to="/oud/blue" className="products-product">
            <p>AQUAX</p>
            <img src={oB} alt="" />
          </Link>
          <Link to="/oud/red" className="products-product">
            <p>SPIZY</p>
            <img src={oR} alt="" />
          </Link>
          <Link to="/oud/green" className="products-product">
            <p>ICONIC</p>
            <img src={oG} alt="" />
          </Link>
          <Link to="/oud/white" className="products-product">
            <p>WILD </p>
            <img src={oW} alt="" className="h-450px] relative top-8" />
          </Link>
        </div>
        {/* EDP Container */}
        <div className="products-main oud grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">Eau De Perfum</p>
          </div>
          <Link to="/edp" className="products-product">
            <p>LEGEND</p>
            <img src={lg} alt="" />
          </Link>
          <Link to="/edp/whisky" className="products-product">
            <p>WHISKY</p>
            <img src={wh} alt="" />
          </Link>
          <Link to="/edp/softly" className="products-product">
            <p>SOFTLY</p>
            <img src={so} alt="" />
          </Link>
        </div>
        {/* Zipline Container */}
        <div className="products-main zipline grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">ZIP LINE</p>
          </div>
          <Link to="/zipline/white" className="products-product">
            <p>ZIP-WHITE</p>
            <img src={zW} alt="" />
          </Link>
          <Link to="/zipline/blue" className="products-product">
            <p>ZIP-BLUE</p>
            <img src={zB} alt="" />
          </Link>
          <Link to="/zipline/black" className="products-product">
            <p>ZIP-BLACK</p>
            <img src={zBl} alt="" />
          </Link>
        </div>
        {/* No Gas Container */}
        <div className="products-main no-gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">NO-GAS</p>
          </div>
          <Link to="/nogas/climax" className="products-product">
            <p>CLIMAX NO-GAS</p>
            <img src={nC} alt="" />
          </Link>
          <Link to="/nogas/bold" className="products-product">
            <p>BOLD NO-GAS</p>
            <img src={nB} alt="" />
          </Link>
          <Link to="/nogas/dirty" className="products-product">
            <p>DIRTY NO-GAS</p>
            <img src={nD} alt="" />
          </Link>
          <Link to="/nogas/hard" className="products-product">
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
          <Link to="/hotshot/m" className="products-product">
            <p>MEN</p>
            <img src={hM} alt="" />
          </Link>
        </div>
        {/* Pocket */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">POCKET</p>
          </div>
          <Link to="/pocket/climax" className="products-product">
            <p>CLIMAX NO-GAS POCKET</p>
            <img src={pCP} alt="" />
          </Link>
          <Link to="/pocket/bold" className="products-product">
            <p>BOLD NO-GAS POCKET</p>
            <img src={pBP} alt="" />
          </Link>
          <Link to="/pocket/dirty" className="products-product">
            <p>DIRTY NO-GAS POCKET</p>
            <img src={pDP} alt="" />
          </Link>
          <Link to="/pocket/hard" className="products-product">
            <p>HARD NO-GAS POCKET</p>
            <img src={pHP} alt="" />
          </Link>
        </div>
        {/* COMBOS */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">COMBOS</p>
          </div>
          <Link to="/oud/combo" className="products-product h-[340px]">
            <p>COMBO BODY-SPRAY</p>
            <img
              src={oBC}
              alt=""
              className="relative top-8 h-[225px] min-w-[350px] pt-[100px]"
            />
          </Link>
          <Link to="/zipline/combo" className="products-product h-[340px]">
            <p>COMBO ZIPLINE</p>
            <img src={zCB} alt="" className="h-[275px] pt-[100px]" />
          </Link>
          <Link to="/nogas/combo" className="products-product">
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
          <Link to="/hotshot/m" className="products-product">
            <p>HOTSHOT MEN</p>
            <img src={hM} alt="" />
          </Link>
        </div>

        {/* Gas Container */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">GAS</p>
          </div>
          <Link to="/gas/intimate" className="products-product">
            <p>INTIMATE R</p>
            <img src={gO} alt="" />
          </Link>
          <Link to="/gas/pleasure" className="products-product">
            <p>PLEASURE B</p>
            <img src={gB} alt="" />
          </Link>
          <Link to="/gas/naughty" className="products-product">
            <p>NAUGHTY P</p>
            <img src={gP} alt="" />
          </Link>
          <Link to="/gas/foreplay" className="products-product">
            <p>FOREPLAY G</p>
            <img src={gG} alt="" />
          </Link>
          <Link to="/gas/sensual" className="products-product">
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
