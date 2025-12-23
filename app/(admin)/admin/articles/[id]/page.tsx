import ArticleForm from "@/app/components/admin/ArticleForm";
import { prisma } from "@/app/lib/api/db";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/app/lib/api/auth";
import Link from "next/link";
import BackButton from "@/app/components/ui/Button/BackButton";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session) redirect("/login");

  const article = await prisma.article.findUnique({
    where: { id },
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-zinc-950">
      <nav className="sticky top-0 z-50 flex w-full items-center border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-4xl items-center">
          <Link href="/admin/articles" className="-ml-10">
            <BackButton />
          </Link>
          <h1 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Edit Article
          </h1>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <ArticleForm article={article} />
      </main>
    </div>
  );
}
