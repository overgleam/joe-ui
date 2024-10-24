import { MeteorDemo } from "@/components/Meteor";
import { HeroVideoDialogDemo } from "@/components/HeroDialog";
import BlurFade from "@/components/magicui/blur-fade";
import * as variants from "@/constants/framer-variants";
const Alforque = () => {
  return (
    <>
      <BlurFade variant={variants.fadeSlideUp} delay={0.25} inView>
        <MeteorDemo />
      </BlurFade>

      <HeroVideoDialogDemo />
    </>
  );
};

export default Alforque;
