"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function RetroGridDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-8xl font-bold leading-none tracking-tighter text-transparent mb-32">
        Joseph Alforque
      </span>

      <RetroGrid />
      <RainbowButton>Learn More</RainbowButton>
    </div>
  );
}
