"use client";
import "./home.css";
import star from "@/public/images/stars2.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Home = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-800, 800],
  );
  return (
    <motion.section
      ref={scrollRef}
      animate={{
        backgroundPositionX: star.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 3000,
        ease: "linear",
        type: "keyframes",
      }}
      className="mainSection flex-grow-0[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] flex h-[500px] md:h-[800px]"
      style={{
        backgroundImage: `url(${star.src})`,
        backgroundRepeat: "repeat-x",
        backgroundPositionY,
      }}
    >
      <div className="mainGradiant absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_70%,transparent)]"></div>
      {/* planet */}
      <div className="planet left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] md:h-96 md:w-96"></div>
      {/* Rings Start*/}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 opacity-50 md:h-[580px] md:w-[580px]"
      >
        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-full inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 opacity-50 md:h-[780px] md:w-[780px]"></div>
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 opacity-50 md:h-[950px] md:w-[950px]"
      >
        <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-0 top-1/2 inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>
      {/* Rings End */}
      <div className="container relative mt-16">
        <h1 className="dark:bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138))]md:text-[168px] bg-emerald-400 bg-[radial-gradient(100%_100%_at_top_left,rgb(0,0,0,.25),rgb(0,0,0,.25),rgb(74,32,138))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent dark:bg-white md:leading-none">
          Hello, World!
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/50 dark:text-muted-foreground md:text-xl">
          Live with intention, create with passion, and move with purpose.
        </p>
      </div>
    </motion.section>
  );
};
