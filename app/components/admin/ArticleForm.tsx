"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SEOMetadataGenerator from "./SEOMetadataGenerator";
import {
  FiSave,
  FiX,
  FiImage,
  FiClock,
  FiCheckCircle,
  FiUpload,
  FiTag,
  FiSearch,
  FiLink,
  FiChevronUp,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";

import TiptapEditor from "./TiptapEditor";

export default function ArticleForm({ article }: { article?: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        const errData = await response.json();
        toast.error(errData.error || "Failed to save article");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isMounted &&
        createPortal(
          <div className="fixed right-10 bottom-10 z-[9999] flex flex-col gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white/90 text-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-blue-500"
              title="Scroll to Top"
            >
              <FiChevronUp
                size={28}
                className="transition-transform group-hover:-translate-y-1"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                })
              }
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white/90 text-zinc-600 shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all hover:scale-110 hover:bg-blue-600 hover:text-white active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400 dark:hover:bg-blue-500"
              title="Scroll to Bottom"
            >
              <FiChevronDown
                size={28}
                className="transition-transform group-hover:translate-y-1"
              />
            </button>
          </div>,
          document.body,
        )}

      <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiTag className="text-blue-500" /> Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={
                      Array.isArray(formData.tags)
                        ? formData.tags.join(", ")
                        : formData.tags
                    }
                    onChange={(e) => {
                      const tags = e.target.value
                        .split(",")
                        .map((t) => t.trim());
                      setFormData((prev) => ({ ...prev, tags }));
                    }}
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-blue-400"
                    placeholder="UX Design, Artificial Intelligence, React..."
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.isArray(formData.tags) &&
                      formData.tags.map(
                        (tag: string, i: number) =>
                          tag && (
                            <span
                              key={i}
                              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                            >
                              #{tag}
                            </span>
                          ),
                      )}
                  </div>
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

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                <span className="h-6 w-1 rounded-full bg-amber-500" />
                Publishing Settings
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
                        setFormData((prev: any) => ({
                          ...prev,
                          published: e.target.checked,
                        }))
                      }
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-zinc-200 peer-checked:bg-emerald-600 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-zinc-600 dark:peer-checked:bg-emerald-600 dark:peer-checked:after:border-white"></div>
                  </label>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiImage className="text-blue-500" /> Cover Image
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        name="image"
                        value={formData.image || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pr-3 pl-10 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        placeholder="Paste image URL here..."
                      />
                      <FiLink className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" />
                    </div>

                    <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-700 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-blue-500/50 dark:hover:bg-blue-900/20">
                      <FiUpload className="text-blue-500" />
                      <span>Upload Base64</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () =>
                              setFormData((prev) => ({
                                ...prev,
                                image: reader.result as string,
                              }));
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>

                    {formData.image && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border dark:border-zinc-800">
                        <img
                          src={formData.image}
                          className="h-full w-full object-cover"
                        />
                        <button
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, image: "" }))
                          }
                          className="absolute top-2 right-2 rounded-full bg-black/50 p-1 text-white"
                        >
                          <FiX size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
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

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-white">
                <span className="h-6 w-1 rounded-full bg-blue-500" />
                SEO Metadata
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    Meta Description
                  </label>
                  <textarea
                    name="metaDescription"
                    value={formData.metaDescription || ""}
                    onChange={handleChange}
                    rows={2}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    Meta Keywords
                  </label>
                  <input
                    type="text"
                    name="metaKeywords"
                    value={
                      Array.isArray(formData.metaKeywords)
                        ? formData.metaKeywords.join(", ")
                        : formData.metaKeywords
                    }
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        metaKeywords: e.target.value
                          .split(",")
                          .map((k) => k.trim()),
                      }))
                    }
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    OG Title
                  </label>
                  <input
                    type="text"
                    name="ogTitle"
                    value={formData.ogTitle || ""}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-wider text-zinc-500 uppercase">
                    OG Description
                  </label>
                  <textarea
                    name="ogDescription"
                    value={formData.ogDescription || ""}
                    onChange={handleChange}
                    rows={2}
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <SEOMetadataGenerator
              type="article"
              title={formData.title}
              description={formData.excerpt || ""}
              content={formData.content}
              onMetadataGenerated={handleMetadataGenerated}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 border-t pt-8 dark:border-zinc-800">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-xl bg-zinc-100 px-8 py-3 font-bold text-zinc-600 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
          >
            <FiX /> Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />{" "}
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
    </>
  );
}
