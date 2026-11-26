import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface ButtonAsButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLinkProps
  extends ButtonBaseProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 border border-transparent shadow-sm active:translate-y-px",
    secondary:
      "bg-white text-zinc-800 border border-zinc-200 hover:bg-zinc-50/80 hover:border-zinc-300 shadow-sm active:translate-y-px",
    ghost:
      "bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 border border-transparent",
    link: "bg-transparent text-zinc-900 underline-offset-4 hover:underline border border-transparent p-0 h-auto",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-medium rounded-md gap-1.5",
    md: "px-4 py-2 text-sm font-medium rounded-md gap-2",
    lg: "px-5 py-2.5 text-sm font-medium rounded-md gap-2.5",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 select-none disabled:opacity-50 disabled:pointer-events-none";

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    variant !== "link" ? sizeStyles[size] : "",
    className
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
