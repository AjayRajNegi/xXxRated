import zW from "../../../../assets/images/Zip/W.jpeg";
import zB from "../../../../assets/images/Zip/B.jpg";
import zBl from "../../../../assets/images/Zip/Bl.jpeg";

const ZipImages = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <img src={zW} alt="" className="mx-auto" />
      <img src={zB} alt="" className="mx-auto" />
      <img src={zBl} alt="" className="mx-auto" />
    </div>
  );
};

export default ZipImages;
