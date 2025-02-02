"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../Theme/theme-toggle";
import LogoIcon from "@/public/assets/logo1_new.svg";
import MenuIcon from "@/public/assets/icon-menu2.svg";
import { X } from "lucide-react";
import "@/app/components/Header/header.css";
// import { Button } from "@/components/ui/Button";
const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "about" },
  { url: "/projects", title: "projects" },
  { url: "/articles", title: "articles" },
];
export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header sticky top-0 z-10 border-b border-white/15 bg-[radial-gradient(100%_100%_at_top,rgb(0,0,0,.25),rgb(0,0,0,.25),rgb(74,32,138,0.25))] py-4 backdrop-blur-sm backdrop-filter md:border-none">
      <div className="container inset-1 backdrop-blur-sm backdrop-filter">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-black/15 dark:border-white/15 md:border md:p-2.5">
          <div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="h-8 w-8 rounded-md bg-black fill-black dark:bg-black" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {links.map((link) => (
                <Link
                  className="font-semibold text-black/80 transition hover:text-black/40 dark:text-white/80 dark:hover:text-white/10"
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
            {/* <Button></Button> */}
            <button
              className="z-10 transition md:hidden"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <MenuIcon className="h-8 w-8 fill-black/50" />
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
