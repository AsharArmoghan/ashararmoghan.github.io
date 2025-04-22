"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, ReactNode, isValidElement, Children } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0.3,
  duration = 0.8,
  stagger = 0.2,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
        duration,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {Children.map(Children.toArray(children), (child, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block" }}
          >
            {isValidElement(child) ? child : <span>{child}</span>}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;
