"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  FiClock,
  FiCalendar,
  FiArrowLeft,
  FiShare2,
  FiChevronRight,
} from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Article } from "@/app/lib/Types/ArticleProps";
import { ArticlesData } from "@/app/lib/data/articles/articlesData";
import BackButton from "@/app/components/ui/Button/BackButton";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const ArticleContent = ({
  initialArticle,
}: {
  initialArticle?: Article | null;
}) => {
  const { slug } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null | undefined>(
    initialArticle ?? undefined,
  );
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (initialArticle) {
      setArticle(initialArticle);
      return;
    }

    const staticArticle = ArticlesData.find((a) => a.slug === slug);
    if (staticArticle) {
      setArticle(staticArticle);
      return;
    }

    const customArticles = JSON.parse(
      localStorage.getItem("custom_articles") || "[]",
    );
    const customArticle = customArticles.find((a: Article) => a.slug === slug);
    setArticle(customArticle || null);
  }, [slug, initialArticle]);

  const toc = useMemo(() => {
    if (!article?.content) return [];

    const lines = article.content
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    const foundItems: TocItem[] = [];

    foundItems.push({
      id: "article-top",
      text: article.title,
      level: 1,
    });

    lines.forEach((line) => {
      const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (hMatch) {
        const level = hMatch[1].length;
        const text = hMatch[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        foundItems.push({ id, text, level });
      } else {
        const bMatch = line.match(/^\*\*(.+)\*\*$/);
        if (bMatch) {
          const text = bMatch[1].trim();
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          foundItems.push({ id, text, level: 7 }); // Level 7 for highlights
        }
      }
    });

    return foundItems;
  }, [article?.content, article?.title]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" },
    );

    const elementsToObserve = [
      document.getElementById("article-top"),
      ...toc.map((item) => document.getElementById(item.id)),
    ].filter(Boolean) as HTMLElement[];

    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  if (article === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent shadow-xl"></div>
          <p className="animate-pulse text-sm font-medium text-zinc-500">
            Loading masterpiece...
          </p>
        </div>
      </div>
    );
  }

  if (article === null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center dark:bg-zinc-950">
        <div className="mb-6 rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900">
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white">
            404
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            The article you're looking for has vanished into the digital void.
          </p>
        </div>
        <Link
          href="/articles"
          className="group flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-3"
        >
          <FiArrowLeft /> Back to Knowledge Base
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950">
      <div className="fixed left-0 right-0 top-0 z-40 hidden border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 md:block">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/articles"
            className="align-center flex items-center justify-center gap-2 rounded-full text-sm font-bold text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <BackButton />
          </Link>
          <div className="flex items-center gap-4 text-zinc-400">
            <button
              onClick={handleShare}
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <FiShare2 size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[85rem] px-6 pb-20 pt-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  In this article
                </h3>
                <nav className="space-y-1">
                  {toc.length > 0 ? (
                    toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(item.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`group flex items-center py-2 text-sm transition-all ${
                          activeId === item.id
                            ? "translate-x-1 font-bold text-blue-600"
                            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        } ${item.level > 2 ? "ml-4" : ""}`}
                      >
                        <span
                          className={`mr-2 h-1.5 w-1.5 rounded-full bg-blue-600 transition-transform ${activeId === item.id ? "scale-100" : "scale-0"}`}
                        />
                        {item.level === 7 && (
                          <span className="mr-2 text-xs opacity-50">✦</span>
                        )}
                        {item.text}
                      </a>
                    ))
                  ) : (
                    <p className="text-sm italic text-zinc-400">Reading...</p>
                  )}
                </nav>
              </div>

              <div className="border-t border-zinc-100 pt-8 dark:border-zinc-800">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Support
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Loved the article? Share it with your network to support my
                    work.
                  </p>
                  <button
                    onClick={handleShare}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white py-2.5 text-sm font-bold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                  >
                    <FiShare2 /> Copy Link
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9 lg:pl-8">
            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  {article.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  id="article-top"
                  className="mb-8 scroll-mt-32 text-4xl font-black leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:text-6xl"
                >
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-zinc-100 pb-8 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  <div className="flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1.5 dark:bg-zinc-900">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      A
                    </div>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      {article.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <FiCalendar className="text-blue-500" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <FiClock className="text-blue-500" />
                    <span>{article.readTime} reading time</span>
                  </div>
                </div>
              </motion.div>
            </header>

            {article.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-zinc-100 shadow-2xl dark:bg-zinc-800"
              >
                <Image
                  src={imgSrc || article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  onError={() => {
                    setImgSrc(
                      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
                    );
                  }}
                />
              </motion.div>
            )}

            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-pre:rounded-2xl prose-pre:bg-zinc-900 prose-pre:shadow-2xl prose-img:rounded-3xl dark:prose-a:text-blue-400">
              <div
                className="leading-relaxed text-zinc-700 dark:text-zinc-300"
                dangerouslySetInnerHTML={{
                  __html:
                    article.content.trim().startsWith("<") ||
                    article.content.includes("</")
                      ? article.content // It's HTML from Tiptap
                      : article.content // Fallback to legacy Markdown parser
                          .split("\n")
                          .map((line) => {
                            const hMatch = line.match(/^(#{1,3})\s+(.+)$/);
                            if (hMatch) {
                              const level = hMatch[1].length;
                              const text = hMatch[2].trim();
                              const id = text
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-");
                              const tagName = `h${level + 1}`;
                              return `<${tagName} id="${id}" class="scroll-mt-32">${text}</${tagName}>`;
                            }

                            const bMatch = line.match(/^\*\*(.+)\*\*$/);
                            if (bMatch) {
                              const text = bMatch[1].trim();
                              const id = text
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-");
                              return `<strong id="${id}" class="block scroll-mt-32 text-zinc-900 dark:text-white py-2">${text}</strong>`;
                            }

                            let processed = line
                              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                              .replace(/\*(.*?)\*/g, "<em>$1</em>")
                              .replace(
                                /\[(.*?)\]\((.*?)\)/g,
                                '<a href="$2" class="text-blue-600 hover:underline dark:text-blue-400" target="_blank">$1</a>',
                              )
                              .replace(
                                /`(.*?)`/g,
                                '<code class="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>',
                              );

                            if (processed.trim().startsWith("- ")) {
                              return `<li class="ml-4">${processed.trim().substring(2)}</li>`;
                            }

                            return processed || "<br />";
                          })
                          .join("\n"),
                }}
              />
            </div>

            <footer className="mt-20 border-t border-zinc-100 pt-12 dark:border-zinc-800">
              <div className="group flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-black text-white shadow-xl shadow-blue-500/20 transition-transform group-hover:rotate-6">
                    A
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                      Written by
                    </p>
                    <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                      {article.author}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Developer & Content Strategist
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleShare}
                    className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-zinc-900/10 transition-all hover:scale-[1.02] active:scale-95 dark:bg-white dark:text-zinc-950"
                  >
                    Share Article
                  </button>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl"
        >
          <FiChevronRight className="-rotate-90 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ArticleContent;
