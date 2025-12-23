"use server";
import { MetadataRoute } from "next";
import { prisma } from "@/app/lib/api/db";
import { projectDescriptions } from "@/app/lib/data/projects/projectDescriptions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ashar-dev.vercel.app";

  const staticRoutes = ["", "/about", "/projects", "/articles"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projectDescriptions.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
