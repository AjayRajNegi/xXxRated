import { motion } from "framer-motion";
const FuzzyOverlayExample = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("../../../../noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Get LOST In The FRAGRANCE and EXPERIENCE The{" "}
        <span className="italic">fantasy!!</span>
      </p>
      <p className="text-center text-neutral-400">
        {/* This is a basic example of contact page. 📺 */}
      </p>
      {/* <div className="flex items-center justify-center gap-3">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
        </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </button>
      </div> */}
    </div>
  );
};

export default FuzzyOverlayExample;
