"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import { ImageProp } from "@/lib/Types/ProjectProps";
// import ResponsiveCanvas from "./ResponsiveImage";
type ImgCardProps = {
  image: ImageProp[];
};
const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : +200,
      opacity: 0,
    };
  },
};
export const ImgCard: React.FC<ImgCardProps> = ({ image }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextImage = () => {
    setDirection(+1);
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className="conatiner mx-auto mb-10 flex max-h-[630px] items-center justify-center overflow-x-hidden sm:w-[420px] md:w-[900px] lg:w-[1200px]">
      <div className="slideShow relative w-full object-cover">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={currentIndex}
            custom={direction}
            transition={{ type: "tween", bounce: 0.4, duration: 0.3 }}
          >
            <button
              className="rounded-lg shadow-md"
              onClick={() => {
                const imgElement = document.getElementById("image");
                if (imgElement) {
                  imgElement.requestFullscreen();
                }
              }}
            >
              <Image
                rel="preload"
                src={image[currentIndex].imgSrc}
                width={image[currentIndex].width}
                height={image[currentIndex].height}
                className="rounded-lg shadow-md"
                id="image"
                alt={`Slide ${currentIndex + 1}`}
              />
            </button>
            <button
              onClick={prevImage}
              className="prev absolute left-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-zinc-400 text-[40px] dark:bg-zinc-600 sm:text-[30px]"
            >
              <FaCaretLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="next absolute right-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-zinc-400 text-[40px] dark:bg-zinc-600 sm:text-[30px]"
            >
              <FaCaretRight className="h-8 w-8" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
