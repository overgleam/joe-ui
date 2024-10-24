import AvatarCircles from "./magicui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const Footer = () => {
  return (
    <footer className="bottom-0 w-full z-50 mt-3 py-3 container md:shadow-[0px_-1px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex justify-center items-center gap-2 text-muted-foreground dark:text-white">
        &copy; {new Date().getFullYear()} Joseph Alforque. All rights reserved.{" "}
        <AvatarCircles numPeople={69} avatarUrls={avatarUrls} />
      </div>
    </footer>
  );
};

export default Footer;
