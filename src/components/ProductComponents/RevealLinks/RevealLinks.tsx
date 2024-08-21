import { motion } from "framer-motion";

const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 bg-neutral-800 px-8 py-24 text-white">
      <FlipLink>BODY-SPRAY</FlipLink>
      <FlipLink>NO-GAS</FlipLink>
      <FlipLink>ZIPLINE</FlipLink>
      <FlipLink>POCKET</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children }: { children: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.82,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
