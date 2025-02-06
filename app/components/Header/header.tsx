"use client";
import ThemeToggle from "../Theme/theme-toggle";
// import LogoIcon from "@/public/assets/logo1_new.svg";

import "@/app/components/Header/header.css";
import { HeaderProps } from "@/lib/Sections";
import Logo from "../Logo/Logo";
// import Image from "next/image";

export const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
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
  //       if (!isVisible && currentScrollPos <= lastHiddenPos - 20) {
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
      className="header bg-primary-white dark:bg-primary-black sticky top-0 z-10 border-b border-white/15 py-4 text-zinc-50 backdrop-blur-sm backdrop-filter md:border-none"
      // style={{
      //   transition: "transform 0.3s ease-in-out",
      //   transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      // }}
    >
      <div className="container">
        <div className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border-black/15 dark:border-white/15 md:border md:p-2.5">
          <div className="h-8 w-8 rounded-lg">
            <Logo color={"fill-primary-black dark:fill-primary-white"} />
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <button
                className="font-semibold text-black/80 transition hover:text-black/40 dark:text-white/80 dark:hover:text-white/10"
                onClick={() => scrollToSection("home")}
                key="home"
              >
                Home
              </button>
              <button
                className="font-semibold text-black/80 transition hover:text-black/40 dark:text-white/80 dark:hover:text-white/10"
                onClick={() => scrollToSection("projects")}
                key="projects"
              >
                Projects
              </button>
              <button
                className="font-semibold text-black/80 transition hover:text-black/40 dark:text-white/80 dark:hover:text-white/10"
                onClick={() => scrollToSection("articles")}
                key="articles"
              >
                Articles
              </button>
              <button
                className="font-semibold text-black/80 transition hover:text-black/40 dark:text-white/80 dark:hover:text-white/10"
                onClick={() => scrollToSection("about")}
                key="about"
              >
                About
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </header>
  );
};
