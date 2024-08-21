import { Footer, Navbar, Navigation } from "../../../Index";
import nD from "../../../../assets/images/nD.png";
import NGImages from "./NGImages";

const PleasureG = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-zinc-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-zinc-300 p-5">
            <img
              src={nD}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              dIRTY NO-GAS
            </h1>
            <div className="text-xl font-semibold">
              Introducing a new No Gas Body Spray by xXx Rated Deo, wrapped up
              with exhilarating, irresistible fragrance. This sensual deo brings
              to you a luxurious sparkling fragrance with notes of sparkling
              grapefruit, red orange, mint, rose, cinnamon, spices, blond
              leather, blond wood, patchouli and amber. Carry it in your
              backpack, spray a little of it, and get rid of body odour all day
              long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹349
              </button>
            </div>
            <div className="mt-[100px]">
              <NGImages />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block bg-gray-200 pt-8 md:hidden">
        <div className="m-8 bg-gray-300">
          <img src={nD} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-gray-500">
              DIRTY NO-GAS
            </h1>
            <div className="text-md font-semibold">
              Introducing a new No Gas Body Spray by xXx Rated Deo, wrapped up
              with exhilarating, irresistible fragrance. This sensual deo brings
              to you a luxurious sparkling fragrance with notes of sparkling
              grapefruit, red orange, mint, rose, cinnamon, spices, blond
              leather, blond wood, patchouli and amber. Carry it in your
              backpack, spray a little of it, and get rid of body odour all day
              long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹349
              </button>
            </div>
            <div className="mt-[100px]">
              <NGImages />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PleasureG;
