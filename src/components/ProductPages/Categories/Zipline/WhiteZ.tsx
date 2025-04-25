import { Footer, Navbar, Navigation } from "../../../Index";
import zW from "../../../../assets/images/zW.webp";
import ZipImages from "./ZipImages";

const PleasureG = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-zinc-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-zinc-300 p-5">
            <img
              src={zW}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-black-500 text-6xl font-bold tracking-tight">
              ZIP-WHITE
            </h1>
            <div className="text-xl font-semibold">
              ZIPLINE by XXX RATED is a totally irresistible power packed
              gourmand unisex fragrance. It is the brand's signature. This
              deodorant has an invigorating scent which envelops you in a
              sensual fragrance for a long duration.This deo brings to you an
              ultra mordern, glamourous fragrance, it's opulent, golden scent
              shimmers on skin like sunbeams, slightly sharp floral with fresh
              mandarin in top; jasmine, plum, orchid and rose in the heart; and
              musk and blackberry in the trail . Carry it in your
              bagpack/handbag and spray a little on your body in order to smell
              good and prevent body odour all day long. This body spray bottle
              is designed squishy [velvet touch]. Simply "DEEWANA BANA DE".
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹399
              </button>
            </div>
            <div className="mt-[100px]">
              <ZipImages />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block bg-zinc-200 pt-8 md:hidden">
        <div>
          <img src={zW} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              ZIP-BLACK
            </h1>
            <div className="text-md font-semibold">
              ZIPLINE by XXX RATED is a totally irresistible power packed
              gourmand unisex fragrance. It is the brand's signature. This
              deodorant has an invigorating scent which envelops you in a
              sensual fragrance for a long duration.This deo brings to you an
              ultra mordern, glamourous fragrance, it's opulent, golden scent
              shimmers on skin like sunbeams, slightly sharp floral with fresh
              mandarin in top; jasmine, plum, orchid and rose in the heart; and
              musk and blackberry in the trail . Carry it in your
              bagpack/handbag and spray a little on your body in order to smell
              good and prevent body odour all day long. This body spray bottle
              is designed squishy [velvet touch]. Simply "DEEWANA BANA DE".
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹399
              </button>
            </div>
            <div className="mt-[100px]">
              <ZipImages />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PleasureG;
