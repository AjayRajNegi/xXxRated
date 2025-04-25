import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlueSquishy = () => {
  return (
    <section className="bg-black px-4 py-12">
      <div className="mx-auto w-fit">
        <Card />
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-[22.8rem] w-[19rem] shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8 md:h-96 md:w-80"
    >
      <div className="relative z-10 pt-10 text-white">
        {/* <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Pro
        </span> */}
        <img
          src="/nB.webp"
          alt=""
          className="absolute left-8 top-5 z-10 h-[280px]"
        />
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="relative top-[3.7rem] z-10 my-2 block origin-top-left pt-16 font-mono text-5xl font-black leading-[1.2]"
        >
          ₹349
        </motion.span>
        <p className="relative top-[2.8rem] z-10">
          N0-GAS: Spread fragrance wherever you go.
        </p>
      </div>
      <Link
        to="/product"
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
      >
        Get it now
      </Link>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default BlueSquishy;
