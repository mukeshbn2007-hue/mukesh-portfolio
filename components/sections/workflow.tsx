import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { CheckIcon, TerminalIcon } from "@/components/ui/icons";

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 border-b border-zinc-200 bg-white">
      <Container size="default">
        <SectionHeading
          eyebrow="ENGINEERING METHODOLOGY"
          title="Architecture, Discipline & Systems Workflow"
          description="A consistent engineering process prioritizing data contract clarity, subsystem isolation, and honest status tracking."
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {profile.workflowSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-zinc-200 bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-zinc-900 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
                    PHASE {step.number}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    WORKFLOW
                  </span>
                </div>

                <h3 className="text-base font-semibold text-zinc-950 tracking-tight mb-1">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-zinc-600 mb-3">
                  {step.summary}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-2">
                  Key Outputs
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.outputs.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded"
                    >
                      <CheckIcon size={11} className="text-emerald-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agentic Tooling Callout */}
        <div className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-white border border-zinc-200 text-zinc-800 shrink-0 mt-0.5">
              <TerminalIcon size={18} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-950 font-mono">
                DEVELOPER TOOLING &amp; AGENTIC WORKFLOWS
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
                I integrate structured AI workflows into my engineering process—using dedicated audit, research, and verification loops alongside standard TypeScript, ESLint, and Next.js build checks to keep software changes deterministic and maintainable.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
