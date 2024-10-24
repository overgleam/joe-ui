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
    <div className="relative flex size-full mx-auto max-w-lg items-center justify-center overflow-hidden pb-20 px-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
