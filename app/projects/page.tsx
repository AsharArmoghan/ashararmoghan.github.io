"use client";
import React from "react";
import Card from "../components/Card/hoverCard/card";
import { motion } from "framer-motion";
import "../projects/projects.css";
import { projectData } from "../lib/data/projects/projectsData";
import Link from "next/link";
import { IconCardComponent } from "../components/Card/iconCard/iconCard";
import AnimatedText from "../components/Theme/animatedText";
import TextReveal from "../utils/TextRevel";

const Projects: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-white pt-3 dark:bg-primary-black dark:text-zinc-300">
      <div className="py-3 text-zinc-800 dark:text-zinc-300 lg:my-20">
        <div className="mb-12 flex items-center justify-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
          <TextReveal delay={1}>
            <h2 className="text-[4vw] md:text-[5vw] lg:text-[8vw]">
              Things I&apos;ve Built
            </h2>
          </TextReveal>
        </div>
        <hr className="mx-auto my-4 h-1 w-60 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
      </div>

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
            <AnimatedText stagger={0.2}>
              <Link href={`/projects/${project.id}`}>
                <h2 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                  {project.title}
                </h2>
              </Link>
            </AnimatedText>
            <div>
              <IconCardComponent Icon={{ icon: project.icons }} />
            </div>
            <div className="container text-left">
              <AnimatedText stagger={1}>
                <p className="mb-8 px-2 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                  {project.description}
                </p>
              </AnimatedText>
            </div>
          </div>
          <hr className="mx-auto my-4 h-1 w-[400px] rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
        </div>
      ))}
    </div>
  );
};

export default Projects;
