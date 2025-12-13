"use client";
import React from "react";
import { ProjectProps } from "@/app/lib/Types/ProjectProps";
import { ImgCard } from "@/app/components/ui/Card/imageCardSlider/imgCard";
import { motion } from "framer-motion";
import { IconCardComponent } from "@/app/components/ui/Card/iconCard/iconCard";
import TextReveal from "@/app/utils/TextRevel";
import { SpotlightSection } from "@/app/lib/Types/ProjectDescriptionTypes";

interface ExtendedProjectProps extends ProjectProps {
  // Extended fields from projectDescriptions
  overview?: string;
  introduction?: string;
  purposeAndGoal?: string;
  spotlight?: SpotlightSection;
  currentStatus?: string;
  technicalLessons?: string[];
  nonTechnicalLessons?: string[];
  impact?: string;
}

const ProjectDetail: React.FC<{ project: ExtendedProjectProps }> = ({
  project,
}) => {
  return (
    <div className="my-4 flex h-full flex-col items-center justify-center scroll-smooth text-wrap sm:overflow-x-hidden">
      <div className="mb-auto sm:h-[270px] md:h-[450px] lg:h-[600px]">
        <ImgCard image={project.image}></ImgCard>
      </div>

      <motion.div className="mt-8 flex flex-col items-center justify-evenly sm:w-full lg:w-[60rem]">
        {/* Title and Description */}
        <div className="container mt-2 items-center justify-center text-zinc-800 dark:text-zinc-300">
          <h2 className="mb-4 items-center justify-start text-left text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            {project.title}
          </h2>
          <TextReveal delay={0.2}>
            <div className="mb-8 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              {project.description}
            </div>
          </TextReveal>
        </div>

        {/* Overview Section - NEW */}
        {project.overview && (
          <div className="container mb-[80px]">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Overview
            </h2>
            <TextReveal delay={0.2}>
              <p className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.overview}
              </p>
            </TextReveal>
          </div>
        )}

        {/* Introduction Section - NEW */}
        {project.introduction && (
          <div className="container mb-[80px]">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Introduction
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-wrap text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.introduction}
              </div>
            </TextReveal>
          </div>
        )}

        {/* Purpose and Goal Section - NEW */}
        {project.purposeAndGoal && (
          <div className="container mb-[80px]">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Purpose & Goal
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-wrap text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.purposeAndGoal}
              </div>
            </TextReveal>
          </div>
        )}

        {/* Spotlight Section - NEW */}
        {project.spotlight && (
          <div className="container mb-[80px] rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              ✨ {project.spotlight.title}
            </h2>
            <TextReveal delay={0.2}>
              <div className="whitespace-pre-wrap text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.spotlight.description}
              </div>
            </TextReveal>
          </div>
        )}

        {/* Icons */}
        <div className="container h-[110px] overflow-hidden pt-3 lg:w-[calc(100%-5rem)]">
          <IconCardComponent Icon={{ icon: project.icons }}></IconCardComponent>
        </div>

        {/* Project Requirements */}
        <div className="container my-[80px]">
          <h2 className="pb-8 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Project Requirements
          </h2>
          <TextReveal delay={0.2}>
            <ul className="list-inside list-disc space-y-2">
              {project.projectRequirement.map((requirement, index) => (
                <li
                  key={index}
                  className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
                >
                  {requirement}
                </li>
              ))}
            </ul>
          </TextReveal>
        </div>

        {/* Approaches Used */}
        <div className="container mb-[80px]">
          <h2 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Approaches Used
          </h2>
          <TextReveal delay={0.2}>
            <ul className="list-inside list-disc space-y-2">
              {project.approach.map((approach, index) => (
                <li
                  key={index}
                  className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
                >
                  {approach}
                </li>
              ))}
            </ul>
          </TextReveal>
        </div>

        {/* Challenges and Solutions */}
        <div className="container mb-[80px]">
          <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Challenges and Solutions
          </h2>
          {project.challenges.map((item, challengeIndex) => (
            <div
              key={challengeIndex}
              className="text-wrap text-left font-normal md:text-lg lg:text-xl"
            >
              {item.Challenge.map((challenge, index) => (
                <div key={index} className="mb-2">
                  <ul className="list-none font-semibold text-neutral-500 dark:text-neutral-400">
                    <TextReveal delay={0.2}>
                      <li className="inline-block">
                        {" 👉🏽 "}
                        {challenge}
                      </li>
                    </TextReveal>
                  </ul>
                  <p className="pl-4 text-zinc-500"> {item.Solution[index]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Technical Lessons - NEW */}
        {project.technicalLessons && project.technicalLessons.length > 0 && (
          <div className="container mb-[80px]">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              🎓 Technical Lessons Learned
            </h2>
            <TextReveal delay={0.2}>
              <ul className="list-inside list-disc space-y-2">
                {project.technicalLessons.map((lesson, index) => (
                  <li
                    key={index}
                    className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </TextReveal>
          </div>
        )}

        {/* Non-Technical Lessons - NEW */}
        {project.nonTechnicalLessons &&
          project.nonTechnicalLessons.length > 0 && (
            <div className="container mb-[80px]">
              <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                💡 Non-Technical Lessons Learned
              </h2>
              <TextReveal delay={0.2}>
                <ul className="list-inside list-disc space-y-2">
                  {project.nonTechnicalLessons.map((lesson, index) => (
                    <li
                      key={index}
                      className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </TextReveal>
            </div>
          )}

        {/* Current Status - NEW */}
        {project.currentStatus && (
          <div className="container mb-[80px] rounded-lg bg-green-50 p-6 dark:bg-green-950">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              📊 Current Status
            </h2>
            <TextReveal delay={0.2}>
              <p className="whitespace-pre-wrap text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.currentStatus}
              </p>
            </TextReveal>
          </div>
        )}

        {/* Impact - NEW */}
        {project.impact && (
          <div className="container mb-[80px] rounded-lg bg-purple-50 p-6 dark:bg-purple-950">
            <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              🚀 Impact
            </h2>
            <TextReveal delay={0.2}>
              <p className="whitespace-pre-wrap text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
                {project.impact}
              </p>
            </TextReveal>
          </div>
        )}

        {/* Project Structure */}
        <div className="container mb-[50px] sm:overflow-x-auto">
          <h2 className="mx-4 text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Project Structure
          </h2>
          <pre className="pb-8 text-left font-normal text-gray-500 dark:text-gray-400 sm:text-sm md:text-lg lg:text-xl">
            {project.structure}
          </pre>
        </div>

        {/* How It Works - Setup & Installation */}
        <div className="container mb-[50px] flex flex-col items-start justify-center">
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            How It Works
          </h2>
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            📦 Setup & Installation
          </h2>
          <ul className="list-inside list-disc">
            {project.setupSteps.map((step, idx) => (
              <li
                key={idx}
                className="mb-4 px-2 text-left font-normal -tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{ __html: step }}
              />
            ))}
          </ul>
        </div>

        {/* Installation Commands */}
        <div className="container mb-[50px] rounded-lg bg-zinc-100 p-4 dark:bg-neutral-600 md:w-full lg:w-[650px]">
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none -tracking-tight text-slate-900 dark:text-white lg:text-2xl">
            Installation
          </h2>
          <h3 className="font-semibold">Backend</h3>
          <pre className="rounded bg-slate-300 p-2 dark:bg-slate-700 md:w-[100%]">
            {project.installation.backend}
          </pre>
          <h3 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Frontend
          </h3>
          <pre className="rounded bg-slate-300 p-2 dark:bg-gray-700">
            {project.installation.frontend}
          </pre>
        </div>

        {/* API Endpoints */}
        <div className="container mx-3 mt-3 flex flex-row items-center justify-start text-left sm:flex-col">
          <h2 className="text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            API Endpoints
          </h2>
          <table className="mt-4 w-full border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-2">Method</th>
                <th className="border p-2">Route</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {project.apiEndpoints.map((endpoint, idx) => (
                <tr key={idx} className="border">
                  <td className="border p-2 font-bold text-blue-500">
                    {endpoint.method}
                  </td>
                  <td className="border p-2">{endpoint.route}</td>
                  <td className="border p-2">{endpoint.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
