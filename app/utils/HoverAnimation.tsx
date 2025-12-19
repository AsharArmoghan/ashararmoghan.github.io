"use client";
import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface HoverAnimationProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  yOffset?: number;
  scale?: number;
  duration?: number;
  className?: string;
}

const HoverAnimation: React.FC<HoverAnimationProps> = ({
  children,
  yOffset = -10,
  scale = 1.05,
  duration = 0.2,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        y: yOffset,
        scale: scale,
        transition: { duration: duration },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
