import { Metadata } from "next";
import ProjectsList from "./ProjectsList";

export const metadata: Metadata = {
  title: "Projects | Ashar",
  description:
    "Explore my portfolio of web and mobile applications including Code Blog, React Sales Dashboard, and more.",
  openGraph: {
    title: "Projects | Ashar",
    description: "Explore my portfolio of web and mobile applications.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
