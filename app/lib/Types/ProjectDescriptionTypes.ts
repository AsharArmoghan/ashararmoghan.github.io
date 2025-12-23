export interface ProjectDescription {
  id: number;
  title: string;
  overview: string;
  introduction: string;
  purposeAndGoal: string;
  spotlight: SpotlightSection;
  currentStatus: string;
  technicalLessons: string[];
  nonTechnicalLessons: string[];
  impact: string;
}

export interface SpotlightSection {
  title: string;
  description: string;
}

export interface Icon {
  name: string;
  component: string;
  color: string;
}

export interface DetailedProjectDescription {
  title: string;
  sections: {
    introduction: string;
    approach: string;
    challenges: Challenge[];
    technologies: string[];
    apiEndpoints: ApiEndpoint[];
    installation: string;
  };
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  route: string;
  description: string;
  authRequired?: boolean;
}

export interface DetailedProjectDescriptions {
  codeBlog: DetailedProjectDescription;
  dashboard: DetailedProjectDescription;
  portfolio: DetailedProjectDescription;
}

export interface ProjectSummaryItem {
  name: string;
  summary: string;
  keySkills: string[];
}

export interface ProjectSummary {
  intro: string;
  projects: ProjectSummaryItem[];
  conclusion: string;
}

export interface ProjectDescriptionsRecord {
  [key: number]: ProjectDescription;
}

export interface ExtendedProjectProps {
  id: number;
  title: string;
  description: string;
  author: string;
  image: Array<{
    imgSrc: string;
    width: number;
    height: number;
  }>;
  icons: Icon[];
  projectRequirement: string[];
  approach: string[];
  challenges: Array<{
    Challenge: string[];
    Solution: string[];
  }>;
  features: string[];
  installation: {
    backend: string;
    frontend: string;
  };
  structure: string;
  setupSteps: string[];
  apiEndpoints: ApiEndpoint[];

  overview: string;
  introduction: string;
  purposeAndGoal: string;
  spotlight: SpotlightSection;
  currentStatus: string;
  technicalLessons: string[];
  nonTechnicalLessons: string[];
  impact: string;
}

export type ProjectDescriptionMap = Record<1 | 2 | 3, ProjectDescription>;

export type DetailedDescriptionMap = {
  codeBlog: DetailedProjectDescription;
  dashboard: DetailedProjectDescription;
  portfolio: DetailedProjectDescription;
};

export enum ProjectId {
  CodeBlog = 1,
  ReactSalesDashboard = 2,
  Portfolio = 3,
}

export enum ProjectSlug {
  CodeBlog = "code-blog",
  ReactSalesDashboard = "react-sales-dashboard",
  Portfolio = "portfolio",
}

export const projectIdToSlug: Record<ProjectId, ProjectSlug> = {
  [ProjectId.CodeBlog]: ProjectSlug.CodeBlog,
  [ProjectId.ReactSalesDashboard]: ProjectSlug.ReactSalesDashboard,
  [ProjectId.Portfolio]: ProjectSlug.Portfolio,
};

export const projectSlugToId: Record<ProjectSlug, ProjectId> = {
  [ProjectSlug.CodeBlog]: ProjectId.CodeBlog,
  [ProjectSlug.ReactSalesDashboard]: ProjectId.ReactSalesDashboard,
  [ProjectSlug.Portfolio]: ProjectId.Portfolio,
};

export interface ProjectMetadata {
  id: ProjectId;
  slug: ProjectSlug;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ProjectFilterOptions {
  technologies?: string[];
  featured?: boolean;
  includeArchived?: boolean;
}

export interface PaginatedProjects {
  projects: ProjectDescription[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ProjectComparisonData {
  project1Id: ProjectId;
  project2Id: ProjectId;
  similarities: string[];
  differences: string[];
  commonTechnologies: string[];
  uniqueTechnologies: {
    project1: string[];
    project2: string[];
  };
}

export interface LearningOutcomes {
  projectId: ProjectId;
  technical: string[];
  nonTechnical: string[];
  careerImpact: string;
  applicableToFutureWork: string[];
}

export interface ProjectStatistics {
  totalProjects: number;
  totalTechnologies: number;
  uniqueTechnologies: string[];
  averageTechnologiesPerProject: number;
  mostUsedTechnologies: Array<{
    technology: string;
    count: number;
  }>;
  projectsByComplexity: {
    simple: string[];
    intermediate: string[];
    complex: string[];
  };
}

export type GetProjectDescription = (
  id: ProjectId,
) => ProjectDescription | undefined;
export type GetDetailedDescription = (
  slug: ProjectSlug,
) => DetailedProjectDescription | undefined;

export interface ProjectShowcaseSection {
  title: string;
  projects: ProjectId[];
  description?: string;
  sortBy?: "date" | "complexity" | "technologies";
}

export interface SkillToProjects {
  skill: string;
  projects: ProjectId[];
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface ImageProp {
  imgSrc: string;
  width: number;
  height: number;
}
