export type ProjectCategory =
  | "AI & Multi-Agent Systems"
  | "Audio Intelligence & DSP"
  | "CleanTech & Diagnostics"
  | "Product & Ecosystem Platforms";

export type ProjectStatus =
  | "Active Development"
  | "Prototype & Testing"
  | "Architecture & Design"
  | "Research & Modeling"
  | "Concept & Planning";

export interface ArchitectureStage {
  step: string;
  title: string;
  detail: string;
}

export interface ProjectArchitecture {
  pattern: string;
  overview: string;
  stages: ArchitectureStage[];
}

export interface ProjectTechStack {
  languages: string[];
  frameworks: string[];
  domainAndAi: string[];
  targetOrSupporting: string[];
}

export interface EngineeringDecision {
  decision: string;
  rationale: string;
}

export interface ChallengeAndLearning {
  challenge: string;
  resolutionOrLearning: string;
}

export interface ImplementationBreakdown {
  currentState: string[];
  inProgress: string[];
  planned: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "docs";
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  isFlagship: boolean;
  ecosystemRelation:
    | "MUKIIQ Core Product"
    | "MUKIIQ Initiative"
    | "Independent Engineering Project";
  role: string;
  stageLabel: string;
  summary: string;
  problemStatement: string;
  solution: string;
  architecture: ProjectArchitecture;
  techStack: ProjectTechStack;
  engineeringDecisions: EngineeringDecision[];
  challengesAndLearnings: ChallengeAndLearning[];
  implementation: ImplementationBreakdown;
  specs: TechnicalSpec[];
  links: ProjectLink[];
}
