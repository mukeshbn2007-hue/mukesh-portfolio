"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { GitHubIcon, MenuIcon } from "@/components/ui/icons";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui/container";
import { VERIFIED_LINKS } from "@/lib/constants";

interface NavbarProps {
  githubUrl?: string;
}

export function Navbar({ githubUrl = VERIFIED_LINKS.github }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "MUKIIQ Ecosystem", href: "/#ecosystem" },
    { label: "Workflow", href: "/#workflow" },
    { label: "Stack & Open Source", href: "/#stack" },
    { label: "About", href: "/#about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white">
        <Container size="wide">
          <div className="flex h-14 items-center justify-between">
            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-2 text-zinc-900 transition-opacity hover:opacity-80"
              >
                <span className="font-mono text-sm font-bold tracking-tight">
                  MUKESH<span className="text-zinc-500 font-normal">.</span>
                </span>
                <span className="hidden sm:inline-block rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600">
                  SYS / AI
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Action: GitHub & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                aria-label="Mukesh's GitHub Profile"
              >
                <GitHubIcon size={14} />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* Mobile menu button */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex md:hidden p-1.5 rounded-md text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <MenuIcon size={18} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        githubUrl={githubUrl}
        returnFocusRef={menuButtonRef}
      />
    </>
  );
}
