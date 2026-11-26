import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { ProjectsSection } from "@/components/sections/projects";
import { WorkflowSection } from "@/components/sections/workflow";
import { TechStackSection } from "@/components/sections/tech-stack";
import { AboutSection } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <EcosystemSection />
        <WorkflowSection />
        <TechStackSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
