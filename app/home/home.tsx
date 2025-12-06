"use client";
import "./home.css";
import { motion } from "framer-motion";
import planet from "@/public/assets/images/planet.png";
import ScrambleText from "../utils/ScrambleText";

export const Home = () => {
  const texts = [
    " Live with intention, create with passion, and move with purpose. ",
  ];
  // const scrollRef = useRef(null);   // style={{
  //   backgroundImage: `url(${star})`,
  //   backgroundRepeat: "repeat-x",
  //   backgroundPositionY,
  // }}

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
    <motion.section className="mainSection flex h-[700px] flex-grow-0 scroll-smooth pb-4 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[920px]">
      <div className="mainGradiant absolute inset-0 bg-primary-white dark:bg-primary-black"></div>
      {/* planet */}
      <div
        className="planet left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-96 md:w-96"
        style={{
          backgroundImage: `url(${planet.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
        className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-900 opacity-50 dark:border-slate-50 md:h-[580px] md:w-[580px]"
      >
        <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        <div className="absolute left-1/2 top-full flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-900 opacity-50 dark:border-slate-50">
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
          rotate: "-1turn",
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
        <div className="absolute left-0 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-900 dark:border-slate-50">
          <div className="h-2 w-2 rounded-full bg-primary-black dark:bg-primary-white"></div>
        </div>
      </motion.div>
      {/* Rings End */}
      <div className="container relative mt-16">
        <h1 className="mainText bg-gradient-to-bl from-slate-800 via-orange-100 to-slate-800 bg-clip-text text-center text-6xl font-semibold leading-none tracking-tighter text-transparent sm:h-auto md:text-[80px] md:leading-none lg:h-[95px]">
          Building Scalable Web Solutions
        </h1>
        <div className="mt-35 mx-auto max-w-xl bg-clip-text text-center text-lg text-transparent text-zinc-500 dark:text-slate-300 md:text-xl">
          <ScrambleText
            texts={texts}
            color="text-off-white"
            font="font-semibold leading-none tracking-tight"
            navbarText={texts}
          />
        </div>
      </div>
    </motion.section>
  );
};
