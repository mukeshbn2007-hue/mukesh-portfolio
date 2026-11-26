export interface EcosystemPillar {
  id: string;
  name: string;
  tagline: string;
  roleInEcosystem: string;
  projectSlugs: string[];
  status: "Active" | "Developing" | "Roadmap";
  description: string;
  keyCapabilities: string[];
}

export interface EcosystemOverview {
  name: string;
  tagline: string;
  mission: string;
  architecturalModel: string;
  pillars: EcosystemPillar[];
  sharedPrinciples: string[];
}
