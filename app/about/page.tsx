"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
// import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Avatar from "@/public/assets/images/authors/myAvatar.jpeg";
import Logo from "../components/Logo/Logo";
import { FaXTwitter } from "react-icons/fa6";

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
        "col-span-4 rounded-lg border border-zinc-400 bg-gray-500 p-6 dark:border-zinc-600 dark:bg-zinc-800",
        className,
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <Image
      loading="lazy"
      src={Avatar.src}
      alt="avatar"
      width={56}
      height={56}
      className="mb-4 rounded-full object-contain"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight text-zinc-50">
      Hi, I&apos;m Ashar.{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        I build cool websites like this one.
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
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-neutral-400 dark:text-zinc-400">
        I build primarily with React, Angular, Material Design CSS, and Framer
        Motion.
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
const handleClick = (e) => {
  let email = [];
  toast.success("You have been Added to the List! Thank You");
  email = e.target.value;
  console.log(email);
  e.preventDefault();
};
const EmailListBlock = () => (
  <Block className="col-span-12 text-zinc-50 md:col-span-9">
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
