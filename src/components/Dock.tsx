import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/mode-toggle";
import { Dock, DockIcon } from "@/components/magicui/dock";

const DATA = {
  navbar: [{ href: "/", icon: "Joseph", label: "Joseph" }],
  secondary: [{ href: "/alforque", icon: "Alforque", label: "Alforque" }],
};

export function DockDemo() {
  return (
    <div className="fixed top-0 w-full z-50">
      <TooltipProvider>
        <Dock magnification={100} direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon className="mx-2" key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {DATA.secondary.map((item) => (
            <DockIcon className="mx-2" key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    aria-label={item.label}
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <ModeToggle />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}