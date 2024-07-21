export default function Content() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#4E4E5A] px-12 py-8">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="mt-10 text-[10vw] font-bold leading-[0.8] md:text-[14vw]">
        XXXRATED
      </h1>
      <p className="hidden md:block">©copyrightXXXRated2024</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-2xl font-bold uppercase text-[#ffffff80]">
          About
        </h3>
        <p className="font-semibold">Home</p>
        <p className="font-semibold">Projects</p>
        <p className="font-semibold">Contact</p>
        <p className="font-semibold">About Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 text-2xl font-bold uppercase text-[#ffffff80]">
          Products
        </h3>
        <p className="font-semibold">Zipline</p>
        <p className="font-semibold">No Gas</p>
        <p className="font-semibold">Gas</p>
        <p className="font-semibold">Hotshot</p>
      </div>
    </div>
  );
};
