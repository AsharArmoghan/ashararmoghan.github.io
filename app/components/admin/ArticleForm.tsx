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
  FiLink,
  FiChevronUp,
  FiChevronDown,
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
        toast.error("Failed to save article");
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
          <div className="fixed bottom-10 right-10 z-[9999] flex flex-col gap-4">
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
          {/* Main Content (Left) */}
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

          {/* Sidebar (Right) */}
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
                        setFormData({
                          ...formData,
                          published: e.target.checked,
                        })
                      }
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-zinc-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-zinc-700"></div>
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
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val.includes("unsplash.com/photos/")) {
                            toast.error(
                              "Please use direct image link address.",
                            );
                          }
                          handleChange(e);
                        }}
                        className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-3 text-sm transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                        placeholder="Paste image URL here..."
                      />
                      <FiLink className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        OR
                      </span>
                      <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800"></div>
                    </div>

                    <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-zinc-200 bg-white px-4 py-3 text-sm font-bold text-zinc-700 shadow-sm transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-blue-500/50 dark:hover:bg-blue-900/20">
                      <FiUpload className="text-blue-500" />
                      <span>Choose from device</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setFormData((prev: any) => ({
                                ...prev,
                                image: reader.result as string,
                              }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>

                    {formData.image && (
                      <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                          <FiImage size={32} className="opacity-20" />
                        </div>
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="relative z-10 h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.opacity = "0";
                            toast.error("Failed to load image");
                          }}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev: any) => ({ ...prev, image: "" }))
                          }
                          className="absolute right-2 top-2 z-20 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-red-500"
                        >
                          <FiX size={14} />
                        </button>
                      </div>
                    )}
                  </div>
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
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
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
