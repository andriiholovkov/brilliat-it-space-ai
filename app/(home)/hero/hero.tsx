"use client";

import { Button } from "@/ui/button";
import { motion} from "framer-motion";
import { cn } from "@/utils/utils";
import { ShapeBlue, ShapeRed, Planet } from "@/public/assets/images";
import { useHero } from "@/app/(home)/hero/useHero";

export const Hero = () => {
  const {isScrolled, isUpdateImagePosition, isUpdateImage} = useHero();

  const titleMods = {
    ["bg-gradient-to-r from-[#FFD6F9] via-[#FFCBB4] to-[#FFBEC3] opacity-80 gradient-text animate-gradient"]:
      isScrolled,
  };

  const planeMods = {
    ["-top-[300px] delay-150"]: isUpdateImagePosition,
    ["opacity-0 scale-50"]: isUpdateImage,
  };

  return (
    <section className="flex flex-col gap-20 pt-[120px] pb-[240px] container">
      <div className="flex flex-col gap-9 max-w-[1630px]">
        <img
          className="absolute left-[160px] top-0 z-10 w-[505px] h-auto rotate-[124deg] blur-2xl"
          src={ShapeBlue.src}
          alt="blue shape"
        />
        <img
          className="absolute left-[50px] top-[700px] z-[5] w-[505px] h-auto rotate-[112deg] blur-2xl"
          src={ShapeRed.src}
          alt="blue shape"
        />
        <motion.img
          className={cn(
            "resize right-0 top-0 -z-10 fixed duration-1000 transition-all ease-in-out",
            planeMods,
          )}
          src={Planet.src}
          alt="planet"
        />
        <h1
          id="BuySaltAI"
          className={cn(
            "text-transparent bg-clip-text bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] " +
              "to-[#FF4A59] gradient-text animate-gradient font-clashGrotesk",
            titleMods,
          )}
        >
          A new economic primitive for funding decentralized AI
        </h1>
        <p className="leading-[29px]">
          We track, rank and pay for the best open source decentralized LLMs co
          complete against OpenAI
        </p>
        <div className="flex gap-2 w-fit">
          <Button variant="outline">Buy Salt AI</Button>
          <Button variant="ghost">Try Now</Button>
        </div>
      </div>
    </section>
  );
};
