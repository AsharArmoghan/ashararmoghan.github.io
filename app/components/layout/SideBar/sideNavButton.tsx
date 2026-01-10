import React, { useState } from "react";
import SideMenu from "./sideMenu";
import { HeaderProps } from "@/app/lib/Types/HeaderProps";
import { motion, AnimatePresence } from "motion/react";

const MobileNav: React.FC<HeaderProps> = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 rounded-full bg-black transition-colors dark:bg-white"
        />
        <motion.span
          animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="h-0.5 w-6 rounded-full bg-black transition-colors dark:bg-white"
        />
        <motion.span
          animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 rounded-full bg-black transition-colors dark:bg-white"
        />
      </button>

      <div className="shadow-md">
        <SideMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sections={sections}
        />
      </div>
    </div>
  );
};

export default MobileNav;
