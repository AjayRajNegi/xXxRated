import BlackSquishy from "./SquishyCards/BlackSquishy";
import BlueSquishy from "./SquishyCards/BlueSquishy";
import RedSquishy from "./SquishyCards/RedSquishy";

const Squishy = () => {
  return (
    <>
      <h1 className="bg-black px-4 pt-16 text-center text-3xl font-bold text-white">
        PRODUCTS
      </h1>
      <div className="flex flex-col justify-between bg-black px-8 md:flex-row">
        <RedSquishy />
        <BlackSquishy />
        <BlueSquishy />
      </div>
    </>
  );
};

export default Squishy;
