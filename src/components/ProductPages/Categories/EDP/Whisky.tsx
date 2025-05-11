import { Footer, Navbar, Navigation } from "../../../Index";
import lg from "../../../../assets/images/EDP/whisky.jpg";
import EDPImages from "./EDPImages";

const Whisky = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-red-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-red-300 p-5">
            <img
              src={lg}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-red-500">
              Eau de parfum-Whisky
            </h1>
            <div className="text-xl font-semibold">
              Indulge in the raw allure of XXX Rated Whisky, a premium Eau De
              Parfum crafted for those who live life on their own terms. This
              daring fragrance opens with bold, smoky whisky notes that command
              attention, setting the stage for a rich and sensuous blend that
              lingers long after the first spray. Perfect for evenings, special
              occasions, or whenever you want to make a lasting impression, XXX
              Rated Whisky is not for the faint-hearted--it's for those who
              savor the finer, darker pleasures of life.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹2499
              </button>
            </div>
            <div className="mt-[100px]">
              <EDPImages />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block bg-red-200 pt-8 md:hidden">
        <div className="m-8 bg-red-300">
          <img src={lg} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-red-500">
              Eau de parfum-Whisky
            </h1>
            <div className="text-md font-semibold">
              Indulge in the raw allure of XXX Rated Whisky, a premium Eau De
              Parfum crafted for those who live life on their own terms. This
              daring fragrance opens with bold, smoky whisky notes that command
              attention, setting the stage for a rich and sensuous blend that
              lingers long after the first spray. Perfect for evenings, special
              occasions, or whenever you want to make a lasting impression, XXX
              Rated Whisky is not for the faint-hearted--it's for those who
              savor the finer, darker pleasures of life.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
                <span className="italic">Buy It Now @ </span>₹2499
              </button>
            </div>
            <div className="mt-[100px]">
              <EDPImages />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Whisky;
