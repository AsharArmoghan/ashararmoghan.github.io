"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SEOMetadataGenerator from "./SEOMetadataGenerator";
import { FiSave, FiX, FiImage, FiClock, FiCheckCircle } from "react-icons/fi";

import TiptapEditor from "./TiptapEditor";

export default function ArticleForm({ article }: { article?: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    tags: [],
    published: false,
    image: "",
    readTime: "",
    metaDescription: "",
    metaKeywords: [],
    ogTitle: "",
    ogDescription: "",
    schemaMarkup: {},
    ...article,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev: any) => ({ ...prev, content }));
  };

  const handleMetadataGenerated = (seoData: any) => {
    setFormData((prev: any) => ({
      ...prev,
      metaDescription: seoData.metaDescription,
      metaKeywords: seoData.metaKeywords,
      ogTitle: seoData.ogTitle,
      ogDescription: seoData.ogDescription,
      schemaMarkup: seoData.schemaMarkup,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const method = article ? "PUT" : "POST";
      const endpoint = article
        ? `/api/articles/${article.id}`
        : "/api/articles";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`Article ${article ? "updated" : "created"}`);
        router.push("/admin/articles");
      } else {
        toast.error("Failed to save article");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Main Content */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <span className="h-6 w-1 rounded-full bg-blue-600" />
              Core Information
            </h3>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg font-semibold transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="The Future of Web Development..."
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-400"
                  placeholder="A brief summary for cards and search results..."
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <span className="h-6 w-1 rounded-full bg-emerald-600" />
              Content Editor
            </h3>
            <TiptapEditor
              content={formData.content}
              onChange={handleContentChange}
              placeholder="Write your article here..."
            />
          </div>
        </div>

        {/* Right Column: Settings & SEO */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
              <span className="h-6 w-1 rounded-full bg-amber-500" />
              Publishing
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <div>
                  <p className="font-bold dark:text-white">Public Status</p>
                  <p className="text-xs text-zinc-500">
                    Visible to site visitors
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) =>
                      setFormData({ ...formData, published: e.target.checked })
                    }
                    className="peer sr-only"
                  />
                  <div className="peer h-6 w-11 rounded-full bg-zinc-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-zinc-700"></div>
                </label>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiImage className="text-blue-500" /> Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image || ""}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiClock className="text-blue-500" /> Read Time
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime || ""}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                    placeholder="5 min read"
                  />
                </div>
              </div>
            </div>
          </div>

          <SEOMetadataGenerator
            type="article"
            title={formData.title}
            description={
              formData.excerpt || formData.content?.substring(0, 150) || ""
            }
            content={formData.content}
            onMetadataGenerated={handleMetadataGenerated}
          />

          {formData.metaDescription && (
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-800/30 dark:bg-emerald-900/20">
              <FiCheckCircle className="text-xl text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="font-bold text-emerald-900 dark:text-emerald-100">
                  SEO Optimized
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Metadata is ready to be saved.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-end gap-4 border-t pt-8 dark:border-zinc-800">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 rounded-xl bg-zinc-100 px-8 py-3 font-bold text-zinc-600 transition-all hover:bg-zinc-200 active:scale-95 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
        >
          <FiX /> Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </span>
          ) : (
            <>
              <FiSave /> Save Article
            </>
          )}
        </button>
      </div>
    </form>
  );
}
