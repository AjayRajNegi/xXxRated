import ButtonWrapper from "./ButtonWrapper";
import BlackSquishy from "./SquishyCards/BlackSquishy";
import BlueSquishy from "./SquishyCards/BlueSquishy";
import RedSquishy from "./SquishyCards/RedSquishy";

const Squishy = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-black px-[4vw] pt-[80px] text-white md:flex-row md:pt-[6vw]">
        <h1 className="text-6xl font-bold tracking-tight">PRODUCTS</h1>
        <a href="" className="hidden md:block">
          <ButtonWrapper />
        </a>
      </div>
      <div className="grid grid-cols-1 justify-between bg-black px-2 md:grid-cols-2 md:flex-row md:px-8 lg:grid-cols-3">
        <RedSquishy />
        <BlackSquishy />
        <BlueSquishy />
      </div>
      <div className="flex bg-black px-[4vw] pb-[50px] pt-[30px] md:hidden">
        <a href="" className="mx-auto">
          <ButtonWrapper />
        </a>
      </div>

      <div className="w-full bg-black px-[4vw] pt-[6vw]">
        <hr className="mask-hr" />
      </div>
    </>
  );
};

export default Squishy;
