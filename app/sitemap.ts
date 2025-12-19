import { MetadataRoute } from "next";
import { projectsDescriptions } from "@/app/lib/data/projects/projectDescriptions";
import { ArticlesData } from "@/app/lib/data/articles/articlesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ashar-dev.vercel.app";

  // Static routes
  const staticRoutes = ["", "/about", "/projects", "/articles"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  // Dynamic Project Routes
  const projectRoutes = Object.values(projectsDescriptions).map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Article Routes
  const articleRoutes = ArticlesData.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(), // Ideally this would be the actual article date
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
