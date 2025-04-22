"use client";

import "@/app/components/Header/header.css";
import { HeaderProps, Section } from "@/lib/Types/HeaderProps";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "../Theme/theme-toggle";
import MobileNav from "../SideBar/sideNav";

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  activeSection,
  sections,
}) => {
  // const [activeSection, setActiveSection] = useState<SectionName>("home");

  return (
    <header className="header sticky top-0 z-10 h-[100px] w-full border-b border-zinc-200 bg-primary-white py-5 dark:border-zinc-900 dark:bg-primary-black md:border-none">
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center justify-around gap-4 rounded-xl border-black/15 px-3 dark:border-white/15 sm:w-full md:w-[550px] md:border md:p-2.5">
          <div className="md:hidden">
            <MobileNav
              scrollToSection={scrollToSection}
              activeSection="home"
              sections={sections}
            />
          </div>
          <div className="mb-3 flex h-8 w-8 items-baseline justify-center rounded-lg">
            <Logo color={"fill-primary-black dark:fill-primary-white"} />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center justify-between text-primary-black dark:text-primary-white">
              {sections.map((section: Section) => (
                <div
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeInOut", duration: 0.2 }}
                    className={`items-center px-3 text-[18px] leading-none transition-all ${activeSection === section.id ? "font-bold text-neutral-500 dark:text-neutral-400" : ""}`}
                  >
                    {section.label}
                  </motion.button>
                </div>
              ))}
            </div>
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
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
export default Header;
