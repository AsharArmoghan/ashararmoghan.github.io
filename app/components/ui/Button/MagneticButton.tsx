"use client";
import React from "react";
import { motion } from "motion/react";

const MagneticButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${className} group relative flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-black dark:hover:bg-stone-200`}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
