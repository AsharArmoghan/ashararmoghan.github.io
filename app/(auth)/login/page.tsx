"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Submitting with:", { email, password });
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("SignIn Result:", result);

      if (result?.ok) {
        toast.success("Login successful!");
        router.push(callbackUrl);
      } else {
        toast.error(result?.error || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Admin Login
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your portfolio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="admin@portfolio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full transform rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
