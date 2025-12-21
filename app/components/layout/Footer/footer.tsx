"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { NAV_SECTIONS } from "@/app/lib/data/navigation";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";
import Logo from "@/app/components/ui/Logo/Logo";
import { ParticleEffect } from "@/app/utils/ParticleEffect";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 h-[300px] w-full overflow-hidden bg-stone-500 text-stone-200 dark:bg-stone-800 sm:h-[300px]">
      <ParticleEffect
        grain={{
          opacity: 0.3,
          baseFrequency: 0.5,
          numOctaves: 10,
          mixBlendMode: "mix-blend-screen",
        }}
        sand={{
          opacity: 0.3,
          baseFrequency: 0.5,
          numOctaves: 10,
          parallaxStrength: ["0% 0%", "0% 100%"],
          mixBlendMode: "mix-blend-color-dodge",
        }}
        className="pointer-events-none absolute inset-0 z-[-1] h-full w-full mix-blend-overlay"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-6 pt-6 sm:px-10 lg:px-24">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-2 md:grid-cols-12">
          <div className="col-span-2 flex flex-col gap-2 md:col-span-5 md:gap-4">
            <div className="origin-top-left scale-90 md:scale-100">
              <div className="flex items-center gap-2">
                <Logo
                  color="fill-white"
                  className="relative z-10 mr-2 h-8 w-8 md:h-12 md:w-12"
                />
                <span className="font-ninja text-2xl tracking-wide text-gray-50 dark:text-gray-200 md:text-3xl lg:text-4xl">
                  Ashar Armoghan
                </span>
              </div>
            </div>
            <p className="prose-md prose max-w-md text-[14px] text-stone-200">
              Deployed and functional architecture with real-world data
              handling. Building future landscapes with visionary code.
              Business-ready partners for your next big idea.
            </p>

            <div className="mt-2 flex flex-col gap-2 md:mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Contact
              </h3>
              <ul className="flex flex-col text-[13px] leading-relaxed text-stone-200">
                <li className="flex items-start gap-1">
                  <FiMapPin className="mt-1 shrink-0" />
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="z-10 col-span-1 flex flex-col gap-4 md:col-span-2 md:col-start-8">
            <h3 className="text-sm font-semibold uppercase leading-relaxed tracking-widest text-white/90 md:text-xl">
              Navigation
            </h3>
            <ul className="flex w-full flex-col gap-1 md:gap-2">
              {NAV_SECTIONS.map((section) => (
                <motion.li key={section.id}>
                  <Link
                    href={section.id === "home" ? "/" : `/${section.id}`}
                    className="group flex items-center gap-2 text-[15px] leading-relaxed text-stone-200 transition-colors hover:text-white"
                  >
                    <span className="w-0 bg-red-400 transition-all group-hover:w-3" />
                    {section.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="z-10 col-span-1 flex flex-col gap-2 md:col-span-2 md:col-start-11">
            <h3 className="text-[16px] font-semibold uppercase tracking-widest text-white/90">
              Socials
            </h3>
            <ul className="flex flex-col gap-1 text-[13px] leading-relaxed text-stone-200 md:gap-2">
              <motion.li whileHover={{ scale: 1.1, x: 5 }}>
                <Link
                  href="https://github.com/AsharArmoghan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <SiGithub />
                  GitHub
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, x: 5 }}>
                <Link
                  href="https://linkedin.com/in/ashar-armoghan-915191100"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <SiLinkedin /> LinkedIn
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, x: 5 }}>
                <Link
                  href="https://x.com/SyedAshar09"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-500"
                >
                  <FaXTwitter /> Twitter / X
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, x: 5 }}>
                <Link
                  href="https://www.fiverr.com/syedashar09?public_mode=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-green-500"
                >
                  <SiFiverr /> Fiverr
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, x: 5 }}>
                <Link
                  href="mailto:ashararmoghan09@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-red-400"
                >
                  <FiMail /> Email
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-2 text-[13px] text-stone-200 md:flex-row">
          <p className="antialiased">
            © {new Date().getFullYear()} Ashar Armoghan. All Rights Reserved.
          </p>
          <p className="antialiased">
            Crafted with precision and creative excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
