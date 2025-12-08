"use client";
import React from "react";
import { ProjectProps } from "@/app/lib/Types/ProjectProps";
import { ImgCard } from "../Card/imageCardSlider/imgCard";
import { motion } from "framer-motion";
import { IconCardComponent } from "../Card/iconCard/iconCard";
import TextReveal from "../../utils/TextRevel";

const ProjectDetail: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="my-4 flex h-full flex-col items-center justify-center scroll-smooth text-wrap sm:w-full sm:overflow-x-hidden md:w-[100%-40rem]">
      <div className="mb-auto sm:h-[270px] md:h-[450px] lg:h-[600px]">
        <ImgCard image={project.image}></ImgCard>
      </div>

      <motion.div className="mt-8 flex flex-col items-center justify-evenly">
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
        <div className="container h-[110px] overflow-hidden pt-3 lg:w-[calc(100%-5rem)]">
          <IconCardComponent Icon={{ icon: project.icons }}></IconCardComponent>
        </div>
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

        {/* <div className="mb-[80px]">
          <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Features
          </h2>
          <ul className="mb-2 text-lg leading-none tracking-tight text-gray-900 dark:text-white">
            {project.features.map((feature) => (
              <li
                className="w-25 pb-3 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl"
                key={feature}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div> */}
        {/* <p className="mb-8 px-2 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
            The project follows a <strong>MERN-like structure</strong> with
            Angular as the frontend framework. Users can create an account,
            write and publish blogs, and engage with the content. Authentication
            is handled via JWT.
            </p> */}
        <div className="container mb-[50px] sm:overflow-x-auto">
          <h2 className="mx-4 text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Project Structure
          </h2>
          <pre className="pb-8 text-left font-normal text-gray-500 dark:text-gray-400 sm:text-sm md:text-lg lg:text-xl">
            {project.structure}
          </pre>
        </div>

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
