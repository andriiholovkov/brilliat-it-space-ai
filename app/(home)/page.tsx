"use client";

import { CounterList } from "./counter-list";
import { CounterListMock } from "@/app/(home)/counter-list/data";
import { Crowdsourcing } from "@/app/(home)/crowdsourcing";
import { Integrations } from "@/app/(home)/integrations";
import { Hero } from "@/app/(home)/hero";
import Image from "next/image";
import { Comet } from "@/public/assets/images";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CounterList counters={CounterListMock} />
      <motion.div>
        <Image src={Comet} alt="comet" className="relative left-20 -top-32" />
      </motion.div>
      <Integrations />
      <Crowdsourcing />
    </div>
  );
}
