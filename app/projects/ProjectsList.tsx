"use client";
import React from "react";
import "./projects.css";
import ProjectStack from "@/app/components/ui/Card/ProjectStack/ProjectStack";
import TextReveal from "@/app/utils/TextRevel";

interface Props {
  projects: any[];
}

const ProjectsClient: React.FC<Props> = ({ projects }) => {
  return (
    <div className="mt-12 flex min-h-screen flex-col items-center justify-center">
      <div className="bg-primary-white dark:bg-primary-black pointer-events-auto relative z-10 w-full">
        <div className="py-3 text-zinc-800 lg:my-20 dark:text-zinc-300">
          <div className="my-12 flex items-center justify-center text-gray-900 dark:text-white">
            <TextReveal delay={0.4}>
              <h2 className="text-5xl leading-none font-black tracking-tight text-black transition-colors lg:text-7xl dark:text-white">
                Things I&apos;ve Built
              </h2>
            </TextReveal>
          </div>
          <hr className="mx-auto my-4 h-1 w-60 rounded-sm border-0 bg-zinc-300 md:my-10 dark:bg-gray-700"></hr>
        </div>

        <div className="mt-24 w-full px-4 sm:mt-16">
          <ProjectStack projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsClient;
