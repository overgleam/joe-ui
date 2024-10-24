import { BentoDemo } from "@/components/BentoGrid";
import { IconCloudDemo } from "@/components/IconCloud";
import HyperText from "@/components/magicui/hyper-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import SparklesText from "@/components/magicui/sparkles-text";
import TextRevealByWord from "@/components/magicui/text-reveal";
import TypingAnimation from "@/components/magicui/typing-animation";
import { MarqueeDemo } from "@/components/Marquee";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircles";
import { RetroGridDemo } from "@/components/RetroGrid";
import BlurFade from "@/components/magicui/blur-fade";
import * as variants from "@/constants/framer-variants";
const Joseph = () => {
  return (
    <>
      <BlurFade variant={variants.fadeSlideUp} delay={0.25} inView>
        <RetroGridDemo />
      </BlurFade>
      <BlurFade variant={variants.fadeSlideUp} delay={0.25 * 2} inView>
        <TypingAnimation
          className="text-5xl font-bold text-black mt-20 dark:text-white"
          text="Welcome, I'm Joseph Alforque"
        />
      </BlurFade>
      <TextRevealByWord text="Joseph Alforque will change the way you design." />
      <BlurFade variant={variants.fadeSlideUp} delay={0.25} inView>
        <SparklesText className="text-center text-5xl" text="Joseph Alforque" />
      </BlurFade>
      <div className="mx-auto max-w-6xl my-10">
        <BentoDemo />
      </div>
      <BlurFade className="flex justify-center mx-auto max-w-6xl my-20" inView>
        <HyperText
          className="md:text-5xl text-wrap font-bold text-black dark:text-white"
          text="Dont forget to hover this text!"
        />
      </BlurFade>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl my-10">
        <IconCloudDemo />
        <OrbitingCirclesDemo />
      </div>
      <VelocityScroll
        text="Joseph Alforque"
        default_velocity={5}
        className="mb-10 font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]"
      />
      <MarqueeDemo />
    </>
  );
};

export default Joseph;
