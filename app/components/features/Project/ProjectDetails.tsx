"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { IconCardComponent } from "@/app/components/ui/Card/iconCard/iconCard";
import TextReveal from "@/app/utils/TextRevel";
import { ArrowUpRightIcon } from "@/app/components/ui/Icons/ArrowUpRightIcon";
import { ProjectData } from "@/app/lib/Types/ProjectDetailsTypes";
import Link from "next/link";
import HoverAnimation from "@/app/utils/HoverAnimation";
import Magnet from "@/app/utils/Magnet";

const ProjectDetailsModern: React.FC<{ project: ProjectData }> = ({
  project,
}) => {
  const [activeTab, setActiveTab] = useState<
    "challenge" | "solution" | "keyTakeaway"
  >("challenge");

  const projectImages = project.images;

  return (
    <div className="w-full bg-white pb-20 text-zinc-900 dark:bg-primary-black dark:text-zinc-100">
      <section className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-4xl font-black leading-tight tracking-tight text-transparent dark:from-white dark:to-zinc-500 lg:text-7xl">
              {project.fullTitle || project.title}
            </h1>
            {project.summary && (
              <p className="mb-6 max-w-3xl text-xl font-bold text-blue-600 dark:text-blue-400">
                {project.summary}
              </p>
            )}
            {project.keySkills && (
              <div className="mb-8 flex flex-wrap gap-2">
                {project.keySkills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <TextReveal delay={0.2}>
                <p className="text-xl font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.overview}
                </p>
              </TextReveal>

              {project.liveUrl && (
                <div className="flex">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="group flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-zinc-900/10 transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:shadow-white/5 dark:hover:bg-zinc-200"
                  >
                    <span>View Live Build</span>
                    <ArrowUpRightIcon className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
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
              {projectImages[0] && (
                <motion.div
                  layoutId={`project-image-${project.slug}`}
                  className="relative"
                >
                  <Image
                    src={projectImages[0].imgSrc}
                    alt={project.title}
                    width={projectImages[0].width}
                    height={projectImages[0].height}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </motion.div>
              )}
            </div>

            {projectImages.length > 1 && (
              <div className="absolute -bottom-5 -right-2 w-[30%] max-w-[280px] lg:-bottom-10 lg:-right-10">
                <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-zinc-800 bg-zinc-800 shadow-2xl ring-1 ring-white/20 sm:rounded-[1rem] sm:border-[4px] md:rounded-[2rem] md:border-[8px]">
                  <div className="absolute left-[-8px] top-1/2 h-1/3 w-4 -translate-y-1/2 rounded-xl bg-zinc-900"></div>
                  <Image
                    src={projectImages[1].imgSrc}
                    alt={`${project.title} secondary view`}
                    width={projectImages[1].width}
                    height={projectImages[1].height}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-36 max-w-7xl px-6 lg:px-8">
        {(project.description ||
          project.introduction ||
          project.purposeAndGoal) && (
          <div className="mb-32 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-8 text-5xl font-black leading-tight tracking-tight lg:text-5xl">
                The Core Vision
              </h2>
              <TextReveal delay={0.2}>
                <div className="prose prose-lg max-w-none space-y-6 dark:prose-invert">
                  {project.description && (
                    <p className="text-xl font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {project.description}
                    </p>
                  )}
                  {(project.purposeAndGoal || project.introduction) && (
                    <div className="border-l-4 border-blue-500 py-2 pl-6 text-lg italic leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {project.purposeAndGoal || project.introduction}
                    </div>
                  )}
                </div>
              </TextReveal>
            </div>
            <div className="order-1 flex justify-center lg:order-2">
              <Magnet>
                <div className="relative flex h-64 w-64 rotate-3 transform items-center justify-center rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 dark:from-blue-500/10 dark:to-purple-500/10">
                  <span className="text-8xl drop-shadow-2xl filter">
                    {project.id === 1 ? "📝" : project.id === 2 ? "📊" : "🎨"}
                  </span>
                  <div className="absolute -inset-4 animate-pulse rounded-[4rem] border border-blue-500/20"></div>
                </div>
              </Magnet>
            </div>
          </div>
        )}

        {project.features && project.features.length > 0 && (
          <div className="mb-32">
            <h2 className="mb-12 text-center text-4xl font-black leading-tight tracking-tight lg:text-5xl">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <HoverAnimation
                  key={index}
                  yOffset={-5}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative z-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition-all hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/20 dark:text-blue-400">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
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
                  <div className="relative flex h-72 w-72 -rotate-3 transform items-center justify-center rounded-[4rem] border-2 border-dashed border-purple-500/30 bg-purple-500/10 p-8 dark:bg-purple-900/20">
                    <span className="text-8xl">⚡</span>
                    <strong className="absolute -bottom-8 right-0 rotate-6 text-2xl font-black text-purple-600 dark:text-purple-400">
                      Deep Dive
                    </strong>
                  </div>
                </Magnet>
              </div>

              <div className="order-2">
                <h2 className="my-6 text-5xl font-black leading-tight tracking-tight lg:text-6xl">
                  {project.spotlight.title}
                </h2>
                <TextReveal delay={0.2}>
                  <div className="prose prose-lg text-xl font-medium italic leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-400">
                    {project.spotlight.sections
                      ? project.spotlight.sections.overview
                      : project.spotlight.description}
                  </div>
                </TextReveal>
              </div>
            </div>

            {project.spotlight.sections && (
              <div className="mt-16 overflow-hidden rounded-[3rem] border border-zinc-200 bg-zinc-50/50 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/30">
                <div className="relative z-10 flex flex-wrap border-b border-zinc-200 bg-zinc-100/50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                  {(["challenge", "solution", "keyTakeaway"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative flex-1 rounded-2xl px-6 py-4 text-sm font-black uppercase tracking-widest transition-all ${
                          activeTab === tab
                            ? "text-zinc-900 dark:text-white"
                            : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                        }`}
                      >
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-2xl bg-white shadow-lg shadow-zinc-200/50 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:shadow-none dark:ring-white/10"
                            transition={{
                              type: "spring",
                              bounce: 0.15,
                              duration: 0.6,
                            }}
                          />
                        )}
                        <span className="relative z-10">
                          {tab === "keyTakeaway" ? "The Outcome" : tab}
                        </span>
                      </button>
                    ),
                  )}
                </div>

                <div className="relative z-10 min-h-[450px] p-8 lg:p-12">
                  <AnimatePresence mode="wait">
                    {activeTab === "challenge" && (
                      <motion.div
                        key="challenge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-black text-zinc-900 dark:text-white">
                          {project.spotlight.sections.challenge.title}
                        </h3>
                        {project.spotlight.sections.challenge.description && (
                          <p className="text-xl font-medium text-zinc-500 dark:text-zinc-400">
                            {project.spotlight.sections.challenge.description}
                          </p>
                        )}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          {project.spotlight.sections.challenge.points.map(
                            (point, idx) => (
                              <div
                                key={idx}
                                className="flex gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/50"
                              >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xl font-bold text-red-600">
                                  !
                                </span>
                                <div>
                                  <h4 className="mb-1 text-lg font-bold text-zinc-900 dark:text-white">
                                    {point.name}
                                  </h4>
                                  <p className="text-zinc-500 dark:text-zinc-400">
                                    {point.description}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "solution" && (
                      <motion.div
                        key="solution"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-8"
                      >
                        <h3 className="text-3xl font-black text-zinc-900 dark:text-white">
                          {project.spotlight.sections.solution.title}
                        </h3>
                        <p className="max-w-4xl text-xl font-medium text-zinc-500 dark:text-zinc-400">
                          {project.spotlight.sections.solution.description}
                        </p>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          {(project.spotlight.sections.solution.backend ||
                            project.spotlight.sections.solution
                              .appStructure) && (
                            <div className="space-y-6">
                              <h4 className="text-xs font-black uppercase tracking-widest text-blue-600">
                                {project.spotlight.sections.solution.backend
                                  ?.title ||
                                  project.spotlight.sections.solution
                                    .appStructure?.title}
                              </h4>
                              <div className="space-y-4">
                                {(
                                  project.spotlight.sections.solution.backend
                                    ?.points ||
                                  project.spotlight.sections.solution
                                    .appStructure?.points ||
                                  []
                                ).map((p, i) => (
                                  <div
                                    key={i}
                                    className="rounded-xl border-l-4 border-blue-500 bg-blue-500/5 p-4 dark:bg-blue-500/10"
                                  >
                                    <span className="block font-bold text-zinc-900 dark:text-white">
                                      {p.label}
                                    </span>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                      {p.description}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {(project.spotlight.sections.solution.frontend ||
                            project.spotlight.sections.solution
                              .performanceStrategy) && (
                            <div className="space-y-6">
                              <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600">
                                {project.spotlight.sections.solution.frontend
                                  ?.title ||
                                  project.spotlight.sections.solution
                                    .performanceStrategy?.title}
                              </h4>
                              <div className="space-y-4">
                                {(
                                  project.spotlight.sections.solution.frontend
                                    ?.points ||
                                  project.spotlight.sections.solution
                                    .performanceStrategy?.points ||
                                  []
                                ).map((p, i) => (
                                  <div
                                    key={i}
                                    className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/5 p-4 dark:bg-emerald-500/10"
                                  >
                                    <span className="block font-bold text-zinc-900 dark:text-white">
                                      {p.label}
                                    </span>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                      {p.description}
                                    </span>
                                  </div>
                                ))}
                              </div>
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
                        className="flex h-full flex-col items-center justify-center py-10 text-center"
                      >
                        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-500/10 text-5xl shadow-xl shadow-blue-500/5 transition-transform hover:scale-110 dark:bg-blue-500/20">
                          ✨
                        </div>
                        <h3 className="mb-6 text-4xl font-black text-zinc-900 dark:text-white">
                          Final Realization
                        </h3>
                        <p className="max-w-3xl text-2xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-300">
                          "{project.spotlight.sections.keyTakeaway}"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}

        {project.approach && (
          <div className="mb-32">
            <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-5xl font-black leading-tight tracking-tight lg:text-6xl">
                  Technical Architecture
                </h2>
                <p className="max-w-xl text-xl font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.approach.overview}
                </p>
              </div>
              <div className="flex justify-center">
                <Magnet>
                  <div className="relative flex h-64 w-64 rotate-6 transform items-center justify-center rounded-[3rem] border-2 border-dashed border-amber-500/30 bg-amber-500/10 p-8 dark:bg-amber-900/20">
                    <span className="text-7xl">🛠️</span>
                    <div className="absolute right-0 top-0 h-10 w-10 animate-ping rounded-full bg-amber-500 opacity-20"></div>
                  </div>
                </Magnet>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.approach.points.map((point, i) => (
                <div
                  key={i}
                  className="group rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-amber-500/50 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/40"
                >
                  <div className="mb-4 text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-500">
                    {point.label}
                  </div>
                  <p className="text-lg font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {project.approach.conclusion && (
              <div className="mt-12 rounded-3xl bg-zinc-900 p-8 text-center text-xl font-bold text-white shadow-2xl dark:bg-zinc-100 dark:text-zinc-900">
                {project.approach.conclusion}
              </div>
            )}
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-32">
            <h2 className="mb-12 text-center text-4xl font-black leading-tight tracking-tight lg:text-5xl">
              Critical Challenges
            </h2>
            <div className="space-y-6">
              {project.challenges.map((item, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-1 gap-8 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/20 lg:grid-cols-2"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                      The Problem
                    </span>
                    <h4 className="text-xl font-bold leading-snug text-zinc-900 dark:text-white">
                      {item.challenge}
                    </h4>
                  </div>
                  <div className="space-y-3 border-t border-zinc-100 pt-6 dark:border-zinc-800 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                      The Fix
                    </span>
                    <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <div className="mb-32">
            <div className="mb-12 flex flex-col items-center">
              <h2 className="mb-4 text-center text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                API Documentation
              </h2>
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-blue-500">
                RESTful Resources
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Method
                      </th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Endpoint
                      </th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Description
                      </th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Auth
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {project.apiEndpoints.map((api, idx) => (
                      <tr
                        key={idx}
                        className="group transition-colors hover:bg-white dark:hover:bg-zinc-800/40"
                      >
                        <td className="px-8 py-5">
                          <span
                            className={`rounded-md px-2 py-1 text-[10px] font-bold tracking-widest text-white ${
                              api.method === "GET"
                                ? "bg-emerald-500"
                                : api.method === "POST"
                                  ? "bg-blue-500"
                                  : api.method === "PUT"
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                            }`}
                          >
                            {api.method}
                          </span>
                        </td>
                        <td className="px-8 py-5 font-mono text-sm text-zinc-900 dark:text-zinc-200">
                          {api.route}
                        </td>
                        <td className="px-8 py-5 font-medium text-zinc-500 dark:text-zinc-400">
                          {api.description}
                        </td>
                        <td className="px-8 py-5">
                          {api.authRequired ? (
                            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-rose-500">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                              Required
                            </span>
                          ) : (
                            <span className="text-[10px] font-black uppercase text-zinc-400">
                              Public
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {project.installation && (
          <div className="mb-32">
            <h2 className="mb-8 text-center text-4xl font-black leading-tight tracking-tight lg:text-5xl">
              Quick Start
            </h2>
            <div className="group relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-zinc-900 p-8 shadow-2xl">
              <div className="absolute right-0 top-0 p-4 opacity-50 transition-opacity group-hover:opacity-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  terminal — node setup
                </span>
              </div>
              <code className="break-all font-mono text-lg leading-loose text-emerald-400">
                $ {project.installation}
              </code>
            </div>
          </div>
        )}
      </div>

      <section className="relative overflow-hidden border-y border-zinc-200 bg-zinc-50 py-32 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-20 text-center text-5xl font-black leading-tight tracking-tight lg:text-6xl">
            Reflections & Impact
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {project.technicalLessons && (
              <HoverAnimation className="relative z-10 flex flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 text-5xl dark:bg-blue-500/20">
                  🎓
                </div>
                <h3 className="mb-6 text-2xl font-black text-zinc-800 dark:text-zinc-200">
                  Technical Growth
                </h3>
                <ul className="space-y-4">
                  {project.technicalLessons.slice(0, 4).map((lesson, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-zinc-500 dark:text-zinc-400"
                    >
                      <span className="font-black text-blue-500">•</span>
                      <span className="text-base font-medium leading-relaxed">
                        {lesson}
                      </span>
                    </li>
                  ))}
                </ul>
              </HoverAnimation>
            )}

            {project.nonTechnicalLessons && (
              <HoverAnimation className="relative z-10 flex flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-5xl dark:bg-emerald-500/20">
                  🧠
                </div>
                <h3 className="mb-6 text-2xl font-black text-zinc-800 dark:text-zinc-200">
                  Soft Skills
                </h3>
                <ul className="space-y-4">
                  {project.nonTechnicalLessons.slice(0, 4).map((lesson, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-zinc-500 dark:text-zinc-400"
                    >
                      <span className="font-black text-emerald-500">•</span>
                      <span className="text-base font-medium leading-relaxed">
                        {lesson}
                      </span>
                    </li>
                  ))}
                </ul>
              </HoverAnimation>
            )}

            {(project.impact || project.currentStatus) && (
              <HoverAnimation className="relative z-10 flex flex-col rounded-[2.5rem] border border-zinc-200 bg-white p-10 shadow-sm transition-all hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10 text-5xl dark:bg-amber-500/20">
                  🚀
                </div>
                <h3 className="mb-6 text-2xl font-black text-zinc-800 dark:text-zinc-200">
                  The Aftermath
                </h3>
                <div className="prose prose-lg font-medium leading-relaxed text-zinc-500 dark:prose-invert dark:text-zinc-400">
                  {project.impact && <p className="mb-4">{project.impact}</p>}
                  {project.currentStatus && (
                    <div className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-700 dark:bg-zinc-800/50">
                      <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        Current Status
                      </span>
                      {project.currentStatus}
                    </div>
                  )}
                </div>
              </HoverAnimation>
            )}
          </div>
        </div>
      </section>

      {project.liveUrl && (
        <section className="flex flex-col items-center justify-center bg-zinc-900 px-6 py-40 text-white dark:bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-8 text-center"
          >
            <h2 className="max-w-3xl text-5xl font-black leading-none tracking-tighter md:text-7xl">
              READY TO EXPLORE THE LIVE PRODUCT?
            </h2>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-10 py-5 text-xl font-black text-zinc-950 shadow-2xl transition-all hover:bg-zinc-100"
            >
              <span>Launch Experience</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="text-2xl"
              >
                →
              </motion.span>
              <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-zinc-950/5 to-transparent transition-all duration-1000 group-hover:left-full"></div>
            </motion.a>
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetailsModern;
