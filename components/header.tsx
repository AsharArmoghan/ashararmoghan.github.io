"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Menu } from "lucide-react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-300 bg-white shadow-sm dark:border-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="text-lg">
            <NavigationMenuItem>
              <ThemeToggle></ThemeToggle>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={cn("pl-5 pr-3 hover:text-gray-700")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={cn("pr-3 hover:text-gray-700")}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/portfoilio"
                className={cn("pr-3 hover:text-gray-700")}
              >
                Portfoilio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={cn("hover:text-gray-700")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}

        <button className="z-10 md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-8 w-8" />
        </button>

        {open && (
          <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-white text-2xl text-black dark:bg-black dark:text-white">
            {links.map((link) => (
              <Link
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
}
