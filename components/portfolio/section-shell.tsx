import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-24 md:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
