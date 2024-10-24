import { BentoDemo } from "@/components/BentoGrid";
import { MarqueeDemo } from "@/components/Marquee";
import { RetroGridDemo } from "@/components/RetroGrid";
import { motion } from "framer-motion";

const Joseph = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className=""
    >
      <RetroGridDemo />
      <div className="mx-auto max-w-6xl bg-rose-500 my-10">
        <BentoDemo />
      </div>
      <MarqueeDemo />
    </motion.div>
  );
};

export default Joseph;
