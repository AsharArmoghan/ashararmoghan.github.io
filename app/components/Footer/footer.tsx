import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bottom-0 border-t bg-[radial-gradient(100%_100%_at_bottom,rgb(0,0,0,.25),rgb(0,0,0,.25),rgb(74,32,138,0.35))] py-6 backdrop-blur-sm backdrop-filter">
      <div className="container inset-1 max-w-7xl px-4">
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
            <div className="mt-2 flex space-x-3 pb-2"></div>
          </div>
        </div>
        <div className="mt-6 border-t pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
