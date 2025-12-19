"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ path }: { path: string }) => {
  return (
    <Link href={path} className="flex items-center justify-center">
      <motion.button
        className="ml-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-primary-black backdrop-blur-md transition-colors hover:bg-white/20 dark:text-primary-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <FaArrowLeft className="text-2xl" />
      </motion.button>
    </Link>
  );
};

export default BackButton;
