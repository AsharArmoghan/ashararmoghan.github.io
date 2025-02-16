export interface ProjectProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: ImageProp[];
  icons: {
    name: string;
    component: React.ComponentType<{ className?: string }>;
    color: string;
  }[];
  projectRequirement: string[];
  approach: string[];
  challenges: { Challenge: string[]; Solution: string[] }[];
  features: string[];
  structure: string;
  setupSteps: string[];
  installation: {
    backend: string;
    frontend: string;
  };
  apiEndpoints: { method: string; route: string; description: string }[];
}

export interface ImageProp {
  imgSrc: string;
  width: number;
  height: number;
}
