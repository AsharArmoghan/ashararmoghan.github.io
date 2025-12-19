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
          scale: 0.5,
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-xl border border-zinc-400 bg-stone-500 p-6 dark:border-zinc-800 dark:bg-stone-900",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
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
    <div className="mb-6 flex items-center justify-center p-2">
      <Logo color={"fill-primary-black dark:fill-primary-white"} />
    </div>
    <h1 className="mb-12 text-4xl font-medium leading-tight text-zinc-50">
      Hi, I&apos;m Ashar.{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        I build things for the web.{" "}
      </span>
    </h1>
    <a
      href="mailto:ashararmoghan09@gmail.com"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-500 md:col-span-3"
    >
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
      <a
        href="https://www.fiverr.com/syedashar09?public_mode=true"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-6xl text-white"
      >
        <SiFiverr />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-700 md:col-span-3"
    >
      {" "}
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
      <a
        href="https://github.com/AsharArmoghan"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white dark:text-zinc-300"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#1264bc] md:col-span-3"
    >
      {" "}
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
      <a
        href="https://linkedin.com/in/ashar-armoghan-915191100"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white dark:text-zinc-300"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      {" "}
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
      <a
        href="https://x.com/SyedAshar09"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaXTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug text-zinc-50">
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
    <p>
      I turn coffee into code and build websites .{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        Focused on building scalable architectures with React and Flutter,
        create fluid user experiences for web and mobile.
        <br /> I leverage Framer Motion and third-party integrations to deliver
        high-performance solutions.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
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
    <FiMapPin className="text-3xl text-zinc-50" />
    <p className="text-center text-lg text-neutral-200 dark:text-zinc-200">
      India,Delhi
    </p>
  </Block>
);

const handleClick = (e: any) => {
  toast.success("You have been Added to the List! Thank You");
  console.log(e.target.value);
  e.preventDefault();
};

const EmailListBlock = () => (
  <Block className="col-span-12 text-zinc-50 md:col-span-9">
    {" "}
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
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => {
        handleClick(e);
        e.preventDefault();
      }}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0 dark:border-zinc-700"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-zinc-50 px-3 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </motion.button>
    </form>
  </Block>
);
