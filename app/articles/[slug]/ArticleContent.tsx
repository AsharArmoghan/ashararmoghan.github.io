"use client";
import { ArticlesData } from "@/app/lib/data/articles/articlesData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BackButton from "@/app/components/ui/Button/BackButton";
import Image from "next/image";
import { Article } from "@/app/lib/Types/ArticleProps";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

const ArticleContent = ({
  initialArticle,
}: {
  initialArticle?: Article | null;
}) => {
  const { slug } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null | undefined>(
    initialArticle === null ? undefined : initialArticle,
  );
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

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

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      const customArticles = JSON.parse(
        localStorage.getItem("custom_articles") || "[]",
      );
      const isCustom = customArticles.some((a: Article) => a.slug === slug);

      if (!isCustom) {
        toast.error("Cannot delete static articles");
        return;
      }

      const updatedArticles = customArticles.filter(
        (a: Article) => a.slug !== slug,
      );
      localStorage.setItem("custom_articles", JSON.stringify(updatedArticles));
      toast.success("Article deleted");
      router.push("/articles");
    }
  };

  if (article === undefined) {
    return (
      <div className="flex h-screen items-center justify-center bg-primary-white dark:bg-primary-black">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (article === null) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-primary-white text-zinc-900 dark:bg-primary-black dark:text-zinc-100">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <Link href="/articles" className="mt-4 text-blue-500 hover:underline">
          Go back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="pointer-events-auto min-h-screen bg-primary-white dark:bg-primary-black">
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between px-6 pt-10 text-primary-black dark:text-primary-white">
        <div className="flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
          <Link href="/articles">
            <BackButton />
          </Link>
        </div>
        <button
          onClick={handleDelete}
          className="rounded-full p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          title="Delete Article"
        >
          <FiTrash2 size={20} />
        </button>
      </nav>

      <article className="container mx-auto max-w-4xl px-4 py-12">
        {article.image && (
          <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={imgSrc || article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              onError={() => {
                setImgSrc(
                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
                );
              }}
            />
          </div>
        )}

        <header className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-100 lg:text-5xl">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg mx-auto dark:prose-invert">
          <p className="whitespace-pre-wrap text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {article.content}
          </p>
        </div>
      </article>
    </div>
  );
};

export default ArticleContent;
