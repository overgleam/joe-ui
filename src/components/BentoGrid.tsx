import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/magicui/calendar";
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeam";
import { AnimatedListDemo } from "@/components/AnimatedList";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

const files = [
  {
    name: "portfolio.next",
    body: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
  },
  {
    name: "ecommerce.react",
    body: "Full-stack e-commerce platform using React, Node.js, and MongoDB. Includes user authentication, payment integration, and admin dashboard.",
  },
  {
    name: "dashboard.vue",
    body: "Interactive analytics dashboard built with Vue.js and D3.js. Real-time data visualization and responsive charts.",
  },
  {
    name: "mobile.flutter",
    body: "Cross-platform mobile application developed with Flutter. Features clean architecture and material design principles.",
  },
  {
    name: "api.node",
    body: "RESTful API service built with Node.js and Express. Includes JWT authentication, rate limiting, and comprehensive documentation.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Projects",
    description: "Explore my latest web development projects and case studies.",
    href: "#projects",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Skills & Expertise",
    description:
      "Full-stack development with React, TypeScript, and modern web technologies.",
    href: "#skills",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Experience",
    description:
      "Professional journey through various tech roles and projects.",
    href: "#experience",
    cta: "View Experience",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Contact",
    description: "Let's discuss your next project or potential collaboration.",
    className: "col-span-3 lg:col-span-1",
    href: "#contact",
    cta: "Get in Touch",
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
