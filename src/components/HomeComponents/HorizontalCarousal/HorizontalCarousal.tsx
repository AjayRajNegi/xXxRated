import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const HorizontalCarousal = () => {
  return (
    <>
      {/* <div className="relative top-10 z-20 flex h-0 items-center justify-center bg-black tracking-tighter">
        <div className="text-3xl font-semibold text-white md:text-6xl">
          RELIVE <span className="italic">the</span> BEST
          <span className="italic">everyday.</span>
        </div>
      </div> */}

      <HorizontalScrollCarousel />
      <hr className="ml-[4vw] mr-[4vw] bg-black" />
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black pl-[2vw]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalCarousal;

type CardType = {
  url: any;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/OUD/Bkoud.webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/OUD/Woud.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/OUD/Roud.webp",
    title: "Title 2",
    id: 2,
  },

  {
    url: "/OUD/Goud.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/OUD/Boud.webp",
    title: "Title 4",
    id: 4,
  },

  // {
  //   url: "/gR.png",
  //   title: "Title 6",
  //   id: 6,
  // },
  // {
  //   url: "/gR.png",
  //   title: "Title 7",
  //   id: 7,
  // },
];
