import { prisma } from "@/app/lib/api/db";
import MainClient from "./MainClient";
import { projectDescriptions } from "@/app/lib/data/projects/projectDescriptions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashar | Full-Stack Developer",
  description:
    "Explore the portfolio of Ashar, a Full-Stack Developer specializing in high-performance web and mobile applications using Next.js, React, and Flutter.",
  openGraph: {
    title: "Ashar | Full-Stack Developer",
    description:
      "Full-Stack Developer portfolio featuring scalable web solutions and mobile apps.",
    url: "https://ashar-dev.vercel.app",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ashar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar | Full-Stack Developer",
    description:
      "Building scalable web solutions with Next.js 15, React, and Flutter.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

import { Article } from "@/app/lib/Types/ArticleProps";

export default async function Page() {
  const projects = projectDescriptions;
  const articlesFromDb = await prisma.article.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
    include: {
      author_user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  const articles: Article[] = articlesFromDb.map((article) => ({
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

  return <MainClient projects={projects} articles={articles} />;
}
