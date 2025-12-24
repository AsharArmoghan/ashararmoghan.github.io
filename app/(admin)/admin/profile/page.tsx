"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiImage,
  FiUpload,
  FiCheck,
  FiX,
  FiArrowLeft,
  FiLayout,
} from "react-icons/fi";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/admin/profile");
      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        toast.error("Failed to load profile");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await fetch("/api/admin/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: profile.name,
          image: profile.image,
        }),
      });

      if (res.ok) {
        toast.success("Profile updated successfully");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <nav className="sticky top-0 z-50 flex w-full items-center border-b bg-white/80 px-6 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
          <Link
            href="/admin"
            className="flex items-center gap-2 font-bold text-zinc-500 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            <FiArrowLeft /> Dashboard
          </Link>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Profile Settings
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="absolute -bottom-12 left-8">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-white bg-zinc-100 shadow-xl dark:border-zinc-900 dark:bg-zinc-800">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-zinc-400">
                    <FiUser size={40} />
                  </div>
                )}
                <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 text-white opacity-0 transition-opacity hover:opacity-100">
                  <FiUpload size={20} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setProfile({
                            ...profile,
                            image: reader.result as string,
                          });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="px-8 pb-12 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {profile.name}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Manage your administrative profile
            </p>

            <form onSubmit={handleUpdate} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiUser className="text-blue-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition-all focus:border-blue-500 focus:bg-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <FiMail className="text-blue-500" /> Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-500"
                  />
                  <p className="mt-2 text-xs text-zinc-400">
                    Email cannot be changed
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 border-t pt-8 dark:border-zinc-800">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95 disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Saving Changes...
                    </>
                  ) : (
                    <>
                      <FiCheck /> Update Profile
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
