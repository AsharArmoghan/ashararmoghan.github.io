"use client";
import React, { useState } from "react";
import BackButton from "@/app/components/ui/Button/BackButton";
import { motion } from "motion/react";
import {
  FiImage,
  FiMoreHorizontal,
  FiBold,
  FiItalic,
  FiLink,
  FiList,
  FiType,
  FiCode,
  FiZap,
} from "react-icons/fi";
import { FaListOl, FaQuoteRight } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const NewArticle = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const contentRef = React.useRef<HTMLTextAreaElement>(null);

  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1499750310159-5b5f38e31638?q=80&w=3547&auto=format&fit=crop",
  );

  const fetchImageAsBase64 = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) {
        toast.error("Failed to fetch image");
        return null;
      }
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error fetching image:", error);
      toast.error("Could not save image locally. Using URL instead.");
      return url;
    }
  };

  const handleSave = async (status: "draft" | "published") => {
    if (!title || !content) {
      toast.error("Please fill in title and content");
      return;
    }

    const toastId = toast.loading("Processing image...");
    const savedImage = await fetchImageAsBase64(imageUrl);
    toast.dismiss(toastId);

    const newArticle = {
      id: Date.now(),
      title,
      content,
      author: "Ashar Armoghan", // Default author
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      readTime: `${Math.ceil(content.split(" ").length / 200)} min read`,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      image: savedImage,
      status,
    };

    const existingArticles = JSON.parse(
      localStorage.getItem("custom_articles") || "[]",
    );
    localStorage.setItem(
      "custom_articles",
      JSON.stringify([...existingArticles, newArticle]),
    );

    toast.success(
      status === "published" ? "Article Published!" : "Draft Saved!",
    );
    router.push("/articles");
  };

  const insertMarkdown = (prefix: string, suffix: string) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selection = text.substring(start, end);
    const after = text.substring(end);

    const newText = before + prefix + selection + suffix + after;
    setContent(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const ToolbarButton = ({
    icon,
    label,
    onClick,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="rounded p-2 text-zinc-600 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700"
      title={label}
    >
      {icon}
    </button>
  );

  return (
    <div className="pointer-events-auto min-h-screen bg-primary-white dark:bg-primary-black">
      <nav className="bg-primary-white/80 dark:bg-primary-black/80 sticky top-0 z-50 w-full border-b border-zinc-200 pt-4 backdrop-blur-sm dark:border-zinc-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/articles">
              <BackButton />
            </Link>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              Create Post
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Edit
            </button>
            <button className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Preview
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-8 flex gap-4">
              <button
                onClick={() => {
                  const url = prompt("Enter image URL:", imageUrl);
                  if (url) setImageUrl(url);
                }}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Set Cover Image URL
              </button>
              <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                ✨ Generate Image
              </button>
            </div>

            <textarea
              placeholder="New post title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 h-auto w-full resize-none bg-transparent text-4xl font-extrabold text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-zinc-100 dark:placeholder-zinc-600 lg:text-5xl"
              style={{ overflow: "hidden" }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />

            <input
              type="text"
              placeholder="Add up to 4 tags..."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mb-8 w-full bg-transparent text-zinc-600 placeholder-zinc-400 focus:outline-none dark:text-zinc-400 dark:placeholder-zinc-600"
            />

            <div className="mb-8 flex items-center gap-1 overflow-x-auto rounded-md bg-zinc-50 px-2 py-2 dark:bg-zinc-800/50">
              <ToolbarButton
                icon={<FiBold />}
                label="Bold"
                onClick={() => insertMarkdown("**", "**")}
              />
              <ToolbarButton
                icon={<FiItalic />}
                label="Italic"
                onClick={() => insertMarkdown("_", "_")}
              />
              <ToolbarButton
                icon={<FiLink />}
                label="Link"
                onClick={() => insertMarkdown("[", "](url)")}
              />
              <ToolbarButton
                icon={<FiList />}
                label="Unordered List"
                onClick={() => insertMarkdown("- ", "")}
              />
              <ToolbarButton
                icon={<FaListOl />}
                label="Ordered List"
                onClick={() => insertMarkdown("1. ", "")}
              />
              <ToolbarButton
                icon={<FiType />}
                label="Heading"
                onClick={() => insertMarkdown("## ", "")}
              />
              <ToolbarButton
                icon={<FaQuoteRight />}
                label="Quote"
                onClick={() => insertMarkdown("> ", "")}
              />
              <ToolbarButton
                icon={<FiCode />}
                label="Code"
                onClick={() => insertMarkdown("```\n", "\n```")}
              />
              <ToolbarButton
                icon={<FiImage />}
                label="Image"
                onClick={() => insertMarkdown("![alt](", ")")}
              />
              <ToolbarButton
                icon={<FiZap />}
                label="Custom"
                onClick={() => insertMarkdown("⚡ ", "")}
              />
            </div>

            <textarea
              ref={contentRef}
              placeholder="Write your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-[500px] w-full resize-none bg-transparent text-lg font-normal leading-relaxed text-zinc-800 placeholder-zinc-400 focus:outline-none dark:text-zinc-300 dark:placeholder-zinc-600"
            />
          </motion.div>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => handleSave("published")}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Publish
            </button>
            <button
              onClick={() => handleSave("draft")}
              className="rounded-lg px-6 py-3 font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              Save draft
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Publishing Tips
            </h3>
            <ul className="list-disc space-y-4 pl-5 text-zinc-600 dark:text-zinc-400">
              <li>
                Ensure your post has a cover image set to make the most of the
                home feed and social media platforms.
              </li>
              <li>
                Share your post on social media platforms or with your
                co-workers or local communities.
              </li>
              <li>
                Ask people to leave questions for you in the comments. It’s a
                great way to spark additional discussion describing personally
                why you wrote it or why people might find it helpful.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
