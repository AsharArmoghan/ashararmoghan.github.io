"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiYoutube, SiLinkedin, SiAngular } from "react-icons/si";
import Image from "next/image";
import Avatar from "@/public/images/authors/myAvatar.jpeg";
import Logo from "../components/Logo/Logo";
const About = () => {
  return (
    <div className="min-h-screen bg-primary-white px-4 py-12 text-stone-400 dark:bg-primary-black dark:text-zinc-300">
      <div className="">
        <Logo color={"fill-primary-black dark:fill-primary-white"} />
      </div>
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
      <Footer />
    </div>
  );
};
export default About;
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
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-400 bg-zinc-500 p-6 dark:border-zinc-700 dark:bg-zinc-900",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      src={Avatar.src}
      alt="avatar"
      width={56}
      height={56}
      className="mb-4 rounded-full object-cover"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight text-zinc-50">
      Hi, I&apos;m Ashar.{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        I build cool websites like this one.
      </span>
    </h1>
    <a
      href="#"
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
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="https://github.com/AsharArmoghan"
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
      className="col-span-6 bg-blue-400 md:col-span-3"
    >
      <a
        href="https://linkedin.com/in/ashar-armoghan-915191100"
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
      className="col-span-6 bg-red-800 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiAngular />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug text-zinc-50">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl text-zinc-50" />
    <p className="text-center text-lg text-neutral-400 dark:text-zinc-400">
      India,Delhi
    </p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 text-zinc-50 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with 💻|❤️ by{" "}
        <a href="#" className="text-fuchsia-600 hover:underline">
          @AsharArmoghan
        </a>
      </p>
    </footer>
  );
};
