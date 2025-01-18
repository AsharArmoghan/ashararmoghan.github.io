"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="container flex max-w-7xl flex-row items-center justify-around px-4 py-2">
        {/* Logo */}
        <div className="">
          <Link className="text-3xl font-bold" href="/">
            Portfolio
          </Link>
        </div>
        <ThemeToggle></ThemeToggle>

        {/* Navigation Menu */}

        <NavigationMenu className="hidden transition-colors hover:text-foreground md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                <p className={cn("pl-5 pr-3 hover:text-gray-700")}> Home</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={navigationMenuTriggerStyle()}
              >
                <p className={cn("pr-3 hover:text-gray-700")}>About</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/portfoilio"
                className={navigationMenuTriggerStyle()}
              >
                <p className={cn("pr-3 hover:text-gray-700")}> Portfolio </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={navigationMenuTriggerStyle()}
              >
                <p className={cn("hover:text-gray-700")}>Contact </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}

        <button className="z-10 md:hidden" onClick={() => setOpen(!open)}>
          {!open ? <Menu className="h-8 w-8" /> : <X />}
        </button>

        {open && (
          <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-white text-2xl dark:bg-black">
            {links.map((link) => (
              <Link
                className={navigationMenuTriggerStyle()}
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
