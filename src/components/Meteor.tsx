import Meteors from "@/components/magicui/meteors";

export function MeteorDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Meteors number={40} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Joseph Alforque
      </span>
    </div>
  );
}