import {
  projectsDescriptions,
  detailedProjectDescriptions,
} from "@/app/lib/data/projects/projectDescriptions";
import { Metadata } from "next";
import Link from "next/link";
import ProjectDetail from "@/app/components/features/Project/ProjectDetailsModern";
import BackButton from "@/app/components/ui/Button/BackButton";

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

  return (
    <>
      <div className="pointer-events-auto relative z-10 mb-[500px] min-h-screen bg-primary-white dark:bg-primary-black md:mb-[400px]">
        <nav className="sticky top-0 w-full pt-10 text-primary-black dark:text-primary-white">
          <div className="ml-6 flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
            <BackButton path="/projects" />
          </div>
        </nav>
        <div className="mx-auto flex flex-col items-center justify-center">
          <ProjectDetail project={project}></ProjectDetail>
        </div>
      </div>
    </>
  );
};

export default Project;
