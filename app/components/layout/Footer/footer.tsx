"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_SECTIONS } from "@/app/lib/data/navigation";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin } from "react-icons/fi";
import Logo from "@/app/components/ui/Logo/Logo";
import { ParticleEffect } from "@/app/utils/ParticleEffect";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 h-[500px] w-full overflow-hidden bg-stone-500 text-stone-200 dark:bg-stone-800 md:h-[400px]">
      <ParticleEffect
        grain={{
          opacity: 0.5,
          baseFrequency: 0.5,
          numOctaves: 10,
          mixBlendMode: "mix-blend-screen",
        }}
        sand={{
          opacity: 0.4,
          baseFrequency: 0.5,
          numOctaves: 10,
          parallaxStrength: ["0% 0%", "0% 100%"],
          mixBlendMode: "mix-blend-color-dodge",
        }}
        className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-10 py-12 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 justify-between gap-12 md:grid-cols-12 md:gap-8">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="origin-top-left scale-75 md:scale-100">
              <div className="flex items-center gap-2">
                <Logo
                  color="fill-white"
                  className="relative z-10 mr-3 h-12 w-12"
                />
                <span className="font-ninja text-5xl tracking-wide text-gray-50 dark:text-gray-200">
                  Ashar Armoghan
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-200 antialiased">
              Deployed and functional architecture with real-world data
              handling. Building future landscapes with visionary code.
              Business-ready partners for your next big idea.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Contact
              </h3>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-stone-200">
                <li className="flex items-start gap-2">
                  <FiMapPin className="mt-1 shrink-0" />
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2 md:col-start-8">
            <h3 className="text-xl font-semibold uppercase leading-relaxed tracking-widest text-white/90 antialiased grayscale">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <Link
                    href={section.id === "home" ? "/" : `/${section.id}`}
                    className="text-md group flex items-center gap-2 leading-relaxed text-stone-200 antialiased transition-colors hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-red-400 transition-all group-hover:w-3" />
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2 md:col-start-11">
            <h3 className="text-xl font-semibold uppercase tracking-widest text-white/90 antialiased grayscale">
              Socials
            </h3>
            <ul className="text-md flex flex-col gap-4 leading-relaxed text-stone-200 antialiased">
              <li>
                <a
                  href="https://github.com/AsharArmoghan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-slate-500"
                >
                  <SiGithub />
                  <p className="antialiased">GitHub</p>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ashar-armoghan-915191100"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <SiLinkedin /> <p className="">LinkedIn</p>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SyedAshar09"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-700"
                >
                  <FaXTwitter /> <p className="antialiased">Twitter / X</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/syedashar09?public_mode=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-green-500"
                >
                  <SiFiverr /> <p className="antialiased">Fiverr</p>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ashararmoghan09@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FiMail /> <p className="antialiased">Email</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-white/10 pb-2 pt-8 text-xs text-stone-200 md:flex-row">
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
