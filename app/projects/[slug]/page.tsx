import { projectDescriptions } from "@/app/lib/data/projects/projectDescriptions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectData } from "@/app/lib/Types/ProjectDetailsTypes";

import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  return projectDescriptions.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = (projectDescriptions as ProjectData[]).find(
    (p) => p.slug === slug,
  );

  if (!project) {
    return {
      title: "Project Not Found | Ashar",
      description: "The requested project could not be found.",
    };
  }

  const images = project.images;

  return {
    title: project.title,
    description: project.overview || "",
    openGraph: {
      title: project.title,
      description: project.overview || "",
      url: `https://ashar-dev.vercel.app/projects/${slug}`,
      siteName: "Ashar Portfolio",
      images:
        images.length > 0
          ? [
              {
                url: images[0].imgSrc,
                width: images[0].width || 1200,
                height: images[0].height || 630,
                alt: project.title,
              },
            ]
          : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview || "",
      images: images.length > 0 ? [images[0].imgSrc] : [],
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

const Project = async ({ params }: Props) => {
  const { slug } = await params;

  const project = projectDescriptions.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.overview,
    author: {
      "@type": "Person",
      name: "Ashar",
    },
    programmingLanguage: project.icons
      ? project.icons.map((icon: any) => icon.name)
      : [],
    url: `https://ashar-dev.vercel.app/projects/${slug}`,
    image: project.images.length > 0 ? project.images[0].imgSrc : "",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectContent initialProject={project as any} />
    </>
  );
};

export default Project;
