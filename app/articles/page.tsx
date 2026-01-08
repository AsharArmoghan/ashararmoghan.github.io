export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { prisma } from "@/app/lib/api/db";
import ArticlesList from "./ArticlesListClient";
import { Article } from "@/app/lib/Types/ArticleProps";

export const metadata: Metadata = {
  title: "Articles | Ashar",
  description:
    "Read insightful articles on software engineering, React, Next.js, and web development trends.",
  openGraph: {
    title: "Articles | Ashar",
    description: "Read insightful articles on software engineering.",
    url: "https://ashar-dev.vercel.app/articles",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ashar Articles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Ashar",
    description: "Read insightful articles on software engineering.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/articles",
  },
};

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    include: {
      author_user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  const formattedArticles: Article[] = articles.map((article) => ({
    id: article.id,
    title: article.title,
    author: article.author_user?.name || "Ashar",
    date: article.createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: article.readTime || "5 min read",
    excerpt: article.excerpt,
    content: article.content,
    slug: article.slug,
    image: article.image || undefined,
    tags: article.tags,
    author_user: article.author_user
      ? {
          name: article.author_user.name,
          image: article.author_user.image || undefined,
        }
      : undefined,
  }));

  return <ArticlesList articles={formattedArticles} />;
}
