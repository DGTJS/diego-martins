import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface ChipProps {
  children: string;
  icon?: IconType;
  iconColor?: string;
  className?: string;
}

export function Chip({
  children,
  icon: Icon,
  iconColor,
  className,
}: ChipProps) {
  return (
    <span className={cn("theme-chip", className)}>
      {Icon ? <Icon className="h-4 w-4 shrink-0" style={{ color: iconColor }} /> : null}
      <span>{children}</span>
    </span>
  );
}
