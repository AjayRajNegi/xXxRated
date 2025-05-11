import { Footer, Navbar, Navigation } from "../../../Index";
import lg from "../../../../assets/images/EDP/softly.jpg";
import EDPImages from "./EDPImages";

const Softly = () => {
  return (
    <>
      <Navbar />
      <Navigation />
      <div className="m-auto hidden max-w-[100%] md:flex">
        <div className="relative h-[180vh] w-[35%] bg-slate-200">
          <div className="fixed left-[17.5%] top-[50%] h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-5">
            <img
              src={lg}
              alt=""
              className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="h-[180vh] w-[65%] bg-white">
          <div className="p-10 pt-[12rem]">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-slate-500">
              Eau de parfum-Softly
            </h1>
            <div className="text-xl font-semibold">
              Say hello to Softly, the playful yet irresistible premium Eau de
              Toilette from XXX Rated. Bursting with juicy, fruity notes, this
              scent is all about confidence, charm, and a touch of sweetness
              that lingers all day. Crafted for those who love to stand out
              without shouting, Softly is the perfect scent for poth casual
              brunches and late-night flings. Long- lasting fruity fragrance
              Stylish, premium bottle design Perfect for daily wear and gifting
              Unisex soft, sensual & fresh Whisper your presence. Own the
              moment. Go Softly.
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
      <div className="block bg-slate-200 pt-8 md:hidden">
        <div className="m-8 bg-slate-300">
          <img src={lg} alt="" className="px-4" />
        </div>
        <div>
          <div className="p-10">
            <h1 className="text-6xl font-bold uppercase tracking-tight text-slate-500">
              Eau de parfum-Softly
            </h1>
            <div className="text-md font-semibold">
              Say hello to Softly, the playful yet irresistible premium Eau de
              Toilette from XXX Rated. Bursting with juicy, fruity notes, this
              scent is all about confidence, charm, and a touch of sweetness
              that lingers all day. Crafted for those who love to stand out
              without shouting, Softly is the perfect scent for poth casual
              brunches and late-night flings. Long- lasting fruity fragrance
              Stylish, premium bottle design Perfect for daily wear and gifting
              Unisex soft, sensual & fresh Whisper your presence. Own the
              moment. Go Softly.
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

export default Softly;
