import gW from "../../../../assets/images/Pocket/PDP.webp";
import gG from "../../../../assets/images/Pocket/PBP.webp";
import gR from "../../../../assets/images/Pocket/PCP.webp";
import gO from "../../../../assets/images/Pocket/PHP.webp";

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
