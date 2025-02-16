"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import { ImageProp } from "@/lib/Types/ProjectProps";
import { spring } from "motion";
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
    <div className="conatiner mx-auto mb-10 flex max-h-[500px] items-center justify-center overflow-x-hidden sm:w-[300px] md:w-[600px] lg:w-[850px]">
      <div className="slideShow relative object-cover">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={currentIndex}
            custom={direction}
            transition={{ type: spring, bounce: 0.4, duration: 0.3 }}
          >
            <Image
              src={image[currentIndex].imgSrc}
              width={image[currentIndex].width}
              height={image[currentIndex].height}
              className="rounded-lg shadow-md"
              alt={`Slide ${currentIndex + 1}`}
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevImage}
          className="prev absolute left-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-black/30 text-[40px] sm:text-[30px]"
        >
          <FaCaretLeft />
        </button>
        <button
          onClick={nextImage}
          className="next absolute right-[16px] top-1/2 translate-y-1/2 cursor-pointer rounded-full border-none bg-black/30 text-[40px] sm:text-[30px]"
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};
