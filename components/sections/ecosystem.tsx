import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mukiiqEcosystem } from "@/content/ecosystem";
import { ArrowRight, LayersIcon, CheckIcon } from "@/components/ui/icons";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 border-b border-zinc-200 bg-zinc-50/60">
      <Container size="default">
        <SectionHeading
          eyebrow="PRODUCT & COMPANY ECOSYSTEM"
          title="MUKIIQ: Applied Systems & Digital Products"
          description={mukiiqEcosystem.mission}
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mukiiqEcosystem.pillars.map((pillar) => {
            const statusConfig = {
              Active: { variant: "success" as const, label: "Active Prototype" },
              Developing: { variant: "info" as const, label: "In Development" },
              Roadmap: { variant: "warning" as const, label: "Roadmap Architecture" },
            }[pillar.status];

            return (
              <Card
                key={pillar.id}
                hoverEffect
                className="flex flex-col justify-between h-full bg-white border-zinc-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant={statusConfig.variant} size="sm">
                      {statusConfig.label}
                    </Badge>
                    <span className="font-mono text-[10px] text-zinc-500">
                      PILLAR
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mb-1.5">
                    {pillar.name}
                  </h3>

                  <p className="text-xs font-mono text-zinc-600 mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                    <span className="block font-mono text-[10px] uppercase text-zinc-500 font-semibold mb-1">
                      Core Focus
                    </span>
                    {pillar.keyCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-zinc-600">
                        <CheckIcon size={13} className="text-zinc-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100">
                  {pillar.projectSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`/projects/${slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Architectural Principles Box */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <LayersIcon size={16} className="text-zinc-700" />
            <h3 className="text-sm font-semibold tracking-tight text-zinc-900 uppercase font-mono">
              Shared Ecosystem Principles
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 mb-4 max-w-2xl leading-relaxed">
            {mukiiqEcosystem.architecturalModel}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-100">
            {mukiiqEcosystem.sharedPrinciples.map((principle, index) => {
              const colonIdx = principle.indexOf(": ");
              const title = colonIdx >= 0 ? principle.slice(0, colonIdx) : principle;
              const desc = colonIdx >= 0 ? principle.slice(colonIdx + 2) : "";
              return (
                <div key={index} className="text-xs leading-relaxed">
                  <span className="font-semibold text-zinc-900">{title}: </span>
                  <span className="text-zinc-600">{desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
