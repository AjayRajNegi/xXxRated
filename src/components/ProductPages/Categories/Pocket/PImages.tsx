import gW from "../../../../assets/images/Pocket/PDP.png";
import gG from "../../../../assets/images/Pocket/PBP.png";
import gR from "../../../../assets/images/Pocket/PCP.png";
import gO from "../../../../assets/images/Pocket/PHP.png";

const PImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={gW} alt="" className="mx-auto" />
      <img src={gG} alt="" className="mx-auto" />
      <img src={gR} alt="" className="mx-auto" />
      <img src={gO} alt="" className="mx-auto" />
    </div>
  );
};

export default PImages;
