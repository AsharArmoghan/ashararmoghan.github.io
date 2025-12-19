"use client";
import React from "react";

import ProjectStack from "@/app/components/ui/Card/ProjectStack/ProjectStack";
import TextReveal from "@/app/utils/TextRevel";
import "../projects/projects.css";

const Projects: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-3 dark:text-zinc-300">
      <div className="pointer-events-auto relative z-10 mb-[500px] mt-[120px] w-full bg-primary-white dark:bg-primary-black md:mb-[400px]">
        <div className="py-3 text-zinc-800 dark:text-zinc-300 lg:my-20">
          <div className="my-12 flex items-center justify-center text-gray-900 dark:text-white">
            <TextReveal delay={0.4}>
              <h2 className="text-5xl font-extrabold leading-none tracking-tight lg:text-7xl">
                Things I&apos;ve Built
              </h2>
            </TextReveal>
          </div>
          <hr className="mx-auto my-4 h-1 w-60 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
        </div>

        <div className="mt-24 w-full px-4">
          <ProjectStack />
        </div>
      </div>
    </div>
  );
};

export default Projects;
