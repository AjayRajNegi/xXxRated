import { Footer, Navbar, Navigation } from "../../../Index";
import oB from "../../../../assets/images/OUD/BlueOud.png";
import OudImages from "./OudImages";

const BlueOud = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] bg-white md:flex">
        <div className="relative h-[200vh] w-[35%] bg-blue-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-blue-300 p-5">
            <img
              src={oB}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-blue-500">
              AQUAX
            </h1>
            <div className="text-xl font-semibold">
              Dive into a world of invigorating freshness and sophisticated
              allure with Aquax Deodorant. Crafted for the modern individual who
              embraces boldness and elegance, Aquax is a masterful blend of
              nature’s finest elements, promising a scent experience that
              lingers and captivates. <br /> Top Notes: <br /> A Zesty Awakening
              Begin your journey with the vibrant and energizing top notes of
              black pepper, ginger, and grapefruit. This exhilarating
              combination awakens the senses, providing a fresh and spicy
              introduction that sets the tone for a day full of confidence and
              vitality. <br />
              <br />
              Unleash Your Inner Strength
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-blue-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-blue-200">
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
      <div className="block bg-blue-200 pt-8 md:hidden">
        <div className="m-8 bg-blue-300">
          <img src={oB} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-blue-500">
              AQUAX
            </h1>
            <div className="text-md font-semibold">
              Dive into a world of invigorating freshness and sophisticated
              allure with Aquax Deodorant. Crafted for the modern individual who
              embraces boldness and elegance, Aquax is a masterful blend of
              nature’s finest elements, promising a scent experience that
              lingers and captivates. <br /> Top Notes: <br /> A Zesty Awakening
              Begin your journey with the vibrant and energizing top notes of
              black pepper, ginger, and grapefruit. This exhilarating
              combination awakens the senses, providing a fresh and spicy
              introduction that sets the tone for a day full of confidence and
              vitality.
              <br />
              <br />
              Unleash Your Inner Strength
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-blue-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-blue-200">
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

export default BlueOud;
