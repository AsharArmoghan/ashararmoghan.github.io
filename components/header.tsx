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
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/75 py-3">
      <div className="container flex max-w-4xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            Portfolio
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="transition-colors hover:text-foreground">
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
                Portfolio
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
          <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-white text-2xl dark:bg-black">
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
