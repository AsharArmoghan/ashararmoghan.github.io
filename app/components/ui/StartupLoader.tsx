"use client";
import React, { useEffect, useState } from "react";
import ShinyLoading from "@/app/utils/LoadingIcon";
import { AnimatePresence, motion } from "framer-motion";

export const StartupLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="startup-loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-primary-white dark:bg-primary-black"
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <ShinyLoading />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
