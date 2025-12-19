"use client";
import React from "react";
import { motion } from "motion/react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const techs = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Express", Icon: SiExpress },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJsSquare },
];

const TechScroller = () => {
  return (
    <div className="relative mt-12 w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <motion.div
        className="flex min-w-full shrink-0 gap-16 py-4 pr-16"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        style={{ width: "fit-content" }}
      >
        {/* First Loop */}
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 text-4xl text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white"
          >
            <tech.Icon />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}

        {/* Second Loop (Seamless Duplicate) */}
        {techs.map((tech, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center justify-center gap-2 text-4xl text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white"
          >
            <tech.Icon />
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechScroller;
