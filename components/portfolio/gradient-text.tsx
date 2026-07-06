import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function GradientText({
  as: Component = "span",
  children,
  className,
}: GradientTextProps) {
  return (
    <Component className={cn("theme-text-gradient", className)}>
      {children}
    </Component>
  );
}
