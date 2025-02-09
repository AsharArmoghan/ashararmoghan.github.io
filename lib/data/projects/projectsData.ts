import { ProjectProps } from "@/lib/Types/ProjectProps";
// import thumbBlog from "@/public/images/thumb_blog.webp";
import codeBlog from "@/public/images/CodeBlog1.png";
import dashboard from "@/public/images/dashboard1.png";
import portfolio from "@/public/images/portfolio.png";
import { SiMaterialdesign } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoAngular,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
export const projectData: ProjectProps[] = [
  {
    id: 1,
    title: "Code Blog ",
    description:
      "CodeBlog is a secure Angular blogging platform that empowers developers to create, share, and discover technical articles with role-based authorization, supported by a Node.js/Express backend using JWT authentication and middleware protection, while Angular's modular architecture, lazy loading, and dependency injection ensure high performance and seamless light/dark mode support.",
    author: "Ashar Armoghan",
    image: {
      imgSrc: codeBlog.src,
      width: 800,
      height: 600,
    },
    icons: [
      { name: "Angular", component: BiLogoAngular, color: "#d01001" },
      { name: "Node.js", component: FaNodeJs, color: "#00972b" },
      { name: "MongoDB", component: BiLogoMongodb, color: "#03c047" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "MaterialUI", component: SiMaterialdesign, color: "#d01001" },
      { name: "CSS", component: BiLogoCss3, color: "#227eb5" },
    ],
  },
  {
    id: 2,
    title: "React Sales Dashboard ",
    description:
      "React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection, while React hooks and context ensure efficient state management and enhanced frontend security.",
    author: "Ashar Armoghan",
    image: {
      imgSrc: dashboard.src,
      width: 800,
      height: 600,
    },
    icons: [
      { name: "React", component: BiLogoReact, color: "#40cdeb" },
      { name: "Node.js", component: FaNodeJs, color: "#00972b" },
      { name: "MongoDB", component: BiLogoMongodb, color: "#03c047" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "Css", component: BiLogoCss3, color: "#227eb5" },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Next.js Beautiful Portfolio Website is an SEO-friendly web app built with Next.js and Tailwind CSS, featuring SSR, static generation, dynamic routing, and API routes, with a custom webpack config optimizing SVGs and images and Framer Motion delivering fluid animations.",
    author: "Ashar Armoghan",
    image: {
      imgSrc: portfolio.src,
      width: 800,
      height: 600,
    },
    icons: [
      { name: "NextJs", component: TbBrandNextjs, color: "#43434c" },
      { name: "React", component: BiLogoReact, color: "#40cdeb" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "TailwindCss", component: BiLogoTailwindCss, color: "#30afd3" },
      { name: "Css", component: BiLogoCss3, color: "#227eb5" },
    ],
  },
];
