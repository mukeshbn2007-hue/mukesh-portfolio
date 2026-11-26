import { Project } from "@/types/project";
import { VERIFIED_LINKS } from "@/lib/constants";

export const projects: Project[] = [
  {
    slug: "ai-dealer",
    name: "AI Dealer",
    tagline:
      "Hierarchical AI workforce orchestration and structured multi-agent workflow engine",
    category: "AI & Multi-Agent Systems",
    status: "Active Development",
    isFlagship: true,
    ecosystemRelation: "Independent Engineering Project",
    role: "System Architect & Developer",
    stageLabel: "Active Architecture & Prototyping",
    summary:
      "An AI workforce orchestration project exploring how specialized agents can be coordinated into reliable, structured workflows. Instead of relying on monolithic single-prompt interactions, AI Dealer decomposes objectives into explicit task graphs, routes work to specialized agent roles, and validates handoffs.",
    problemStatement:
      "Single-prompt LLM workflows degrade on multi-step engineering and operational tasks due to context saturation, ambiguous tool invocations, and lack of intermediate verification. Effective autonomous systems require division of labor, bounded permissions, and explicit failure handling.",
    solution:
      "AI Dealer models agent execution as a directed workflow graph. An orchestrator breaks user objectives into discrete sub-tasks, assigns them to specialized worker roles (such as research, synthesis, and verification), and tracks completion state across bounded execution steps.",
    architecture: {
      pattern: "Supervisor-Worker Task Graph Orchestration",
      overview:
        "Separates high-level planning, domain-specific worker execution, and output validation into modular stages with explicit handoff contracts.",
      stages: [
        {
          step: "01",
          title: "Objective Decomposition",
          detail: "Translates a complex request into discrete, ordered sub-tasks with clear acceptance criteria.",
        },
        {
          step: "02",
          title: "Role-Based Dispatch",
          detail: "Routes individual tasks to scoped worker prompts equipped only with relevant tools and context.",
        },
        {
          step: "03",
          title: "Bounded Tool Execution",
          detail: "Executes discrete read, search, or analysis actions while isolating intermediate working state.",
        },
        {
          step: "04",
          title: "Output Validation & Retry",
          detail: "Verifies structured outputs against expected constraints before merging results or triggering remediation.",
        },
      ],
    },
    techStack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Next.js", "React"],
      domainAndAi: [
        "Multi-Agent Orchestration",
        "Task Graph Decomposition",
        "Structured Tool Calling",
        "Context Management",
      ],
      targetOrSupporting: ["Schema Validation", "Workflow State Tracking"],
    },
    engineeringDecisions: [
      {
        decision: "Structured task contracts over free-form agent chat",
        rationale:
          "Constraining inter-agent handoffs to defined fields reduces ambiguity and prevents cascading errors across multi-step workflows.",
      },
      {
        decision: "Bounded execution loops with explicit retry limits",
        rationale:
          "Prevents circular reasoning and runaway token consumption by surfacing failures clearly rather than looping indefinitely.",
      },
    ],
    challengesAndLearnings: [
      {
        challenge: "Preventing context bloat when passing intermediate results between agents.",
        resolutionOrLearning:
          "Learned to pass concise structured summaries and artifact references rather than forwarding full raw conversation histories.",
      },
      {
        challenge: "Designing reliable failure recovery when an intermediate sub-task produces partial results.",
        resolutionOrLearning:
          "Structuring tasks around idempotent checkpoints makes re-running failed steps practical without restarting from scratch.",
      },
    ],
    implementation: {
      currentState: [
        "Core system architecture and role taxonomy for workforce orchestration",
        "Task decomposition patterns and structured handoff design",
      ],
      inProgress: [
        "Prototype orchestration loop in Python for multi-step task routing",
        "Validation rules for inspecting worker outputs prior to consolidation",
      ],
      planned: [
        "Web interface for inspecting task graphs, agent states, and execution logs",
        "Isolated execution sandboxes for automated verification steps",
      ],
    },
    specs: [
      { label: "Coordination Pattern", value: "Supervisor-Worker Task Graph" },
      { label: "Primary Focus", value: "AI Workforce Orchestration" },
      { label: "Maturity Stage", value: "Active Architecture & Prototyping" },
      { label: "Core Stack", value: "Python, TypeScript, Next.js" },
    ],
    links: [
      {
        label: "GitHub Profile",
        url: VERIFIED_LINKS.github,
        type: "github",
      },
    ],
  },
  {
    slug: "ai-stem-splitter",
    name: "AI STEM Splitter",
    tagline:
      "AI-powered audio stem separation platform under the MUKIIQ ecosystem",
    category: "Audio Intelligence & DSP",
    status: "Prototype & Testing",
    isFlagship: true,
    ecosystemRelation: "MUKIIQ Core Product",
    role: "Full-Stack & AI Developer",
    stageLabel: "Active Prototype",
    summary:
      "An applied AI audio platform within the MUKIIQ ecosystem built to separate vocals, instrumentals, drums, and other components from mixed audio tracks. It pairs AI-driven audio separation workflows with an accessible web interface for uploading tracks and working with isolated stems.",
    problemStatement:
      "Music creators, editors, and producers often need clean vocals, instrumentals, or drum tracks extracted from mixed audio. Traditional EQ and phase-inversion approaches leave heavy frequency bleed and acoustic artifacts whenever instruments share overlapping frequency bands.",
    solution:
      "AI STEM Splitter applies machine learning source separation workflows to isolate distinct audio stems through a streamlined web interface, removing the friction of complex desktop DAW plugins.",
    architecture: {
      pattern: "Web Upload Client & AI Audio Separation Pipeline",
      overview:
        "Decouples the browser-based upload and playback interface from Python-based audio preprocessing and neural source separation.",
      stages: [
        {
          step: "01",
          title: "Audio Ingestion",
          detail: "User uploads source audio tracks through the Next.js web interface.",
        },
        {
          step: "02",
          title: "Audio Preprocessing",
          detail: "Normalizes audio format, channels, and sampling parameters for consistent model input.",
        },
        {
          step: "03",
          title: "AI Stem Separation",
          detail: "Applies machine learning separation models to isolate vocal and instrumental components.",
        },
        {
          step: "04",
          title: "Stem Delivery & Playback",
          detail: "Exposes separated audio stems for preview and export in a clean browser interface.",
        },
      ],
    },
    techStack: {
      languages: ["TypeScript", "Python"],
      frameworks: ["Next.js", "React"],
      domainAndAi: ["AI Audio Separation", "Audio Processing", "Web Interface"],
      targetOrSupporting: ["Vercel Deployment", "Multi-track Playback Controls"],
    },
    engineeringDecisions: [
      {
        decision: "Decoupling web UI from Python audio inference processing",
        rationale:
          "Keeping heavy audio computation outside the Next.js UI layer preserves responsive frontend interactions and simplifies independent scaling.",
      },
      {
        decision: "Focused workflow around clear stem previews",
        rationale:
          "Creators need immediate audible validation of vocal and instrumental isolation before exporting files.",
      },
    ],
    challengesAndLearnings: [
      {
        challenge: "Handling large audio payloads and processing latency cleanly in web workflows.",
        resolutionOrLearning:
          "Recognized the importance of asynchronous job status feedback and standardized audio formats prior to inference.",
      },
      {
        challenge: "Reducing residual bleed between vocals and overlapping midrange instruments.",
        resolutionOrLearning:
          "Evaluated model trade-offs between processing time and separation clarity across varied genres.",
      },
    ],
    implementation: {
      currentState: [
        "Live MUKIIQ web application prototype deployed on Vercel",
        "Core upload and stem separation product interface in Next.js and React",
        "Python-based AI audio separation exploration",
      ],
      inProgress: [
        "Refining separation quality and multi-stem playback controls",
        "Improving job queuing and user feedback during audio processing",
      ],
      planned: [
        "Expanded 4-stem isolation workflows (vocals, drums, bass, other)",
        "Batch stem export packaging",
      ],
    },
    specs: [
      { label: "Ecosystem", value: "MUKIIQ Core Product" },
      { label: "Domain", value: "AI Audio Source Separation" },
      { label: "Maturity Stage", value: "Live Prototype (mukiiq.vercel.app)" },
      { label: "Core Stack", value: "Next.js, React, Python, AI" },
    ],
    links: [
      {
        label: "Live Prototype",
        url: VERIFIED_LINKS.mukiiqLive,
        type: "live",
      },
      {
        label: "GitHub Profile",
        url: VERIFIED_LINKS.github,
        type: "github",
      },
    ],
  },
  {
    slug: "gridbee",
    name: "GridBee",
    tagline:
      "Intelligent energy monitoring, consumption analysis, and grid decision support",
    category: "Energy & IoT Systems",
    status: "Architecture & Design",
    isFlagship: false,
    ecosystemRelation: "Independent Engineering Project",
    role: "System Designer & Developer",
    stageLabel: "In Development",
    summary:
      "An intelligent energy systems project exploring smarter monitoring, data analysis, and actionable insights for energy consumption. GridBee focuses on turning raw power and usage telemetry into clear diagnostics for identifying inefficiencies and supporting practical energy decisions.",
    problemStatement:
      "Energy systems and connected equipment generate large volumes of raw usage data, yet operators and end users often lack straightforward tools to interpret load patterns, spot inefficiencies early, and make informed consumption decisions.",
    solution:
      "GridBee explores a data-driven monitoring and analytics pipeline that structures time-series energy readings, highlights abnormal consumption patterns, and surfaces interpretable system intelligence.",
    architecture: {
      pattern: "Time-Series Energy Telemetry & Analysis Pipeline",
      overview:
        "Structures raw energy measurements into normalized chronological streams for baseline profiling and anomaly detection.",
      stages: [
        {
          step: "01",
          title: "Telemetry Collection",
          detail: "Ingests structured power, voltage, and consumption time-series records.",
        },
        {
          step: "02",
          title: "Normalization & Profiling",
          detail: "Aligns timestamps and computes rolling consumption baselines and peak load windows.",
        },
        {
          step: "03",
          title: "Inefficiency & Anomaly Detection",
          detail: "Evaluates deviations against historical usage patterns to flag irregular demand.",
        },
        {
          step: "04",
          title: "Decision Interface",
          detail: "Presents concise operational insights and trend visualizations.",
        },
      ],
    },
    techStack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Next.js"],
      domainAndAi: [
        "Energy Systems",
        "Time-Series Data Analysis",
        "Anomaly Modeling",
      ],
      targetOrSupporting: ["Telemetry Ingestion", "Monitoring Dashboards"],
    },
    engineeringDecisions: [
      {
        decision: "Prioritizing interpretable statistical baselines before complex black-box models",
        rationale:
          "Energy operators need transparent explanations for why an anomaly or peak alert was triggered before trusting automated recommendations.",
      },
    ],
    challengesAndLearnings: [
      {
        challenge: "Handling irregular sampling intervals and missing readings in energy logs.",
        resolutionOrLearning:
          "Learned to normalize time-series windows explicitly before calculating aggregate load metrics to avoid distorted averages.",
      },
    ],
    implementation: {
      currentState: [
        "Problem domain definition and energy intelligence system architecture",
        "Exploratory data analysis workflows in Python",
      ],
      inProgress: [
        "Modeling load-profiling and inefficiency indicators on sample energy datasets",
        "Designing clean monitoring views for power telemetry trends",
      ],
      planned: [
        "Real-time sensor or smart-meter ingestion adapters",
        "Automated forecasting for peak demand periods",
      ],
    },
    specs: [
      { label: "Domain", value: "Intelligent Energy Systems" },
      { label: "Core Approach", value: "Time-Series Analysis & Monitoring" },
      { label: "Maturity Stage", value: "In Development" },
      { label: "Core Stack", value: "Python, Data Analysis, AI, Next.js" },
    ],
    links: [
      {
        label: "GitHub Profile",
        url: VERIFIED_LINKS.github,
        type: "github",
      },
    ],
  },
  {
    slug: "ev-battery-analyser",
    name: "EV Battery Intelligence",
    tagline:
      "EV battery telemetry analysis, cell diagnostics, and State of Health exploration",
    category: "CleanTech & Diagnostics",
    status: "Research & Modeling",
    isFlagship: false,
    ecosystemRelation: "Independent Engineering Project",
    role: "Research & Systems Developer",
    stageLabel: "Research & Modeling",
    summary:
      "An analytical software project exploring electric vehicle battery pack diagnostics. Focuses on evaluating cell voltage spread, thermal trends, and charge/discharge behavior to model State of Health (SoH) and uncover early indicators of battery degradation.",
    problemStatement:
      "Battery packs degrade unevenly across individual cells due to thermal gradients, load cycles, and internal resistance growth. High-level dashboard percentages often mask cell imbalance or localized thermal stress until pack performance drops noticeably.",
    solution:
      "EV Battery Intelligence investigates telemetry parsing and diagnostic modeling pipelines that break pack logs down to per-cell trends, helping surface cell variance, thermal anomalies, and health degradation indicators.",
    architecture: {
      pattern: "Battery Telemetry Feature Extraction & Diagnostic Pipeline",
      overview:
        "Processes chronological battery management logs into charge/discharge segments, cell delta metrics, and diagnostic summaries.",
      stages: [
        {
          step: "01",
          title: "BMS Log Ingestion",
          detail: "Parses structured voltage, current, and temperature telemetry records.",
        },
        {
          step: "02",
          title: "Cycle Segmentation",
          detail: "Separates telemetry timelines into charging, discharging, and rest phases.",
        },
        {
          step: "03",
          title: "Cell & Thermal Analysis",
          detail: "Tracks min-max cell voltage spread and temperature deltas under varying loads.",
        },
        {
          step: "04",
          title: "Health & Diagnostic Reporting",
          detail: "Synthesizes capacity retention indicators and outlier cell warnings.",
        },
      ],
    },
    techStack: {
      languages: ["Python", "TypeScript"],
      frameworks: ["Next.js"],
      domainAndAi: [
        "Battery Telemetry Modeling",
        "State of Health (SoH) Concepts",
        "Data Analysis",
      ],
      targetOrSupporting: ["Diagnostic Visualizations", "Cycle Dataset Parsing"],
    },
    engineeringDecisions: [
      {
        decision: "Tracking per-cell voltage spread alongside aggregate pack metrics",
        rationale:
          "Overall pack health and usable range are constrained by the weakest cells; per-cell variance reveals imbalance far earlier than pack averages.",
      },
    ],
    challengesAndLearnings: [
      {
        challenge: "Separating true capacity degradation signals from transient load voltage sag.",
        resolutionOrLearning:
          "Learned to isolate rest-period voltage measurements and consistent load intervals when comparing battery health across cycles.",
      },
    ],
    implementation: {
      currentState: [
        "Research into lithium-ion degradation indicators and BMS telemetry parameters",
        "Diagnostic pipeline architecture and metric definitions",
      ],
      inProgress: [
        "Prototyping Python analysis routines for voltage spread and thermal trends",
        "Designing interpretable health summary views",
      ],
      planned: [
        "Interactive web analyzer for uploading and inspecting sample BMS telemetry logs",
        "Comparative cycle degradation tracking across pack histories",
      ],
    },
    specs: [
      { label: "Domain", value: "EV Battery Diagnostics & CleanTech" },
      { label: "Focus Metrics", value: "SoH, Cell Delta-V, Thermal Spread" },
      { label: "Maturity Stage", value: "Research & Modeling" },
      { label: "Core Stack", value: "Python, Data Analysis, TypeScript" },
    ],
    links: [
      {
        label: "GitHub Profile",
        url: VERIFIED_LINKS.github,
        type: "github",
      },
    ],
  },
  {
    slug: "mukiiq-rise",
    name: "MUKIIQ RISE",
    tagline:
      "Structured engineering roadmaps and practical systems-building platform initiative",
    category: "Product & Ecosystem Platforms",
    status: "Architecture & Design",
    isFlagship: false,
    ecosystemRelation: "MUKIIQ Initiative",
    role: "Initiative Lead & Architect",
    stageLabel: "Concept & Architecture",
    summary:
      "A product and educational initiative within the MUKIIQ ecosystem focused on helping builders move from isolated tutorials to structured, real-world software engineering. RISE emphasizes architecture thinking, specification-first workflows, and project-based technical growth.",
    problemStatement:
      "Many learners and early builders know basic syntax but struggle to architect complete systems, reason about trade-offs, structure repositories cleanly, and ship cohesive technical products.",
    solution:
      "MUKIIQ RISE organizes practical engineering workflows, system design patterns, and milestone-driven project tracks into a structured platform under the MUKIIQ umbrella.",
    architecture: {
      pattern: "Structured Curriculum & Project Blueprint Platform",
      overview:
        "Pairs modular technical guides with explicit architecture checklists and progressive project milestones.",
      stages: [
        {
          step: "01",
          title: "Domain Track Selection",
          detail: "Maps foundational concepts to practical tracks across AI, full-stack, and data systems.",
        },
        {
          step: "02",
          title: "Architecture Blueprints",
          detail: "Breaks projects down into data schemas, system boundaries, and failure modes.",
        },
        {
          step: "03",
          title: "Milestone Execution",
          detail: "Guides builders through incremental V1 delivery with verification checks.",
        },
        {
          step: "04",
          title: "Portfolio & Case Study Output",
          detail: "Encourages documenting real engineering decisions and trade-offs transparently.",
        },
      ],
    },
    techStack: {
      languages: ["TypeScript"],
      frameworks: ["Next.js", "React", "Tailwind CSS"],
      domainAndAi: ["Technical Architecture", "Systems Learning Design"],
      targetOrSupporting: ["Structured Documentation", "Interactive Roadmaps"],
    },
    engineeringDecisions: [
      {
        decision: "Centering content on real architectural decisions rather than syntax memorization",
        rationale:
          "Modern engineering relies on understanding boundaries, data flow, and verification—skills that transfer across tools and frameworks.",
      },
    ],
    challengesAndLearnings: [
      {
        challenge: "Balancing technical depth with approachable entry points for growing developers.",
        resolutionOrLearning:
          "Structured concepts around clear problem-solution pairs and incremental system milestones.",
      },
    ],
    implementation: {
      currentState: [
        "Ecosystem positioning and initiative scope defined under MUKIIQ",
        "Core structural concepts for project-based engineering tracks",
      ],
      inProgress: [
        "Defining initial system blueprints and roadmap taxonomy",
        "Structuring case-study documentation standards",
      ],
      planned: [
        "Dedicated web portal under the MUKIIQ ecosystem",
        "Public starter templates and engineering verification checklists",
      ],
    },
    specs: [
      { label: "Ecosystem", value: "MUKIIQ Initiative" },
      { label: "Focus", value: "Engineering Workflow & Capability Growth" },
      { label: "Maturity Stage", value: "Architecture & Design" },
      { label: "Core Stack", value: "Next.js, React, TypeScript, Tailwind CSS" },
    ],
    links: [
      {
        label: "GitHub Profile",
        url: VERIFIED_LINKS.github,
        type: "github",
      },
    ],
  },
];
