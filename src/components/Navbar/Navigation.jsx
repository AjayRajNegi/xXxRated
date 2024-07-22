import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "Men", to: "/product" },
  { title: "Women", to: "/product" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="relative z-50 block w-full md:hidden">
      <nav className="flex items-center justify-between px-3 py-3">
        <div className="">
          <h1 className="text-xl font-semibold text-white md:text-2xl">
            XXX RATED
          </h1>
          {/* <img
            src="./blacklogo .png"
            alt="logo image"
            className="hidden h-20 w-20 md:block"
          /> */}
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <HamburgerButton />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 h-screen w-full origin-top bg-yellow-400 p-10 pt-5 text-black"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">XXX Rated</h1>
                <p
                  className="text-md cursor-pointer text-black"
                  onClick={toggleMenu}
                ></p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="font-lora flex h-full flex-col items-center justify-center gap-4"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        to={link.to}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, to }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link to={to} key={title}>
        {title}
      </Link>
    </motion.div>
  );
};
