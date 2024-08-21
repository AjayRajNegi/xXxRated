import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ButtonWrapper = () => {
  return (
    <>
      <SpotlightButton />
    </>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current!.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" },
      );
    };

    btnRef?.current?.addEventListener("mousemove", handleMouseMove);
    btnRef?.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef?.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Link to="/product">
        <motion.button
          whileTap={{ scale: 0.985 }}
          ref={btnRef}
          className="relative w-full max-w-xs overflow-hidden rounded-lg bg-zinc-900 px-4 py-3 text-lg font-medium text-white"
        >
          <span className="pointer-events-none relative z-10 mix-blend-difference">
            xXx-Plore
          </span>
          <span
            ref={spanRef}
            className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
          />
        </motion.button>
      </Link>
    </>
  );
};

export default ButtonWrapper;
