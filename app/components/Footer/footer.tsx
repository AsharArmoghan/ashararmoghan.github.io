import React from "react";
import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container max-w-7xl px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Branding / Logo */}
          <div className="flex flex-col items-center md:items-center">
            <h2 className="text-lg font-bold">MyBrand</h2>
            <p className="mt-2 text-sm">
              Crafting digital experiences with passion.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="mt-2 space-y-1 pt-1">
              <Link href="/" className="px-1 hover:text-gray-600">
                Home
              </Link>
              <a href="/about" className="px-1 hover:text-gray-600">
                About
              </a>
              <a href="/services" className="px-1 hover:text-gray-600">
                Services
              </a>
              <a href="/contact" className="px-1 hover:text-gray-600">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-sm font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-3 pb-2">
              <Button variant="ghost" asChild>
                <a href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-5 w-5 hover:text-gray-900" />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-5 w-5 hover:text-gray-900" />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-5 w-5 hover:text-gray-900" />
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://github.com" aria-label="GitHub">
                  <Github className="h-5 w-5 hover:text-gray-900" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
