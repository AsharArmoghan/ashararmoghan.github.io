"use client";

import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

interface SEOData {
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  schemaMarkup: object;
}

interface Props {
  type: "article" | "project";
  title: string;
  description: string;
  content?: string;
  onMetadataGenerated: (seoData: SEOData) => void;
}

export default function SEOMetadataGenerator({
  type,
  title,
  description,
  content,
  onMetadataGenerated,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<SEOData | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleGenerate = async () => {
    if (!title || !description) {
      toast.error("Please fill in title and description first");
      return;
    }

    // Abort previous request if still running
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    try {
      const response = await fetch("/api/ai/generate-seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          title,
          description,
          content,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to generate metadata");
      }

      const data = await response.json();
      setMetadata(data.metadata);
      onMetadataGenerated(data.metadata);

      if (data.aiError) {
        toast.error(
          `Note: AI generation failed (${data.aiError}). Using fallback logic.`,
        );
      } else {
        toast.success("SEO metadata generated!");
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("SEO generation aborted");
        return;
      }
      toast.error(error.message || "Failed to generate SEO metadata");
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-900/20">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            🔍 Generate SEO Metadata
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Used Hugging Face AI to auto-generate meta tags and keywords
          </p>
        </div>
        <button
          onClick={handleGenerate}
          disabled={isLoading || !title || !description}
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "✨ Generate"}
        </button>
      </div>

      {metadata && (
        <div className="animate-in fade-in slide-in-from-top-4 mt-6 space-y-4 duration-300">
          <div className="border-t border-blue-200 pt-4 dark:border-blue-800">
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
              Preview:
            </h4>

            <div className="mb-4 rounded border-l-4 border-blue-600 bg-white p-3 dark:bg-gray-800">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Meta Description ({metadata.metaDescription?.length || 0}/160)
              </label>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                {metadata.metaDescription}
              </p>
            </div>

            <div className="mb-4 rounded border-l-4 border-indigo-600 bg-white p-3 dark:bg-gray-800">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Keywords
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {metadata.metaKeywords?.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded border-l-4 border-green-600 bg-white p-3 dark:bg-gray-800">
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Open Graph (Social Sharing)
              </label>
              <div className="mt-2 text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {metadata.ogTitle}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {metadata.ogDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 border-t border-blue-200 pt-4 dark:border-blue-800">
            <button
              onClick={() => setMetadata(null)}
              className="rounded-lg bg-gray-200 px-4 py-2 text-gray-900 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              type="button"
            >
              Generate Again
            </button>
            <button
              onClick={() => toast.success("Metadata will be saved with form!")}
              className="rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
              type="button"
            >
              ✅ Accept
            </button>
          </div>
        </div>
      )}

      {!metadata && (
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          💡 Tip: Fill in title and description, then click Generate for
          optimized SEO tags
        </p>
      )}
    </div>
  );
}
