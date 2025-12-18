"use client";
import React from "react";
import { ArticlesData } from "../lib/data/articles/articlesData";
import ArticleComponent from "@/app/components/features/Article/article";
import BackButton from "../components/ui/Button/BackButton";

const ArticleList: React.FC = () => {
  return (
    <>
      <div className="relative z-10 mb-[500px] min-h-screen bg-primary-white dark:bg-primary-black md:mb-[400px]">
        <nav className="sticky top-0 w-full pt-10 text-primary-black dark:text-primary-white">
          <div className="ml-6 flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
            <BackButton />
          </div>
        </nav>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            All Articles
          </h1>
          <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {ArticlesData.map((article) => (
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

export default ArticleList;
