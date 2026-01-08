"use client";
import React from "react";
import ArticleComponent from "@/app/components/features/Article/article";
import BackButton from "../components/ui/Button/BackButton";
import Link from "next/link";
import TextReveal from "../utils/TextRevel";

interface ArticlesListClientProps {
  articles: any[];
}

import { useData } from "@/app/providers/DataProvider";

const ArticlesListClient: React.FC<ArticlesListClientProps> = ({
  articles: initialArticles,
}) => {
  const { articles } = useData();
  const displayArticles = articles.length > 0 ? articles : initialArticles;
  return (
    <>
      <div className="bg-primary-white dark:bg-primary-black pointer-events-auto relative z-10 mt-16 min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12">
          <div className="my-6 flex items-center justify-center text-gray-900 dark:text-white">
            <TextReveal delay={0.4}>
              <h2 className="text-5xl leading-none font-black tracking-tight text-black transition-colors lg:text-7xl dark:text-white">
                All Articles
              </h2>
            </TextReveal>
          </div>
          <hr className="mx-auto my-2 h-1 w-60 rounded-sm border-0 bg-zinc-300 md:my-10 dark:bg-gray-700"></hr>
          <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayArticles.map((article) => (
              <ArticleComponent
                key={article.id}
                article={article}
              ></ArticleComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesListClient;
