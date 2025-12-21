"use client";
import React from "react";
import ProjectStack from "@/app/components/ui/Card/ProjectStack/ProjectStack";

import TextReveal from "@/app/utils/TextRevel";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import MagneticButton from "@/app/components/ui/Button/MagneticButton";

const HomeProjects: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-white pt-3 dark:bg-primary-black dark:text-zinc-300">
      <div className="w-full">
        <div className="py-10 text-zinc-800 dark:text-zinc-300 lg:my-20">
          <div className="my-10 flex items-center justify-center text-gray-900 dark:text-white md:my-20">
            <TextReveal delay={0.4}>
              <h2 className="text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl">
                Featured Work
              </h2>
            </TextReveal>
          </div>
          <hr className="mx-auto my-2 h-1 w-60 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
        </div>
        <div className="w-full px-4">
          <ProjectStack limit={2} />
        </div>
        <div className="flex items-center justify-center pb-10 md:pb-20">
          <Link href="/projects">
            <MagneticButton>
              <span className="flex items-center gap-2">
                View All Projects
                <FiArrowUpRight className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
