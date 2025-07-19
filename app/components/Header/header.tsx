"use client";

import "@/app/components/Header/header.css";
import { HeaderProps, Section } from "@/lib/Types/HeaderProps";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "../Theme/theme-toggle";
import MobileNav from "../SideBar/sideNavButton";

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  activeSection,
  sections,
}) => {
  // const [activeSection, setActiveSection] = useState<SectionName>("home");

  return (
    <header className="header top-0 h-0 scroll-smooth border-b bg-primary-white dark:bg-primary-black md:border-none">
      <div className="flex items-center justify-center">
        <div className="dark:bg-primary-black/10 fixed top-[0px] z-10 flex h-[57.5px] flex-row items-center justify-around rounded-[20px] border-black/15 px-3 backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter dark:border-white/15 sm:w-full md:w-[550px] md:border md:p-2.5">
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
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{ scale: 2.5 }}
                    transition={{ ease: "backInOut", duration: 0.3 }}
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
            whileTap={{ scale: 1.89 }}
            animate
            whileHover={{
              rotate: 180,
            }}
            transition={{
              type: "tween",
              visualDuration: 2,
              bounce: 1,
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
