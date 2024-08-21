import gW from "../../../../assets/images/gB.png";
import gG from "../../../../assets/images/gG.png";
import gR from "../../../../assets/images/gP.png";
import gO from "../../../../assets/images/gO.png";

const GasImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={gW} alt="" />
      <img src={gG} alt="" />
      <img src={gR} alt="" />
      <img src={gO} alt="" />
    </div>
  );
};

export default GasImages;
