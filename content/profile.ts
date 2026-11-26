import { VERIFIED_LINKS } from "@/lib/constants";

export interface Profile {
  name: string;
  preferredName: string;
  tagline: string;
  role: string;
  bio: string[];
  focusAreas: string[];
  location: string;
  email: string;
  links: {
    github: string;
    portfolioRepo: string;
    liveDemo: string;
  };
  workflowSteps: {
    number: string;
    title: string;
    summary: string;
    description: string;
    outputs: string[];
  }[];
  openSource: {
    heading: string;
    description: string;
    practices: {
      title: string;
      detail: string;
    }[];
  };
  skillCategories: {
    category: string;
    description: string;
    skills: {
      name: string;
      note?: string;
    }[];
  }[];
}

export const profile: Profile = {
  name: "Mukesh B N",
  preferredName: "Mukesh",
  tagline:
    "Building applied AI systems, full-stack web products, and domain-specific software architectures.",
  role: "AI & Software Systems Engineer",
  bio: [
    "I am a Computer Science student and independent builder focused on applied artificial intelligence, full-stack product engineering, and systems thinking. My work centers on taking concrete technical problems and structuring them into clean, usable software—spanning AI workforce orchestration, audio stem separation, and EV battery diagnostics.",
    "Through MUKIIQ, my umbrella product lab and technology ecosystem, I develop and document projects from first principles: defining clear boundaries, prioritizing type safety, and staying transparent about what is deployed versus actively in development.",
  ],
  focusAreas: [
    "AI Workforce Orchestration (AI Manager / AI Dealer)",
    "AI Audio Stem Separation (AI STEM Splitter)",
    "EV Battery Intelligence & CleanTech Diagnostics",
    "Full-Stack Next.js, TypeScript & Python Engineering",
  ],
  location: "India",
  email: VERIFIED_LINKS.email,
  links: {
    github: VERIFIED_LINKS.github,
    portfolioRepo: VERIFIED_LINKS.portfolioRepo,
    liveDemo: VERIFIED_LINKS.mukiiqLive,
  },
  workflowSteps: [
    {
      number: "01",
      title: "Problem Formulation & Schema Design",
      summary: "Clarifying domain constraints before writing implementation code",
      description:
        "Every project begins by isolating the real bottleneck—whether it is multi-step agent handoff errors, overlapping audio frequencies, or battery cell imbalance. I define data structures and TypeScript interfaces early so the system boundaries remain explicit.",
      outputs: ["Domain Data Model", "TypeScript Schemas", "Boundary Contracts"],
    },
    {
      number: "02",
      title: "Subsystem Isolation & Architecture",
      summary: "Keeping web interfaces decoupled from heavy computation",
      description:
        "I structure applications so React Server Components and minimal client interfaces remain fast and maintainable, while compute-heavy AI inference, audio processing, and numerical telemetry logic stay cleanly separated.",
      outputs: ["System Flow Diagram", "Decoupled Modules", "Clean Routing"],
    },
    {
      number: "03",
      title: "Incremental Delivery & Verification",
      summary: "Shipping working vertical slices verified by strict checks",
      description:
        "Rather than overengineering upfront, I build focused V1 implementations, keep external dependencies minimal, and verify changes using strict TypeScript checks, ESLint rules, production builds, and browser testing.",
      outputs: ["Type-Safe Code", "Clean Lint & Build", "Verified UI States"],
    },
    {
      number: "04",
      title: "Agentic Tooling & Transparent Documentation",
      summary: "Using structured AI workflows while maintaining engineering control",
      description:
        "I incorporate AI coding and research workflows into my daily engineering process—auditing architectures, checking edge cases, and maintaining clear documentation that distinguishes live prototypes from planned roadmaps.",
      outputs: ["Architecture Notes", "Honest Status Logs", "Reproducible Repos"],
    },
  ],
  openSource: {
    heading: "Public Engineering & Open-Source Workflow",
    description:
      "I build in public on GitHub and treat repository organization, clear commit history, and honest documentation as core engineering habits.",
    practices: [
      {
        title: "Clean Repository Architecture",
        detail:
          "Structuring Next.js and Python projects with clear separation between typed domain schemas, reusable UI primitives, and content layers.",
      },
      {
        title: "Public Code & Iteration",
        detail:
          "Maintaining public repositories like this portfolio and sharing ongoing technical prototypes as they mature from exploration to working software.",
      },
      {
        title: "Audit-Driven Improvements",
        detail:
          "Regularly auditing accessibility, semantic HTML, bundle weight, and metadata so shipped web projects meet real production standards.",
      },
    ],
  },
  skillCategories: [
    {
      category: "Languages & Core Foundations",
      description:
        "Primary programming languages and web standards used across projects.",
      skills: [
        { name: "TypeScript", note: "Type-safe frontend & application logic" },
        { name: "Python", note: "AI workflows, audio & data analysis" },
        { name: "JavaScript (ESNext)", note: "Browser & Node.js runtime" },
        { name: "HTML5 & Semantic Markup", note: "Accessible document structure" },
        { name: "CSS3 & Design Tokens", note: "Responsive layout systems" },
      ],
    },
    {
      category: "Web & Full-Stack Frameworks",
      description:
        "Modern React and Next.js primitives for responsive, server-rendered applications.",
      skills: [
        { name: "Next.js (App Router)", note: "React Server Components & SSG" },
        { name: "React 19", note: "Component architecture & interactive state" },
        { name: "Tailwind CSS v4", note: "Utility-first styling & design tokens" },
        { name: "Vercel", note: "Deployment & live prototype hosting" },
      ],
    },
    {
      category: "AI, Audio & Domain Engineering",
      description:
        "Applied technical domains actively explored across MUKIIQ and independent builds.",
      skills: [
        { name: "AI Agent Orchestration", note: "Multi-provider task decomposition & worker routing" },
        { name: "Cost-Aware Model Routing", note: "Credit-efficient task-to-model matching" },
        { name: "AI Audio Processing", note: "Stem separation workflows" },
        { name: "EV Battery Diagnostics", note: "Cell delta & SoH modeling concepts" },
      ],
    },
    {
      category: "Engineering Workflow & Tooling",
      description:
        "Version control, verification, and AI-assisted development practices.",
      skills: [
        { name: "Git & GitHub", note: "Version control & public repositories" },
        { name: "ESLint & TypeScript CLI", note: "Static analysis & type checks" },
        { name: "Agentic Dev Workflows", note: "Structured research, audit & verification" },
        { name: "Accessibility & SEO", note: "WCAG contrast, keyboard nav, metadata" },
      ],
    },
  ],
};
