import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { Badge, StatusBadge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  ExternalLinkIcon,
  GitHubIcon,
  CheckIcon,
  ActivityIcon,
  LayersIcon,
} from "@/components/ui/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — Architecture & Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Technical Case Study | Mukesh B N`,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Technical Case Study | Mukesh B N`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <Container size="default">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-mono text-zinc-600">
              <li>
                <Link href="/" className="hover:text-zinc-950 transition-colors">
                  Overview
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#projects" className="hover:text-zinc-950 transition-colors">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-950 font-semibold" aria-current="page">
                {project.name}
              </li>
            </ol>
          </nav>

          {/* Project Header */}
          <header className="pb-8 mb-10 border-b border-zinc-200">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-600 font-semibold">
                {project.category}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} />
                <Badge variant="outline" size="sm">
                  {project.ecosystemRelation}
                </Badge>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-3 leading-tight">
              {project.name}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-5 rounded-lg border border-zinc-200 bg-zinc-50 text-xs">
              <div>
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">
                  Role
                </span>
                <span className="font-medium text-zinc-900">{project.role}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">
                  Stage
                </span>
                <span className="font-medium text-zinc-900">{project.stageLabel}</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">
                  Architecture
                </span>
                <span className="font-medium text-zinc-900 leading-snug block">
                  {project.architecture.pattern}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">
                  Links
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-zinc-900 hover:underline"
                    >
                      {link.type === "github" ? (
                        <GitHubIcon size={12} />
                      ) : (
                        <ExternalLinkIcon size={11} />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Section: Overview & Problem */}
          <section className="mb-14 space-y-8">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-2">
                01 / OVERVIEW &amp; OBJECTIVE
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-zinc-200 bg-white">
                <h3 className="block font-mono text-xs uppercase tracking-wider text-amber-800 font-semibold mb-2">
                  The Problem
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-6 rounded-lg border border-zinc-200 bg-white">
                <h3 className="block font-mono text-xs uppercase tracking-wider text-emerald-800 font-semibold mb-2">
                  Intended Solution
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          {/* Section: Architecture & Pipeline */}
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-2">
              02 / SYSTEM ARCHITECTURE &amp; PIPELINE FLOW
            </h2>
            <p className="text-sm text-zinc-600 mb-6 max-w-2xl leading-relaxed">
              {project.architecture.overview}
            </p>

            {/* Light Architectural Pipeline Visualization */}
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-600 font-semibold">
                  {project.architecture.pattern}
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  {project.architecture.stages.length} Stages
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.architecture.stages.map((stage) => (
                  <div
                    key={stage.step}
                    className="rounded-md border border-zinc-200 bg-white p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block font-mono text-[11px] font-bold text-zinc-500 mb-1.5">
                        STAGE {stage.step}
                      </span>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Technical Stack */}
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-4">
              03 / TECHNOLOGIES &amp; DOMAIN AREAS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border border-zinc-200 bg-white">
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-2">
                  Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.languages.map((item) => (
                    <Badge key={item} variant="tech">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 bg-white">
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-2">
                  Frameworks
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.frameworks.map((item) => (
                    <Badge key={item} variant="neutral">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 bg-white">
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-2">
                  Domain &amp; AI
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.domainAndAi.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 bg-white">
                <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-2">
                  Supporting / Target
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.targetOrSupporting.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Engineering Decisions & Learnings */}
          <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-4">
                04 / ENGINEERING DECISIONS
              </h2>
              <div className="space-y-4">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-zinc-200 bg-white space-y-1.5"
                  >
                    <h3 className="text-xs font-semibold text-zinc-900 font-mono">
                      {dec.decision}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-4">
                05 / CHALLENGES &amp; LEARNINGS
              </h2>
              <div className="space-y-4">
                {project.challengesAndLearnings.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-zinc-200 bg-white space-y-1.5"
                  >
                    <h3 className="text-xs font-semibold text-zinc-900 block">
                      {item.challenge}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {item.resolutionOrLearning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Implementation Breakdown */}
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-4">
              06 / DEVELOPMENT MATURITY BREAKDOWN
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Current State */}
              <div className="p-5 rounded-lg border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-900 uppercase mb-3">
                  <CheckIcon size={14} className="text-emerald-700" />
                  <span>Current State</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {project.implementation.currentState.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In Progress */}
              <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/40">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-900 uppercase mb-3">
                  <ActivityIcon size={14} className="text-amber-700" />
                  <span>In Progress</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {project.implementation.inProgress.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned */}
              <div className="p-5 rounded-lg border border-zinc-200 bg-zinc-50">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-700 uppercase mb-3">
                  <LayersIcon size={14} className="text-zinc-600" />
                  <span>Planned Roadmap</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-600">
                  {project.implementation.planned.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Technical Summary Table */}
          <section className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold mb-4">
              07 / PROJECT SUMMARY SPECS
            </h2>

            <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-zinc-200 bg-zinc-50 font-mono text-[10px] uppercase text-zinc-600">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold">Attribute</th>
                    <th className="py-2.5 px-4 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {project.specs.map((spec) => (
                    <tr key={spec.label}>
                      <td className="py-2.5 px-4 font-medium text-zinc-900 font-mono">
                        {spec.label}
                      </td>
                      <td className="py-2.5 px-4 text-zinc-700 font-mono">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Navigation to Other Projects */}
          <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <span>← Back to All Projects</span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <span>Next Case Study: {nextProject.name}</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
