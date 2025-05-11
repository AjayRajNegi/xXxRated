import lg from "../../../../assets/images/EDP/legend.jpg";
import sf from "../../../../assets/images/EDP/softly.jpg";
import wh from "../../../../assets/images/EDP/whisky.jpg";
const EDPImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={lg} alt="" />
      <img src={sf} alt="" />
      <img src={wh} alt="" />
    </div>
  );
};

export default EDPImages;
