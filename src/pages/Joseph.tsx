import { BentoDemo } from "@/components/BentoGrid";
import { IconCloudDemo } from "@/components/IconCloud";
import TextRevealByWord from "@/components/magicui/text-reveal";
import TypingAnimation from "@/components/magicui/typing-animation";
import { MarqueeDemo } from "@/components/Marquee";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircles";
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
      <TypingAnimation
        className="text-4xl font-bold text-black translate-y-20 dark:text-white"
        text="Welcome, I'm Joseph Alforque"
      />
      <TextRevealByWord text="Joseph Alforque will change the way you design." />
      <div className="mx-auto max-w-6xl my-10">
        <BentoDemo />
      </div>
      <div className="grid grid-cols-2 mx-auto max-w-7xl my-10">
        <IconCloudDemo />
        <OrbitingCirclesDemo />
      </div>
      <MarqueeDemo />
    </motion.div>
  );
};

export default Joseph;
