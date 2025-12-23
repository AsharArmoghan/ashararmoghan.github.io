"use client";
import React from "react";
import ProjectDetail from "@/app/components/features/Project/ProjectDetails";
import { ProjectData } from "@/app/lib/Types/ProjectDetailsTypes";
import Link from "next/link";
import BackButton from "@/app/components/ui/Button/BackButton";

interface ProjectContentProps {
  initialProject: ProjectData;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ initialProject }) => {
  return (
    <>
      <div className="pointer-events-auto relative z-10 mt-10 min-h-screen bg-primary-white dark:bg-primary-black">
        <nav className="sticky top-0 z-50 flex hidden w-full items-center justify-between px-6 pt-10 text-primary-black dark:text-primary-white md:block">
          <div className="flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
            <Link href="/projects">
              <BackButton />
            </Link>
          </div>
        </nav>
        <main className="mx-auto flex flex-col items-center justify-center">
          <ProjectDetail project={initialProject}></ProjectDetail>
        </main>
      </div>
    </>
  );
};

export default ProjectContent;
