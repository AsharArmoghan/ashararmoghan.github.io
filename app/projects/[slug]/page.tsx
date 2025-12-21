import {
  projectsDescriptions,
  detailedProjectDescriptions,
} from "@/app/lib/data/projects/projectDescriptions";
import { Metadata } from "next";
import Link from "next/link";

import BackButton from "@/app/components/ui/Button/BackButton";
import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  return Object.values(projectsDescriptions).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const basicInfo = Object.values(projectsDescriptions).find(
    (p) => p.slug === slug,
  );

  if (!basicInfo) {
    return {
      title: "Project Not Found | Ashar",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: basicInfo.title,
    description: basicInfo.overview,
    openGraph: {
      title: basicInfo.title,
      description: basicInfo.overview,
      images: basicInfo.image?.[0]?.imgSrc
        ? [
            {
              url: basicInfo.image[0].imgSrc,
              width: basicInfo.image[0].width,
              height: basicInfo.image[0].height,
              alt: basicInfo.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: basicInfo.title,
      description: basicInfo.overview,
      images: basicInfo.image?.[0]?.imgSrc ? [basicInfo.image[0].imgSrc] : [],
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

const Project = async ({ params }: Props) => {
  const { slug } = await params;

  const basicInfo = Object.values(projectsDescriptions).find(
    (p) => p.slug === slug,
  );
  const detailedInfo =
    detailedProjectDescriptions[
      slug as keyof typeof detailedProjectDescriptions
    ];

  if (!basicInfo) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <h1>Project Not Found</h1>
        <p>No project found for slug: {slug}</p>
        <Link href="/projects">Go Back to Projects</Link>
      </div>
    );
  }

  const project = {
    ...basicInfo,
    sections: detailedInfo?.sections,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: basicInfo.title,
    description: basicInfo.overview,
    author: {
      "@type": "Person",
      name: "Ashar",
    },
    programmingLanguage: basicInfo.icons.map((icon) => icon.name),
    url: `https://ashar-dev.vercel.app/projects/${slug}`,
    image: basicInfo.image?.[0]?.imgSrc || "",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectContent initialProject={project} />
    </>
  );
};

export default Project;
