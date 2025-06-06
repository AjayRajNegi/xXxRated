import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const FlyoutLinkBtn = () => {
  return (
    <div className="flex justify-center font-normal text-white">
      <FlyoutLink FlyoutContent={PricingContent}>PRODUCTS</FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  FlyoutContent,
}: {
  children: React.ReactNode;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <button
        onClick={() => navigate("/product")}
        className="relative text-white"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </button>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <Link to="/product" className="block text-sm hover:underline">
          NEW
        </Link>
        <Link to="/zipline" className="block text-sm hover:underline">
          ZipLine
        </Link>
        <Link to="/nogas" className="block text-sm hover:underline">
          NoGas
        </Link>
        <Link to="/hotshot" className="block text-sm hover:underline">
          HotShot
        </Link>
        <Link to="/pocket" className="block text-sm hover:underline">
          Pocket
        </Link>
      </div>
      <Link to="/contact">
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </Link>
    </div>
  );
};

export default FlyoutLinkBtn;
