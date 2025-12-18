export interface LegacyProjectData {
  title: string;
  overview: string;
  image: { imgSrc: string; width: number; height: number }[];
  icons: { name: string; component: string; color: string }[];
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

export interface ModernProjectData {
  title: string;
  slug: string;
  overview: string;
  image: { imgSrc: string; width: number; height: number }[];
  icons: { name: string; component: string; color: string }[];
  introduction?: string;
  purposeAndGoal?: string;
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
  currentStatus?: string;
  technicalLessons?: string[];
  nonTechnicalLessons?: string[];
  impact?: string;
  liveUrl?: string;
  sections?: {
    introduction: string;
    approach: {
      overview: string;
      points: { label: string; description: string }[];
      conclusion?: string;
    };
    challenges: { challenge: string; solution: string }[];
    technologies: string[];
    features?: string[];
    installation: string;
  };
}
