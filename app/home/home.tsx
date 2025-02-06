"use client";
import "./home.css";
// import star from "@/public/images/stars2.jpg";, useTransform, useScroll
import { motion } from "framer-motion";
import { useRef } from "react";

export const Home = () => {
  const scrollRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: scrollRef,
  //   offset: ["start end", "end start"],
  // });
  // const backgroundPositionY = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [-800, 800],
  // );
  return (
    <motion.section
      ref={scrollRef}
      // animate={{
      //   backgroundPositionX: star.width,
      // }}
      // transition={{
      //   repeat: Infinity,
      //   duration: 300,
      //   ease: "linear",
      //   type: "keyframes",
      // }}
      className="mainSection flex h-[600px] flex-grow-0 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_70%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] md:h-[800px]"
      // style={{
      //   backgroundImage: `url(${star})`,
      //   backgroundRepeat: "repeat-x",
      //   backgroundPositionY,
      // }}
    >
      <div className="mainGradiant absolute inset-0 bg-primary-white dark:bg-primary-black"></div>
      {/* planet */}
      <div className="planet custom-shadow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 md:h-96 md:w-96"></div>
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
        className="border-primary-light_card absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-50 dark:border-zinc-600 md:h-[580px] md:w-[580px]"
      >
        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-1/2 top-full inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-900 opacity-50 dark:border-slate-50">
          <div className="h-2 w-2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-900 dark:border-slate-50 md:h-[780px] md:w-[780px]"></div>
      </motion.div>
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
        className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-900 opacity-50 dark:border-slate-50 md:h-[950px] md:w-[950px]"
      >
        <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-0 top-1/2 inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-900 dark:border-slate-50">
          <div className="h-2 w-2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        </div>
      </motion.div>
      {/* Rings End */}
      <div className="container relative mt-16">
        <h1 className="mainText bg-[radial-gradient(90%_60%_at_top_left,var(--tw-color-secondary-textSecond),white,var(--tw-color-secondary-textLight))] bg-clip-text text-center text-7xl font-semibold tracking-tighter text-transparent md:text-[100px] md:leading-none">
          Hello, World!
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-zinc-500 dark:text-zinc-500 md:text-xl">
          Live with intention, create with passion, and move with purpose.
        </p>
      </div>
    </motion.section>
  );
};
