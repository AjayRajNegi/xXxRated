import "./Mask.css";
import www from "/icons8-web.gif";

const Mask = () => {
  return (
    <>
      <div className="mask w-full bg-black text-white">
        <div className="mask-header flex justify-between">
          <div className="mask-header-first flex items-center gap-2 leading-4">
            <img src={www} alt="" />
            <p className="">
              BASED IN DELHI (INDIA) AND <br /> WORKING NATIONWIDE
            </p>
          </div>
          <div className="mask-header-second hidden text-right leading-4 md:flex">
            <p>
              ©2024 XXX RATED <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
        <div className="mask-content">
          <p className="text-center text-xl leading-5 md:text-4xl md:leading-8">
            <span className="text-2xl md:text-5xl">XXX RATED.</span> <br />
            <span>SENSUALITY</span> <span className="italic">has a new</span>{" "}
            ADDRESS.
          </p>
        </div>

        <hr className="mask-hr" />
      </div>
    </>
  );
};

export default Mask;
