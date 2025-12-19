"use client";
import React from "react";
import { ImgCard } from "@/app/components/ui/Card/imageCardSlider/imgCard";
import { motion } from "motion/react";
import { IconCardComponent } from "@/app/components/ui/Card/iconCard/iconCard";
import TextReveal from "@/app/utils/TextRevel";

import { LegacyProjectData } from "@/app/lib/Types/ProjectDetailsTypes";

const ProjectDetail: React.FC<{ project: LegacyProjectData }> = ({
  project,
}) => {
  const { sections } = project;

  return (
    <div className="my-4 flex h-full w-full flex-col items-center justify-center scroll-smooth text-wrap sm:overflow-x-hidden">
      <div className="mb-auto sm:h-[270px] md:h-[450px] lg:h-[600px]">
        <ImgCard image={project.image}></ImgCard>
      </div>

      <motion.div className="my-8 flex flex-col items-center justify-evenly sm:w-full lg:w-[60rem]">
        <div className="container my-6 items-center justify-center text-zinc-800 dark:text-zinc-300">
          <h2 className="mb-6 items-center justify-start text-left text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl">
            {project.title}
          </h2>
        </div>

        {(project.introduction || sections?.introduction) && (
          <div className="container my-8">
            <h2 className="mb-6 items-center justify-start text-left text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Introduction
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-line text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl">
                {project.introduction || sections?.introduction}
              </div>
            </TextReveal>
          </div>
        )}

        <div className="container mb-12 mt-4">
          <h2 className="mb-6 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
            Technologies
          </h2>
          <div className="container h-[110px] w-full overflow-hidden pt-3">
            <IconCardComponent
              Icon={{ icon: project.icons }}
            ></IconCardComponent>
          </div>
        </div>

        {project.purposeAndGoal && (
          <div className="container mb-12">
            <h2 className="mb-4 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              Purpose & Goal
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-line text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl">
                {project.purposeAndGoal}
              </div>
            </TextReveal>
          </div>
        )}

        {project.spotlight && (
          <div className="container mb-12 rounded-xl bg-blue-50/50 p-8 shadow-sm dark:bg-blue-950/30">
            <h2 className="mb-6 text-left text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              ✨ {project.spotlight.title}
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-wrap text-left text-lg font-normal leading-relaxed text-gray-700 dark:text-gray-200 lg:text-xl">
                {project.spotlight.description}
              </div>
            </TextReveal>
          </div>
        )}

        {sections?.approach && (
          <div className="container mb-12 mt-8">
            <h2 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              Approach
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-line text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl">
                <p className="mb-4">{sections.approach.overview}</p>
                <ul className="mb-4 list-outside list-disc space-y-2 pl-6">
                  {sections.approach.points.map((point, i) => (
                    <li key={i}>
                      <strong>{point.label}:</strong> {point.description}
                    </li>
                  ))}
                </ul>
                {sections.approach.conclusion && (
                  <p>{sections.approach.conclusion}</p>
                )}
              </div>
            </TextReveal>
          </div>
        )}

        {project.technicalLessons && project.technicalLessons.length > 0 && (
          <div className="container mb-12">
            <h2 className="mb-6 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              🎓 Technical Lessons Learned
            </h2>
            <TextReveal delay={0.2}>
              <ul className="list-outside list-disc space-y-3 pl-6">
                {project.technicalLessons.map((lesson, index) => (
                  <li
                    key={index}
                    className="text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </TextReveal>
          </div>
        )}

        {project.nonTechnicalLessons &&
          project.nonTechnicalLessons.length > 0 && (
            <div className="container mb-12">
              <h2 className="mb-6 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
                💡 Non-Technical Lessons Learned
              </h2>
              <TextReveal delay={0.2}>
                <ul className="list-outside list-disc space-y-3 pl-6">
                  {project.nonTechnicalLessons.map((lesson, index) => (
                    <li
                      key={index}
                      className="text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:text-xl"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </TextReveal>
            </div>
          )}

        {project.currentStatus && (
          <div className="container mb-12 rounded-xl bg-green-50/50 p-8 shadow-sm dark:bg-green-950/30">
            <h2 className="mb-6 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              📊 Current Status
            </h2>
            <TextReveal delay={0.2}>
              <p className="whitespace-pre-line text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-200 lg:text-xl">
                {project.currentStatus}
              </p>
            </TextReveal>
          </div>
        )}

        {project.impact && (
          <div className="container mb-12 rounded-xl bg-purple-50/50 p-8 shadow-sm dark:bg-purple-950/30">
            <h2 className="mb-6 text-left text-2xl font-bold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              🚀 Impact
            </h2>
            <TextReveal delay={0.2}>
              <p className="whitespace-pre-line text-left text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-200 lg:text-xl">
                {project.impact}
              </p>
            </TextReveal>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
