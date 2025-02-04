import Card from "../components/Project/card";

const Projects = () => {
  return (
    <div className="h-[600px] bg-zinc-300 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
      <div className="flex justify-center py-3 align-top">
        <p className="text-5xl">Things I’ve Built</p>
      </div>
      <div className="container mx-auto flex max-w-7xl flex-row items-center justify-between p-4">
        <div className="max-h-3xl container max-w-4xl">
          <p className="text-2xl font-semibold">Responsive Blog Post Web App</p>
          <div className="conatiner flex flex-row p-2">
            <p className="pr-1">
              📌 Tech Stack: Angular, Node.js, MongoDB, JWT Authentication
            </p>
          </div>
          <div className="constainer flex flex-row pb-2">
            <p className="pr-1">
              💡 Description: A dynamic blog platform where users can write,
              edit, and manage their articles. Features include authentication,
              role-based access, and a sleek UI.
            </p>
          </div>
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};
export default Projects;
