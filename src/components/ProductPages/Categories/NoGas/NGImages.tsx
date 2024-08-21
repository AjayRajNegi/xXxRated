import gW from "../../../../assets/images/NG/R.jpg";
import gG from "../../../../assets/images/NG/B.jpg";
import gR from "../../../../assets/images/NG/D.jpg";
import gO from "../../../../assets/images/NG/H.jpg";

const NGImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={gW} alt="" className="mx-auto h-[500px]" />
      <img src={gG} alt="" className="mx-auto h-[500px]" />
      <img src={gR} alt="" className="mx-auto h-[500px]" />
      <img src={gO} alt="" className="mx-auto h-[500px]" />
    </div>
  );
};

export default NGImages;
