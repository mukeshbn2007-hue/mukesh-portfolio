import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { GitHubIcon, ArrowUpRight } from "@/components/ui/icons";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 bg-white">
      <Container size="default">
        <SectionHeading
          eyebrow="BACKGROUND & CONTACT"
          title="Engineering Profile"
          description="A Computer Science student and systems builder focused on applied AI, full-stack software products, and domain architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Bio */}
          <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-5 border-t border-zinc-200">
              <span className="block font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                Current Focus Areas
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-zinc-800">
                {profile.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0" aria-hidden="true" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="rounded-lg border border-zinc-200 bg-zinc-50/70 p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block mb-4">
                Verified Channels
              </span>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-0.5">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-zinc-900 hover:underline break-all"
                  >
                    {profile.email}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-0.5">
                    GitHub
                  </span>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:underline"
                  >
                    <GitHubIcon size={14} />
                    <span>github.com/mukeshbn2007-hue</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-0.5">
                    Live Prototype
                  </span>
                  <a
                    href={profile.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:underline"
                  >
                    <span>mukiiq.vercel.app</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200">
              <Button href={`mailto:${profile.email}`} variant="primary" size="sm" className="w-full">
                <span>Send an Email</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
