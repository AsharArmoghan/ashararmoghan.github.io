"use client";

import { HeaderProps, Section } from "@/app/lib/Types/HeaderProps";
import Logo from "@/app/components/ui/Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "@/app/components/ui/Theme/theme-toggle";
import MobileNav from "@/app/components/layout/SideBar/sideNavButton";

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  activeSection,
  sections,
}) => {
  // const [activeSection, setActiveSection] = useState<SectionName>("home");

  return (
    <header className="header top-0 h-0 scroll-smooth border-b bg-primary-white dark:bg-primary-black md:border-none">
      <div className="flex items-center justify-center">
        <div className="dark:bg-primary-black/10 fixed top-[30px] z-10 flex h-[57.5px] flex-row items-center justify-around rounded-[20px] border-black/15 px-3 backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter dark:border-white/15 sm:w-full md:w-[550px] md:border md:p-2.5">
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
                    animate={{
                      transition: {
                        duration: 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        restDelta: 0.1,
                      },
                    }}
                    layout={true}
                    whileTap={{
                      y: 10,
                      scale: 1.2,
                    }}
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
            animate={{
              transition: {
                type: "tween",
                duration: 0.3,
                velocity: 2,
                restDelta: 0.01,
              },
            }}
            layout={true}
            whileHover={{
              rotate: -90,
            }}
            whileTap={{ rotate: 360 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </header>
  );
};
export default Header;
