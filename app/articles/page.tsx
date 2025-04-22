import React from "react";

import { ArticlesData } from "@/lib/data/articles/articlesData";
import ArticleComponent from "../components/Article/article";

const ArticleList: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-between bg-primary-white pb-6 dark:bg-primary-black">
      <h1 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
        Articles
      </h1>
      <div className="container mx-2 grid w-full gap-8 sm:grid-flow-row lg:grid-flow-col">
        {ArticlesData.map((article) => (
          <ArticleComponent
            key={article.id}
            article={article}
          ></ArticleComponent>
        ))}
      </div>
      <hr className="mx-auto my-4 h-1 w-[400px] rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
    </section>
  );
};

export default ArticleList;
