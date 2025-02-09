"use client";

import "@/app/components/Header/header.css";
import { HeaderProps, SectionName } from "@/lib/Types/HeaderProps";
import Logo from "../Logo/Logo";
// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "../Theme/theme-toggle";

const sections: SectionName[] = ["home", "projects", "articles", "about"];

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollPos, setLastScrollPos] = useState(0);
  // const [lastHiddenPos, setLastHiddenPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     // Always show navbar at top of page
  //     if (currentScrollPos <= 10) {
  //       setIsVisible(true);
  //       return;
  //     }
  //     if (currentScrollPos > lastScrollPos) {
  //       // Scrolling down
  //       if (isVisible) {
  //         setIsVisible(false);
  //         setLastHiddenPos(currentScrollPos);
  //       }
  //     } else {
  //       // Scrolling up
  //       if (!isVisible && currentScrollPos <= lastHiddenPos - 30) {
  //         setIsVisible(true);
  //       }
  //     }

  //     setLastScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollPos, isVisible, lastHiddenPos]);

  return (
    <header
      className="header sticky top-0 z-10 border-b border-white/15 bg-primary-white py-5 text-zinc-50 dark:border-zinc-700 dark:bg-primary-black md:border-none"
      // style={{
      //   transition: "transform 0.3s ease-in-out",
      //   transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      // }}
    >
      <div className="flex items-baseline justify-center">
        <div className="flex min-w-[350px] flex-row items-center justify-between gap-4 rounded-xl border-black/15 px-3 dark:border-white/15 md:w-[550px] md:border md:p-2.5">
          <div className="h-8 w-8 items-center rounded-lg">
            <Logo color={"fill-primary-black dark:fill-primary-white"} />
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center justify-between">
              {sections.map((section) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ ease: "easeInOut", duration: 0.2 }}
                  className="text-black/80 transition hover:text-zinc-500 dark:text-white/80 dark:hover:text-zinc-400"
                  onClick={() => scrollToSection(section)}
                  key={section}
                >
                  <p className="items-center px-3 text-[18px] font-semibold leading-none tracking-tight">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </p>
                </motion.button>
              ))}
            </nav>
          </div>
          <motion.div
            className="items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              visualDuration: 0.3,
              bounce: 0.3,
            }}
          >
            <ThemeToggle></ThemeToggle>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
export default Header;
