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
    >
      <RetroGridDemo />
      <MarqueeDemo />
    </motion.div>
  );
};

export default Joseph;
