import { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader/Loader";
import {
  clipPath1,
  clipPath2,
  clipPath3,
  clipPath4,
  marquee,
} from "../../../utils/motion";
import { Navbar, Navigation } from "../../Index";
const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <div>
        {isLoading ? (
          <Loader setLoading={setIsLoading} />
        ) : (
          <div className="relative h-screen w-full overflow-hidden">
            <Navbar />
            <Navigation />
            <GridRecs />
            <LineRecs />
            <div className="absolute inset-0 z-20 flex h-full w-full items-center">
              <motion.h1
                variants={marquee}
                initial="hidden"
                animate="show"
                className="cursor-pointer text-[75px] font-semibold tracking-tight text-white md:text-[100px]"
              >
                BEYOND IMAGINATION
              </motion.h1>
            </div>
            <motion.img
              src="/coat.webp"
              alt="coat image"
              className="absolute inset-0 h-screen w-full object-cover filter"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.6,
                delay: 0.2,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LoadingAnimation;

export const GridRecs = () => {
  return (
    <section className="grid-row-6 relative z-20 grid h-full w-full grid-cols-6">
      <motion.div
        className="col-span-1 bg-[#0e0e0e]"
        variants={clipPath3}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-4 col-start-2 bg-[#0e0e0e]"
        variants={clipPath4}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-1 bg-[#0e0e0e]"
        variants={clipPath3}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="row-span-4 bg-[#0e0e0e]"
        variants={clipPath2}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-2 row-span-4 bg-[#0e0e0e]"
        variants={clipPath1}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-2 row-span-4 bg-[#0e0e0e]"
        variants={clipPath2}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-1 row-span-4 bg-[#0e0e0e]"
        variants={clipPath1}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-1 bg-[#0e0e0e]"
        variants={clipPath4}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-4 bg-[#0e0e0e]"
        variants={clipPath3}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.div
        className="col-span-1 bg-[#0e0e0e]"
        variants={clipPath4}
        initial="hidden"
        animate="show"
      ></motion.div>
    </section>
  );
};

export const LineRecs = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <section className="absolute inset-0 flex justify-center space-x-8">
        <div className="h-full w-[1px] translate-x-[-440px] bg-slate-300"></div>
        <div className="h-full w-[1px] translate-x-[440px] bg-slate-300"></div>
      </section>
      <section className="absolute inset-0 flex flex-col justify-center space-y-8">
        <div className="h-[1px] w-full translate-y-[-202px] bg-slate-300"></div>
        <div className="h-[1px] w-full translate-y-[202px] bg-slate-300"></div>
      </section>
    </div>
  );
};
