"use client";
import React from "react";
import { motion } from "framer-motion";

const AppleSpinner = () => {
  return (
    <div className="relative h-8 w-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-0 h-full w-[8%] -translate-x-1/2"
          style={{
            transform: `rotate(${i * 30}deg)`,
          }}
        >
          <div
            className="animate-spinner-fade h-[25%] w-full rounded-full bg-zinc-400 dark:bg-zinc-500"
            style={{
              animationDelay: `-${1.2 - i * 0.1}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const ShinyLoading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-primary-white backdrop-blur-sm dark:bg-primary-black">
      <div className="flex flex-col items-center gap-6">
        <AppleSpinner />
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-medium tracking-wide text-zinc-500 dark:text-zinc-200">
            Loading
          </span>
          <div className="flex w-[20px] gap-[4px]">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-[5px] w-[5px] rounded-full bg-zinc-500 dark:bg-zinc-200"
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
                transition={{
                  duration: 1.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative h-1.5 w-64 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <motion.div
            className="absolute left-0 top-0 h-full bg-zinc-500 dark:bg-zinc-200"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.1,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShinyLoading;
