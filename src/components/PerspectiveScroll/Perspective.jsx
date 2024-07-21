import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import vd1 from "/Sequence01comp.mp4";
import Lenis from "lenis";

export default function Perspective() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 flex h-screen flex-col items-center justify-center bg-white pb-[10vh] text-[8vw] font-semibold text-black md:text-[3.5vw]"
    >
      <p>
        RELIVE <span className="italic">the</span>
      </p>
      <div className="flex gap-4">
        <p>BEST</p>
        <div className="relative w-[12.5vw]">
          <img src="/P.jpg" alt="img" placeholder="blur" fill />
        </div>
        <p className="italic">everyday.</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative h-screen bg-black"
    >
      <video
        src={vd1}
        preload="none"
        autoPlay
        loop
        muted
        className="bg-black md:hidden"
      />
      <img
        src="/coat.webp"
        alt="img"
        placeholder="blur"
        className="mx-auto hidden h-full md:block"
      />
    </motion.div>
  );
};
