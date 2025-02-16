import { ProjectProps } from "@/lib/Types/ProjectProps";
import { ImgCard } from "../Card/imageSlider/imgCard";

export const ProjectDetail = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="my-4 flex h-full min-w-[600px] max-w-[calc(100%-30rem)] flex-col items-center justify-center text-wrap">
      <div>
        <ImgCard image={project.image}></ImgCard>
      </div>
      <div className="mt-8 flex flex-col items-center justify-evenly">
        <div className="container mt-2 items-center justify-center text-zinc-800 dark:text-zinc-300 lg:pl-10">
          <h2 className="mb-4 items-center justify-start text-left text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            {project.title}
          </h2>

          <p className="mb-8 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
            {project.description}
          </p>
        </div>
        <div className="container h-[120px] overflow-hidden py-3 lg:w-[calc(100%-5rem)]">
          <ul className="flex flex-row items-center justify-between gap-6">
            {project.icons.map((icon, index) => {
              const IconComponent = icon.component;
              return (
                <li
                  key={index}
                  title={icon.name}
                  style={{ color: icon.color }}
                  className="h-12 w-12 text-gray-700"
                >
                  <IconComponent className="h-full w-full" />{" "}
                  <p className="text-[17px] sm:text-[12px]">{icon.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container my-[80px]">
          <h2 className="pb-8 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Project Requirements
          </h2>
          <ul className="list-inside list-decimal space-y-2">
            {project.projectRequirement.map((requirement, index) => (
              <li
                key={index}
                className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
              >
                {requirement}
              </li>
            ))}
          </ul>
        </div>
        <div className="container mb-[80px]">
          <h2 className="mb-4 flex items-center justify-start text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Approaches Used
          </h2>
          <ul className="list-inside list-none space-y-2">
            {project.approach.map((approach, index) => (
              <li
                key={index}
                className="text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl lg:-tracking-tighter"
              >
                {approach}
              </li>
            ))}
          </ul>
        </div>

        <div className="container mb-[80px]">
          <h2 className="mb-4 text-left text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Challenges and Solutions
          </h2>
          {project.challenges.map((item, challengeIndex) => (
            <div
              key={challengeIndex}
              className="text-wrap text-left font-normal md:text-lg lg:text-xl"
            >
              {item.Challenge.map((challenge, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold text-neutral-500 dark:text-neutral-400">
                    {" 🔹 "}
                    {challenge}
                  </p>
                  <p className="pl-4 text-zinc-500"> {item.Solution[index]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="mb-[80px]">
          <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-4xl">
            Features
          </h2>
          <ul className="mb-2 text-lg leading-none tracking-tight text-gray-900 dark:text-white">
            {project.features.map((feature) => (
              <li
                className="w-25 pb-3 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl"
                key={feature}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div> */}
        {/* <p className="mb-8 px-2 text-left font-normal text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
            The project follows a <strong>MERN-like structure</strong> with
            Angular as the frontend framework. Users can create an account,
            write and publish blogs, and engage with the content. Authentication
            is handled via JWT.
            </p> */}
        <div className="container mb-[50px]">
          <h2 className="mx-4 text-center text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            🏗️ Project Structure
          </h2>
          <pre className="mb-8 text-left font-normal text-gray-500 dark:text-gray-400 sm:text-sm md:text-lg lg:text-xl">
            {project.structure}
          </pre>
        </div>

        <div className="container mb-[50px] flex flex-col items-start justify-center">
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            How It Works
          </h2>
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            📦 Setup & Installation
          </h2>
          <ul className="list-disc">
            {project.setupSteps.map((step, idx) => (
              <li
                key={idx}
                className="mb-4 px-2 text-left font-normal -tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{ __html: step }}
              />
            ))}
          </ul>
        </div>

        <div className="container mb-[50px] w-[400px] rounded-md bg-zinc-100 p-4 dark:bg-neutral-600 lg:w-[600px]">
          <h2 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none -tracking-tight text-slate-900 dark:text-white lg:text-2xl">
            Installation
          </h2>
          <h3 className="font-semibold">Backend</h3>
          <pre className="rounded bg-slate-300 p-2 dark:bg-slate-700">
            {project.installation.backend}
          </pre>
          <h3 className="mb-4 mt-4 flex items-center justify-start text-left text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            Frontend
          </h3>
          <pre className="rounded bg-slate-300 p-2 dark:bg-gray-700">
            {project.installation.frontend}
          </pre>
        </div>

        <div className="container mx-3 mt-3 flex flex-row items-center justify-start text-left sm:flex-col">
          <h2 className="text-xl font-bold leading-none tracking-tight text-gray-900 dark:text-white lg:text-2xl">
            API Endpoints
          </h2>
          <table className="mt-4 w-full border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-2">Method</th>
                <th className="border p-2">Route</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {project.apiEndpoints.map((endpoint, idx) => (
                <tr key={idx} className="border">
                  <td className="border p-2 font-bold text-blue-500">
                    {endpoint.method}
                  </td>
                  <td className="border p-2">{endpoint.route}</td>
                  <td className="border p-2">{endpoint.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
