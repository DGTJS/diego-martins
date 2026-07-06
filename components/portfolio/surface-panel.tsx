import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceVariant = "default" | "strong" | "subtle";

type SurfacePanelProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  variant?: SurfaceVariant;
  className?: string;
  interactive?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const surfaceVariants: Record<SurfaceVariant, string> = {
  default: "theme-surface",
  strong: "theme-surface-strong",
  subtle: "theme-surface-subtle",
};

export function SurfacePanel<T extends ElementType = "div">({
  as,
  children,
  variant = "default",
  className,
  interactive = true,
  ...props
}: SurfacePanelProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        surfaceVariants[variant],
        interactive && "theme-surface-interactive",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
