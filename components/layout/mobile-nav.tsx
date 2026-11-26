"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CloseIcon, GitHubIcon } from "@/components/ui/icons";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  githubUrl: string;
  returnFocusRef?: React.RefObject<HTMLButtonElement | null>;
}

export function MobileNav({
  isOpen,
  onClose,
  links,
  githubUrl,
  returnFocusRef,
}: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      document.body.style.overflow = "hidden";
      // Move focus to close button when opened
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        returnFocusRef?.current?.focus();
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      // Focus trap inside mobile navigation dialog
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, returnFocusRef]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-900/25 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        id="mobile-navigation-drawer"
        ref={panelRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-lg flex flex-col justify-between border-l border-zinc-200"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Navigation
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Close navigation menu"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 rounded-md px-2.5 py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-5 border-t border-zinc-200">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
          >
            <GitHubIcon size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
