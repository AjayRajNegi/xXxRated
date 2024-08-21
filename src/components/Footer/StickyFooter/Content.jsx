import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#ddd] px-12 py-8">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="relative top-32 md:top-[40%]">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="mt-10 text-[12vw] font-bold leading-[0.8] md:text-[13vw]">
        <span>XXX RATED</span>
      </h1>
      <p className="hidden md:block">©copyrightXXXRated2024</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-2xl font-bold uppercase text-black">About</h3>
        <Link className="font-semibold">Home</Link>
        <Link to="/product" className="font-semibold">
          Products
        </Link>
        <Link to="/contact" className="font-semibold">
          Contact
        </Link>
        <Link to="/about" className="font-semibold">
          About Us
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-black] mb-2 text-2xl font-bold uppercase">
          Products
        </h3>
        <Link to="/product" className="font-semibold">
          Body-Spray
        </Link>
        <Link to="/product" className="font-semibold">
          Gas
        </Link>
        <Link to="/product" className="font-semibold">
          Zipline
        </Link>
        <Link to="/product" className="font-semibold">
          Hotshot
        </Link>
        <Link to="/product" className="font-semibold">
          Combos
        </Link>
      </div>
    </div>
  );
};
