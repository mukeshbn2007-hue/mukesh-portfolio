import React from "react";
import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/types/project";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "neutral" | "outline" | "success" | "warning" | "info" | "tech";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-zinc-100 text-zinc-800 border-zinc-200/80",
    outline: "bg-transparent text-zinc-600 border-zinc-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    warning: "bg-amber-50 text-amber-800 border-amber-200/80",
    info: "bg-sky-50 text-sky-800 border-sky-200/80",
    tech: "bg-zinc-50 text-zinc-700 border-zinc-200/70 font-mono text-[11px]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded border font-medium leading-none transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ status, className = "" }: { status: ProjectStatus; className?: string }) {
  const getStatusConfig = (s: ProjectStatus) => {
    switch (s) {
      case "Active Development":
        return {
          dotColor: "bg-emerald-500",
          textColor: "text-emerald-800",
          bgColor: "bg-emerald-50/80",
          borderColor: "border-emerald-200/70",
        };
      case "Prototype & Testing":
        return {
          dotColor: "bg-sky-500",
          textColor: "text-sky-800",
          bgColor: "bg-sky-50/80",
          borderColor: "border-sky-200/70",
        };
      case "Architecture & Design":
        return {
          dotColor: "bg-amber-500",
          textColor: "text-amber-800",
          bgColor: "bg-amber-50/80",
          borderColor: "border-amber-200/70",
        };
      case "Research & Modeling":
        return {
          dotColor: "bg-indigo-500",
          textColor: "text-indigo-800",
          bgColor: "bg-indigo-50/80",
          borderColor: "border-indigo-200/70",
        };
      default:
        return {
          dotColor: "bg-zinc-400",
          textColor: "text-zinc-700",
          bgColor: "bg-zinc-100",
          borderColor: "border-zinc-200",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-normal",
        config.bgColor,
        config.textColor,
        config.borderColor,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dotColor)} />
      {status}
    </span>
  );
}
