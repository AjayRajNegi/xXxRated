import { Footer, Navbar, Navigation, DragCards } from "../../../Index";
import oBl from "../../../../assets/images/OUD/BlackOud.png";
import OudImages from "./OudImages";

const BlackOud = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] bg-white md:flex">
        <div className="relative h-[200vh] w-[35%] bg-zinc-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-zinc-300 p-5">
            <img
              src={oBl}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              SUPREME
            </h1>
            <div className="text-xl font-semibold">
              Elevate Your Presence with Supreme Discover the captivating allure
              of Supreme, a deodorant crafted for those who command attention
              and exude confidence. <br /> Unforgettable Scent Profile Top
              Notes: <br /> Black Pepper: A spicy and invigorating start that
              awakens your senses. Incense: Mystical and aromatic, adding depth
              to the opening. Caramel: A touch of sweetness that balances the
              spice, creating an enticing blend.
              <br />
              Rose: Timeless and elegant, bringing a classic floral touch. Lily
              of the Valley: Delicate and fresh, enhancing the floral bouquet.
              Saffron: Exotic and luxurious, adding a sophisticated edge.
              <br />
              <br />
              Where Elegance Meets Strength.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
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
      <div className="block bg-zinc-200 pt-8 md:hidden">
        <div className="m-8 bg-zinc-300">
          <img src={oBl} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-500">
              SUPREME
            </h1>
            <div className="text-md font-semibold">
              Elevate Your Presence with Supreme Discover the captivating allure
              of Supreme, a deodorant crafted for those who command attention
              and exude confidence. <br /> Unforgettable Scent Profile Top
              Notes: <br />
              Black Pepper: A spicy and invigorating start that awakens your
              senses. Incense: Mystical and aromatic, adding depth to the
              opening. Caramel: A touch of sweetness that balances the spice,
              creating an enticing blend.
              <br />
              Rose: Timeless and elegant, bringing a classic floral touch. Lily
              of the Valley: Delicate and fresh, enhancing the floral bouquet.
              Saffron: Exotic and luxurious, adding a sophisticated edge. <br />
              <br />
              Where Elegance Meets Strength.
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="mt-[50px] w-fit bg-zinc-300 px-4 py-2 text-2xl font-semibold text-black transition-colors hover:bg-zinc-200">
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

export default BlackOud;
