import { Icon } from "./ProjectDescriptionTypes";

export interface LegacyProjectData {
  title: string;
  overview: string;
  image: { imgSrc: string; width: number; height: number }[];
  icons: Icon[];
  introduction?: string;
  purposeAndGoal?: string;
  spotlight?: { title: string; description: string };
  currentStatus?: string;
  technicalLessons?: string[];
  nonTechnicalLessons?: string[];
  impact?: string;
  sections?: {
    introduction: string;
    approach: {
      overview: string;
      points: { label: string; description: string }[];
      conclusion?: string;
    };
    challenges: { challenge: string; solution: string }[];
    technologies: string[];
    apiEndpoints?: {
      method: string;
      route: string;
      description: string;
      authRequired?: boolean;
    }[];
    installation: string;
  };
}

export interface ProjectData {
  id: number;
  title: string;
  fullTitle?: string;
  slug: string;
  liveUrl?: string;
  summary?: string;
  keySkills?: string[];
  overview: string;
  description?: string;
  introduction?: string;
  purposeAndGoal?: string;
  images: { imgSrc: string; width: number; height: number }[];
  image?: { imgSrc: string; width: number; height: number }[];
  icons: Icon[];
  features?: string[];
  spotlight?: {
    title: string;
    description?: string;
    sections?: {
      overview: string;
      challenge: {
        title: string;
        description?: string;
        points: { name: string; description: string }[];
      };
      solution: {
        title: string;
        description?: string;
        backend?: {
          title: string;
          points: { label: string; description: string }[];
        };
        frontend?: {
          title: string;
          points: { label: string; description: string }[];
        };
        appStructure?: {
          title: string;
          points: { label: string; description: string }[];
        };
        performanceStrategy?: {
          title: string;
          points: { label: string; description: string }[];
        };
      };
      keyTakeaway: string;
    };
  };
  approach?: {
    overview: string;
    points: { label: string; description: string }[];
    conclusion?: string;
  };
  challenges?: { challenge: string; solution: string }[];
  technologies?: string[];
  apiEndpoints?: {
    method: string;
    route: string;
    description: string;
    authRequired?: boolean;
  }[];
  currentStatus?: string;
  technicalLessons?: string[];
  nonTechnicalLessons?: string[];
  impact?: string;
  installation?: string;
}
