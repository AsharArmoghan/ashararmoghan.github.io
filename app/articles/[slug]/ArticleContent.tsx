"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  FiClock,
  FiCalendar,
  FiArrowLeft,
  FiShare2,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Article } from "@/app/lib/Types/ArticleProps";
import BackButton from "@/app/components/ui/Button/BackButton";
import ThemeToggle from "@/app/components/ui/Theme/theme-toggle";

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
  const [isTocExpanded, setIsTocExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    if (initialArticle) {
      setArticle(initialArticle);
    }
  }, [slug, initialArticle]);

  const { toc, processedContent } = useMemo(() => {
    if (!article?.content) return { toc: [], processedContent: "" };

    const isHtml =
      article.content.trim().startsWith("<") || article.content.includes("</");
    const foundItems: TocItem[] = [];
    let processed = article.content;

    foundItems.push({
      id: "article-top",
      text: article.title,
      level: 1,
    });

    if (isHtml) {
      const headingRegex = /<(h[1-6])(.*?)>(.*?)<\/h[1-6]>/gi;

      processed = article.content.replace(
        headingRegex,
        (match, tag, attrs, text) => {
          const cleanText = text.replace(/<[^>]*>?/gm, "").trim();
          const id = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const level = parseInt(tag.substring(1));
          foundItems.push({ id, text: cleanText, level });
          return `<${tag}${attrs} id="${id}" class="scroll-mt-32">${text}</${tag}>`;
        },
      );
    } else {
      const lines = article.content.split("\n");
      const processedLines = lines.map((line) => {
        const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
        if (hMatch) {
          const level = hMatch[1].length;
          const text = hMatch[2].trim();
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          foundItems.push({ id, text, level });
          const tagName = `h${level + 1}`;
          return `<${tagName} id="${id}" class="scroll-mt-32">${text}</${tagName}>`;
        }

        return line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")
          .replace(
            /\[(.*?)\]\((.*?)\)/g,
            '<a href="$2" class="text-blue-600 hover:underline dark:text-blue-400" target="_blank">$1</a>',
          )
          .replace(
            /`(.*?)`/g,
            '<code class="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>',
          )
          .replace(/^- (.*)$/g, '<li class="ml-4">$1</li>');
      });
      processed = processedLines.join("\n");
    }

    return { toc: foundItems, processedContent: processed };
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
            Loading Article...
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

  const tocItemsToShow = isTocExpanded ? toc : toc.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950">
      <div className="fixed top-0 right-0 left-0 z-40 hidden border-b border-zinc-100 bg-white/80 backdrop-blur-md md:block dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/articles"
            className="align-center flex items-center justify-center gap-2 rounded-full text-sm font-bold text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <BackButton />
          </Link>
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.3,
                mass: 1,
              }}
              onClick={handleShare}
              className="transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              <FiShare2 size={26} />
            </motion.button>
            <motion.div
              className="items-center"
              animate={{
                transition: {
                  type: "tween",
                  duration: 0.3,
                  velocity: 1.5,
                  restDelta: 0.01,
                },
              }}
              layout={true}
              whileHover={{
                rotate: -90,
              }}
              whileTap={{ rotate: 360 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[85rem] px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <aside className="hidden lg:col-span-2 lg:block">
            <div className="sticky top-28 space-y-8">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xs font-bold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
                    In this article
                  </h3>
                </div>
                <nav className="space-y-1">
                  {toc.length > 0 ? (
                    <>
                      <div className="space-y-1 overflow-hidden transition-all duration-300">
                        {tocItemsToShow.map((item) => (
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
                            {item.text}
                          </a>
                        ))}
                      </div>

                      {toc.length > 6 && (
                        <button
                          onClick={() => setIsTocExpanded(!isTocExpanded)}
                          className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 transition-all hover:text-blue-700"
                        >
                          {isTocExpanded ? "Show Less" : "Expand All"}
                          <FiChevronDown
                            className={`transition-transform duration-300 ${isTocExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-zinc-400 italic">Reading...</p>
                  )}
                </nav>
              </div>

              <div className="border-t border-zinc-100 pt-8 dark:border-zinc-800">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <p className="mb-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
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
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 uppercase dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1
                  id="article-top"
                  className="mb-8 scroll-mt-32 text-4xl leading-[1.1] font-black tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white"
                >
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-zinc-100 pb-8 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                  <div className="flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1.5 dark:bg-zinc-900">
                    {article.author_user?.image ? (
                      <div className="relative h-6 w-6 overflow-hidden rounded-full">
                        <Image
                          src={article.author_user.image}
                          alt={article.author_user.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                        {
                          (article.author_user?.name ||
                            article.author ||
                            "A")[0]
                        }
                      </div>
                    )}
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      {article.author_user?.name || article.author}
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

            <div className="prose prose-lg dark:prose-invert prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 prose-pre:rounded-2xl prose-pre:bg-zinc-900 prose-pre:shadow-2xl prose-img:rounded-3xl dark:prose-a:text-blue-400 max-w-none">
              <div
                className="leading-relaxed text-zinc-700 dark:text-zinc-300"
                suppressHydrationWarning={true}
                dangerouslySetInnerHTML={{
                  __html: processedContent,
                }}
              />
            </div>

            <footer className="mt-20 border-t border-zinc-100 pt-12 dark:border-zinc-800">
              <div className="group flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex items-center gap-4">
                  {article.author_user?.image ? (
                    <div className="relative h-16 w-16 overflow-hidden rounded-3xl shadow-xl shadow-blue-500/20 transition-transform group-hover:rotate-6">
                      <Image
                        src={article.author_user.image}
                        alt={article.author_user.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-3xl font-black text-white shadow-xl shadow-blue-500/20 transition-transform group-hover:rotate-6">
                      {(article.author_user?.name || article.author || "A")[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold tracking-widest text-blue-600 uppercase dark:text-blue-400">
                      Written by
                    </p>
                    <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                      {article.author_user?.name || article.author}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Developer & Verified contributor sharing deep technical
                      insights.
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

      {isMounted &&
        createPortal(
          <div className="fixed right-10 bottom-10 z-[100] flex flex-col gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 sm:h-10 sm:w-10 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-blue-500"
              title="Scroll to Top"
            >
              <FiChevronUp
                size={28}
                className="transition-transform group-hover:-translate-y-1"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 sm:h-10 sm:w-10 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-blue-500"
              title="Scroll to Bottom"
            >
              <FiChevronDown
                size={28}
                className="transition-transform group-hover:translate-y-1"
              />
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ArticleContent;
