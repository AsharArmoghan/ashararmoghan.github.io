import { Metadata } from "next";
import ProjectsList from "./ProjectsList";
import { projectDescriptions } from "@/app/lib/data/projects/projectDescriptions";

export const metadata: Metadata = {
  title: "Projects | Ashar",
  description:
    "Explore my portfolio of web and mobile applications including Code Blog, React Sales Dashboard, and more.",
  openGraph: {
    title: "Projects | Ashar",
    description: "Explore my portfolio of web and mobile applications.",
    url: "https://ashar-dev.vercel.app/projects",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ashar Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Ashar",
    description: "Explore my portfolio of web and mobile applications.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = projectDescriptions;

  return <ProjectsList projects={projects} />;
}
