import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  actions?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 mb-8 border-b border-zinc-200/80",
        className
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}
