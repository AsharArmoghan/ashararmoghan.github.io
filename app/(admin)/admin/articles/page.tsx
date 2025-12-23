import { prisma } from "@/app/lib/api/db";
import Link from "next/link";
import { auth } from "@/app/lib/api/auth";
import { redirect } from "next/navigation";
import BackButton from "@/app/components/ui/Button/BackButton";
import { FiEdit2, FiPlus } from "react-icons/fi";
import DeleteArticleButton from "@/app/components/admin/DeleteArticleButton";

export default async function AdminArticlesPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-zinc-950">
      <nav className="sticky top-0 z-50 flex w-full items-center border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-6xl items-center">
          <Link href="/admin" className="-ml-10">
            <BackButton />
          </Link>
          <div className="ml-4 flex grow items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Knowledge Base
            </h1>
            <Link
              href="/admin/articles/new"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-700 hover:shadow-emerald-500/20 active:scale-95"
            >
              <FiPlus /> New Article
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Current Library ({articles.length})
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Article Details
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Visibility
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="group transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-zinc-900 dark:text-white">
                        {article.title}
                      </div>
                      <div className="mt-1 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                        /{article.slug}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      {article.published ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {new Date(article.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </div>
                    </td>
                    <td className="flex justify-end gap-2 px-6 py-5">
                      <Link
                        href={`/admin/articles/${article.id}`}
                        className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
                      >
                        <FiEdit2 className="text-xs" />
                        Edit
                      </Link>
                      <DeleteArticleButton id={article.id} />
                    </td>
                  </tr>
                ))}
                {articles.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-lg font-bold text-zinc-900 dark:text-white">
                          No articles yet
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          Your knowledge base is currently empty.
                        </p>
                        <Link
                          href="/admin/articles/new"
                          className="mt-4 text-sm font-bold text-emerald-600 hover:underline"
                        >
                          Create your first article →
                        </Link>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
