"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../Theme/theme-toggle";
import LogoIcon from "@/public/assets/logo 1.svg";
import MenuIcon from "@/public/assets/icon-menu 1.svg";
import { X } from "lucide-react";
const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/projects", title: "projects" },
  { url: "/articles", title: "articles" },
];
export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/15 py-4 md:border-none">
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {links.map((link) => (
                <Link
                  className="text-white/70 transition hover:text-white"
                  href={link.url}
                  key={link.title}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle></ThemeToggle>
            <button className="relative rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-3 py-2 text-sm font-medium shadow-[0px_0px_10px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="[mask-image:linear-gradiant(to_top,black,transparent) absolute inset-0 rounded-lg border border-white/20"></div>
                <div className="[mask-image:linear-gradiant(to_bottom,black,transparent) absolute inset-0 rounded-lg border border-white/40"></div>
                <div className="classabsolute inset-0 rounded-lg shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset]"></div>
              </div>
              <span className="text-white">Button</span>
            </button>
            <button
              className="z-10 transition md:hidden"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <MenuIcon className="h-8 w-8" />
              ) : (
                <X className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
        {open && (
          <div className="relative left-0 top-0 flex h-80 w-screen flex-col items-center justify-center gap-5 text-xl transition">
            {links.map((link) => (
              <Link
                className=""
                href={link.url}
                key={link.title}
                onClick={() => setOpen(!open)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
