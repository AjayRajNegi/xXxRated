import FlyoutLinkBtn from "./FlyoutLinks/FlyoutLinkBtn";
import { Link } from "react-router-dom";
import NeuButton from "./NeuButton/NeuButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 hidden h-max w-full items-center justify-between px-4 pt-4 md:flex md:px-8">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-white md:text-2xl">XXXRATED</h1>
        <img src="./wlogo.svg" alt="logo image" className="h-[3rem] w-[3rem]" />
      </div>
      {/* Navbar for large devices. */}
      <ul
        className="gap-3 rounded-full p-1 px-1 transition-all duration-1000 ease-linear md:flex"
        style={{
          background: "rgba(0, 0, 0, .2)",
          backdropFilter: "blur(5rem)",
        }}
      >
        <li className="rounded-full px-2.5 transition-all duration-200 ease-linear hover:bg-[#ffffff66]">
          <Link to="/" className="font-normal text-white">
            HOME
          </Link>
        </li>
        <li className="rounded-full px-2.5 transition-all duration-200 ease-linear hover:bg-[#fafaf966]">
          <Link to="/product">
            <FlyoutLinkBtn />
          </Link>
        </li>
        <li className="rounded-full px-2.5 transition-all duration-200 ease-linear hover:bg-[#fafaf966]">
          <Link to="/contact" className="font-normal text-white">
            CONTACT
          </Link>
        </li>
        <li className="ease-linears rounded-full px-2.5 transition-all duration-200 hover:bg-[#fafaf966]">
          <Link to="/about" className="font-normal text-white">
            ABOUT US
          </Link>
        </li>
      </ul>
      <NeuButton title={"LogIn"} />
    </nav>
  );
};

export default Navbar;
