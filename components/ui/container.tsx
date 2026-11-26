import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "default" | "narrow" | "wide";
  children: React.ReactNode;
}

export function Container({
  className = "",
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl",
    default: "max-w-5xl",
    wide: "max-w-6xl",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
