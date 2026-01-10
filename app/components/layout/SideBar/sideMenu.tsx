import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter, usePathname } from "next/navigation";
import { SideMenuPropsWithSections } from "@/app/lib/Types/HeaderProps";
import { twMerge } from "tailwind-merge";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const SideMenu: React.FC<SideMenuPropsWithSections> = ({
  isOpen,
  onClose,
  sections,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const handleNavigation = (id: string) => {
    onClose();
    if (id === "home") {
      router.push("/");
    } else {
      router.push(`/${id}`);
    }
  };

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/AsharArmoghan" },
    {
      icon: SiLinkedin,
      href: "https://linkedin.com/in/ashar-armoghan-915191100",
    },
    { icon: FaXTwitter, href: "https://x.com/SyedAshar09" },
    { icon: SiFiverr, href: "https://www.fiverr.com/syedashar09" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed z-[60] flex h-[calc(100vh-60px)] w-full flex-col rounded-3xl bg-white/80 pr-6 dark:bg-black/80"
        >
          <div className="flex items-center justify-between px-8 py-12">
            <span className="text-xl font-black tracking-tighter dark:text-white">
              ASHAR.
            </span>
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 transition-transform hover:scale-110 active:scale-95 dark:bg-white/10"
            >
              <VscChromeClose className="h-6 w-6 dark:text-white" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center space-y-8 py-10 pr-6">
            {sections.map((section) => {
              const isActive =
                section.id === "home"
                  ? pathname === "/"
                  : pathname.startsWith(`/${section.id}`);

              return (
                <motion.button
                  key={section.id}
                  variants={itemVariants}
                  onClick={() => handleNavigation(section.id)}
                  className={twMerge(
                    "relative text-4xl font-black tracking-tighter transition-colors",
                    isActive
                      ? "text-black dark:text-white"
                      : "text-black/30 hover:text-black/60 dark:text-white/20 dark:hover:text-white/50",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute top-1/2 -left-8 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-600"
                    />
                  )}
                  {section.label}
                </motion.button>
              );
            })}
          </nav>

          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-col items-center space-y-8 pb-16"
          >
            <div className="flex gap-8">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-black/40 transition-colors hover:text-black dark:text-white/40 dark:hover:text-white"
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <p className="text-sm font-medium tracking-tight text-black/20 dark:text-white/10">
              © 2024 Ashar Armoghan. Built for the future.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
