import BackButton from "@/app/components/ui/Button/BackButton";
import ArticleForm from "@/app/components/admin/ArticleForm";
import Link from "next/link";

export default function NewArticlePage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-zinc-950">
      <nav className="sticky top-0 z-50 flex w-full items-center border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-4xl items-center">
          <Link href="/admin/articles" className="-ml-10">
            <BackButton />
          </Link>
          <h1 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Write New Article
          </h1>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <ArticleForm />
      </main>
    </div>
  );
}
