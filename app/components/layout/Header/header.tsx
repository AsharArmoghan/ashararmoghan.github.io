"use client";

import React from "react";
import Logo from "@/app/components/ui/Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "@/app/components/ui/Theme/theme-toggle";
import MobileNav from "@/app/components/layout/SideBar/sideNavButton";

import { useRouter, usePathname } from "next/navigation";
import { NAV_SECTIONS } from "@/app/lib/data/navigation";
import { SectionName } from "@/app/lib/Types/HeaderProps";
import { Tabs } from "@/app/components/ui/Tabs";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<SectionName>("home");

  React.useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
    } else if (pathname.startsWith("/articles")) {
      setActiveSection("articles");
    } else if (pathname.startsWith("/about")) {
      setActiveSection("about");
    }
  }, [pathname]);

  const handleTabChange = (value: string) => {
    // Optimistic update
    setActiveSection(value as SectionName);
    if (value === "home") {
      router.push("/");
    } else {
      router.push(`/${value}`);
    }
  };

  return (
    <header className="header top-0 h-0 scroll-smooth border-b bg-primary-white dark:bg-primary-black md:border-none">
      <div className="flex items-center justify-center">
        <div className="dark:bg-primary-black/10 fixed top-[30px] z-50 flex h-[57.5px] flex-row items-center justify-around rounded-[20px] border-black/15 px-3 backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter dark:border-white/15 sm:w-full md:w-[550px] md:border md:p-2.5">
          <div className="md:hidden">
            <MobileNav activeSection={activeSection} sections={NAV_SECTIONS} />
          </div>
          <div className="mb-3 flex h-8 w-8 items-baseline justify-center rounded-lg">
            <Logo color={"fill-primary-black dark:fill-primary-white"} />
          </div>
          <div className="hidden md:block">
            <Tabs value={activeSection} onValueChange={handleTabChange}>
              <Tabs.List className="flex items-center justify-between text-primary-black dark:text-primary-white">
                {NAV_SECTIONS.map((section) => (
                  <Tabs.Trigger
                    key={section.id}
                    value={section.id}
                    className="text-[18px] leading-none"
                  >
                    {section.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </Tabs>
          </div>
          <motion.div
            className="items-center"
            animate={{
              transition: {
                type: "tween",
                duration: 0.3,
                velocity: 1.5,
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
