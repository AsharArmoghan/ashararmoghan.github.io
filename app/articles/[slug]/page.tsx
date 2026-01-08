export const dynamic = "force-dynamic";

import { prisma } from "@/app/lib/api/db";
import { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true },
  });
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article) {
    return {
      title: "Article Not Found | Ashar",
    };
  }

  return {
    title: article.title,
    description: article.excerpt || article.content.substring(0, 150),
    openGraph: {
      title: article.title,
      description: article.excerpt || article.content.substring(0, 150),
      url: `https://ashar-dev.vercel.app/articles/${slug}`,
      siteName: "Ashar Portfolio",
      type: "article",
      images: article.image ? [article.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.content.substring(0, 150),
      images: article.image ? [article.image] : [],
    },
    alternates: {
      canonical: `/articles/${slug}`,
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author_user: true,
    },
  });

  const formattedArticle = article
    ? {
        id: 0,
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
      }
    : null;

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        image: article.image,
        author: {
          "@type": "Person",
          name: article.author_user?.name || "Ashar",
        },
        datePublished: article.createdAt.toISOString(),
        dateModified: article.updatedAt.toISOString(),
        articleBody: article.content,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ArticleContent initialArticle={formattedArticle} />
    </>
  );
}
