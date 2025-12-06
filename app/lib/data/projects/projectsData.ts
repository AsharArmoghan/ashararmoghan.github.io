import { ProjectProps } from "@/app/lib/Types/ProjectProps";
// import thumbBlog from "/images/thumb_blog.webp";
import codeBlog1 from "@/public/assets/images/codeblog1.png";
import codeBlog2 from "@/public/assets/images/codeblog2.png";
import dashboard_1 from "@/public/assets/images/dashboard/DashBoard_1.png";
import dashboard_2 from "@/public/assets/images/dashboard/DashBoard_2.png";
import dashboard_3 from "@/public/assets/images/dashboard/DashBoard_3.png";
import dashboard_4 from "@/public/assets/images/dashboard/DashBoard_4.png";
import dashboard_5 from "@/public/assets/images/dashboard/DashBoard_5.png";
import dashboard_6 from "@/public/assets/images/dashboard/DashBoard_6.png";
import dashboard_7 from "@/public/assets/images/dashboard/DashBoard_7.png";
import dashboard_8 from "@/public/assets/images/dashboard/DashBoard_8.png";
import dashboard_9 from "@/public/assets/images/dashboard/DashBoard_9.png";
import dashboard_10 from "@/public/assets/images/dashboard/DashBoard_10.png";
import portfolio from "@/public/assets/images/portfolio/Portfolio1.png";
import portfolio1 from "@/public/assets/images/portfolio/Portfolio2.png";
import portfolio2 from "@/public/assets/images/portfolio/Portfolio3.png";
import portfolio3 from "@/public/assets/images/portfolio/Portfolio4.png";
import portfolio4 from "@/public/assets/images/portfolio/Portfolio5.png";

export const projectData: ProjectProps[] = [
  {
    id: 1,
    title: "Code Blog ",
    slug: "code-blog",
    description:
      "CodeBlog is a secure Angular blogging platform that empowers developers to create, share, and discover technical articles with role-based authorization, supported by a Node.js/Express backend using JWT authentication and middleware protection, while Angular's modular architecture, lazy loading, and dependency injection ensure high performance and seamless light/dark mode support.",
    author: "Ashar Armoghan",
    image: [
      { imgSrc: codeBlog1.src, width: 1440, height: 1000 },
      { imgSrc: codeBlog2.src, width: 1440, height: 1000 },
    ],
    icons: [
      {
        name: "Angular",
        component: "/assets/iconsSvg/angular.svg?url",
        color: "#d01001",
      },
      {
        name: "Node.js",
        component: "/assets/iconsSvg/nodejs.svg?url",
        color: "#00972b",
      },
      {
        name: "MongoDB",
        component: "/assets/iconsSvg/mongodb.svg?url",
        color: "#03c047",
      },
      {
        name: "TypeScript",
        component: "/assets/iconsSvg/typescript.svg?url",
        color: "#226dc2",
      },
      {
        name: "Html",
        component: "/assets/iconsSvg/html.svg?url",
        color: "#d04112",
      },
      {
        name: "MaterialUI",
        component: "/assets/iconsSvg/material-ui.svg?url",
        color: "#226dc2",
      },
      {
        name: "CSS",
        component: "/assets/iconsSvg/css.svg?url",
        color: "#227eb5",
      },
    ],
    projectRequirement: [
      " Develop a secure authentication system (JWT-based).",
      "Create a RESTful API for CRUD operations.",
      "Use Angular for dynamic, component-based frontend.",
      "Implement state management with RxJS and Angular services.",
      "Ensure a scalable folder structure for both frontend and backend.",
      "Use MongoDB (Mongoose) for efficient data management.",
      "Deploy on a cloud platform (Vercel & Render).",
    ],
    approach: [
      " Followed MVC (Model-View-Controller) architecture for backend.",
      "Utilized Angular modules and services for structured UI logic.",
      "Created reusable, lazy-loaded Angular components and routes.",
      " Created a modular component system to ensure reusability.",
      "Used HttpClientModule for API calls with error and loading state handling.",
      " Applied JWT authentication with role-based route guards in Angular.",
      "Managed client-side routing using Angular Router with auth guards.",
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
          " Used AuthService and AuthGuard to protect routes and persist JWT in localStorage.",
          "Used Angular interceptors to globally handle API errors and attach JWT tokens.",
          "Used Angular Flex Layout and custom CSS Grid to achieve adaptive layouts.",
          "Hosted backend API on Render, frontend on Vercel, with CORS configured and environment variables handled properly.",
        ],
      },
    ],

    features: [
      "Authentication & Authorization",
      "Rich Text Editor",
      "Image Uploads",
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
      "Start frontend: `ng Serve`",
    ],
    apiEndpoints: [
      {
        method: "POST",
        route: "/api/auth/register",
        description: "Register a new user",
        authRequired: "False",
      },
      {
        method: "POST",
        route: "/api/auth/login",
        description: "Login user and return JWT",
        authRequired: "False",
      },
      {
        method: "GET",
        route: "/api/users/profile",
        description: "Get logged-in user's profile",
        authRequired: "True",
      },
      {
        method: "PUT",
        route: "/api/users/profile",
        description: "Update logged-in user's profile",
        authRequired: "True",
      },
      {
        method: "GET",
        route: "/api/posts",
        description: "Get all blog posts (paginated)",
        authRequired: "False",
      },
      {
        method: "GET",
        route: "/api/posts/:id",
        description: "Get a single blog post by ID",
        authRequired: "False",
      },
      {
        method: "POST",
        route: "/api/posts",
        description: "Create a new blog post (with image upload)",
        authRequired: "True",
      },
      {
        method: "PUT",
        route: "/api/posts/:id",
        description: "Edit a blog post (title, content, image)",
        authRequired: "True",
        roles: ["owner", "admin"],
      },
      {
        method: "DELETE",
        route: "/api/posts/:id",
        description: "Delete a blog post",
        authRequired: "True",
        roles: ["owner", "admin"],
      },
      {
        method: "POST",
        route: "/api/upload",
        description: "Upload an image (used for post thumbnails)",
        authRequired: "True",
      },
    ],
  },
  {
    id: 2,
    title: "React Sales Dashboard ",
    slug: "react-sales-dashboard",
    description:
      "React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection, while React hooks and context ensure efficient state management and enhanced frontend security.",
    author: "Ashar Armoghan",
    image: [
      {
        imgSrc: dashboard_1.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_2.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_3.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_4.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_5.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_6.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_7.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_8.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_9.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dashboard_10.src,
        width: 1080,
        height: 800,
      },
    ],
    icons: [
      {
        name: "React",
        component: "/assets/iconsSvg/react.svg?url",
        color: "#40cdeb",
      },
      {
        name: "Node.js",
        component: "/assets/iconsSvg/nodejs.svg?url",
        color: "#00972b",
      },
      {
        name: "MongoDB",
        component: "/assets/iconsSvg/mongodb.svg?url",
        color: "#03c047",
      },
      {
        name: "TypeScript",
        component: "/assets/iconsSvg/typescript.svg?url",
        color: "#226dc2",
      },
      {
        name: "Html",
        component: "/assets/iconsSvg/html.svg?url",
        color: "#d04112",
      },
      {
        name: "CSS",
        component: "/assets/iconsSvg/css.svg?url",
        color: "#227eb5",
      },
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
      "Followed MVC (Model-View-Controller) architecture for backend.",
      " Used React hooks (useEffect, useState, useContext) for UI updates.",
      " Created a modular component system to ensure reusability.",
      " Used Axios for API integration with loading & error handling.",
      " Applied JWT authentication for secure user login.",
      " Used React Router for client-side navigation.",
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
    react-sales-dashboard/
├── backend/
│   ├── controllers/      # Business logic (orders, users, auth)
│   ├── models/           # MongoDB schemas (User.js, Order.js)
│   ├── routes/           # Express routes (authRoutes.js, salesRoutes.js)
│   ├── middleware/       # Auth, role checking, error handler
│   ├── config/           # MongoDB connection & env setup
│   └── server.js         # API entry point
├── frontend/
│   ├── src/
│   │   ├── components/   # UI components (Sidebar, Charts, Widgets)
│   │   ├── pages/        # Dashboard, Login, Reports
│   │   ├── context/      # Global state (auth, data)
│   │   ├── utils/        # Axios config, formatters
│   │   └── App.js
│   ├── public/
│   └── package.json
├── .env                  # Environment variables
├── README.md
└── .gitignore
`,
    setupSteps: [
      "Clone the repository: `git clone https://github.com/your-repo.git`",
      "Install backend dependencies: `cd backend && npm install`",
      "Start backend: `npm run dev`",
      "Install frontend dependencies: `cd frontend && npm install`",
      "Start frontend: `npm run dev`",
    ],
    apiEndpoints: [
      {
        method: "POST",
        route: "/api/auth/login",
        description: "User login",
      },
      {
        method: "POST",
        route: "/api/auth/register",
        description: "Register new user",
      },
      {
        method: "POST",
        route: "/api/auth/logout",
        description: "User logout",
        authRequired: "true",
      },
      {
        method: "GET",
        route: "/api/auth/me",
        description: "Get logged-in user info",
        authRequired: "true",
      },
      {
        method: "GET",
        route: "/api/sales/summary",
        description: "Fetch overall sales metrics",
        authRequired: "true",
      },
      {
        method: "GET",
        route: "/api/leaderboard",
        description: "Get top-performing users/sellers",
        authRequired: "true",
      },
      {
        method: "GET",
        route: "/api/orders",
        description: "Get all orders",
        authRequired: "true",
      },
      {
        method: "POST",
        route: "/api/orders",
        description: "Create new order",
        authRequired: "true",
      },
      {
        method: "GET",
        route: "/api/products",
        description: "Get list of products",
        authRequired: "true",
      },
      {
        method: "POST",
        route: "/api/products",
        description: "Add a new product (Admin only)",
        authRequired: "false",
      },
      {
        method: "GET",
        route: "/api/users",
        description: "Admin: View all users",
        authRequired: "false",
      },
      {
        method: "PUT",
        route: "/api/users/:id",
        description: "Admin: Update user info",
        authRequired: "false",
      },
      {
        method: "DELETE",
        route: "/api/users/:id",
        description: "Admin: Delete user",
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    slug: "portfolio",
    description:
      "A personal portfolio built using Next.js 15 (App Router) with Server-Side Rendering (SSR), dynamic routing, and MVC architecture, designed to showcase projects, skills, and experience. It supports SEO optimization, fast navigation, and clean code structure to make a strong impression on recruiters and clients.",
    author: "Ashar Armoghan",
    image: [
      {
        imgSrc: portfolio.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: portfolio1.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: portfolio2.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: portfolio3.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: portfolio4.src,
        width: 1440,
        height: 1000,
      },
    ],
    icons: [
      {
        name: "NextJs",
        component: "/assets/iconsSvg/nextjs.svg?url",
        color: "#43434c",
      },
      {
        name: "React",
        component: "/assets/iconsSvg/react.svg?url",
        color: "#40cdeb",
      },

      {
        name: "Tailwind",
        component: "/assets/iconsSvg/tailwindcss.svg?url",
        color: "#4fb3d0",
      },
      {
        name: "TypeScript",
        component: "/assets/iconsSvg/typescript.svg?url",
        color: "#226dc2",
      },
      {
        name: "Html",
        component: "/assets/iconsSvg/html.svg?url",
        color: "#d04112",
      },
      {
        name: "CSS",
        component: "/assets/iconsSvg/css.svg?url",
        color: "#227eb5",
      },
    ],
    projectRequirement: [
      "Build a fully responsive and accessible personal website.",
      "Use Next.js App Router for routing and layout handling.",
      "Enable Server-Side Rendering for SEO-friendly project and blog pages.",
      "Create dynamic routes for individual projects and blog posts.",
      "Optimize image handling and metadata for SEO.",
      "Deploy on Vercel for instant scalability.",
    ],

    approach: [
      "Next.js 15 App Router for modern layout and nested routing structure.",
      "Dynamic routing using [slug] and generateMetadata() for blog/projects.",
      "Server-side rendering (SSR) using generateStaticParams() and fetch() from server components.",
      "Used Axios for API integration with loading & error handling.",
      "Reusable UI components (Cards, Layout, Hero, etc.) with Tailwind CSS.",
      "Metadata API and robots.txt for SEO optimization.",
      "Folder-based MVC separation for logic, views (components), and models (data functions).",
    ],
    challenges: [
      {
        Challenge: [
          "Managing SSR with dynamic content",
          "Structuring a scalable folder hierarchy",
          "SEO optimization for each dynamic page",
          "Organizing reusable components",
        ],
        Solution: [
          "Used generateStaticParams for pre-rendered paths and fallback loading for new content.",
          "Used domain-based folder separation and MVC-inspired logic separation.",
          "Implemented custom metadata.js in each route and semantic HTML tags.",
          "Created a ui/ and shared/ folder system for atomic component usage.",
        ],
      },
    ],
    features: [
      "Static Site Generation: Optimized for speed and SEO with Next.js's static site generator.",
      "TypeScript: Ensures type safety and robust development.",
      "Responsive Design: Fully optimized for desktop, tablet, and mobile devices.",
      "Dynamic Content: Fetches project and blog data dynamically using Next Remote.",
      "SEO Friendly: Pre-rendered pages with meta tags and Open Graph support.",
      "Dark/Light Mode: User-friendly theme toggle feature.",
      "Performance Optimized: Fast loading times with Next.js and image optimization.",
    ],
    installation: {
      backend: "no backend need",
      frontend: "cd portfolio && npm install & npm run dev",
    },
    structure: `
   portfolio-website/
├── app/                    # App router directory
│   ├── layout.js           # Root layout for shared components
│   ├── page.js             # Home page (SSR)
│   ├── projects/           # Dynamic route: /projects/[slug]
│   │   ├── [slug]/page.js  # Project details rendered using dynamic metadata
│   ├── blog/               # Blog route with dynamic routing
│   │   ├── [slug]/page.js
│   ├── about/page.js       # About me
│   └── contact/page.js     # Contact form page
├── components/             # Reusable UI components (Navbar, Footer, Card, etc.)
├── lib/                    # Model/data logic (fetching markdown, CMS, etc.)
├── styles/                 # Global styles and Tailwind config
├── public/                 # Static assets (images, favicons)
├── .env.local              # Environment variables
├── tailwind.config.js
├── next.config.js
└── README.md

    `,
    setupSteps: [
      "Clone the repository: `git clone https://github.com/your-repo.git`",
      "Install backend dependencies: `cd backend && npm install`",
      "Start backend: `npm run dev`",
      "Install frontend dependencies: `cd frontend && npm install`",
      "Start frontend: `npm run dev`",
    ],
    apiEndpoints: [
      {
        method: "POST",
        route: "/api/auth/login",
        description: "User login",
      },
      {
        method: "POST",
        route: "/api/auth/register",
        description: "Register new user",
      },
      {
        method: "GET",
        route: "/api/home",
        description: "Fetch homepage content with featured sections",
      },
      {
        method: "GET",
        route: "/api/projects",
        description: "Get all portfolio projects",
      },
      {
        method: "GET",
        route: "/api/projects/:id",
        description: "Get project details by ID",
      },
      {
        method: "POST",
        route: "/api/projects",
        description: "Add a new project (Admin only)",
      },
      {
        method: "GET",
        route: "/api/articles",
        description: "Get all articles/blog posts",
      },
      {
        method: "GET",
        route: "/api/articles/:slug",
        description: "Get article by slug",
      },
      {
        method: "POST",
        route: "/api/articles",
        description: "Publish a new article (Admin only)",
      },
      {
        method: "GET",
        route: "/api/about",
        description: "Fetch about page content",
      },
      {
        method: "PUT",
        route: "/api/about",
        description: "Update about page content (Admin only)",
      },
    ],
  },
];
