import { projectData } from "../../lib/data/projects/projectsData";
import Link from "next/link";
import ProjectDetail from "@/app/components/Project/projectDetails";
import Footer from "@/app/components/Footer/footer";
import { FaArrowLeft } from "react-icons/fa";

export async function generateStaticParams() {
  return projectData.map((project) => ({ slug: project.slug }));
}
const Project: React.FC = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const project = projectData.find(async (p) => p.slug === (await params).slug);

  if (!project) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <h1>Project Not Found</h1>
        <p>No project found for ID: {project.id}</p>
        <Link href="/">Go Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <nav className="sticky top-0 w-full pt-10 text-primary-black dark:text-primary-white">
        <div className="ml-6 flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
          <Link href="/">
            <FaArrowLeft className="pl-4 text-[45px] sm:text-[35px]" />
            {/* <p> Go Back</p> */}
          </Link>
        </div>
      </nav>
      <div className="mx-auto flex flex-col items-center justify-center">
        <ProjectDetail project={project}></ProjectDetail>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Project;
