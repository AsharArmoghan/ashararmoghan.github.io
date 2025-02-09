"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { ProjectProps } from "@/lib/Types/ProjectProps";
interface CardProps {
  ProjectProps: ProjectProps;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const Card: React.FC<CardProps> = ({ ProjectProps }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative flex items-center justify-center rounded-xl bg-gradient-to-b from-sky-50 via-zinc-200 to-slate-100 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-gray-800 sm:mx-[15px] sm:h-[200px] sm:w-[350px] md:mx-[20px] md:h-[350px] md:w-[600px]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-3 grid place-content-center rounded-xl shadow-lg"
      >
        <Image
          src={ProjectProps.image.imgSrc}
          alt={ProjectProps.title}
          width={ProjectProps.image.width}
          height={ProjectProps.image.height}
          priority
          style={{
            transform: "translateZ(75px)",
            backgroundSize: "cover",
          }}
          className="mx-auto text-4xl sm:w-[350px] md:w-[550px] lg:w-[700px]"
        />
        {/* <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
      </div>
    </motion.div>
  );
};

export default Card;
