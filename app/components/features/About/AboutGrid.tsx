"use client";
import React from "react";
import { MotionProps, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { toast } from "react-hot-toast";
import Logo from "@/app/components/ui/Logo/Logo";
import { FaXTwitter } from "react-icons/fa6";
import { ParticleEffect } from "@/app/utils/ParticleEffect";

export const AboutGrid = () => {
  return (
    <div className="min-h-screen px-4 py-12 text-stone-400 dark:text-zinc-300">
      <div className="flex items-center justify-center"></div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.8,
          y: 20,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 200,
        damping: 20,
      }}
      className={twMerge(
        "relative col-span-4 flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-stone-100/60 p-6 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-stone-900/60 dark:shadow-2xl",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 border-blue-500/10 dark:border-blue-500/20 md:col-span-6">
    <div className="relative z-10 flex h-full flex-col">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5">
          <Logo color={"fill-primary-black dark:fill-primary-white"} />
        </div>
        <span className="text-sm font-bold uppercase tracking-tighter text-black opacity-40 dark:text-white">
          Portfolio
        </span>
      </div>
      <h1 className="mb-auto text-4xl font-black leading-[1.1] tracking-tighter text-black dark:text-white md:text-5xl">
        Hi, I&apos;m Ashar. <br />
        <span className="text-black/40 dark:text-white/30">
          I build products for the web and mobile.
        </span>
      </h1>
      <motion.a
        href="mailto:ashararmoghan09@gmail.com"
        whileHover={{ x: 5 }}
        className="mt-8 flex w-fit items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 dark:text-blue-400"
      >
        Work with me <FiArrowRight className="text-lg" />
      </motion.a>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ y: -5, scale: 1.02 }}
      className="col-span-6 bg-gradient-to-br from-white/40 to-green-500/5 dark:from-zinc-900/40 dark:to-green-500/10 md:col-span-3"
    >
      <a
        href="https://www.fiverr.com/syedashar09"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col items-center justify-center gap-4"
      >
        <SiFiverr className="text-5xl text-black/20 transition-colors group-hover:text-green-500 dark:text-white/20" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 transition-opacity group-hover:opacity-100">
          Fiverr
        </span>
      </a>
    </Block>
    <Block
      whileHover={{ y: -5, scale: 1.02 }}
      className="col-span-6 bg-gradient-to-br from-white/40 to-zinc-500/5 dark:from-zinc-900/40 dark:to-white/5 md:col-span-3"
    >
      <a
        href="https://github.com/AsharArmoghan"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col items-center justify-center gap-4"
      >
        <SiGithub className="text-4xl text-black/20 transition-colors group-hover:text-black dark:text-white/20 dark:group-hover:text-white" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 transition-opacity group-hover:opacity-100">
          Github
        </span>
      </a>
    </Block>
    <Block
      whileHover={{ y: -5, scale: 1.02 }}
      className="col-span-6 bg-gradient-to-br from-white/40 to-blue-500/5 dark:from-zinc-900/40 dark:to-blue-500/10 md:col-span-3"
    >
      <a
        href="https://linkedin.com/in/ashar-armoghan-915191100"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col items-center justify-center gap-4"
      >
        <SiLinkedin className="text-3xl text-black/20 transition-colors group-hover:text-blue-600 dark:text-white/20" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 transition-opacity group-hover:opacity-100">
          LinkedIn
        </span>
      </a>
    </Block>
    <Block
      whileHover={{ y: -5, scale: 1.02 }}
      className="col-span-6 bg-gradient-to-br from-white/40 to-black/5 dark:from-zinc-900/40 dark:to-zinc-500/10 md:col-span-3"
    >
      <a
        href="https://x.com/SyedAshar09"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col items-center justify-center gap-4"
      >
        <FaXTwitter className="text-3xl text-black/20 transition-colors group-hover:text-black dark:text-white/20 dark:group-hover:text-white" />
        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 transition-opacity group-hover:opacity-100">
          Twitter
        </span>
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl font-bold leading-tight tracking-tight text-black dark:text-white md:text-3xl">
    <div className="relative z-10 space-y-4">
      <p className="max-w-2xl">
        I turn coffee into code and build{" "}
        <span className="text-blue-600 dark:text-blue-400">
          digital experiences
        </span>{" "}
        .{" "}
      </p>
      <p className="max-w-xl text-sm font-medium leading-relaxed text-black/50 dark:text-white/40 md:text-base">
        Focused on building scalable architectures with React and Flutter,
        creating fluid user experiences for web and mobile. I leverage modern
        tools and creative problem-solving to deliver high-performance
        solutions.
      </p>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center justify-center gap-4 text-center md:col-span-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5">
      <FiMapPin className="text-2xl text-black dark:text-white" />
    </div>
    <div>
      <p className="text-sm font-black uppercase tracking-widest text-black/40 dark:text-white/40">
        Location
      </p>
      <p className="text-lg font-bold text-black dark:text-white">
        India, Delhi
      </p>
    </div>
  </Block>
);

const handleClick = (e: any) => {
  e.preventDefault();
  toast.success("You've been added to the waitlist!");
};

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <div className="relative z-10 flex h-full flex-col gap-6">
      <div>
        <p className="text-sm font-black uppercase tracking-widest text-black/40 dark:text-white/40">
          Newsletter
        </p>
        <p className="text-2xl font-black tracking-tight text-black dark:text-white">
          Join the digital journey.
        </p>
      </div>
      <form
        onSubmit={handleClick}
        className="flex items-center gap-2 rounded-2xl border border-black/5 bg-black/5 p-1.5 transition-colors focus-within:border-blue-500/50 dark:border-white/5 dark:bg-white/5"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-transparent px-4 py-2 text-sm font-medium text-black placeholder:text-black/20 focus:outline-none dark:text-white dark:placeholder:text-white/20"
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-black px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          <FiMail className="text-sm" /> Join
        </motion.button>
      </form>
    </div>
  </Block>
);
