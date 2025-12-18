"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { projectsDescriptions } from "@/app/lib/data/projects/projectDescriptions";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import MagneticButton from "../../Button/MagneticButton";

const ProjectStack = ({ limit }: { limit?: number }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const projects = Object.values(projectsDescriptions);
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div ref={container} className="relative w-full">
      {displayProjects.map((project: any, i) => {
        const targetScale = 1 - (displayProjects.length - i) * 0.05;
        return (
          <Card
            key={project.id}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

import {
  ProjectDescription,
  CardProps,
} from "@/app/lib/Types/ProjectStackTypes";

const Card = ({ i, project, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-28 flex min-h-screen origin-top items-start justify-center py-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 20}px)`,
        }}
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, delay: i * 0.1 },
        }}
        whileHover={{
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 },
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative flex h-[500px] w-full max-w-[1000px] origin-top flex-col rounded-3xl border border-black/15 bg-white/70 p-6 shadow-2xl backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter dark:border-white/15 dark:bg-zinc-900/70 md:h-[500px] md:flex-row md:gap-20 md:p-12"
      >
        <div className="flex h-full w-full flex-col justify-between gap-8 md:w-[340px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.icons &&
                project.icons.slice(0, 3).map((icon, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {icon.name}
                  </span>
                ))}
            </div>
            <p className="line-clamp-4 pr-2 text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-base">
              {project.overview}
            </p>
          </div>
          <MagneticButton className="group flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all transition-transform hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            <Link href={`/projects/${project.slug}`} className="">
              <div className="flex items-center group-hover:-translate-y-1 group-hover:translate-x-1">
                View Project
                <FiArrowUpRight className="text-lg" />
              </div>
            </Link>
          </MagneticButton>
        </div>

        <div className="relative mt-6 h-64 w-full flex-1 overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800 md:mt-0 md:h-full">
          {project.image && project.image.length > 0 && (
            <motion.div
              layoutId={`project-image-${project.slug}`}
              style={{ scale: imageScale }}
              className="relative h-full w-full"
            >
              <Image
                fill
                src={project.image[0].imgSrc}
                alt={project.title}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectStack;
