import React from "react";
import { motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter, usePathname } from "next/navigation";
import { SideMenuPropsWithSections } from "@/app/lib/Types/HeaderProps";

const SideMenu: React.FC<SideMenuPropsWithSections> = ({
  isOpen,
  onClose,
  sections,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`fixed left-0 top-2 z-50 h-screen w-72 transform rounded-lg bg-primary-white shadow-lg backdrop-blur-[13px] backdrop-contrast-150 backdrop-opacity-95 backdrop-filter transition-all duration-300 ease-in-out dark:bg-primary-black ${
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
                  onClose();
                  if (section.id === "home") {
                    router.push("/");
                  } else {
                    router.push(`/${section.id}`);
                  }
                }}
                key={section.id}
              >
                <p className="items-center px-3 text-[21px] font-semibold leading-none tracking-tight">
                  {section.label}
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
