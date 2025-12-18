"use client";
import React from "react";
import { motion } from "framer-motion";
import { Article } from "@/app/lib/Types/ArticleProps";
const ArticleComponent: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <motion.div
      className="main dark:shadow-[9px_8px_2px_1px_#303030 h-[400px] w-full scroll-smooth rounded-lg bg-zinc-300 p-4 shadow-[9px_8px_2px_1px_#303030] dark:bg-zinc-700"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="] flex flex-col">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {article.title}
        </h2>
        <p className="py-2 text-left font-semibold text-zinc-600 dark:text-gray-400 md:text-[15px] lg:text-[15px]">
          By {article.author} | {article.date} | {article.readTime}
        </p>
        <p className="py-2 text-left font-normal text-zinc-600 dark:text-gray-400 md:text-[15px] lg:text-lg">
          {article.content}
        </p>
      </div>
    </motion.div>
  );
};

export default ArticleComponent;
