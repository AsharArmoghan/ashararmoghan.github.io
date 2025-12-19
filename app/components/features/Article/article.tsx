"use client";
import React from "react";
import { motion } from "motion/react";
import { Article } from "@/app/lib/Types/ArticleProps";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiClock, FiCalendar } from "react-icons/fi";

const ArticleComponent: React.FC<{ article: Article }> = ({ article }) => {
  const [imgSrc, setImgSrc] = React.useState(article.image);

  return (
    <Link href={`/articles/${article.slug || "#"}`}>
      <motion.div
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {article.image && (
          <div className="relative h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={imgSrc || article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => {
                setImgSrc(
                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
                );
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <FiArrowUpRight className="text-xl" />
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <FiCalendar className="text-zinc-400" /> {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <FiClock className="text-zinc-400" /> {article.readTime}
            </span>
          </div>

          <h2 className="mb-3 text-xl font-bold leading-tight text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {article.title}
          </h2>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {article.content}
          </p>

          <div className="mt-auto flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              {article.author}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleComponent;
