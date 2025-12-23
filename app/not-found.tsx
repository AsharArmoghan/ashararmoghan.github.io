import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center dark:bg-zinc-950">
      <div className="relative mb-12">
        <div className="absolute -inset-4 animate-pulse rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5"></div>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl dark:bg-zinc-900">
          <FiSearch className="text-4xl text-blue-600" />
        </div>
      </div>

      <h1 className="mb-4 text-7xl font-black tracking-tighter text-zinc-900 dark:text-white md:text-8xl">
        404
      </h1>

      <div className="max-w-md">
        <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Lost in the Digital Maze?
        </h2>
        <p className="mb-10 text-zinc-500 dark:text-zinc-400">
          The page you're searching for seems to have relocated or vanished into
          the digital void.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-8 py-3.5 font-bold text-white shadow-xl shadow-zinc-900/20 transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-950"
        >
          <FiArrowLeft /> Return Home
        </Link>
        <Link
          href="/articles"
          className="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-8 py-3.5 font-bold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
        >
          Knowledge Base
        </Link>
      </div>

      <div className="mt-16 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Ashar Portfolio
      </div>
    </div>
  );
}
