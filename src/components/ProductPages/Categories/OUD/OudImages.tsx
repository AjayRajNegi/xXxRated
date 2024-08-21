import React from "react";
import oW from "../../../../assets/images/OUD/Woud.jpg";
import oBk from "../../../../assets/images/OUD/Bkoud.jpg";
import oG from "../../../../assets/images/OUD/Goud.jpg";
import oR from "../../../../assets/images/OUD/Roud.jpg";

const OudImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={oW} alt="" />
      <img src={oBk} alt="" />
      <img src={oG} alt="" />
      <img src={oR} alt="" />
    </div>
  );
};

export default OudImages;
