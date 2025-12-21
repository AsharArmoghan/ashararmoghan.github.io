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

  if (!article) return <ArticleContent initialArticle={null} />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.content.substring(0, 160) + "...",
    author: {
      "@type": "Person",
      name: article.author || "Ashar",
    },
    datePublished: article.date,
    image: article.image || "",
    url: `https://ashar-dev.vercel.app/articles/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent initialArticle={article} />
    </>
  );
}
