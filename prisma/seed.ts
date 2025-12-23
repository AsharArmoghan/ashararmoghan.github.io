import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("securePassword123!", 12);

  // 1. Create Admin User
  const user = await prisma.user.upsert({
    where: { email: "admin@portfolio.com" },
    update: {
      password,
    },
    create: {
      email: "admin@portfolio.com",
      name: "Admin User",
      password,
      role: "admin",
    },
  });

  console.log({ user });

  // 2. Seed Projects
  const projects = [
    {
      title: "Code Blog",
      slug: "code-blog",
      overview:
        "A secure, full-stack blogging platform built with Angular and Node.js.",
      introduction:
        "Code Blog was built to address the lack of developer-focused features...",
      description:
        "A secure, full-stack blogging platform built with Angular and Node.js.",
      purposeAndGoal:
        "Designed to fill the gap for code-centric sharing platforms...",
      currentStatus: "Deployed on Vercel (Front) and Render (Back).",
      impact: "Established a reusable authentication pattern...",
      liveUrl: "https://code-blog-demo.vercel.app",
      technicalLessons: [
        "Auth is Complex",
        "Reactive Programming",
        "Modular Architecture",
        "Database Modeling",
      ],
      nonTechnicalLessons: [
        "Deployment Realities",
        "User-Centricity",
        "Feedback is Gold",
      ],
      features: ["Secure Authentication", "Rich Text Editor", "REST API"],
      requirements: [],
      approach: ["MVC Pattern", "Three-tier architecture"],
      authorId: user.id,
    },
    {
      title: "React Sales Dashboard",
      slug: "react-sales-dashboard",
      overview: "A comprehensive analytics platform for sales teams.",
      introduction: "Built to replace gut-feeling decisions with data...",
      description: "A comprehensive analytics platform for sales teams.",
      purposeAndGoal: "Modeled after leaders like Stripe and Shopify...",
      currentStatus: "Deployed and functional with real-world data handling.",
      impact: "Influenced all future React work...",
      liveUrl: "https://react-sales-frontend.vercel.app/",
      technicalLessons: [
        "Architecture over Tools",
        "Performance",
        "Frontend-Focused API",
        "Accessibility",
      ],
      nonTechnicalLessons: ["Responsive First", "Focus vs Creep"],
      features: ["Real-time analytics", "Interactive charts", "Leaderboard"],
      requirements: [],
      approach: ["Context API", "Server-side Aggregation"],
      authorId: user.id,
    },
    {
      title: "Portfolio",
      slug: "portfolio",
      overview:
        "A modern, SSR-enabled portfolio built with Next.js 15 App Router.",
      introduction:
        "More than a showcase—it's a technical demonstration of Next.js mastery...",
      description:
        "A modern, SSR-enabled portfolio built with Next.js 15 App Router.",
      purposeAndGoal: "Designed for performance and scalability...",
      currentStatus: "Live, actively maintained, and evolving.",
      impact: "Set the template for all my future web projects...",
      liveUrl: "https://ashar-dev.vercel.app",
      technicalLessons: [
        "SSR vs CSR",
        "Next.js Internals",
        "Real SEO",
        "TypeScript ROI",
      ],
      nonTechnicalLessons: ["Iterative Design", "Design = Credibility"],
      features: ["SSR", "Dynamic Routing", "SEO Optimized"],
      requirements: [],
      approach: ["Server Components", "File-based Routing"],
      authorId: user.id,
    },
  ];

  for (const p of projects) {
    const project = await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
    console.log(`Created project: ${project.title}`);
  }

  // 3. Seed Articles
  const articles = [
    {
      title: "Popular Software Engineering Frameworks Explained",
      slug: "popular-software-engineering-frameworks-explained",
      content:
        "In the world of software development, frameworks play a crucial role...",
      excerpt:
        "Frameworks play a crucial role in streamlining the development process.",
      published: true,
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
      authorId: user.id,
      tags: ["Software Engineering", "Frameworks"],
    },
    {
      title: "Mastering JavaScript: Tips and Tricks",
      slug: "mastering-javascript-tips-and-tricks",
      content: "JavaScript is the backbone of modern web development...",
      excerpt: "JavaScript is the backbone of modern web development.",
      published: true,
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2667&auto=format&fit=crop",
      authorId: user.id,
      tags: ["JavaScript", "Web Development"],
    },
    {
      title: "The Rise of AI in Software Development",
      slug: "rise-of-ai-in-software-development",
      content:
        "Artificial intelligence is transforming how software is developed...",
      excerpt:
        "Artificial intelligence is transforming how software is developed.",
      published: true,
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2640&auto=format&fit=crop",
      authorId: user.id,
      tags: ["AI", "Future Tech"],
    },
    {
      title: "Understanding Cloud Computing in 2025",
      slug: "understanding-cloud-computing-2025",
      content:
        "Cloud computing has become an essential part of modern IT infrastructure...",
      excerpt:
        "Cloud computing has become an essential part of modern IT infrastructure.",
      published: true,
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
      authorId: user.id,
      tags: ["Cloud", "DevOps"],
    },
  ];

  for (const a of articles) {
    const article = await prisma.article.upsert({
      where: { slug: a.slug },
      update: {},
      create: a,
    });
    console.log(`Created article: ${article.title}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
