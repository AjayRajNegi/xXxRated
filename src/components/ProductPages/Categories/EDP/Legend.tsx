import { Footer, Navbar, Navigation } from "../../../Index";
import lg from "../../../../assets/images/EDP/legend.jpg";
import EDPImages from "./EDPImages";

const Legend = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-gray-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-5">
            <img
              src={lg}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-gray-500">
              Eau de parfum-Legend
            </h1>
            <div className="text-xl font-semibold">
              Step into your legacy with Legend, a premium Eau de Toilette
              crafted for the modern icon. Infused with the rare and luxurious
              White Oud, this fragrance evokes strength, sophistication, and
              lasting presence. Whether it&apos;s a boardroom meeting or an
              evening gala, Legend leaves a signature trail -subtle yet
              unforgettable. Long-lasting fragrance Premium packaging - perfect
              for gifting Ideal for day & night wear Suitable for all skin types
              Own the moment. Wear the Legend.
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
      <div className="block bg-gray-200 pt-8 md:hidden">
        <div className="m-8 bg-gray-300">
          <img src={lg} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-gray-500">
              Eau de parfum-Legend
            </h1>
            <div className="text-md font-semibold">
              Step into your legacy with Legend, a premium Eau de Toilette
              crafted for the modern icon. Infused with the rare and luxurious
              White Oud, this fragrance evokes strength, sophistication, and
              lasting presence. Whether it&apos;s a boardroom meeting or an
              evening gala, Legend leaves a signature trail -subtle yet
              unforgettable. Long-lasting fragrance Premium packaging - perfect
              for gifting Ideal for day & night wear Suitable for all skin types
              Own the moment. Wear the Legend.
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

export default Legend;
