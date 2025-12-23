"use client";
import React from "react";
import { motion } from "motion/react";

const LoadingIcon = () => {
  const dotConfigs = [
    { delay: -0.036, top: "62.62742px", left: "62.62742px" },
    { delay: -0.072, top: "67.71281px", left: "56px" },
    { delay: -0.108, top: "70.90963px", left: "48.28221px" },
    { delay: -0.144, top: "72px", left: "40px" },
    { delay: -0.18, top: "70.90963px", left: "31.71779px" },
    { delay: -0.216, top: "67.71281px", left: "24px" },
    { delay: -0.252, top: "62.62742px", left: "17.37258px" },
    { delay: -0.288, top: "56px", left: "12.28719px" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative h-20 w-20">
          {dotConfigs.map((config, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-full"
              style={{ transformOrigin: "40px 40px" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: [0.5, 0, 0.5, 1],
                delay: config.delay,
              }}
            >
              <div
                className="absolute h-[7.2px] w-[7.2px] rounded-full"
                style={{
                  top: config.top,
                  left: config.left,
                  marginTop: "-3.6px",
                  marginLeft: "-3.6px",
                  background: `linear-gradient(135deg, ${["#3b82f6", "#06b6d4", "#2dd4bf"][i % 3]}, #2563eb)`,
                  boxShadow: `0 0 10px ${i % 2 === 0 ? "rgba(59,130,246,0.4)" : "rgba(6,182,212,0.4)"}`,
                }}
              />
            </motion.div>
          ))}

          <div className="absolute inset-4 rounded-full border border-blue-500/5 bg-gradient-to-br from-blue-500/5 to-transparent blur-sm" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <span className="text-lg tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
            LOADING
          </span>
          {/* <div className="mt-1 h-0.5 w-8 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              className="h-full bg-blue-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingIcon;
