import { EcosystemOverview } from "@/types/ecosystem";

export const mukiiqEcosystem: EcosystemOverview = {
  name: "MUKIIQ",
  tagline: "Applied AI, Software Engineering & Digital Products",
  mission:
    "MUKIIQ serves as an umbrella technology brand and independent product lab. It unites applied AI exploration, software engineering, and practical user-facing tools under a shared set of architectural standards.",
  architecturalModel:
    "Modular Product Structure: Each initiative under MUKIIQ addresses a distinct domain problem while sharing common web foundations, strict type contracts, and transparent status documentation.",
  sharedPrinciples: [
    "Specification-First Development: Define data schemas, boundaries, and failure cases before writing application code.",
    "Problem-Led Engineering: Focus on real domain challenges—audio separation, workflow orchestration, and engineering growth—over surface polish.",
    "Clear System Boundaries: Separate user-facing web interfaces from compute-heavy AI and data-processing pipelines.",
    "Transparent Maturity Tracking: Clearly distinguish live prototypes from active development and early architectural concepts.",
  ],
  pillars: [
    {
      id: "audio-dsp",
      name: "MUKIIQ Audio",
      tagline: "AI-powered audio stem separation for creators and producers",
      roleInEcosystem:
        "The flagship creative-tool branch of MUKIIQ, focused on making audio stem isolation accessible through the browser.",
      projectSlugs: ["ai-stem-splitter"],
      status: "Active",
      description:
        "A web-accessible audio separation product allowing users to upload tracks and isolate vocals, instrumentals, drums, and other audio stems.",
      keyCapabilities: [
        "Browser-based audio upload and stem preview workflow",
        "AI-driven vocal and instrumental separation pipeline",
        "Live prototype deployed on Vercel",
        "Foundation for expanded multi-stem audio tooling",
      ],
    },
    {
      id: "ai-workforce",
      name: "Intelligent Systems & Orchestration",
      tagline: "Multi-provider agent coordination and cost-aware task routing",
      roleInEcosystem:
        "Applied AI systems work behind AI Manager (also known as AI Dealer), focused on decomposing complex multi-step objectives into reliable, credit-efficient agent workflows.",
      projectSlugs: ["ai-manager"],
      status: "Developing",
      description:
        "Explores supervisor-worker orchestration and model-routing patterns where specialized agents collaborate across providers with cost-aware task allocation.",
      keyCapabilities: [
        "Task graph decomposition for multi-step problems",
        "Cost-aware routing to suitable AI providers and models",
        "Role-scoped worker delegation and context control",
        "Typed output verification and recovery on sub-task failure",
      ],
    },
    {
      id: "rise-platform",
      name: "MUKIIQ RISE",
      tagline: "Engineering roadmaps and systems-building accelerator",
      roleInEcosystem:
        "The capability-building and knowledge initiative under MUKIIQ, helping builders bridge fundamentals and real product engineering.",
      projectSlugs: ["mukiiq-rise"],
      status: "Roadmap",
      description:
        "Organizes structured architecture blueprints, engineering workflows, and milestone-driven project tracks into an open learning initiative.",
      keyCapabilities: [
        "Project-centered systems engineering tracks",
        "Specification and trade-off documentation",
        "Incremental V1 milestone planning",
        "Verification-focused development habits",
      ],
    },
  ],
};
