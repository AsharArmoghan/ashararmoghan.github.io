"use client";
import React from "react";
import { ArticlesData } from "@/app/lib/data/articles/articlesData";
import ArticleComponent from "@/app/components/features/Article/article";
import TextReveal from "@/app/utils/TextRevel";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const HomeArticles: React.FC = () => {
  const displayArticles = ArticlesData.slice(0, 3);

  return (
    <section className="flex w-full flex-col items-center justify-between bg-primary-white pb-6 dark:bg-primary-black">
      <div className="py-3 text-zinc-800 dark:text-zinc-300 lg:my-20">
        <div className="my-12 flex items-center justify-center text-gray-900 dark:text-white">
          <TextReveal delay={0.4}>
            <h2 className="text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl">
              Latest Articles
            </h2>
          </TextReveal>
        </div>
        <hr className="mx-auto my-2 h-1 w-60 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
      </div>

      <div className="container mx-2 grid w-full gap-8 sm:grid-flow-row lg:grid-flow-col">
        {displayArticles.map((article) => (
          <ArticleComponent key={article.id} article={article} />
        ))}
      </div>

      <div className="flex items-center justify-center py-16 sm:py-10 lg:py-24">
        <Link href="/articles">
          <MagneticButton>
            <span className="flex items-center gap-2">
              View All Articles
              <FiArrowUpRight className="text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
};

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="group relative flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      {children}
    </motion.button>
  );
};

export default HomeArticles;
