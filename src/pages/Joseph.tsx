import { BentoDemo } from "@/components/BentoGrid";
import TypingAnimation from "@/components/magicui/typing-animation";
import { MarqueeDemo } from "@/components/Marquee";
import { RetroGridDemo } from "@/components/RetroGrid";
import { TextRevealDemo } from "@/components/TextReveal";
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
      <TypingAnimation
        className="text-4xl font-bold text-black dark:text-white"
        text="Welcome, I'm Joseph Alforque"
      />
      <TextRevealDemo />
      <div className="mx-auto max-w-6xl my-10">
        <BentoDemo />
      </div>
      <MarqueeDemo />
    </motion.div>
  );
};

export default Joseph;
