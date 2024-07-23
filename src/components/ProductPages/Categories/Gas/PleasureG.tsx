import {
  Footer,
  Navbar,
  Navigation,
  TextGenerateEffectDemo,
  DragCards,
} from "../../../Index";
import gB from "../../../../assets/images/gB.png";

const PleasureG = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto flex max-w-[100%]">
        <div className="relative h-[180vh] w-[35%] bg-blue-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-blue-300 p-5">
            <img
              src={gB}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-blue-500">
              PLEASURE GAS
            </h1>
            <TextGenerateEffectDemo />
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[100px] w-fit bg-blue-300 px-4 py-2 font-semibold text-black transition-colors hover:bg-blue-200">
                Buy It Now.
              </button>
            </div>
            <div className="mt-[100px]">
              <DragCards />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PleasureG;
