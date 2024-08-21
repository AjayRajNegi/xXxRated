import { Footer, Navbar, Navigation } from "../../../Index";
import nH from "../../../../assets/images/Pocket/PH.png";
import PImages from "./PImages";

const HardP = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-zinc-300">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-zinc-400 p-5">
            <img
              src={nH}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              HARD NO-GAS POCKET
            </h1>
            <div className="text-xl font-semibold">
              Introducing a new No Gas Body Spray by xXx Rated Deo, wrapped up
              with exhilarating, irresistible fragrance. This sensual deo brings
              to you a lovely aromatic oriental fragrance with a natural
              herbaceous and fougere middle note. Carry it in your backpack,
              spray a little of it, and get rid of body odour all day long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹99
              </button>
            </div>
            <div className="mt-[100px]">
              <PImages />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block bg-zinc-200 pt-8 md:hidden">
        <div className="m-8 bg-zinc-300">
          <img src={nH} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              HARD NO-GAS POCKET
            </h1>
            <div className="text-md font-semibold">
              Introducing a new No Gas Body Spray by xXx Rated Deo, wrapped up
              with exhilarating, irresistible fragrance. This sensual deo brings
              to you a lovely aromatic oriental fragrance with a natural
              herbaceous and fougere middle note. Carry it in your backpack,
              spray a little of it, and get rid of body odour all day long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹99
              </button>
            </div>
            <div className="mt-[100px]">
              <PImages />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HardP;
