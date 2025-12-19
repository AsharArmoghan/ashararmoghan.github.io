import {
  projectsDescriptions,
  detailedProjectDescriptions,
} from "@/app/lib/data/projects/projectDescriptions";
import Link from "next/link";
import ProjectDetail from "@/app/components/features/Project/ProjectDetailsModern";
import BackButton from "@/app/components/ui/Button/BackButton";

export async function generateStaticParams() {
  return Object.values(projectsDescriptions).map((project) => ({
    slug: project.slug,
  }));
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
            <BackButton />
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
