import { MotionValue } from "framer-motion";

export interface ProjectDescription {
  id: number;
  title: string;
  slug: string;
  overview: string;
  image: { imgSrc: string; width: number; height: number }[];
  icons: { name: string; component: string; color: string }[];
}

export interface CardProps {
  i: number;
  project: ProjectDescription;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}
