import { Footer, Navbar, Navigation, DragCards } from "../../../Index";
import oR from "../../../../assets/images/OUD/Spizy-removebg.png";
import OudImages from "./OudImages";

const RedOud = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] bg-white md:flex">
        <div className="relative h-[200vh] w-[35%] bg-red-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-red-300 p-5">
            <img
              src={oR}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-red-500">
              SPIZY
            </h1>
            <div className="text-xl font-semibold">
              Embrace the dynamic and captivating essence of Spizy Deodorant, a
              fragrance crafted for those who exude confidence and passion. With
              its unique blend of vibrant bergamot, exotic cardamom, juicy red
              apple, aromatic lavender, succulent yellow plum, delicate orange
              blossom, rich cedar, warm tonka bean, and resinous labdanum, Spizy
              is designed to ignite your spirit and keep you feeling fresh and
              energized all day long. <br /> Top Notes: <br />A Burst of
              Freshness Start your day with the exhilarating top notes of
              bergamot, cardamom, and red apple. This refreshing combination
              delivers a zesty and fruity opening that awakens your senses and
              sets a lively tone for the day ahead.
              <br />
              <br />
              Unleash Your Inner Fire
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-red-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-red-200">
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
      <div className="block bg-red-200 pt-8 md:hidden">
        <div className="m-8 bg-red-300">
          <img src={oR} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-red-500">
              SPIZY
            </h1>
            <div className="text-md font-semibold">
              Embrace the dynamic and captivating essence of Spizy Deodorant, a
              fragrance crafted for those who exude confidence and passion. With
              its unique blend of vibrant bergamot, exotic cardamom, juicy red
              apple, aromatic lavender, succulent yellow plum, delicate orange
              blossom, rich cedar, warm tonka bean, and resinous labdanum, Spizy
              is designed to ignite your spirit and keep you feeling fresh and
              energized all day long. <br /> Top Notes: <br />A Burst of
              Freshness Start your day with the exhilarating top notes of
              bergamot, cardamom, and red apple. This refreshing combination
              delivers a zesty and fruity opening that awakens your senses and
              sets a lively tone for the day ahead.
              <br />
              <br />
              Unleash Your Inner Fire
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-red-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-red-200">
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

export default RedOud;
