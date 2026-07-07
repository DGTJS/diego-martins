"use client";

import { motion } from "framer-motion";

import type { SocialLink } from "@/app/data/types";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "md" | "lg";
  className?: string;
  itemClassName?: string;
}

const sizeStyles = {
  sm: {
    item: "h-10 w-10",
    icon: "h-4 w-4",
  },
  md: {
    item: "h-12 w-12",
    icon: "h-5 w-5",
  },
  lg: {
    item: "h-14 w-14",
    icon: "h-6 w-6",
  },
} as const;

export function SocialLinks({
  links,
  size = "md",
  className,
  itemClassName,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link, index) => {
        const Icon = link.icon;
        const isExternal = /^https?:\/\//.test(link.href);

        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={link.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "group inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10",
              sizeStyles[size].item,
              link.className,
              itemClassName,
            )}
          >
            <Icon
              className={cn(
                sizeStyles[size].icon,
                "transition-colors",
                link.iconClassName,
              )}
            />
          </motion.a>
        );
      })}
    </div>
  );
}
