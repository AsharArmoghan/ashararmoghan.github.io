"use client";
import React, { useState } from "react";
import SideMenu from "./sideMenu";
import { RiMenu2Fill } from "react-icons/ri";
import { HeaderProps } from "@/app/lib/Types/HeaderProps";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "motion";

const MobileNav: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className="top-0 z-50 p-2 text-gray-600 hover:text-gray-900 md:hidden"
      >
        <RiMenu2Fill className="h-8 w-8 fill-primary-black dark:fill-primary-white"></RiMenu2Fill>
      </button>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{
            type: spring,
            duration: 0.4,
          }}
        >
          <SideMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            scrollToSection={scrollToSection}
          />
          {isMenuOpen && (
            <div
              className="fixed bg-black bg-opacity-50 transition-opacity md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
