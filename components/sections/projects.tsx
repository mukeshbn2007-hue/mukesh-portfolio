"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import { ArrowRight, ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Multi-Agent Systems",
    "Audio Intelligence & DSP",
    "Energy & IoT Systems",
    "CleanTech & Diagnostics",
    "Product & Ecosystem Platforms",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-zinc-200 bg-white">
      <Container size="default">
        <SectionHeading
          eyebrow="SELECTED WORK & CASE STUDIES"
          title="Technical Projects & Systems"
          description="Detailed architecture notes, engineering trade-offs, and transparent development status across AI, audio, energy, and product platforms."
        />

        {/* Category Filters */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs"
          role="group"
          aria-label="Filter projects by domain"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`whitespace-nowrap px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeCategory === category
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-950"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.slug}
              hoverEffect
              className="flex flex-col justify-between h-full border-zinc-200 bg-white"
            >
              <div>
                {/* Card Top: Category & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl font-semibold text-zinc-950 tracking-tight mb-1.5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline hover:text-zinc-700 transition-colors"
                  >
                    {project.name}
                  </Link>
                </h3>

                <p className="text-xs font-mono text-zinc-600 mb-3">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="rounded border border-zinc-200/80 bg-zinc-50 p-3 mb-4 space-y-1">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Architecture Pattern
                  </span>
                  <p className="text-xs font-medium text-zinc-800">
                    {project.architecture.pattern}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.languages.map((lang) => (
                    <Badge key={lang} variant="tech">
                      {lang}
                    </Badge>
                  ))}
                  {project.techStack.frameworks.slice(0, 3).map((fw) => (
                    <Badge key={fw} variant="neutral">
                      {fw}
                    </Badge>
                  ))}
                  {project.techStack.domainAndAi.slice(0, 2).map((domain) => (
                    <Badge key={domain} variant="outline">
                      {domain}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-950 transition-colors"
                    >
                      {link.type === "github" ? (
                        <GitHubIcon size={14} />
                      ) : (
                        <ExternalLinkIcon size={13} />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
