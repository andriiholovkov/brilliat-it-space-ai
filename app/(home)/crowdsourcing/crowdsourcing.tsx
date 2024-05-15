"use client";

import { Button } from "@/ui/button";
import { motion } from "framer-motion";

export const Crowdsourcing = () => (
  <div className="container relative">
    <div className="comet animate-comet customRotate50 -z-10" />
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{
        duration: 0.6,
      }}
      id="HowItWorks"
      className="flex flex-col gap-8 max-w-[1150px] py-36 z-10"
    >
      <h2 className="font-clashGrotesk">
        Crowdsourcing our collective intelligence to build the best AI
      </h2>
      <p>
        Open source AI has been lagging behind the likes of Google and OpenAI by
        billions of dollars. Salt aims to solve that by rewarding open source
        developers who contribute to the democratization of AI. We run
        competitions between AI models to find and reward the best AI models. As
        a result, our users will be able to access the latest cutting edge AI
        models.
      </p>
      <Button>Use The Cutting Edge AI</Button>
    </motion.section>
  </div>
);
