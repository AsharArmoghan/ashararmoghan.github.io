"use client";

import React from "react";
import Logo from "@/app/components/ui/Logo/Logo";
import { motion } from "motion/react";
import ThemeToggle from "@/app/components/ui/Theme/theme-toggle";
import MobileNav from "@/app/components/layout/SideBar/sideNavButton";

import { useRouter, usePathname, useParams } from "next/navigation";
import { NAV_SECTIONS } from "@/app/lib/data/navigation";
import { SectionName } from "@/app/lib/Types/HeaderProps";
import { Tabs } from "@/app/components/ui/Tabs";
import { FiArrowLeft } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const slug = params?.slug;
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
    setActiveSection(value as SectionName);
    if (value === "home") {
      router.push("/");
    } else {
      router.push(`/${value}`);
    }
  };

  const handleBack = () => {
    if (pathname.startsWith(`/articles/${slug}`)) {
      router.push("/articles");
    } else if (pathname.startsWith(`/projects/${slug}`)) {
      router.push("/projects");
    } else {
      router.push("/");
    }
  };

  const isBackablePage =
    pathname?.startsWith(`/articles/${slug}`) ||
    pathname?.startsWith(`/projects/${slug}`);

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/login")) {
    return null;
  }

  return (
    <header
      className={twMerge(
        "top-0 h-0 scroll-smooth border-b bg-primary-white dark:bg-primary-black md:border-none",
        slug ? "md:hidden" : "block",
      )}
    >
      <div className="flex items-center justify-center">
        <div className="dark:bg-primary-black/10 fixed top-[30px] z-50 flex h-[57.5px] flex-row items-center justify-around rounded-[20px] border-black/15 px-3 backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter dark:border-white/15 sm:w-full md:w-[550px] md:border md:p-2.5">
          <div className="md:hidden">
            {isBackablePage ? (
              <button
                onClick={handleBack}
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                aria-label="Go back"
              >
                <FiArrowLeft className="h-6 w-6 text-primary-black dark:text-primary-white" />
              </button>
            ) : (
              <MobileNav
                activeSection={activeSection}
                sections={NAV_SECTIONS}
              />
            )}
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
