import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitHubIcon } from "@/components/ui/icons";
import { VERIFIED_LINKS } from "@/lib/constants";

interface HeroProps {
  githubUrl?: string;
}

export function Hero({ githubUrl = VERIFIED_LINKS.github }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-24 border-b border-zinc-200 bg-white">
      <Container size="default">
        {/* Role & Ecosystem Context Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
          <span className="font-mono text-xs text-zinc-700">
            AI &amp; Software Systems Builder · Founder, MUKIIQ
          </span>
        </div>

        {/* Main Title & Positioning */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.12]">
            Designing applied AI systems, full-stack software, and domain architectures.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
            I am Mukesh B N. I build practical software systems spanning AI workforce orchestration (<span className="text-zinc-900 font-medium">AI Manager</span>), audio stem separation (<span className="text-zinc-900 font-medium">AI STEM Splitter</span>), and <span className="text-zinc-900 font-medium">EV Battery Intelligence</span> under the <span className="text-zinc-900 font-medium">MUKIIQ</span> ecosystem.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary" size="md">
            <span>Explore Projects</span>
            <ArrowRight size={14} />
          </Button>

          <Button href={githubUrl} variant="secondary" size="md">
            <GitHubIcon size={15} />
            <span>GitHub Profile</span>
          </Button>

          <Button href="#ecosystem" variant="ghost" size="md">
            <span>MUKIIQ Ecosystem</span>
          </Button>
        </div>

        {/* Core Technical Focus Row */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
              AI Systems
            </span>
            <p className="text-sm font-medium text-zinc-900">
              AI Workforce Orchestration
            </p>
            <p className="text-xs text-zinc-600 leading-normal">
              Multi-provider coordination, cost-aware model routing, and bounded agent workflows.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
              MUKIIQ Products
            </span>
            <p className="text-sm font-medium text-zinc-900">
              Audio AI &amp; Builder Platforms
            </p>
            <p className="text-xs text-zinc-600 leading-normal">
              AI STEM Splitter audio isolation and MUKIIQ RISE engineering roadmaps.
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
              CleanTech &amp; Diagnostics
            </span>
            <p className="text-sm font-medium text-zinc-900">
              EV Battery Intelligence
            </p>
            <p className="text-xs text-zinc-600 leading-normal">
              Cell-level telemetry analysis, thermal tracking, and State of Health modeling.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
