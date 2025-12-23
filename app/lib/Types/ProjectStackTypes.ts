import { MotionValue } from "motion/react";
import { Icon } from "./ProjectDescriptionTypes";

export interface ProjectDescription {
  id: number;
  title: string;
  slug: string;
  overview: string;
  images?: { imgSrc: string; width: number; height: number }[];
  image?: { imgSrc: string; width: number; height: number }[];
  icons: Icon[];
}

export interface CardProps {
  i: number;
  project: ProjectDescription;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}
