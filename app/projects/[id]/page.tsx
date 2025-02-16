import { projectData } from "@/lib/data/projects/projectsData";
import Link from "next/link";

import { ProjectDetail } from "@/app/components/Project/projectDetails";
import Footer from "@/app/components/Footer/footer";
import { FaArrowLeft } from "react-icons/fa";

export function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id.toString(),
  }));
}

async function Project({ params }: { params: Promise<{ id: string }> }) {
  const projectId = Number((await params).id);
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <h1>Project Not Found</h1>
        <p>No project found for ID: {projectId}</p>
        <Link href="/">Go Back to Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <nav className="sticky top-0 mt-10 w-full pl-3 text-primary-black dark:text-primary-white">
        <div className="ml-6 flex h-10 w-10 flex-row items-center justify-center gap-2 sm:ml-1">
          <Link className="" href="/">
            <FaArrowLeft className="text-[45px] sm:text-[35px]" />
            {/* <p> Go Back</p> */}
          </Link>
        </div>
      </nav>
      <div className="mx-auto flex flex-col items-center justify-center overflow-x-hidden">
        <ProjectDetail project={project}></ProjectDetail>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Project;
