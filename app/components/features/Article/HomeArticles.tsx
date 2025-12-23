"use client";
import React from "react";

import ArticleComponent from "@/app/components/features/Article/article";
import TextReveal from "@/app/utils/TextRevel";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

interface HomeArticlesProps {
  articles: any[];
}

const HomeArticles: React.FC<HomeArticlesProps> = ({ articles }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-white dark:bg-primary-black">
      <div className="relative z-10 w-full max-w-7xl px-4 py-20 lg:py-32">
        <div className="mb-20 flex flex-col items-center justify-center text-center">
          <TextReveal delay={0.2}>
            <h2 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-7xl">
              Latest Insights
            </h2>
          </TextReveal>
          <hr className="mt-10 h-1 w-40 rounded-full border-0 bg-blue-600 dark:bg-blue-500"></hr>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
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
      </div>
    </div>
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
