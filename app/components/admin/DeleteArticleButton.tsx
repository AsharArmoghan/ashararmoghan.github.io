"use client";

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteArticleButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (
      !confirm(
        "Are you sure you want to delete this article? This action cannot be undone.",
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Article deleted successfully");
        router.refresh();
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to delete article");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the article");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-900/20"
      title="Delete Article"
    >
      <FiTrash2 className="text-xs" />
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
