import Card from "../components/Card/card";
import "../projects/projects.css";

const Projects = () => {
  return (
    <div className="min-h-[700px] bg-primary-white pt-3 dark:bg-primary-black dark:text-zinc-300 sm:h-[900px]">
      <div className="mb-10 py-3 text-zinc-800 dark:text-zinc-300">
        <p className="flex items-center justify-center text-5xl">
          Things I’ve Built
        </p>
      </div>
      <div className="grid grid-rows-1 place-content-center lg:mx-[60px] lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Card></Card>
        </div>
        <div className="container mt-2 flex w-[550px] flex-col place-content-center text-zinc-800 dark:text-zinc-300">
          <h2 className="my-3 text-[38px] leading-10 tracking-tight">
            Responsive Blog Post Web App
          </h2>
          <div className="conatiner text-[20px] font-light">
            <p className="pr-1">
              A dynamic blog platform where users can write, edit, and manage
              their articles. Features include authentication, role-based
              access, and a sleek UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
