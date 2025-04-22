"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, y: -50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
