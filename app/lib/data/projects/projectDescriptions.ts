import codeBlog1 from "@/public/assets/images/codeblog1.png";
import dImage1 from "@/public/assets/images/dashboard/dImage1.png";
import dImage2 from "@/public/assets/images/dashboard/dImage2.png";
import dImage3 from "@/public/assets/images/dashboard/dImage3.png";
import dImage4 from "@/public/assets/images/dashboard/dImage4.png";
import dImage5 from "@/public/assets/images/dashboard/dImage5.png";
import dImage6 from "@/public/assets/images/dashboard/dImage6.png";
import portfolio from "@/public/assets/images/portfolio/Portfolio1.png";
import portfolio1 from "@/public/assets/images/portfolio/Portfolio2.png";
import portfolio2 from "@/public/assets/images/portfolio/Portfolio3.png";
import portfolio3 from "@/public/assets/images/portfolio/Portfolio4.png";
import portfolio4 from "@/public/assets/images/portfolio/Portfolio5.png";

export const projectsDescriptions = {
  1: {
    id: 1,
    title: "Code Blog",
    slug: "code-blog",
    image: [{ imgSrc: codeBlog1.src, width: 1440, height: 1000 }],
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
    overview:
      "A secure, full-stack blogging platform built with Angular and Node.js. Features strict role-based authentication, allowing developers to publish and manage technical content professionally.",

    introduction: `Code Blog was built to address the lack of developer-focused features in existing platforms. The goal was to create a polished, professional space where junior developers can showcase expertise and build an audience, while demonstrating production-ready full-stack capabilities.`,

    purposeAndGoal: `Designed to fill the gap for code-centric sharing platforms. Starting from user flow sketches (Auth → Write → Publish), the project prioritized a robust schema and API design. Angular was chosen for its strong dependency injection, while Node.js provided a scalable, lightweight backend.`,

    spotlight: {
      title: "Authentication & Security Architecture",
      sections: {
        overview:
          "The authentication system is the project's technical highlight, demonstrating enterprise-grade security practices.",
        challenge: {
          title: "The Challenge",
          description:
            "Securing a single-page app (SPA) involves complex hurdles:",
          points: [
            {
              name: "Persistence",
              description:
                "Maintaining login state without insecure `localStorage`.",
            },
            {
              name: "Protection",
              description: "Guarding admin routes from unauthorized users.",
            },
            {
              name: "DRY",
              description:
                "Attaching tokens to requests without code duplication.",
            },
            {
              name: "Renewal",
              description: "Handling token expiration seamlessly.",
            },
          ],
        },
        solution: {
          title: "The Solution",
          description: "A three-tier security architecture:",
          backend: {
            title: "Backend (Node/Express)",
            points: [
              {
                label: "Dedicated AuthController",
                description:
                  "Built with bcrypt password hashing for secure credential storage.",
              },
              {
                label: "JWT & Middleware",
                description:
                  "Implemented JWT signing and role-based middleware to validate every request.",
              },
            ],
          },
          frontend: {
            title: "Frontend (Angular)",
            points: [
              {
                label: "Central AuthService",
                description:
                  "Manages the entire authentication lifecycle from login to logout.",
              },
              {
                label: "HTTP Interceptor",
                description:
                  "Auto-attaches tokens to outgoing requests for transparent authentication.",
              },
              {
                label: "AuthGuard",
                description:
                  "Protects sensitive routes from unauthorized access.",
              },
              {
                label: "BehaviorSubject",
                description:
                  "Provides reactive, app-wide auth state updates for real-time UI sync.",
              },
            ],
          },
        },
        keyTakeaway:
          "The use of Angular Interceptors ensures clean, maintainable code by centralizing security logic.",
      },
    },

    currentStatus: `Deployed on Vercel (Front) and Render (Back). Actively used by a network of developer peers. Continuous updates focus on performance optimization and handling edge cases discovered through real-world usage.`,

    technicalLessons: [
      "Auth is Complex: Learned deep lessons in token storage, expiration, and revocation—knowledge transferable to any backend.",
      "Reactive Programming: Mastered RxJS `BehaviorSubject` for state management, avoiding memory leaks with proper subscription handling.",
      "Modular Architecture: Saw firsthand how Angular's component-based design simplifies testing and maintenance.",
      "Database Modeling: Gained proficiency in Mongoose schemas, relationships, and indexing for query performance.",
    ],

    nonTechnicalLessons: [
      "Deployment Realities: Moving to production revealed hidden complexities in CORS, environment variables, and CI/CD pipelines.",
      "User-Centricity: Small UI details like loading states and error messages define the perceived quality of the app.",
      "Feedback is Gold: Real usage uncovered bugs and feature needs that hypothetical planning missed.",
    ],

    impact: `Established a reusable authentication pattern used in all subsequent projects, drastically reducing setup time. The project proved the ability to ship a full-stack feature set from concept to deployed product.`,
    liveUrl: "https://code-blog-demo.vercel.app",
  },

  2: {
    id: 2,
    title: "React Sales Dashboard",
    slug: "react-sales-dashboard",
    image: [
      {
        imgSrc: dImage1.src,
        width: 1440,
        height: 1000,
      },
      {
        imgSrc: dImage2.src,
        width: 1440,
        height: 1000,
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
    overview:
      "A comprehensive analytics platform for sales teams. Tracks performance metrics, visualizes trends, and enables data-driven decisions through real-time summaries and interactive charts.",

    introduction: `Built to replace gut-feeling decisions with data. The goal: empower teams with clear visibility into performance metrics and meaningful visualizations, while demonstrating complex React state management at scale.`,

    purposeAndGoal: `modeled after leaders like Stripe and Shopify. The focus was efficient data serving using API aggregation rather than client-side computation and using React Context for clean, maintainable state management without Redux bloat.`,

    spotlight: {
      title: "State Management & Data Visualization",
      sections: {
        overview:
          "The core technical achievement is handling complex state and transforming raw data into performant visualizations.",
        challenge: {
          title: "The Challenge",
          description:
            "Managing sales data implies three critical requirements:",
          points: [
            {
              name: "Efficiency",
              description: "Avoiding redundant API calls across views.",
            },
            {
              name: "Real-time",
              description: "Updating charts instantly on new orders.",
            },
            {
              name: "Filtering",
              description:
                "Handling date/region filters without prop drilling.",
            },
          ],
        },
        solution: {
          title: "The Solution",
          description: "A Context-based architecture :",
          backend: {
            title: "Backend (Smart Aggregation)",
            points: [
              {
                label: "Pre-aggregated Endpoints",
                description:
                  "Created endpoints like /api/sales/summary returning pre-aggregated data.",
              },
              {
                label: "Server-Side Logic",
                description:
                  "Moved heavy filtering logic to the server side (MongoDB indexing).",
              },
            ],
          },
          frontend: {
            title: "Frontend (Context & Hooks)",
            points: [
              {
                label: "SalesContext",
                description:
                  " Built to hold global state (data, filters, loading).",
              },
              {
                label: "Custom Hooks",
                description:
                  " Designed custom hooks (useSalesData) to encapsulate fetching logic.",
              },
              {
                label: "Performance Optimization",
                description:
                  " Used useMemo and useEffect to optimize re-renders and auto-refresh data on filter changes.",
              },
            ],
          },
        },
        keyTakeaway:
          "A UI that feels instant, with proper loading states (skeletons) preventing any visual glitching.",
      },
    },

    currentStatus: `Deployed and functional with real-world data handling. The architecture is business-ready, with visualizations continuously refined based on "stakeholder" (simulated business requirements) feedback.`,

    technicalLessons: [
      "Architecture over Tools: State management is about data flow design, not just picking Redux vs Context.",
      "Performance: Learned `React.memo` and composition strategies to prevent unnecessary re-renders in complex dashboards.",
      "Frontend-Focused API: Learned to build endpoints that serve the UI's exact needs, reducing client-side processing.",
      "Accessibility: Discovered the complexity of making data viz accessible via ARIA labels.",
    ],

    nonTechnicalLessons: [
      "Responsive First: Fixing desktop-only designs for mobile taught the non-negotiable value of mobile-first thinking.",
      "Focus vs Creep: Learned to prioritize high-impact features over 'nice-to-haves' like PDF export.",
    ],

    impact: `Influenced all future React work: confident state persistence, cleaner API communication, and a new appreciation for the precision required in building analytical tools.`,
    liveUrl: "https://react-sales-frontend.vercel.app/",
  },

  3: {
    id: 3,
    title: "Portfolio",
    slug: "portfolio",
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
    overview:
      "A modern, SSR-enabled portfolio built with Next.js 15 App Router. Demonstrates SEO optimization, dynamic routing, and high-performance web architecture.",

    introduction: `More than a showcase—it's a technical demonstration of Next.js mastery. Built to impress technical evaluators with fast navigation, perfect SEO scores, and clean MVC-like architecture.`,

    purposeAndGoal:
      `Designed for performance and scalability. leveraged Next.js App Router for dynamic ` +
      "project/[slug]" +
      ` routes, automated metadata generation, and React Server Components to minimize client-side javascript.`,

    spotlight: {
      title: "SSR & Dynamic Architecture",
      sections: {
        overview:
          "Technically sophisticated Server-Side Rendering (SSR) meets dynamic routing for perfect SEO and performance.",
        challenge: {
          title: "The Challenge",
          points: [
            {
              name: "Scalability",
              description: "Adding projects without full rebuilds.",
            },
            {
              name: "SEO",
              description: "Unique metadata for every dynamic route.",
            },
            {
              name: "Performance",
              description: "Balancing server rendering with fast navigation.",
            },
          ],
        },
        solution: {
          title: "The Solution",
          description: "A robust file-based routing system:",
          appStructure: {
            title: "App Structure",
            points: [
              {
                label: "Dynamic Detail Views",
                description:
                  "`app/projects/[slug]/page.tsx`: Routes for each project.",
              },
              {
                label: "Auto-generated SEO",
                description:
                  "`metadata.tsx`: Generates SEO tags (OG images, JSON-LD) for each project.",
              },
            ],
          },
          performanceStrategy: {
            title: "Performance Strategy",
            points: [
              {
                label: "Static Pre-rendering",
                description:
                  "`generateStaticParams()`: Pre-renders top routes at build time (ISR).",
              },
              {
                label: "Server Components",
                description: "Delivers pure HTML, zero JS bundle for content.",
              },
              {
                label: "Graceful Fallback",
                description:
                  "Handles new projects gracefully without redeploy.",
              },
            ],
          },
        },
        keyTakeaway:
          "A site that scores 100 on Lighthouse for SEO and Performance.",
      },
    },

    currentStatus: `Live, actively maintained, and evolving. Serves as both a marketing tool and a testing ground for new Next.js features.`,

    technicalLessons: [
      "SSR vs CSR: Deepened knowledge of when to render on server (content) vs client (interactivity).",
      "Next.js Internals: Mastered dynamic routing, ISR, and middleware.",
      'Real SEO: Learned that semantic HTML and meta tags matter more than "magic" optimizations.',
      "TypeScript ROI: Type safety drastically reduced bugs during refactors.",
    ],

    nonTechnicalLessons: [
      "Iterative Design: A portfolio is never 'done'; it evolves with your skills.",
      "Design = Credibility: A polished UI implies polished code to non-technical viewers.",
    ],

    impact: `Set the template for all my future web projects: think SEO/Performance first, use TypeScript, and maintain strict MVC-like separation in folder structures.`,
    liveUrl: "https://ashar-dev.vercel.app",
  },
};

export const detailedProjectDescriptions = {
  "code-blog": {
    title: "Code Blog - Full-Stack Blogging Platform",
    sections: {
      introduction: `Code Blog is a secure, full-stack blogging platform designed for developers to create, share, and discover technical articles. Built with Angular on the frontend and Node.js/Express on the backend, the platform empowers users to publish content while maintaining strict role-based authorization and authentication.


      Whether you're a junior developer wanting to share your learning journey or an experienced engineer documenting technical insights, Code Blog provides an intuitive interface backed by enterprise-grade security practices.


      Core Features:
      - Secure user authentication and role-based authorization
      - Rich text editor for composing technical articles with syntax highlighting
      - Image upload functionality for article thumbnails and embedded media
      - Dark/Light mode support for comfortable reading
      - User profile management and article management dashboard
      - RESTful API with comprehensive CRUD operations
      - JWT-based token authentication with persistent sessions`,

      approach: {
        overview:
          "The architecture followed MVC (Model-View-Controller) pattern:",
        points: [
          {
            label: "Backend",
            description:
              "Node.js with Express for API, MongoDB with Mongoose for data",
          },
          {
            label: "Frontend",
            description:
              "Angular with modular component structure and service-based architecture",
          },
          {
            label: "Authentication",
            description: "JWT tokens with Angular guards and interceptors",
          },
          {
            label: "State Management",
            description: "RxJS for reactive data flow",
          },
          {
            label: "Deployment",
            description: "Vercel for frontend, Render for backend",
          },
        ],
        conclusion:
          "Design decisions prioritized security, scalability, and user experience. Lazy loading was implemented for performance, and responsive design ensured mobile compatibility.",
      },

      challenges: [
        {
          challenge:
            "Managing authentication state across multiple pages and preventing token expiration issues",
          solution:
            "Implemented AuthService with refresh token logic and localStorage persistence with expiration checks",
        },
        {
          challenge:
            "Handling asynchronous API requests and managing loading/error states",
          solution:
            "Used Angular interceptors to globally handle errors and attach JWT tokens, implemented proper loading state management",
        },
        {
          challenge:
            "Ensuring responsiveness across devices from mobile to desktop",
          solution:
            "Applied Angular Flex Layout and custom CSS Grid for adaptive layouts with extensive device testing",
        },
        {
          challenge:
            "Deploying frontend and backend seamlessly with CORS and environment variables",
          solution:
            "Configured CORS properly, used environment variables for API endpoints, set up CI/CD pipelines",
        },
      ],

      technologies: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "Material UI",
        "JWT",
        "RxJS",
      ],

      apiEndpoints: [
        {
          method: "POST",
          route: "/api/auth/register",
          description: "Register a new user",
        },
        {
          method: "POST",
          route: "/api/auth/login",
          description: "Login user and return JWT",
        },
        {
          method: "GET",
          route: "/api/users/profile",
          description: "Get logged-in user's profile",
          authRequired: true,
        },
        {
          method: "PUT",
          route: "/api/users/profile",
          description: "Update logged-in user's profile",
          authRequired: true,
        },
        {
          method: "GET",
          route: "/api/posts",
          description: "Get all blog posts (paginated)",
        },
        {
          method: "GET",
          route: "/api/posts/:id",
          description: "Get a single blog post by ID",
        },
        {
          method: "POST",
          route: "/api/posts",
          description: "Create a new blog post",
          authRequired: true,
        },
        {
          method: "PUT",
          route: "/api/posts/:id",
          description: "Edit a blog post",
          authRequired: true,
        },
        {
          method: "DELETE",
          route: "/api/posts/:id",
          description: "Delete a blog post",
          authRequired: true,
        },
        {
          method: "POST",
          route: "/api/upload",
          description: "Upload an image",
          authRequired: true,
        },
      ],

      installation:
        "cd backend && npm install && npm start; cd frontend && npm install && ng serve",
    },
  },

  "react-sales-dashboard": {
    title: "React Sales Dashboard - Analytics Platform",
    sections: {
      introduction:
        "React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection. The dashboard transforms raw sales data into actionable insights through intuitive visualizations and responsive design, enabling better decision-making at all levels of the organization.",
      features: [
        "Real-time sales summary with key metrics",
        "Interactive charts and data visualizations",
        "Top performers leaderboard",
        "Complete order management system",
        "Product inventory management",
        "Admin panel for user management",
        "Responsive design for all devices",
      ],

      approach: {
        overview:
          "Built with React hooks and Context API for state management.",
        points: [
          {
            label: "Frontend",
            description:
              "React with custom hooks and Context API for global state",
          },
          {
            label: "Backend",
            description:
              "Express with aggregation endpoints for pre-computed metrics",
          },
          {
            label: "Visualizations",
            description: "Chart libraries with custom styling",
          },
          {
            label: "Performance",
            description: "Memoization and smart re-render prevention",
          },
          {
            label: "Database",
            description: "MongoDB with indexed queries for fast aggregation",
          },
        ],
        conclusion:
          "Focused on smart API design where aggregation happens server-side, not client-side.",
      },

      challenges: [
        {
          challenge:
            "Managing complex state without Redux while preventing prop drilling",
          solution:
            "Implemented Context API with custom hooks (useSalesData, useOrderFilters) for clean component APIs",
        },
        {
          challenge:
            "Avoiding redundant API calls when data is needed in multiple places",
          solution:
            "Designed pre-aggregated API endpoints that return exactly what UI needs",
        },
        {
          challenge:
            "Handling large datasets efficiently without performance degradation",
          solution:
            "Implemented server-side filtering and pagination, used React.useMemo for expensive calculations",
        },
        {
          challenge:
            "Making complex data visualizations accessible to screen readers",
          solution:
            "Added ARIA labels, alternative text, and keyboard navigation to all charts",
        },
      ],

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "Axios",
        "Tailwind CSS",
        "Chart Libraries",
      ],

      apiEndpoints: [
        { method: "POST", route: "/api/auth/login", description: "User login" },
        {
          method: "POST",
          route: "/api/auth/register",
          description: "Register new user",
        },
        {
          method: "GET",
          route: "/api/sales/summary",
          description: "Fetch overall sales metrics",
          authRequired: true,
        },
        {
          method: "GET",
          route: "/api/leaderboard",
          description: "Get top-performing users",
          authRequired: true,
        },
        {
          method: "GET",
          route: "/api/orders",
          description: "Get all orders",
          authRequired: true,
        },
        {
          method: "POST",
          route: "/api/orders",
          description: "Create new order",
          authRequired: true,
        },
        {
          method: "GET",
          route: "/api/products",
          description: "Get list of products",
          authRequired: true,
        },
        {
          method: "GET",
          route: "/api/users",
          description: "Admin: View all users",
        },
      ],

      installation:
        "cd backend && npm install && npm start; cd frontend && npm install && npm run dev",
    },
  },

  portfolio: {
    title: "Next.js Portfolio - Modern Web Developer Showcase",
    sections: {
      introduction: `A personal portfolio built using Next.js 15 (App Router) with Server-Side Rendering (SSR), dynamic routing, and MVC architecture, designed to showcase projects, skills, and experience.


      The portfolio demonstrates the ability to build SEO-optimized, high-performance web applications with modern best practices, serving both as a marketing tool to land interviews and a technical showcase of development abilities.


      Core Features:
      - Server-side rendered homepage with optimized performance
      - Dynamic project pages with individual metadata and SEO
      - Blog section with dynamic routing
      - Responsive design for all devices
      - Dark/Light mode toggle with persistence
      - Semantic HTML and accessibility best practices
      - Image optimization and lazy loading
      - Fast navigation with Next.js client-side routing`,

      approach: {
        overview: "Implemented using modern Next.js 15 patterns:",
        points: [
          {
            label: "Server Components",
            description: "For data fetching and rendering",
          },
          {
            label: "Dynamic routes",
            description: "With [slug] for infinite scalability",
          },
          {
            label: "Pre-rendering",
            description: "generateStaticParams() for pre-rendering key routes",
          },
          {
            label: "SEO",
            description: "generateMetadata() for per-page SEO optimization",
          },
          {
            label: "Images",
            description: "Image optimization with next/image",
          },
          {
            label: "Styling",
            description: "CSS with Tailwind for maintainability",
          },
          {
            label: "Type Safety",
            description: "TypeScript for type safety throughout",
          },
        ],
        conclusion:
          "Separated concerns using MVC-inspired architecture with lib/ for models (data), components/ for views, and pages/ for controllers.",
      },

      challenges: [
        {
          challenge:
            "Managing SSR with dynamic content while keeping pages fast",
          solution:
            "Used generateStaticParams for pre-rendering and fallback rendering for new content",
        },
        {
          challenge:
            "Structuring a scalable folder hierarchy for growing portfolio",
          solution:
            "Implemented domain-based folder separation and MVC-inspired logic separation",
        },
        {
          challenge: "Ensuring each dynamic page has unique SEO metadata",
          solution:
            "Created custom metadata.js in each route with generateMetadata() function",
        },
        {
          challenge:
            "Organizing reusable components without creating maintenance burden",
          solution:
            "Created ui/ folder for atomic components and shared/ folder for layout components",
        },
      ],

      technologies: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Server Components",
        "App Router",
      ],

      apiEndpoints: [
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
          method: "GET",
          route: "/api/articles",
          description: "Get all articles/blog posts",
        },
        {
          method: "GET",
          route: "/api/articles/:slug",
          description: "Get article by slug",
        },
      ],

      installation: "cd portfolio && npm install && npm run dev",
    },
  },
};

export const projectSummary = {
  intro: `These three projects represent the breadth of capabilities as a full-stack developer:`,

  projects: [
    {
      name: "Code Blog",
      summary:
        "Demonstrates full-stack development, authentication, and security best practices with real-world users actively engaging with the platform.",
      keySkills: [
        "Authentication",
        "Authorization",
        "Full-Stack Development",
        "Security",
        "JWT",
        "MongoDB",
        "Angular",
        "Express",
      ],
    },
    {
      name: "React Sales Dashboard",
      summary:
        "Showcases advanced state management, data visualization, and API design patterns that reveal how complex UIs can be built with elegant, maintainable code.",
      keySkills: [
        "State Management",
        "React Hooks",
        "Context API",
        "Data Visualization",
        "API Design",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      name: "Portfolio",
      summary:
        "Proves understanding of modern web practices—from server-side rendering and SEO to performance optimization and accessible design.",
      keySkills: [
        "Next.js",
        "SSR",
        "SEO",
        "Performance",
        "TypeScript",
        "Responsive Design",
        "Accessibility",
        "Modern Web Standards",
      ],
    },
  ],

  conclusion: `Together, these three projects tell the story of a developer who can take projects from concept to production, handle both frontend and backend challenges, and continuously learn and improve. This is exactly what employers are looking for.`,
};
