import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "facebook",
  "instagram",
  "linkedin",
  "twitter",
  "youtube",
  "adobeillustrator",
  "adobephotoshop",
  "adobepremierepro",
  "adobeaftereffects",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex flex-grow size-full items-center justify-center overflow-hidden pb-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
