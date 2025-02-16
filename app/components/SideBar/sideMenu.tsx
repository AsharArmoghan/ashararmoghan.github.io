"use client";

import React from "react";
import { motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { SideMenuProps, SectionName } from "@/lib/Types/HeaderProps";

const sections: SectionName[] = ["home", "projects", "articles", "about"];

const SideMenu: React.FC<SideMenuProps> = ({
  scrollToSection,
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-primary-white shadow-lg transition-all duration-300 ease-in-out dark:bg-primary-black ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 text-neutral-700 hover:text-gray-900 dark:text-neutral-100"
      >
        <VscChromeClose className="h-8 w-8" />
      </button>

      <div className="overflow-y-hidden py-4">
        <ul className="space-y-2 font-medium">
          <li className="mt-[60px] flex h-[500px] flex-col items-center justify-evenly">
            {sections.map((section) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="text-black/80 transition hover:text-zinc-500 dark:text-white/80 dark:hover:text-zinc-400"
                onClick={() => {
                  scrollToSection(section);
                  onClose();
                }}
                key={section}
              >
                <p className="items-center px-3 text-[21px] font-semibold leading-none tracking-tight">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </p>
              </motion.button>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
