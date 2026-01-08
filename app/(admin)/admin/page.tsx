export const dynamic = "force-dynamic";

import { auth } from "@/app/lib/api/auth";
import { prisma } from "@/app/lib/api/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FiArrowRight,
  FiBookOpen,
  FiLayout,
  FiPlus,
  FiExternalLink,
} from "react-icons/fi";

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const projectCount = await prisma.project.count();
  const articleCount = await prisma.article.count();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      {/* Premium Header */}
      <nav className="sticky top-0 z-50 flex w-full items-center border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
              <FiLayout className="text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Studio Center
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="hidden font-medium text-zinc-500 sm:block dark:text-zinc-400">
              Hi,{" "}
              <Link
                href="/admin/profile"
                className="text-zinc-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                {session.user?.name}
              </Link>
            </span>
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 font-bold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              Live Site{" "}
              <FiExternalLink className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase dark:text-blue-400">
            Overview
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Welcome back to your workstation.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="absolute -top-4 -right-4 text-9xl font-black text-blue-500/5 transition-transform group-hover:scale-110">
              01
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <FiLayout className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Projects
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black text-zinc-900 dark:text-white">
                  {projectCount}
                </span>
                <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                  Active
                </span>
              </div>
              <Link
                href="/admin/projects"
                className="group mt-8 flex items-center gap-2 font-bold text-blue-600 transition-all hover:gap-3 dark:text-blue-400"
              >
                Manage Portfolio <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="absolute -top-4 -right-4 text-9xl font-black text-emerald-500/5 transition-transform group-hover:scale-110">
              02
            </div>
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <FiBookOpen className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Knowledge Base
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black text-zinc-900 dark:text-white">
                  {articleCount}
                </span>
                <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                  Articles
                </span>
              </div>
              <Link
                href="/admin/articles"
                className="group mt-8 flex items-center gap-2 font-bold text-emerald-600 transition-all hover:gap-3 dark:text-emerald-400"
              >
                Manage Articles <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section>
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
              Quick Creation
            </h3>
            <div className="h-px grow bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/admin/projects/new"
              className="flex items-center justify-between rounded-2xl bg-blue-600 p-6 text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
            >
              <span className="font-bold">New Project</span>
              <FiPlus className="text-xl" />
            </Link>
            <Link
              href="/admin/articles/new"
              className="flex items-center justify-between rounded-2xl bg-emerald-600 p-6 text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-700 active:scale-95"
            >
              <span className="font-bold">New Article</span>
              <FiPlus className="text-xl" />
            </Link>
            <button className="flex items-center justify-between rounded-2xl border-2 border-dashed border-zinc-200 p-6 text-zinc-400 transition-all hover:border-zinc-300 hover:text-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:text-zinc-300">
              <span className="font-bold">More Actions</span>
              <FiPlus className="text-xl" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
