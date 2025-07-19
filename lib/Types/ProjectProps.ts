export interface ProjectProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: ImageProp[];
  icons: Icon[];
  projectRequirement: string[];
  approach: string[];
  challenges: { Challenge: string[]; Solution: string[] }[];
  features: string[];
  structure: string;
  setupSteps?: string[];
  installation: {
    backend: string;
    frontend: string;
  };
  apiEndpoints: {
    method: string;
    route: string;
    description: string;
    authRequired?: string;
    roles?: string[];
  }[];
}

export interface ImageProp {
  imgSrc: string;
  width: number;
  height: number;
}

export interface Icon {
  name: string;
  component: string;
  color: string;
}
