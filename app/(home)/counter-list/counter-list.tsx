"use client";

import React from "react";
import { motion } from "framer-motion";

type Counter = {
  title: string;
  subtitle: string;
};

type CounterListProps = {
  counters: Counter[];
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: -140 },
  hidden: { opacity: 0, y: 100 },
};

export const CounterList = ({ counters }: CounterListProps) => {
  return (
    <motion.section
      variants={list}
      initial="hidden"
      whileInView="visible"
      className="flex gap-8 justify-center container pb-36 z-10"
    >
      {counters.map(({ title, subtitle }) => (
        <motion.div
          key={title}
          className="flex flex-col gap-5 p-8 justify-center items-center rounded-full w-full max-h-48
          before:bg-gradient-bg before:opacity-50 relative before:inset-0 before:absolute overflow-hidden"
          variants={item}
        >
          <h2 className="font-clashGrotesk">{title}</h2>
          <p className="leading-[29px]">{subtitle}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};
