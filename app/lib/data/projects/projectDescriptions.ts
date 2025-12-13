export const projectsDescriptions = {
  1: {
    id: 1,
    title: "Code Blog",
    overview:
      "Code Blog is a secure, full-stack blogging platform designed for developers to create, share, and discover technical articles. Built with Angular on the frontend and Node.js/Express on the backend, the platform empowers users to publish content while maintaining strict role-based authorization and authentication.",

    introduction: `Code Blog emerged from a clear need: many developers spend countless hours learning and want to share their knowledge, but existing blogging platforms often lack features tailored to technical writing. The goal was to create a professional, polished platform that would:

    • Lower the barrier to entry for junior developers to publish technical content
    • Provide a platform where developers can build an audience and showcase expertise
    • Demonstrate the ability to build a complete, production-ready full-stack application
    • Master the fundamentals of authentication, authorization, and API design

    The vision was clear: a platform that felt professional and polished, something that would make bloggers proud to share their work. The experience needed to be intuitive for both readers discovering articles and writers crafting content.`,

    purposeAndGoal: `Code Blog emerged from observing a real gap in the market. Technical writers need platforms designed specifically for code sharing, with features like syntax highlighting, proper formatting, and easy image management. Starting with user flow sketches (registration → writing → publishing → discovery), the project mapped out the database schema, API endpoints, and UI components carefully.

    The choice of Angular for the frontend provided powerful features like dependency injection and built-in HTTP client capabilities. Node.js/Express was selected for the backend as a lightweight, JavaScript-based solution that would be easy to maintain and scale.`,

    spotlight: {
      title: "Authentication & Security Architecture",
      description: `The most technically impressive aspect of Code Blog is the authentication and authorization system. This wasn't trivial to implement, and it showcases deep understanding of security best practices—something that matters greatly to employers.

      The Challenge:
      Implementing JWT-based authentication across a single-page application presented several hurdles:

      1. Token Persistence: How do you maintain login state across page refreshes without storing tokens insecurely in localStorage?
      2. Protected Routes: How do you prevent unauthorized users from accessing admin-only routes?
      3. API Request Interception: How do you automatically attach JWT tokens to every API request without duplicating code?
      4. Token Refresh: How do you handle token expiration gracefully?

      The Solution:
      A three-layer authentication system was implemented:

      Backend Layer (Node.js/Express):
      • Created a dedicated AuthController handling registration and login endpoints
      • Implemented password hashing using bcrypt (never storing plain-text passwords)
      • Generated JWT tokens on successful login, signed with a secret key
      • Built authentication middleware that validates incoming tokens on protected routes
      • Set up role-based authorization middleware checking user permissions before executing route handlers

      This means that when a user logs in, the server validates credentials, generates a secure token, and returns it. All subsequent requests must include this token in the Authorization header. The middleware automatically rejects any requests without a valid token.

      Frontend Layer (Angular):
      • Built an AuthService that manages the entire authentication lifecycle
      • Created an AuthGuard that prevents access to protected routes
      • Implemented an HTTP Interceptor that automatically attaches the JWT to all outgoing requests
      • Stored the token in localStorage (with consideration of security tradeoffs)
      • Created a BehaviorSubject for reactive updates to authentication state across components

      What makes this impressive is the use of Angular's interceptor pattern—a single place to handle authentication logic means JWT attachment code isn't duplicated in every component that makes API calls.`,
    },

    currentStatus: `Code Blog is deployed on Vercel (frontend) and Render (backend) and has been actively maintained. While it started as a portfolio project, continuous refinement has been based on learnings and feedback. The platform processes articles from developers in the learning network, with some users consistently publishing monthly technical deep-dives. Real-world usage has taught invaluable lessons about handling edge cases, managing performance under load, and iterating based on user feedback.`,

    technicalLessons: [
      "Authentication is Complex: Building secure authentication taught why this is so often delegated to third-party services. Deep appreciation developed for token generation, storage, refresh, expiration, revocation concerns. This knowledge transfers to any backend system.",
      "RxJS and Reactive Patterns: Managing authentication state with BehaviorSubjects and Observables deepened understanding of reactive programming. Learned when to subscribe, how to avoid memory leaks with async pipes, and how to chain operations.",
      "API Design Matters: Building the backend API taught the value of consistent endpoint naming, proper HTTP status codes, and detailed error messages.",
      "Component Composition: Building reusable components showed the power of Angular's modular architecture. Components that do one thing well are far easier to maintain and test.",
      "Database Design: Setting up MongoDB schemas with Mongoose taught about relationships, indexing, and query performance.",
    ],

    nonTechnicalLessons: [
      "Shipping is Hard: Taking a project from local development to production taught about environment variables, CORS configuration, database migrations, and deployment pipelines.",
      "User Experience Matters: Small details like loading states, error messages, and disabled buttons during submission affect how users perceive the application.",
      "Feedback Loops are Valuable: Getting feedback from people actually using the application revealed bugs and feature requests that would never have been thought of alone.",
    ],

    impact: `This project established the ability to take a feature from concept to production. In subsequent projects, the authentication patterns developed here were reused, speeding up development time and reducing the surface area for security bugs. The lessons about component design directly influenced how React projects were structured, and the API design principles continue to guide backend work.`,
  },

  2: {
    id: 2,
    title: "React Sales Dashboard",
    overview:
      "React Sales Dashboard is a comprehensive analytics and reporting platform designed for sales teams to track performance metrics, visualize trends, and make data-driven decisions. The dashboard provides real-time sales summaries, interactive charts, top-performer leaderboards, and detailed order management.",

    introduction: `React Sales Dashboard was born from observing real problems in sales teams: decisions are often made on gut feeling or incomplete information rather than data. The goal was to build something that would:

    • Empower sales teams with visibility into their performance metrics
    • Provide meaningful visualizations that reveal trends and patterns
    • Demonstrate the ability to handle complex state management in React
    • Show that complex applications can be built at scale with real data
    • Master React hooks, context API, and data visualization techniques

    The vision was clear: a dashboard that makes sales data accessible and understandable at a glance, while also allowing deep-dives into individual metrics.`,

    purposeAndGoal: `The React Sales Dashboard started with studying existing dashboards (Shopify, Stripe, Google Analytics) to understand what makes an effective interface. The layout was sketched: sidebar navigation, header with summary cards, and main content area with various chart types.

    The API was designed to efficiently serve aggregated data rather than asking the frontend to compute everything. React hooks were chosen for their simplicity and Context API for state management, avoiding Redux complexity while keeping the codebase maintainable.`,

    spotlight: {
      title: "State Management & Data Visualization",
      description: `The most technically impressive aspect of this dashboard is how complex application state was managed and raw data was transformed into compelling visualizations—a skill that separates junior from mid-level frontend developers.

      The Challenge:
      Managing sales data across multiple pages presented several problems:

      1. Avoiding Redundant API Calls: The dashboard needed to display related metrics across multiple views without fetching the same data repeatedly
      2. Real-time Updates: When a new order is placed, summary cards and charts should update without a full page refresh
      3. Performance: With potentially thousands of orders, aggregation and filtering needed to be efficient
      4. Filter State: Users wanted to filter by date range, sales person, region—managing all these filters without prop drilling

      The Solution:
      A sophisticated state management system was built using React Context:

      Backend Layer (Smart Aggregation):
      • Created dedicated endpoints like /api/sales/summary that return pre-aggregated data
      • Implemented filtering logic in the API for "orders from this month, this region"
      • Built middleware to ensure users only see data they're authorized to view
      • Set up efficient MongoDB queries with proper indexing on date and sales-person fields

      Frontend Layer (React Context & Hooks):
      • Created a SalesContext that holds the dashboard state (sales data, filters, loading state)
      • Built custom hooks like useSalesData() and useOrderFilters() that encapsulate logic
      • Implemented useEffect hooks that automatically fetch fresh data when filters change
      • Used React.useMemo to prevent expensive calculations from running on every render
      • Set up Axios interceptors for consistent error handling and loading state

      What's impressive is correct handling of loading states—showing skeletons or spinners while data is fetching, so users never see a glitchy UI.

      Data Visualization:
      The right visualizations were chosen for each data type:
      • Line charts for trends over time (revenue progression)
      • Bar charts for comparing quantities (orders by region)
      • Pie charts for showing composition (revenue distribution by category)`,
    },

    currentStatus: `The React Sales Dashboard has been deployed and represents a working system that handles real data. While it's primarily a portfolio project, the architecture is robust enough to be adapted for actual business use. Visualizations have been continuously refined based on what questions stakeholders asked most frequently.`,

    technicalLessons: [
      "State Management is About Architecture: The key to managing state isn't the tool—it's thinking carefully about where state lives and how it flows.",
      "Performance Optimization: Putting all state in context can cause unnecessary re-renders if not structured carefully. Learned about component composition strategies and React.memo().",
      "API Design for the Frontend: Building the backend API taught to think like a frontend developer. Create endpoints that return exactly what the UI needs.",
      "Data Visualization is Hard: Getting charts to look good and communicate clearly required iteration. Learned about chart libraries and how to customize them.",
      "Accessibility: Building a dashboard usable by people with visual impairments was more complex than expected. Learned to get creative with ARIA labels.",
    ],

    nonTechnicalLessons: [
      "Design Feedback is Essential: Talking to actual potential users reveals what actually matters. Built features that looked cool but turned out to be rarely used.",
      "Responsiveness is Non-Negotiable: Initial versions looked great on desktop but fell apart on mobile. Learned to design mobile-first.",
      "Complexity Creep: Wanted to build everything—custom charts, advanced filtering, export to PDF. Learned the value of focus on most impactful features.",
    ],

    impact: `The state management patterns developed here influenced every React project that followed. Became confident in building complex applications without framework overkill. The API design thinking made communication with backend developers better. The visualization work sparked interest in data and helped appreciate the challenges in building analytical tools.`,
  },

  3: {
    id: 3,
    title: "Portfolio",
    overview:
      "This Portfolio is a modern, personal portfolio website built with Next.js 15 using the latest App Router architecture, Server-Side Rendering (SSR), and dynamic routing. It demonstrates the ability to build SEO-optimized, high-performance web applications.",

    introduction: `This Portfolio serves a dual purpose: it's both a tool to get hired and a testament to technical capabilities. The goal was to build something that would:

    • Create a strong first impression with potential employers
    • Demonstrate mastery of modern Next.js patterns and best practices
    • Achieve high search engine rankings for key terms (SEO)
    • Showcase projects in the most compelling way possible
    • Provide fast, smooth navigation and excellent user experience
    • Prove understanding of performance optimization

    Unlike hiring managers who might spend 30 seconds glancing at a portfolio, technical evaluators will inspect the code. The goal was to build something to be proud of having others review.`,

    purposeAndGoal: `Research on best practices for developer portfolios was done, studying Next.js documentation and portfolios of developers to admire. A folder structure was decided that separates concerns: API routes, reusable components, layout components, and data-fetching logic.

    The plan was to use Next.js's powerful features like dynamic routes with [slug], generateMetadata() for per-page SEO, and Server Components for performance.`,

    spotlight: {
      title: "Server-Side Rendering & Dynamic Routing for SEO",
      description: `The most technically sophisticated aspect of this portfolio is the implementation of Server-Side Rendering with dynamic routes and comprehensive SEO optimization—demonstrating understanding of the needs of both users (fast pages, good UX) and search engines (proper metadata, semantic HTML).

      The Challenge:
      Creating a portfolio with multiple project pages presented several problems:

      1. Scalability: Ability to add new projects without rebuilding the entire site
      2. SEO: Each project page needs unique metadata (title, description, Open Graph images)
      3. Performance: Server rendering can be slow; how to keep pages loading fast while still rendering on the server?
      4. Type Safety: Adding new projects shouldn't require updating TypeScript types

      The Solution:
      A sophisticated routing and data system was built:

      File-Based Routing with Dynamic Paths:
      app/
      ├── projects/
      │   └── [slug]/
      │       ├── page.tsx           // Dynamic project detail page
      │       └── metadata.tsx        // Generates SEO metadata for each project
      ├── blog/
      │   └── [slug]/
      │       └── page.tsx

      This structure allows creating infinite project pages from a single template.

      Server-Side Generation:
      • Used generateStaticParams() to pre-render the most important routes at build time
      • When someone visits the portfolio, pages load instantly from a CDN
      • For new projects added after deployment, Next.js falls back to on-demand rendering
      • Users always get server-rendered HTML (great for SEO), not a JavaScript bundle

      SEO Metadata Generation:
      • Created a generateMetadata() function in each route that constructs unique metadata
      • Each project page includes:
        - Unique title and description
        - Open Graph tags (og:title, og:description, og:image)
        - Twitter Card metadata
        - Canonical URLs to prevent duplicate content issues
        - Structured data (JSON-LD) for rich snippets

      Component Structure:
      • Built a modular component system with clear separation:
        - ui/ folder for atomic components (Button, Card, Badge)
        - shared/ folder for layout components (Header, Footer)
      • Used TypeScript interfaces to ensure data consistency
      • Built a data fetching layer in lib/ that handles all API/database calls

      This MVC-like architecture (Model: data fetching, View: components, Controller: page logic) makes the code maintainable and scalable.`,
    },

    currentStatus: `This portfolio is live and serves as the primary marketing tool for job searching. It's actively maintained and evolving as new projects are built and articles are written. The site gets consistent traffic from search engines for relevant keywords, thanks to the SEO optimization work.`,

    technicalLessons: [
      "Server-Side Rendering Matters: Server-side rendering isn't just about SEO—it improves user experience. Pages load faster because the server sends complete HTML rather than the browser waiting for JavaScript.",
      "Next.js is Powerful: Building this portfolio introduced sophisticated Next.js features: dynamic routing, incremental static regeneration (ISR), server components, and middleware.",
      "SEO is Not Magic: SEO is mostly about doing the basics right: unique titles/descriptions, semantic HTML, fast load times, mobile optimization, and high-quality content.",
      "TypeScript Saves Time: Type safety prevents bugs before they happen. When refactoring the project data structure, TypeScript errors immediately showed everywhere code needed updating.",
      "Responsive Design is Essential: Mobile-first design isn't optional—it's required. Started designing for small screens and gradually enhanced for larger ones.",
      "Performance Optimization: Learned about image optimization, code splitting, and lazy loading. Discovered that optimizing the page load experience is worth the effort.",
    ],

    nonTechnicalLessons: [
      "A Portfolio is Iterative: Unlike a product shipped and forgotten, a portfolio evolves as new projects are built and growth happens as a developer.",
      "Design Matters for Credibility: A beautifully designed portfolio makes people believe you're a strong developer. Investing in design pays dividends.",
      "Writing About Your Work is Valuable: Articulating what was built, why, and what was learned cements understanding and makes you a better developer.",
    ],

    impact: `This portfolio became a template for how to approach web development projects. The principles learned here are consistently applied: think about SEO and performance upfront, use TypeScript for type safety, structure code for maintainability, and invest in accessible, responsive design. The portfolio itself continues to evolve, and each new project naturally finds its place in the showcase.`,
  },
};

export const detailedProjectDescriptions = {
  codeBlog: {
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

      approach: `The architecture followed MVC (Model-View-Controller) pattern:
      - Backend: Node.js with Express for API, MongoDB with Mongoose for data
      - Frontend: Angular with modular component structure and service-based architecture
      - Authentication: JWT tokens with Angular guards and interceptors
      - State Management: RxJS for reactive data flow
      - Deployment: Vercel for frontend, Render for backend

      Design decisions prioritized security, scalability, and user experience. Lazy loading was implemented for performance, and responsive design ensured mobile compatibility.`,

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

  dashboard: {
    title: "React Sales Dashboard - Analytics Platform",
    sections: {
      introduction: `React Sales Dashboard empowers sales teams with real-time analytics, dynamic visualizations, and interactive charts, backed by a secure Node.js/Express API with role-based authorization, JWT authentication, and middleware protection.

      The dashboard transforms raw sales data into actionable insights through intuitive visualizations and responsive design, enabling better decision-making at all levels of the organization.

      Core Features:
      - Real-time sales summary with key metrics
      - Interactive charts and data visualizations
      - Top performers leaderboard
      - Complete order management system
      - Product inventory management
      - Admin panel for user management
      - Responsive design for all devices`,

      approach: `Built with React hooks and Context API for state management:
      - Frontend: React with custom hooks and Context API for global state
      - Backend: Express with aggregation endpoints for pre-computed metrics
      - Visualizations: Chart libraries with custom styling
      - Performance: Memoization and smart re-render prevention
      - Database: MongoDB with indexed queries for fast aggregation

      Focused on smart API design where aggregation happens server-side, not client-side.`,

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

      approach: `Implemented using modern Next.js 15 patterns:
      - Server Components for data fetching and rendering
      - Dynamic routes with [slug] for infinite scalability
      - generateStaticParams() for pre-rendering key routes
      - generateMetadata() for per-page SEO optimization
      - Image optimization with next/image
      - CSS with Tailwind for maintainability
      - TypeScript for type safety throughout

      Separated concerns using MVC-inspired architecture with lib/ for models (data), components/ for views, and pages/ for controllers.`,

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
