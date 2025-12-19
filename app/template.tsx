"use client";

import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0.08,
        scale: 0.88,
        filter: "blur(20px)",
        y: -100,
        translateY: -100,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        translateY: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="pointer-events-none min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}
