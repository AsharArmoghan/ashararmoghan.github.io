export interface Image {
  imgSrc: string;
  width: number;
  height: number;
}

export interface ProjectProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: Image;
  icons: {
    name: string;
    component: React.ComponentType<{ className?: string }>;
    color: string;
  }[];
}
