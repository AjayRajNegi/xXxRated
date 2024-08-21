import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import a1 from "../../../assets/images/OUD/About1.jpg";
import a2 from "../../../assets/images/OUD/About2.jpg";
import a3 from "../../../assets/images/OUD/About3.jpg";

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent imgUrl={a1} subheading="" heading="MISSION">
        <MissionContent />
      </TextParallaxContent>
      <TextParallaxContent imgUrl={a2} subheading="" heading="VISION">
        <VisionContent />
      </TextParallaxContent>
      <TextParallaxContent imgUrl={a3} subheading="" heading="ABOUT US">
        <ABoutContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const MissionContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Our Mission in which we firmly believe.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        At XXX Rated, our mission is to redefine personal care by crafting
        premium deodorants that deliver unparalleled freshness, confidence, and
        style. Rooted in the rich heritage of India, we aim to blend the finest
        local ingredients with advanced formulations, ensuring long-lasting
        protection that resonates with the bold and vibrant spirit of our
        customers.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        We are committed to sustainability, ethical practices, and creating
        products that not only enhance personal well-being but also contribute
        positively to our environment and community.
      </p>
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);
const VisionContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Our Vision which appends to each and every corner of this country.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Our vision is to become the leading deodorant brand in India, known for
        innovation, quality, and a deep connection to our cultural roots. We
        aspire to inspire confidence in every individual, empowering them to
        express their true selves without compromise.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        By continually pushing the boundaries of what's possible in personal
        care, XXX Rated envisions a future where everyone can experience the
        perfect balance of freshness, protection, and style, with a touch of
        Indian excellence in every spray.
      </p>
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);
const ABoutContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2> */}
    <div className="col-span-12">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Welcome to XXX Rated, where confidence meets freshness. Born and crafted
        in the vibrant landscapes of India, XXX Rated is more than just a
        deodorant—it's a statement of boldness, individuality, and a commitment
        to a healthier lifestyle. At XXX Rated, we believe that what you put on
        your body matters. That's why our formulas are meticulously developed to
        be free from harmful chemicals like triclosan. <br /> We’re committed to
        providing a safer alternative without compromising on performance,
        ensuring that every spray leaves you feeling fresh, confident, and ready
        to conquer the day.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Our inspiration comes from the diverse and dynamic spirit of India—a
        country that’s always on the move, always evolving, and always staying
        true to its roots. We harness the richness of natural ingredients and
        blend them with cutting-edge technology to create fragrances that not
        only protect but also empower.
      </p>
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button> */}
    </div>
  </div>
);
export default TextParallaxContentExample;
