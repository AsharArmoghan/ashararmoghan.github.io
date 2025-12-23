"use client";
import React from "react";
import { MotionProps, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { toast } from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";
import BackButton from "../components/ui/Button/BackButton";
import Link from "next/link";
import TextReveal from "../utils/TextRevel";
import { AboutGrid } from "../components/features/About/AboutGrid";

const AboutClient = () => {
  return (
    <>
      <div className="pointer-events-auto z-10 mt-24 min-h-screen bg-primary-white dark:bg-primary-black">
        <div className="my-6 flex items-center justify-center text-gray-900 dark:text-white">
          <TextReveal delay={0.4}>
            <h2 className="text-5xl font-black leading-none tracking-tight text-black transition-colors dark:text-white lg:text-7xl">
              About Me
            </h2>
          </TextReveal>
        </div>
        <hr className="mx-auto my-2 h-1 w-60 rounded-sm border-0 bg-zinc-300 dark:bg-gray-700 md:my-10"></hr>
        <AboutGrid />
      </div>
    </>
  );
};

export default AboutClient;
