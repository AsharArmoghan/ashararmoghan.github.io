"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className="p-2"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-5 rounded" />
      ) : (
        <MoonIcon className="size-5 rounded" />
      )}
    </div>
  );
}
