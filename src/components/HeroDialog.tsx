import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative max-w-xl mx-auto">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/i6qnUTDg4D0?si=4-Ge1kf1I7PgmwBJ"
        thumbnailSrc="https://scontent.fceb3-1.fna.fbcdn.net/v/t1.18169-9/13680559_1183185068369296_6266412432083946127_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0z1DC7pXqMQQ7kNvgGnZBh3&_nc_ht=scontent.fceb3-1.fna&oh=00_AYDN2cXuMABy3Vx1XU8bnToIiMkw4utrr2cbgb63BYVSKQ&oe=67419103"
        thumbnailAlt="Queue Linked Java"
      />
    </div>
  );
}
