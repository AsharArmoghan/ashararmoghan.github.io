import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/app/components/ui/Theme/providers";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import Script from "next/script";
import { LenisProvider } from "./providers/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashar-dev.vercel.app"),

  title: {
    default: "Ashar | Full-Stack Developer",
    template: "%s | Ashar",
  },
  verification: {
    google: "YqVGkuZ9GRJr_fSb_-7UjxOZnMnGWrNx7JyXx5az1A4",
  },
  description:
    "Portfolio of Ashar, a Full-Stack Developer specializing in scalable web solutions with Next.js 15, React, and TypeScript. Based in Delhi, India.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "Software Engineer",
    "React",
    "React.js",
    "Next.js",
    "Next.js 15",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Vercel",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Flutter",
    "Dart",
    "Android Development",
    "iOS Development",
    "Cross-Platform Development",
    "Web Development Delhi",
    "Software Engineer India",
    "Freelance Developer",
    "Portfolio",
    "Full-Stack Projects",
    "Scalable Web Solutions",
    "ashar",
    "syed ashar",
    "ashar armoghan",
  ],
  authors: [{ name: "Ashar" }],
  creator: "Ashar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashar-dev.vercel.app",
    title: "Ashar | Full-Stack Developer",
    description:
      "Building scalable web solutions with Next.js 15, React, and Tailwind CSS.",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ashar Portfolio Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar | Full-Stack Developer",
    description: "Building scalable web solutions with Next.js 15 and React.",
    images: ["/og-home.jpg"],
    creator: "@SyedAshar09",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { StartupLoader } from "./components/ui/StartupLoader";
import Header from "./components/layout/Header/header";
import Footer from "./components/layout/Footer/footer";
import { DataProvider } from "./providers/DataProvider";
import { prisma } from "@/app/lib/api/db";

import { Article } from "@/app/lib/Types/ArticleProps";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex min-h-screen flex-col antialiased",
        )}
      >
        <StartupLoader />
        <LenisProvider>
          <ThemeProvider>
            <DataProvider initialArticles={formattedArticles}>
              <Toaster position="bottom-center" />
              <Header />
              <main className="bg-primary-white dark:bg-primary-black relative z-10 grow">
                {children}
              </main>
              <Footer />
            </DataProvider>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
