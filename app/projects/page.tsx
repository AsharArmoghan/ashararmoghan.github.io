"use client";
import React from "react";
import Card from "../components/Card/hoverCard/card";
import { motion, AnimatePresence } from "framer-motion";
import "../projects/projects.css";
import { projectData } from "@/lib/data/projects/projectsData";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center bg-primary-white pt-3 dark:bg-primary-black dark:text-zinc-300">
      <div className="my-20 py-3 text-zinc-800 dark:text-zinc-300">
        <h1 className="mb-8 flex items-center justify-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Things I&apos;ve Built
        </h1>
        <hr className="mx-auto my-4 h-1 w-80 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
      </div>
      <AnimatePresence>
        {projectData.map((project) => (
          <div
            key={project.id}
            className="grid grid-flow-dense items-center justify-center sm:min-w-[600px] sm:grid-rows-2 lg:max-h-[650px] lg:max-w-6xl lg:grid-cols-2"
          >
            <motion.div
              key="card"
              initial={{
                scale: 0.5,
                y: 50,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                mass: 3,
                stiffness: 200,
                damping: 50,
              }}
              className="my-6 flex items-center justify-center"
            >
              <Link href={`/projects/${project.id}`}>
                <Card ProjectProps={project} />
              </Link>
            </motion.div>
            <div className="container ml-5 mt-2 flex flex-col justify-center pl-10 text-zinc-800 dark:text-zinc-300">
              <h2 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                {project.title}
              </h2>
              <div className="relative w-full overflow-hidden py-3">
                <motion.div
                  key="icon"
                  className="flex w-max gap-4"
                  animate={{ x: ["50%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                    opacity: { duration: 1 },
                  }}
                  exit={{
                    transition: { ease: "easeInOut", opacity: { duration: 1 } },
                  }}
                >
                  {project.icons.map((icon, index) => {
                    const IconComponent = icon.component;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          visualDuration: 0.3,
                          bounce: 0.3,
                        }}
                        title={icon.name}
                        style={{ color: icon.color }}
                        className="h-10 w-10 flex-shrink-0 text-gray-700"
                      >
                        <IconComponent className="h-full w-full" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              <div className="container text-left">
                <p className="mb-8 px-2 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                  {project.description}
                </p>
              </div>
            </div>
            <hr className="mx-auto my-4 h-1 w-[400px] rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
