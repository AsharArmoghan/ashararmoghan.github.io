"use client";

import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="ml-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white/10 text-primary-black backdrop-blur-md transition-colors hover:bg-white/20 dark:text-primary-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        }}
      >
        <FaArrowLeft className="text-2xl" />
        <span></span>
      </motion.div>
    </div>
  );
};

export default BackButton;
