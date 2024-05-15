import React from "react";
import Image from "next/image";
import { LogoTelegram, TwitterX } from "@/public/assets/images";
import Link from "next/link";

const Footer = () => (
    <footer>
      <div className="blackGradient"/>
      <div className="flex h-[500px] relative overflow-hidden">
        <video
            autoPlay
            loop
            muted
            className="absolute min-h-[1500px] top-[-750px] w-full"
            src={require("../../../public/assets/video/world.mp4")}
        />
        <div className="flex flex-col gap-9 container z-50 absolute top-[350px]">
          <div className="h-[1px] w-full bg-white/20"/>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Image src={LogoTelegram} className="size-9" alt="telegram logo"/>
              <Image src={TwitterX} className="size-9" alt="telegram logo"/>
            </div>
            <div className="flex gap-4 opacity-50">
              <Link href="#" className="text-sm leading-normal">Terms of Use</Link>
              <Link href="#" className="text-sm leading-normal">Privacy Policy</Link>
              <Link href="#" className="text-sm leading-normal">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
);

export default Footer;
