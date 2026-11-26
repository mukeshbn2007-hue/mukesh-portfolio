import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { GitHubIcon } from "@/components/ui/icons";
import { VERIFIED_LINKS } from "@/lib/constants";

interface FooterProps {
  email?: string;
  githubUrl?: string;
}

export function Footer({
  email = VERIFIED_LINKS.email,
  githubUrl = VERIFIED_LINKS.github,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-12 text-zinc-600">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-zinc-200">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-sm font-bold tracking-tight text-zinc-900">
                MUKESH B N
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                Active Engineering
              </span>
            </div>
            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
              Applied artificial intelligence, multi-agent systems, audio separation, and energy telemetry architectures built with Next.js, Python, and TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/#projects" className="hover:text-zinc-950 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#ecosystem" className="hover:text-zinc-950 transition-colors">
                  MUKIIQ Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/#workflow" className="hover:text-zinc-950 transition-colors">
                  Engineering Workflow
                </Link>
              </li>
              <li>
                <Link href="/#stack" className="hover:text-zinc-950 transition-colors">
                  Technical Stack & Open Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-2.5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-900">
              Verified Links
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
                >
                  <GitHubIcon size={13} />
                  <span>github.com/mukeshbn2007-hue</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-zinc-950 transition-colors"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={VERIFIED_LINKS.mukiiqLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  mukiiq.vercel.app (Audio Prototype)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} Mukesh B N. Built with Next.js, React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Spec-Driven</span>
            <span aria-hidden="true">·</span>
            <span>Type-Safe</span>
            <span aria-hidden="true">·</span>
            <span>Open Architecture</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
