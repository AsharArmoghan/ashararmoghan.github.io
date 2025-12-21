"use client";
import React from "react";
import { ArticlesData } from "../lib/data/articles/articlesData";
import ArticleComponent from "@/app/components/features/Article/article";
import BackButton from "../components/ui/Button/BackButton";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const ArticlesListClient: React.FC = () => {
  const [articles, setArticles] = React.useState(ArticlesData);

  React.useEffect(() => {
    const customArticles = JSON.parse(
      localStorage.getItem("custom_articles") || "[]",
    );
    const publishedCustomArticles = customArticles.filter(
      (a: any) => a.status === "published",
    );
    setArticles([...ArticlesData, ...publishedCustomArticles]);
  }, []);

  return (
    <>
      <div className="pointer-events-auto relative z-10 mb-[380px] min-h-screen bg-primary-white dark:bg-primary-black">
        <nav className="sticky top-0 w-full pt-10 text-primary-black dark:text-primary-white">
          <div className="ml-6 flex h-20 w-20 flex-row items-center justify-center gap-2 sm:ml-1">
            <Link href="/">
              <BackButton />
            </Link>
          </div>
        </nav>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-12">
          <div className="mb-8 flex w-full items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              All Articles
            </h1>
            <Link
              href="/articles/new"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              + Create Article
            </Link>
          </div>
          <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
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
