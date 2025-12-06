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

// Extended type that combines with existing ProjectProps
export interface ExtendedProjectProps {
  // Original ProjectProps fields
  id: number;
  title: string;
  description: string;
  author: string;
  image: Array<{
    imgSrc: string;
    width: number;
    height: number;
  }>;
  icons: Array<{
    name: string;
    component: string;
    color: string;
  }>;
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

  // New detailed description fields
  overview: string;
  introduction: string;
  purposeAndGoal: string;
  spotlight: SpotlightSection;
  currentStatus: string;
  technicalLessons: string[];
  nonTechnicalLessons: string[];
  impact: string;
}

// Helper type for accessing descriptions by project ID
export type ProjectDescriptionMap = Record<1 | 2 | 3, ProjectDescription>;

// Helper type for detailed descriptions
export type DetailedDescriptionMap = {
  codeBlog: DetailedProjectDescription;
  dashboard: DetailedProjectDescription;
  portfolio: DetailedProjectDescription;
};

// Enum for Project IDs
export enum ProjectId {
  CodeBlog = 1,
  ReactSalesDashboard = 2,
  Portfolio = 3,
}

// Enum for Project Slugs
export enum ProjectSlug {
  CodeBlog = "code-blog",
  ReactSalesDashboard = "react-sales-dashboard",
  Portfolio = "portfolio",
}

// Mapping between Project IDs and Slugs
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

// Type for project metadata
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

// Type for pagination and filtering
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

// Type for project comparison
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

// Type for learning outcomes
export interface LearningOutcomes {
  projectId: ProjectId;
  technical: string[];
  nonTechnical: string[];
  careerImpact: string;
  applicableToFutureWork: string[];
}

// Type for project statistics
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

// Helper function type for getting descriptions
export type GetProjectDescription = (
  id: ProjectId,
) => ProjectDescription | undefined;
export type GetDetailedDescription = (
  slug: ProjectSlug,
) => DetailedProjectDescription | undefined;

// Type for project showcase sections
export interface ProjectShowcaseSection {
  title: string;
  projects: ProjectId[];
  description?: string;
  sortBy?: "date" | "complexity" | "technologies";
}

// Type for skill mapping
export interface SkillToProjects {
  skill: string;
  projects: ProjectId[];
  level: "beginner" | "intermediate" | "advanced" | "expert";
}
