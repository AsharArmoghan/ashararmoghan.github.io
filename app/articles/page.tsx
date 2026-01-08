export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { prisma } from "@/app/lib/api/db";
import ArticlesList from "./ArticlesListClient";

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
  });

  return <ArticlesList articles={articles} />;
}
