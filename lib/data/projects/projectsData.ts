import { ProjectProps } from "@/lib/Types/ProjectProps";
// import thumbBlog from "@/public/images/thumb_blog.webp";
import codeBlog1 from "@/public/images/CodeBlog1.png";
import codeBlog2 from "@/public/images/CodeBlog2.png";

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
    image: [
      { imgSrc: codeBlog1.src, width: 800, height: 600 },
      { imgSrc: codeBlog2.src, width: 800, height: 600 },
    ],
    icons: [
      { name: "Angular", component: BiLogoAngular, color: "#d01001" },
      { name: "Node.js", component: FaNodeJs, color: "#00972b" },
      { name: "MongoDB", component: BiLogoMongodb, color: "#03c047" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "MaterialUI", component: SiMaterialdesign, color: "#d01001" },
      { name: "CSS", component: BiLogoCss3, color: "#227eb5" },
    ],
    projectRequirement: [
      " Develop a secure authentication system (JWT-based).",
      "Create a RESTful API for CRUD operations.",
      "Implement state management with Redux/Context API.",
      "Ensure a scalable folder structure for both frontend and backend.",
      "Use MongoDB (Mongoose) for efficient data management.",
      "Deploy on a cloud platform (Vercel & Render).",
    ],
    approach: [
      "🔹 Followed MVC (Model-View-Controller) architecture for backend.",
      "🔹 Used React hooks (useEffect, useState, useContext) for UI updates.",
      "🔹 Created a modular component system to ensure reusability.",
      "🔹 Used Axios for API integration with loading & error handling.",
      "🔹 Applied JWT authentication for secure user login.",
      "🔹 Used React Router for client-side navigation.",
    ],
    challenges: [
      {
        Challenge: [
          "Managing authentication across pages.",
          "Handling asynchronous API requests.",
          "Ensuring responsiveness across devices.",
          "Deploying frontend and backend seamlessly.",
        ],
        Solution: [
          " Used React Context API and local storage to persist user state.",
          "Used Axios interceptors for global request/response handling.",
          "Used Tailwind CSS grid and flexbox for adaptive layouts.",
          " Hosted backend on Render and frontend on Vercel, configured CORS properly.",
        ],
      },
    ],

    features: [
      "Authentication & Authorization",
      "Rich Text Editor",
      "Image Uploads",
      "Category & Tag System",
      "Dashboard Analytics",
      "Dark Mode Support",
    ],
    installation: {
      backend: "cd backend && npm install && npm start",
      frontend: "cd frontend && npm install && ng serve",
    },
    structure: `
    myPost/
├── backend/          # Node.js + Express API
│   ├── controllers/  # Contains functions handling API logic (e.g., user and post actions)
│   ├── models/       # Defines MongoDB schemas and data structures
│   ├── routes/       # Manages Express routes for different API endpoints
│   ├── middleware/   # Includes authentication, authorization, and error handling
│   ├── config/       # Configuration files for database and environment variables
│   └── server.js     # Main entry point to start the Node.js server
├── frontend/         # Angular + TypeScript user interface
│   ├── src/          # Core source code for the Angular application
│   ├── e2e/          # End-to-end test cases for UI functionality
│   ├── angular.json  # Angular project settings and configurations
│   └── package.json  # Manages frontend dependencies
├── docs/             # Documentation and media assets for the project
├── .gitignore        # Lists files and directories to exclude from version control
└── README.md         # Overview, setup instructions, and project details`,
    setupSteps: [
      "Clone the repository: `git clone https://github.com/your-repo.git`",
      "Install backend dependencies: `cd backend && npm install`",
      "Start backend: `npm run dev`",
      "Install frontend dependencies: `cd frontend && npm install`",
      "Start frontend: `npm run dev`",
    ],
    apiEndpoints: [
      { method: "POST", route: "/api/auth/login", description: "User login" },
      {
        method: "POST",
        route: "/api/auth/register",
        description: "User registration",
      },
      {
        method: "GET",
        route: "/api/users",
        description: "Fetch users (Admin only)",
      },
    ],
  },
  {
    id: 2,
    title: "React Sales Dashboard ",
    description:
      "React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection, while React hooks and context ensure efficient state management and enhanced frontend security.",
    author: "Ashar Armoghan",
    image: [
      {
        imgSrc: dashboard.src,
        width: 800,
        height: 600,
      },
    ],
    icons: [
      { name: "React", component: BiLogoReact, color: "#40cdeb" },
      { name: "Node.js", component: FaNodeJs, color: "#00972b" },
      { name: "MongoDB", component: BiLogoMongodb, color: "#03c047" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "Css", component: BiLogoCss3, color: "#227eb5" },
    ],
    projectRequirement: [
      " Develop a secure authentication system (JWT-based).",
      "Create a RESTful API for CRUD operations.",
      "Implement state management with Redux/Context API.",
      "Ensure a scalable folder structure for both frontend and backend.",
      "Use MongoDB (Mongoose) for efficient data management.",
      "Deploy on a cloud platform (Vercel & Render).",
    ],
    approach: [
      "🔹 Followed MVC (Model-View-Controller) architecture for backend.",
      "🔹 Used React hooks (useEffect, useState, useContext) for UI updates.",
      "🔹 Created a modular component system to ensure reusability.",
      "🔹 Used Axios for API integration with loading & error handling.",
      "🔹 Applied JWT authentication for secure user login.",
      "🔹 Used React Router for client-side navigation.",
    ],
    challenges: [
      {
        Challenge: [
          "Managing authentication across pages.",
          "Handling asynchronous API requests.",
          "Ensuring responsiveness across devices.",
          "Deploying frontend and backend seamlessly.",
        ],
        Solution: [
          " Used React Context API and local storage to persist user state.",
          "Used Axios interceptors for global request/response handling.",
          "Used Tailwind CSS grid and flexbox for adaptive layouts.",
          " Hosted backend on Render and frontend on Vercel, configured CORS properly.",
        ],
      },
    ],
    features: [
      "Authentication & Authorization",
      "Rich Text Editor",
      "Image Uploads",
      "Category & Tag System",
      "Dashboard Analytics",
      "Dark Mode Support",
    ],
    installation: {
      backend: "cd backend && npm install && npm start",
      frontend: "cd frontend && npm install && ng serve",
    },
    structure: `
    /project-root
    │── /backend    # Node.js + Express API
    │── /frontend   # React
    │── package.json
    │── README.md
    │── .gitignore
    │── .env`,
    setupSteps: [
      "Clone the repository: `git clone https://github.com/your-repo.git`",
      "Install backend dependencies: `cd backend && npm install`",
      "Start backend: `npm run dev`",
      "Install frontend dependencies: `cd frontend && npm install`",
      "Start frontend: `npm run dev`",
    ],
    apiEndpoints: [
      { method: "POST", route: "/api/auth/login", description: "User login" },
      {
        method: "POST",
        route: "/api/auth/register",
        description: "User registration",
      },
      {
        method: "GET",
        route: "/api/users",
        description: "Fetch users (Admin only)",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Next.js Beautiful Portfolio Website is an SEO-friendly web app built with Next.js and Tailwind CSS, featuring SSR, static generation, dynamic routing, and API routes, with a custom webpack config optimizing SVGs and images and Framer Motion delivering fluid animations.",
    author: "Ashar Armoghan",
    image: [
      {
        imgSrc: portfolio.src,
        width: 800,
        height: 600,
      },
    ],
    icons: [
      { name: "NextJs", component: TbBrandNextjs, color: "#43434c" },
      { name: "React", component: BiLogoReact, color: "#40cdeb" },
      { name: "TypeScript", component: BiLogoTypescript, color: "#226dc2" },
      { name: "Html", component: BiLogoHtml5, color: "#d04112" },
      { name: "Tailwind", component: BiLogoTailwindCss, color: "#30afd3" },
      { name: "Css", component: BiLogoCss3, color: "#227eb5" },
    ],
    projectRequirement: [
      " Develop a secure authentication system (JWT-based).",
      "Create a RESTful API for CRUD operations.",
      "Implement state management with Redux/Context API.",
      "Ensure a scalable folder structure for both frontend and backend.",
      "Use MongoDB (Mongoose) for efficient data management.",
      "Deploy on a cloud platform (Vercel & Render).",
    ],

    approach: [
      "🔹 Followed MVC (Model-View-Controller) architecture for backend.",
      "🔹 Used React hooks (useEffect, useState, useContext) for UI updates.",
      "🔹 Created a modular component system to ensure reusability.",
      "🔹 Used Axios for API integration with loading & error handling.",
      "🔹 Applied JWT authentication for secure user login.",
      "🔹 Used React Router for client-side navigation.",
    ],
    challenges: [
      {
        Challenge: [
          "Managing authentication across pages.",
          "Handling asynchronous API requests.",
          "Ensuring responsiveness across devices.",
          "Deploying frontend and backend seamlessly.",
        ],
        Solution: [
          " Used React Context API and local storage to persist user state.",
          "Used Axios interceptors for global request/response handling.",
          "Used Tailwind CSS grid and flexbox for adaptive layouts.",
          " Hosted backend on Render and frontend on Vercel, configured CORS properly.",
        ],
      },
    ],
    features: [
      "Static Site Generation: Optimized for speed and SEO with Next.js's static site generator.",
      " TypeScript: Ensures type safety and robust development.",
      " Responsive Design: Fully optimized for desktop, tablet, and mobile devices.",
      " Dynamic Content: Fetches project and blog data dynamically using Next Remote.",
      " SEO Friendly: Pre-rendered pages with meta tags and Open Graph support.",
      " Dark/Light Mode: User-friendly theme toggle feature.",
      " Performance Optimized: Fast loading times with Next.js and image optimization.",
    ],
    installation: {
      backend: "",
      frontend: "cd portfolio && npm install & npm run dev",
    },
    structure: `
    portfolio-website/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages (routes)
│   ├── styles/         # Global and component-specific styles
│   ├── utils/          # Helper functions and utilities
│   ├── data/           # Static/dynamic content data
│   ├── types/          # TypeScript type definitions
│   └── config/         # Configuration files
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation`,
    setupSteps: [
      "Clone the repository: `git clone https://github.com/your-repo.git`",
      "Install backend dependencies: `cd backend && npm install`",
      "Start backend: `npm run dev`",
      "Install frontend dependencies: `cd frontend && npm install`",
      "Start frontend: `npm run dev`",
    ],
    apiEndpoints: [],
  },
];
