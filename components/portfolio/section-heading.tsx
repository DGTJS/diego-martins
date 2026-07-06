"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description: string;
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-10 flex flex-col gap-4 sm:mb-16 md:mb-20",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="theme-section-eyebrow">{eyebrow}</p>
      ) : null}
      <h2 className="theme-section-title">{title}</h2>
      <div className={cn("theme-section-rule", centered && "mx-auto")} />
      <p className="theme-section-description">
        {description}
      </p>
    </motion.header>
  );
}
