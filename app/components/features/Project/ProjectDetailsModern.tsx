"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { IconCardComponent } from "@/app/components/ui/Card/iconCard/iconCard";
import TextReveal from "@/app/utils/TextRevel";
import { ArrowUpRightIcon } from "@/app/components/ui/Icons/ArrowUpRightIcon";

import { ModernProjectData } from "@/app/lib/Types/ProjectDetailsTypes";
import Link from "next/link";
import Magnet from "@/app/utils/Magnet";
import HoverAnimation from "@/app/utils/HoverAnimation";

const ProjectDetailsModern: React.FC<{ project: ModernProjectData }> = ({
  project,
}) => {
  const { sections } = project;
  const [activeTab, setActiveTab] = useState<
    "challenge" | "solution" | "keyTakeaway"
  >("challenge");

  return (
    <div className="w-full bg-white text-zinc-900 dark:bg-primary-black dark:text-zinc-100">
      <section className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 flex flex-col gap-6"
            >
              <TextReveal delay={0.2}>
                <p className="text-xl font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.overview}
                </p>
              </TextReveal>

              {project.liveUrl && (
                <div className="flex">
                  <Link
                    href="http://react-dashboard-ash.vercel.app"
                    target="_blank"
                    className="group flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <span>View Live {project.title}</span>
                    <ArrowUpRightIcon className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              <div className="flex w-full overflow-hidden">
                <IconCardComponent
                  Icon={{ icon: project.icons }}
                ></IconCardComponent>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl rounded-3xl bg-zinc-100/50 p-4 ring-1 ring-zinc-900/5 dark:bg-zinc-800/20 dark:ring-white/10 sm:p-8 lg:p-12">
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-800">
              <div className="flex h-8 w-full items-center gap-2 border-b border-zinc-400/80 bg-zinc-200 px-4 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              </div>
              {project.image[0] && (
                <motion.div
                  layoutId={`project-image-${project.slug}`}
                  className="relative"
                >
                  <Image
                    src={project.image[0].imgSrc}
                    alt={project.title}
                    width={project.image[0].width}
                    height={project.image[0].height}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </motion.div>
              )}
            </div>

            {project.image.length > 1 && (
              <div className="absolute -bottom-5 -right-2 w-[30%] max-w-[280px] lg:-bottom-10 lg:-right-10">
                <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-zinc-800 bg-zinc-800 shadow-2xl ring-1 ring-white/20">
                  <div className="absolute left-[-8px] top-1/2 h-1/3 w-4 -translate-y-1/2 rounded-xl bg-zinc-900"></div>
                  <Image
                    src={project.image[1].imgSrc}
                    alt={`${project.title} mobile view`}
                    width={project.image[1].width}
                    height={project.image[1].height}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-36 max-w-7xl px-6 lg:px-8">
        {(project.introduction || project.purposeAndGoal) && (
          <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 pb-4 text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
                The Vision
              </h2>
              <TextReveal delay={0.2}>
                <div className="prose prose-lg w-full whitespace-pre-wrap pl-2 text-left text-xl font-medium leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-400">
                  {project.purposeAndGoal || project.introduction}
                </div>
              </TextReveal>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <Magnet>
                <div className="relative h-64 w-64 rotate-3 transform rounded-full bg-blue-200 p-8 dark:bg-blue-900/20">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">
                    💡
                  </span>
                </div>
              </Magnet>
            </div>
          </div>
        )}

        {sections?.features && sections.features.length > 0 && (
          <div className="mb-32">
            <h2 className="mb-12 text-center text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.features.map((feature, index) => (
                <HoverAnimation
                  key={index}
                  yOffset={-5}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm hover:z-20 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      ✓
                    </span>
                    <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </p>
                  </div>
                </HoverAnimation>
              ))}
            </div>
          </div>
        )}

        {project.spotlight && (
          <div className="my-32">
            <div className="mb-12 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="order-1 flex justify-center">
                <Magnet>
                  <div className="relative flex h-64 w-64 -rotate-3 transform items-center justify-center rounded-3xl bg-purple-100 p-8 dark:bg-purple-900/20">
                    <span className="text-7xl">⚡</span>
                    <strong className="font-handwriting absolute -bottom-8 right-0 rotate-6 text-xl text-purple-600 dark:text-purple-400">
                      Core Mechanics
                    </strong>
                  </div>
                </Magnet>
              </div>

              <div className="order-2">
                <h2 className="my-6 pb-4 text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
                  {project.spotlight.title}
                </h2>
                <TextReveal delay={0.2}>
                  <div className="prose prose-lg whitespace-pre-wrap pl-2 text-left text-xl font-medium leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-400">
                    {project.spotlight.sections
                      ? project.spotlight.sections.overview
                      : project.spotlight.description}
                  </div>
                </TextReveal>
              </div>
            </div>

            {project.spotlight.sections && (
              <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100/40 dark:border-zinc-800 dark:bg-zinc-900/30">
                <div
                  className="absolute inset-[-2px] opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px",
                  }}
                ></div>

                <div className="relative z-10 flex border-b border-zinc-200 bg-slate-100 p-2 dark:border-zinc-800 dark:bg-slate-800">
                  {(["challenge", "solution", "keyTakeaway"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-md relative flex-1 whitespace-pre-wrap rounded-xl px-4 py-3 font-semibold transition-colors ${
                          activeTab === tab
                            ? "text-neutral-900 dark:text-neutral-50"
                            : "text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                        }`}
                      >
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-[-1px] rounded-full bg-white shadow-md ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                        <span className="relative z-10 capitalize">
                          {tab.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </button>
                    ),
                  )}
                </div>

                <div className="relative z-10 min-h-[400px] p-8">
                  <AnimatePresence mode="wait">
                    {activeTab === "challenge" && (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <h3 className="my-6 pb-4 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 lg:text-4xl">
                          {project.spotlight.sections.challenge.title}
                        </h3>
                        {project.spotlight.sections.challenge.description && (
                          <p className="prose prose-lg my-6 whitespace-pre-wrap pl-2 text-left text-xl font-medium leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-400">
                            {project.spotlight.sections.challenge.description}
                          </p>
                        )}
                        <ul className="space-y-6">
                          {project.spotlight.sections.challenge.points.map(
                            (point, idx) => (
                              <li key={idx} className="flex gap-4">
                                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-sm font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                  !
                                </span>
                                <div>
                                  <span className="prose prose-lg my-6 whitespace-pre-wrap pl-2 text-left text-xl font-medium leading-relaxed text-zinc-800 dark:prose-invert dark:text-zinc-200">
                                    {point.name}:{" "}
                                  </span>
                                  <span className="text-md my-6 whitespace-pre-wrap pl-2 text-left font-medium leading-relaxed text-zinc-500 dark:text-zinc-200">
                                    {point.description}
                                  </span>
                                </div>
                              </li>
                            ),
                          )}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === "solution" && (
                      <motion.div
                        key="solution"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="my-4 pb-4 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 lg:text-4xl">
                          {project.spotlight.sections.solution.title}
                        </h3>
                        <p className="prose prose-lg my-6 whitespace-pre-wrap pl-2 text-left text-xl font-medium leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-200">
                          {project.spotlight.sections.solution.description}
                        </p>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          {(project.spotlight.sections.solution.backend ||
                            project.spotlight.sections.solution
                              .appStructure) && (
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800/50 dark:ring-white/10">
                              <h4 className="prose prose-lg whitespace-pre-wrap py-2 text-left text-xl font-medium leading-relaxed text-zinc-800 dark:prose-invert dark:text-zinc-200">
                                {project.spotlight.sections.solution.backend
                                  ?.title ||
                                  project.spotlight.sections.solution
                                    .appStructure?.title}
                              </h4>
                              <ul className="text-md list-inside list-disc space-y-2 whitespace-pre-wrap text-left leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {(
                                  project.spotlight.sections.solution.backend
                                    ?.points ||
                                  project.spotlight.sections.solution
                                    .appStructure?.points ||
                                  []
                                ).map((p, i) => (
                                  <li key={i} className="space-y-2">
                                    <span className="text-md whitespace-pre-wrap font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                                      {p.label}
                                    </span>
                                    :{" "}
                                    <span className="text-md font-normal leading-tight text-zinc-500 dark:text-zinc-400">
                                      {p.description}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {(project.spotlight.sections.solution.frontend ||
                            project.spotlight.sections.solution
                              .performanceStrategy) && (
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 dark:bg-zinc-800/50 dark:ring-white/10">
                              <h4 className="prose prose-lg whitespace-pre-wrap py-2 text-left text-xl font-medium leading-relaxed text-zinc-800 dark:prose-invert dark:text-zinc-200">
                                {project.spotlight.sections.solution.frontend
                                  ?.title ||
                                  project.spotlight.sections.solution
                                    .performanceStrategy?.title}
                              </h4>
                              <ul className="list-inside list-disc space-y-4 whitespace-pre-wrap text-left leading-relaxed text-zinc-500 dark:text-zinc-400">
                                {(
                                  project.spotlight.sections.solution.frontend
                                    ?.points ||
                                  project.spotlight.sections.solution
                                    .performanceStrategy?.points ||
                                  []
                                ).map((p, i) => (
                                  <li key={i} className="space-y-2">
                                    <span className="text-md whitespace-pre-wrap font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                                      {p.label}
                                    </span>
                                    :
                                    <span className="text-md ml-1 font-normal leading-tight text-zinc-500 dark:text-zinc-400">
                                      {p.description}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "keyTakeaway" && (
                      <motion.div
                        key="keyTakeaway"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-full flex-col items-center justify-center py-10 text-center"
                      >
                        <div className="my-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-200/60 text-4xl dark:bg-purple-900/30">
                          💡
                        </div>
                        <h3 className="prose prose-xl my-6 pb-4 text-3xl font-extrabold leading-tight tracking-tight lg:text-4xl">
                          Key Insight
                        </h3>
                        <p className="prose prose-xl max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                          {project.spotlight.sections.keyTakeaway}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}

        {sections?.approach && (
          <div className="mb-32 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="prose prose-lg my-6 text-5xl font-bold leading-relaxed tracking-tight text-zinc-900 dark:text-zinc-50 lg:text-6xl">
                Building the Solution
              </h2>
              <TextReveal delay={0.2}>
                <div className="flex flex-col gap-4">
                  <p className="prose prose-lg mb-6 w-full whitespace-pre-wrap leading-relaxed text-amber-600 dark:prose-invert dark:text-amber-900 dark:text-zinc-400">
                    {sections.approach.overview}
                  </p>
                  <ul className="mb-6 list-none space-y-4 pl-0">
                    {sections.approach.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex flex-col sm:flex-row sm:gap-2"
                      >
                        <span className="prose-md prose whitespace-pre-wrap text-lg font-medium leading-relaxed text-zinc-800 dark:prose-invert dark:text-zinc-200">
                          {point.label}:
                        </span>
                        <span className="prose-md prose whitespace-pre-wrap leading-normal text-zinc-600 dark:prose-invert dark:text-zinc-400">
                          {point.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {sections.approach.conclusion && (
                    <div className="prose prose-lg whitespace-pre-wrap text-lg leading-relaxed text-amber-600 dark:prose-invert dark:text-amber-900 dark:text-zinc-400">
                      {sections.approach.conclusion}
                    </div>
                  )}
                </div>
              </TextReveal>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <Magnet>
                <div className="relative flex h-64 w-64 rotate-6 transform items-center justify-center rounded-[2rem] bg-amber-200 p-8 dark:bg-amber-900/20">
                  <span className="text-7xl">🛠️</span>
                </div>
              </Magnet>
            </div>
          </div>
        )}
      </div>

      <section className="bg-neutral-200 py-24 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="prose prose-lg my-6 py-4 text-center text-5xl font-bold leading-relaxed tracking-tight text-zinc-900 dark:text-zinc-50 lg:text-6xl">
            Reflections & Impact
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.technicalLessons && (
              <HoverAnimation className="relative z-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:z-20 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-24 w-24 rounded-full p-2 text-6xl">🎓</div>
                <h3 className="prose prose-lg mb-4 text-xl font-bold leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200">
                  Technical Growth
                </h3>
                <ul className="prose-md prose list-outside list-disc space-y-2 pl-5 text-left leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.technicalLessons.slice(0, 3).map((lesson, i) => (
                    <li key={i}>{lesson}</li>
                  ))}
                </ul>
              </HoverAnimation>
            )}

            {project.nonTechnicalLessons && (
              <HoverAnimation className="relative z-10 h-full w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:z-20 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-24 w-24 rounded-full p-2 text-6xl">🧠</div>
                <h3 className="prose prose-lg mb-4 text-xl font-bold leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200">
                  Soft Skills
                </h3>
                <ul className="prose-md prose list-outside list-disc space-y-2 pl-5 text-left leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.nonTechnicalLessons.slice(0, 3).map((lesson, i) => (
                    <li key={i}>
                      <div>{lesson}</div>
                    </li>
                  ))}
                </ul>
              </HoverAnimation>
            )}

            {(project.impact || project.currentStatus) && (
              <HoverAnimation className="relative z-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:z-20 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="h-24 w-24 rounded-full p-2 text-6xl">🚀</div>
                <h3 className="prose prose-lg mb-4 text-xl font-bold leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200">
                  Real World Impact
                </h3>
                <div className="prose-md prose list-outside list-disc space-y-2 pl-5 text-left leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.impact || project.currentStatus}
                </div>
              </HoverAnimation>
            )}
          </div>
        </div>
      </section>

      {project.liveUrl && (
        <section className="flex flex-col items-center justify-center py-20">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-zinc-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <span>View Live Project</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="text-xl"
            >
              →
            </motion.span>

            <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-full"></div>
          </motion.a>
        </section>
      )}

      <div className="h-20 w-full"></div>
    </div>
  );
};

export default ProjectDetailsModern;
