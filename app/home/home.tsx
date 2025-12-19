"use client";
import { motion } from "motion/react";
import ScrambleText from "@/app/utils/ScrambleText";
import LiquidEther from "@/app/utils/LiquidEther";
import tc from "tailwindcss/colors";
import TechScroller from "@/app/components/ui/TechScroller/TechScroller";

export const Home = () => {
  const texts = [
    "Rooted in the belief that design should be both functional and inspiring, every detail is considered to create experiences that resonate deeply.",
  ];

  return (
    <motion.section className="mainSection relative flex h-[700px] flex-grow-0 scroll-smooth pb-4 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[920px]">
      <div className="absolute inset-0 z-0 h-full w-full">
        <LiquidEther
          colors={[tc.violet["600"], tc.fuchsia["300"], tc.violet["300"]]}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={20}
          iterationsViscous={20}
          iterationsPoisson={16}
          resolution={0.7}
          isBounce={true}
          autoDemo={true}
          autoSpeed={0.7}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.7}
        />
      </div>
      <div className="container relative z-20 mx-auto mt-16 flex flex-col items-center justify-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mainText bg-gradient-to-bl from-slate-800 via-orange-100 to-slate-800 bg-clip-text text-center text-6xl font-semibold leading-none tracking-tighter text-transparent sm:h-auto md:text-[80px] md:leading-none lg:h-[95px]"
        >
          {["Building", "Apps", "ready", "to", "grow"].map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { y: 100, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              style={{ display: "inline-block", marginRight: "12px" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <div className="mx-auto mt-8 max-w-xl bg-clip-text text-center text-lg font-semibold leading-none tracking-tight text-transparent text-zinc-500 dark:text-slate-300 md:text-xl">
          <ScrambleText texts={texts} navbarText={texts} />
        </div>
        <TechScroller />
      </div>
    </motion.section>
  );
};
