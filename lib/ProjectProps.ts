export interface Image {
  imgSrc: string;
  width: number;
  height: number;
}
export interface ProjectProps {
  id?: number;
  author: string;
  title: string;
  description: string;
  technology?: string;
  image: Image;
}
