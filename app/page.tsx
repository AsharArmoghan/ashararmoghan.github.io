"use client";
import React from "react";
import Home from "@/app/home/HomePage";
import { AboutGrid } from "@/app/components/features/About/AboutGrid";
import HomeProjects from "@/app/components/features/Project/HomeProjects";
import HomeArticles from "@/app/components/features/Article/HomeArticles";
import { motion } from "motion/react";
import { websiteSchema } from "@/app/lib/seo/schemas";
const RevealSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.section>
  );
};

const Main = () => {
  return (
    <section className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="pointer-events-auto relative z-10 mb-[380px] bg-primary-white dark:bg-primary-black sm:mb-[380px]">
        <RevealSection id="home">
          <Home />
        </RevealSection>
        <RevealSection id="projects">
          <HomeProjects />
        </RevealSection>
        <RevealSection id="articles">
          <HomeArticles />
        </RevealSection>
        <RevealSection id="about">
          <AboutGrid />
        </RevealSection>
      </div>
    </section>
  );
};
export default Main;
