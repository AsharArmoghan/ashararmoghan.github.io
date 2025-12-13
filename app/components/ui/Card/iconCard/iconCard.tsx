"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/app/lib/Types/ProjectProps";
import Image from "next/image";

export const IconCardComponent: React.FC<{ Icon: { icon: Icon[] } }> = ({
  Icon,
}) => {
  return (
    <div className="relative w-full overflow-x-hidden py-3">
      <AnimatePresence mode="popLayout" initial={true}>
        <motion.div
          key="icon"
          className="flex w-max gap-10"
          animate={{
            x: ["50%", "-50%"],
            transition: {
              repeat: Infinity,
              duration: 18,
              ease: "linear",
              opacity: { duration: 1 },
            },
          }}
          exit={{
            transition: { ease: "easeInOut", opacity: { duration: 1 } },
          }}
        >
          {[...Icon.icon].map((icon, index) => {
            return (
              <motion.div
                key={index}
                animate={{
                  transition: {
                    type: "spring",
                    visualDuration: 0.5,
                    damping: 100,
                    bounce: 1,
                    stiffness: 100,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.3 }}
                title={icon.name}
                className="flex-shrink-0 items-center justify-center text-gray-700"
              >
                <Image
                  src={icon.component}
                  width={45}
                  height={45}
                  alt={icon.name}
                />
                <p style={{ color: icon.color }}>{icon.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
