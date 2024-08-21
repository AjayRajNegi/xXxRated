import { Footer, Navbar, Navigation } from "../../../Index";
import oG from "../../../../assets/images/OUD/GreenOud.png";
import OudImages from "./OudImages";

const GreenOud = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-green-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-green-300 p-5">
            <img
              src={oG}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-green-500">
              ICONIC
            </h1>
            <div className="text-xl font-semibold">
              Introducing a new Gas Body Spray by xXx Rated Deo, wrapped up with
              exhilarating, irresistible fragrance. This sensual deo brings to
              you a lovely Deep Dark Oriental Fragrance of Vetiver, Potchuli
              Black Orchid and Ambergris, brought to life by an Overdose of
              Mandarin and Related Citruses. Carry it in your backpack, spray a
              little of it, and get rid of body odour all day long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-green-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-green-200">
                <span className="italic">Buy It Now @ </span>₹399
              </button>
            </div>
            <div className="mb-[100px] mt-[100px]">
              <OudImages />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block bg-green-200 pt-8 md:hidden">
        <div className="m-8 bg-green-300">
          <img src={oG} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-green-500">
              ICONIC
            </h1>
            <div className="text-md font-semibold">
              Introducing a new Gas Body Spray by xXx Rated Deo, wrapped up with
              exhilarating, irresistible fragrance. This sensual deo brings to
              you a lovely Deep Dark Oriental Fragrance of Vetiver, Potchuli
              Black Orchid and Ambergris, brought to life by an Overdose of
              Mandarin and Related Citruses. Carry it in your backpack, spray a
              little of it, and get rid of body odour all day long.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-green-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-green-200">
                <span className="italic">Buy It Now @ </span>₹399
              </button>
            </div>
            <div className="mt-[100px]">
              <OudImages />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GreenOud;
