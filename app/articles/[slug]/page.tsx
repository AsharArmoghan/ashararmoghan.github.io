import { ArticlesData } from "@/app/lib/data/articles/articlesData";
import { Metadata } from "next";
import ArticleContent from "./ArticleContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ArticlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ArticlesData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Ashar",
    };
  }

  return {
    title: article.title,
    description: article.content.substring(0, 160) + "...",
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160) + "...",
      images: article.image ? [article.image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.substring(0, 160) + "...",
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ArticlesData.find((a) => a.slug === slug);

  return <ArticleContent initialArticle={article || null} />;
}
