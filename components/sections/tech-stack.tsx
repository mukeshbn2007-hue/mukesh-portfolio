import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GitBranchIcon, GitHubIcon } from "@/components/ui/icons";
import { profile } from "@/content/profile";

export function TechStackSection() {
  return (
    <section id="stack" className="py-20 border-b border-zinc-200 bg-zinc-50/60">
      <Container size="default">
        <SectionHeading
          eyebrow="TECHNICAL STACK & OPEN SOURCE"
          title="Technologies, Foundations & Public Work"
          description="Languages, frameworks, and domain engineering tools used across my projects, paired with open repository practices on GitHub."
        />

        {/* Stack Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {profile.skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-zinc-200 bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold tracking-tight text-zinc-950 font-mono uppercase mb-1">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                  {group.description}
                </p>

                <div className="divide-y divide-zinc-100">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-2.5 flex items-center justify-between gap-4 text-xs"
                    >
                      <span className="font-medium text-zinc-900 font-mono">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-zinc-600 text-right">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source & Public Engineering Block */}
        <div className="rounded-lg border border-zinc-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 mb-6 border-b border-zinc-100">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-700">
                <GitBranchIcon size={14} className="text-zinc-600" />
                <span>{profile.openSource.heading}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {profile.openSource.description}
              </p>
            </div>
            <div className="shrink-0">
              <Button href={profile.links.github} variant="secondary" size="sm">
                <GitHubIcon size={14} />
                <span>View GitHub Profile</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.openSource.practices.map((practice) => (
              <div key={practice.title} className="space-y-1.5">
                <h4 className="text-xs font-semibold text-zinc-900 font-mono">
                  {practice.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {practice.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
