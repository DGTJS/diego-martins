import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ActionButtonVariant = "primary" | "secondary" | "icon" | "accentIcon";

interface ActionButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: ActionButtonVariant;
}

const actionButtonClasses: Record<ActionButtonVariant, string> = {
  primary: "theme-button-primary",
  secondary: "theme-button-secondary",
  icon: "theme-button-icon",
  accentIcon: "theme-button-accent-icon",
};

export function ActionButton({
  variant = "primary",
  className,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      variant="unstyled"
      className={cn(actionButtonClasses[variant], className)}
      {...props}
    />
  );
}
