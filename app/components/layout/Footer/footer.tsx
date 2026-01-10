"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import { NAV_SECTIONS } from "@/app/lib/data/navigation";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import Logo from "@/app/components/ui/Logo/Logo";
import { usePathname } from "next/navigation";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isLogin = pathname?.startsWith("/login");

  const { scrollYProgress } = useScroll({
    target: isAdmin || isLogin ? undefined : containerRef,
    offset: ["start end", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const rotateXTop = useTransform(smoothProgress, [0, 1], [-90, 0]);
  const rotateXBottom = useTransform(smoothProgress, [0, 1], [90, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  if (isAdmin || isLogin) return null;

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AsharArmoghan",
      icon: <SiGithub />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ashar-armoghan-915191100",
      icon: <SiLinkedin />,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      href: "https://x.com/SyedAshar09",
      icon: <FaXTwitter />,
      color: "hover:text-blue-500",
    },
    {
      name: "Fiverr",
      href: "https://www.fiverr.com/syedashar09?public_mode=true",
      icon: <SiFiverr />,
      color: "hover:text-green-500",
    },
    {
      name: "Email",
      href: "mailto:ashararmoghan09@gmail.com",
      icon: <FiMail />,
      color: "hover:text-red-400",
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className="h-[500px] w-full bg-transparent sm:h-[450px]"
      />

      <footer className="fixed bottom-0 z-0 h-[500px] w-full bg-zinc-950 text-zinc-400 sm:h-[450px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_50%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
        </div>

        <motion.div
          style={{
            perspective: "1500px",
            opacity,
            scale,
          }}
          className="relative flex h-full flex-col"
        >
          <motion.div
            style={{
              rotateX: rotateXTop,
              transformOrigin: "bottom",
            }}
            className="flex flex-1 flex-col justify-end bg-zinc-950/80 px-6 pb-6 backdrop-blur-sm sm:px-10 sm:pb-1 lg:px-24"
          >
            <div className="mb-8 grid grid-cols-1 gap-12 sm:mb-1 sm:gap-6 sm:pt-2 md:grid-cols-12">
              <div className="col-span-1 md:col-span-12">
                <div className="mb-4 flex items-center gap-3">
                  <Logo color="fill-white" className="h-10 w-10" />
                  <span className="text-3xl font-black tracking-tighter text-white lg:text-5xl">
                    LETS CONNECT
                  </span>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed font-medium text-zinc-500">
                  Crafting digital experiences with precision and passion.
                  Whether you have a specific project in mind or just want to
                  chat about tech, feel free to reach out.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{
              rotateX: rotateXBottom,
              transformOrigin: "top",
            }}
            className="flex flex-1 flex-col bg-zinc-950 px-6 pt-6 sm:px-10 lg:px-24"
          >
            <div className="grid grid-cols-2 gap-8 pb-2 sm:gap-6 md:grid-cols-12">
              <div className="col-span-2 flex flex-col gap-6 md:col-span-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
                    Navigation
                  </h3>
                  <nav className="flex flex-wrap gap-x-6 gap-y-2">
                    {NAV_SECTIONS.map((section) => (
                      <Link
                        key={section.id}
                        href={section.id === "home" ? "/" : `/${section.id}`}
                        className="group flex items-center gap-1 text-sm font-bold text-zinc-400 transition-colors hover:text-white"
                      >
                        {section.label}
                        <FiArrowUpRight className="opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
                    Location
                  </h3>
                  <p className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                    <FiMapPin className="text-blue-500" /> New Delhi, India
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex flex-col gap-2 md:col-span-6 md:col-start-7">
                <h3 className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
                  Social Presence
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group flex items-center gap-3 text-sm font-bold transition-all ${social.color}`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 transition-colors group-hover:bg-zinc-800">
                        {social.icon}
                      </span>
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col items-center justify-between gap-4 border-t border-zinc-900 py-8 md:flex-row">
              <p className="text-[11px] font-bold tracking-widest text-zinc-700 uppercase">
                © {new Date().getFullYear()} ASHAR ARMOGHAN. ALL RIGHTS
                RESERVED.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-bold tracking-widest text-zinc-700 uppercase">
                  BACK TO TOP ↑
                </span>
                <p className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase">
                  STAY HUNGRY. STAY FOOLISH.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
