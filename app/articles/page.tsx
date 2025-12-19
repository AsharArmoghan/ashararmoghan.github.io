import { Metadata } from "next";
import ArticlesListClient from "./ArticlesListClient";

export const metadata: Metadata = {
  title: "Articles | Ashar",
  description:
    "Read technical articles and insights on software development, web technologies, and more.",
  openGraph: {
    title: "Articles | Ashar",
    description:
      "Read technical articles and insights on software development.",
    type: "website",
  },
};

export default function ArticlesPage() {
  return <ArticlesListClient />;
}
