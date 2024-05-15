"use client";

import { LogoArweave, LogoBittensor } from "@/public/assets/svgs";
import { LogoCompany, LogoSolana, LogoTelegram } from "@/public/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";

export const Integrations = () => (
  <motion.section className="flex flex-col gap-12 py-36 items-center overflow-hidden">
    <motion.h2
      whileInView={{ y: 0 }}
      initial={{ y: 50 }}
      transition={{
        duration: 0.6,
      }}
      className="text-5xl"
    >
      Projects integrated into the Arrakis AI Ecosystem
    </motion.h2>
    <motion.div
      whileInView={{ x: 0, y: 0 }}
      initial={{ x: 100, y: 50 }}
      transition={{
        duration: 0.6,
      }}
      className="flex gap-x-[120px] items-center"
    >
      <Image
        src={LogoSolana}
        className="w-[335px] h-[50px] shrink-0"
        alt="solana logotype"
      />
      <LogoArweave className="shrink-0" />
      <LogoBittensor className="shrink-0" />
      <Image src={LogoCompany} className="shrink-0" alt="company logotype" />
      <Image className="shrink-0" src={LogoTelegram} alt="telegram logotype" />
    </motion.div>
  </motion.section>
);
